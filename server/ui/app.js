// Copyright (c) 2021 Colin McIntosh
// Licensed under the Apache License, Version 2.0.
//
// SLIDER web UI — an original Leaflet-based clone. Renders the SLIDER tile pyramid through the local proxy
// (/tiles/...) and animates a set of timestamps by preloading one tile layer per frame and cross-fading them.

(function () {
  "use strict";

  var els = {
    satellite: document.getElementById("satellite"),
    sector: document.getElementById("sector"),
    product: document.getElementById("product"),
    frames: document.getElementById("frames"),
    step: document.getElementById("step"),
    beginDate: document.getElementById("begin-date"),
    beginTime: document.getElementById("begin-time"),
    endDate: document.getElementById("end-date"),
    endTime: document.getElementById("end-time"),
    loopStyle: document.getElementById("loop-style"),
    speed: document.getElementById("speed"),
    speedLabel: document.getElementById("speed-label"),
    rotation: document.getElementById("rotation"),
    rotationLabel: document.getElementById("rotation-label"),
    autoRefresh: document.getElementById("auto-refresh"),
    scrubber: document.getElementById("scrubber"),
    prev: document.getElementById("prev"),
    next: document.getElementById("next"),
    play: document.getElementById("play"),
    maxZoom: document.getElementById("max-zoom"),
    zoomIn: document.getElementById("zoom-in"),
    zoomOut: document.getElementById("zoom-out"),
    overlay: document.getElementById("overlay"),
    overlayList: document.getElementById("overlay-list"),
    productOpacity: document.getElementById("product-opacity"),
    status: document.getElementById("status"),
    timestamp: document.getElementById("timestamp"),
    memory: document.getElementById("memory"),
    duration: document.getElementById("duration"),
    loading: document.getElementById("loading"),
  };

  // A 1x1 fully-transparent PNG, used for tiles that don't exist (cropped sector regions).
  var TRANSPARENT_PNG =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+M8AAAMBAQDJ/pLvAAAAAElFTkSuQmCC";

  var inventory = null;
  var map = null;
  var frameLayers = []; // one Leaflet layer per timestamp
  var timestamps = []; // 14-digit timestamp strings, chronological
  var frameIndex = 0;
  var playing = false;
  var playTimer = null;
  var rockDir = 1; // direction for the "rock" loop style
  var loadToken = 0; // guards against races when selections change rapidly
  var pendingView = null; // {z,x,y} parsed from the URL, applied once frames are built
  var coordBaseZoom = 0; // zoom level whose pixel grid the x/y params are expressed in (SLIDER convention)
  var suspendURLSync = false; // true while applying URL params, to avoid clobbering the URL
  var memoryRAF = false; // requestAnimationFrame coalescing flag for the memory estimate
  var baseMinutes = 0; // native cadence (minutes between consecutive images) for the current product
  var currentCfg = null; // the most recent configureMap() result (tile/zoom geometry), for the Max Zoom button
  var refreshTimer = null; // setInterval handle for auto-refresh polling; null when off
  var rotation = 0; // current view rotation in degrees (applied to the map container via CSS transform)
  var productOpacity = 1; // opacity of the satellite imagery layer (0–1), set by the Product Opacity slider
  var overlays = {}; // active map overlays, keyed by map name -> {map,color,opacity,hidden,layer,panel}
  var maxZoomArmed = false; // true while the Max Zoom button awaits a click on the map to pick the target
  var tzOffsetMinutes = 0; // Begin/End fields are interpreted as UTC; a future time-zone selector sets this.
  var framesBeforeRange = ""; // remembered Frames value while a full Begin+End range disables that field

  // RANGE_WINDOW is the upstream timestamp window to pull when a Begin/End bound is active (the server
  // switches to latest_times_5760.json above 100), so we can filter to an arbitrary historical range
  // client-side. MAX_RANGE_FRAMES caps how many layers a Begin+End range may build (memory guard).
  var RANGE_WINDOW = 5760;
  var MAX_RANGE_FRAMES = 300;

  function pad(n, width) {
    var s = String(n);
    while (s.length < width) s = "0" + s;
    return s;
  }

  function toID(value) {
    return value.replace(/_/g, "-");
  }

  function setStatus(text) {
    els.status.textContent = text || "";
  }

  function formatBytes(bytes) {
    if (bytes >= 1024 * 1024 * 1024) return (bytes / (1024 * 1024 * 1024)).toFixed(1) + " GB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  }

  // scheduleMemoryUpdate coalesces frequent triggers (tile load/unload, pan/zoom) into one update per frame.
  function scheduleMemoryUpdate() {
    if (memoryRAF) return;
    memoryRAF = true;
    requestAnimationFrame(function () {
      memoryRAF = false;
      updateMemory();
    });
  }

  // updateMemory estimates the page's memory footprint. The dominant cost is decoded tile bitmaps (one layer
  // per animation frame); we sum the actual pixel dimensions of every loaded tile (W*H*4 bytes, RGBA), which
  // also makes transparent error tiles in cropped sectors self-correct to ~0. The JS heap is appended when
  // the browser exposes performance.memory (Chrome/Edge only).
  function updateMemory() {
    if (!els.memory) return;
    var bytes = 0;
    var count = 0;
    if (map) {
      var imgs = map.getContainer().querySelectorAll("img.leaflet-tile-loaded");
      Array.prototype.forEach.call(imgs, function (im) {
        if (im.naturalWidth > 1) {
          bytes += im.naturalWidth * im.naturalHeight * 4;
          count += 1;
        }
      });
    }
    var text = "Memory: ~" + formatBytes(bytes) + " · " + count + (count === 1 ? " tile" : " tiles");
    if (window.performance && performance.memory && performance.memory.usedJSHeapSize) {
      text += " · JS heap " + formatBytes(performance.memory.usedJSHeapSize);
    }
    els.memory.textContent = text;
  }

  // updateLoadingIndicator shows the spinner whenever any frame layer is still fetching tiles.
  function updateLoadingIndicator() {
    if (!els.loading) return;
    var loading = frameLayers.some(function (l) { return l && l._loading; });
    els.loading.hidden = !loading;
  }

  // parseTimestamp converts a 14-digit YYYYMMDDhhmmss string to epoch milliseconds (UTC).
  function parseTimestamp(ts) {
    return Date.UTC(
      +ts.slice(0, 4), +ts.slice(4, 6) - 1, +ts.slice(6, 8),
      +ts.slice(8, 10), +ts.slice(10, 12), +ts.slice(12, 14)
    );
  }

  // fieldToStamp combines a <input type=date> + <input type=time> pair into a 14-digit YYYYMMDDhhmmss bound,
  // or null when the date is empty. A missing time defaults to the start of the day for Begin and the end of
  // the day for End, so a date-only bound is inclusive. This is the ONLY place wall-clock fields become a
  // UTC stamp: the entered values are treated as UTC shifted by tzOffsetMinutes (0 today), so a future
  // time-zone selector only needs to set that offset.
  function fieldToStamp(dateEl, timeEl, isEnd) {
    var date = dateEl.value; // "YYYY-MM-DD"
    if (!date) return null;
    var time = timeEl.value || (isEnd ? "23:59" : "00:00"); // "HH:MM"
    var sec = isEnd ? 59 : 0;
    var ms = Date.parse(date + "T" + time + ":00Z");
    if (isNaN(ms)) return null;
    ms += sec * 1000 - tzOffsetMinutes * 60000;
    var d = new Date(ms);
    return (
      pad(d.getUTCFullYear(), 4) + pad(d.getUTCMonth() + 1, 2) + pad(d.getUTCDate(), 2) +
      pad(d.getUTCHours(), 2) + pad(d.getUTCMinutes(), 2) + pad(d.getUTCSeconds(), 2)
    );
  }

  // stampToFields is the inverse of fieldToStamp: it populates a date/time input pair from a 14-digit UTC
  // stamp (used when restoring Begin/End from the URL), applying the same time-zone offset seam.
  function stampToFields(ts, dateEl, timeEl) {
    var d = new Date(parseTimestamp(ts) + tzOffsetMinutes * 60000);
    dateEl.value = pad(d.getUTCFullYear(), 4) + "-" + pad(d.getUTCMonth() + 1, 2) + "-" + pad(d.getUTCDate(), 2);
    timeEl.value = pad(d.getUTCHours(), 2) + ":" + pad(d.getUTCMinutes(), 2);
  }

  // rangeBounds reads the Begin/End fields into optional 14-digit string bounds for the loop's time window.
  function rangeBounds() {
    return {
      beginTS: fieldToStamp(els.beginDate, els.beginTime, false),
      endTS: fieldToStamp(els.endDate, els.endTime, true),
    };
  }

  // pickFrames selects the frames to display from an ascending in-range timestamp list, honouring the
  // Begin/End rules: Begin-only counts forward from the start, End-only (and the no-bounds default) counts
  // backward from the newest, and Begin+End takes the whole range subsampled by step (capped for memory).
  function pickFrames(inRangeAsc, frames, step, b) {
    var picked = [];
    var i;
    if (b.beginTS && b.endTS) {
      for (i = inRangeAsc.length - 1; i >= 0; i -= step) picked.unshift(inRangeAsc[i]);
      if (picked.length > MAX_RANGE_FRAMES) picked = picked.slice(picked.length - MAX_RANGE_FRAMES);
    } else if (b.beginTS) {
      for (i = 0; i < inRangeAsc.length && picked.length < frames; i += step) picked.push(inRangeAsc[i]);
    } else {
      for (i = inRangeAsc.length - 1; i >= 0 && picked.length < frames; i -= step) picked.unshift(inRangeAsc[i]);
    }
    return picked;
  }

  // updateRangeState couples the Begin/End fields to the Frames count: when BOTH bounds are set the frame
  // count is derived from the range + step, so the Frames field is emptied and disabled; otherwise it is
  // restored to its remembered value. Returns true while a full Begin+End range is active.
  function updateRangeState() {
    var both = !!(els.beginDate.value && els.endDate.value);
    if (both) {
      if (!els.frames.disabled) framesBeforeRange = els.frames.value;
      els.frames.value = "";
      els.frames.disabled = true;
    } else if (els.frames.disabled) {
      els.frames.disabled = false;
      if (!els.frames.value) els.frames.value = framesBeforeRange || "24";
    }
    return both;
  }

  // computeBaseMinutes derives the native cadence (minutes between consecutive images) from a chronologically
  // sorted list of timestamps, using the smallest positive gap. Returns 0 if it can't be determined.
  function computeBaseMinutes(sorted) {
    var best = 0;
    for (var i = 1; i < sorted.length; i++) {
      var diff = (parseTimestamp(sorted[i]) - parseTimestamp(sorted[i - 1])) / 60000;
      if (diff > 0 && (best === 0 || diff < best)) best = diff;
    }
    return best;
  }

  // stepMinutesLabel renders a step multiplier as a minute interval, e.g. 2 -> "20 min" when baseMinutes is 10.
  function stepMinutesLabel(mult) {
    if (baseMinutes > 0) {
      var m = mult * baseMinutes;
      return (Number.isInteger(m) ? m : m.toFixed(1)) + " min";
    }
    return "×" + mult; // cadence unknown yet; show the raw multiplier
  }

  // populateStepOptions fills the time-step dropdown with the inventory's step multipliers, labelled in
  // minutes. The option values stay the multipliers (the SLIDER-compatible `ts` param). The current selection
  // is preserved across re-labelling.
  function populateStepOptions() {
    var opts = inventory.time_step_options || [];
    var current = els.step.value || "1";
    els.step.innerHTML = "";
    opts.forEach(function (mult) {
      var o = document.createElement("option");
      o.value = String(mult);
      o.textContent = stepMinutesLabel(mult);
      els.step.appendChild(o);
    });
    // Restore the prior selection if still available, else default to the first option.
    if (Array.prototype.some.call(els.step.options, function (o) { return o.value === current; })) {
      els.step.value = current;
    }
  }

  // updateDuration shows the total loop length: frames × the per-step interval, in minutes. The frame count
  // can be passed explicitly (used in Begin+End mode, where it's derived from the range, not the Frames field).
  function updateDuration(explicitFrames) {
    if (!els.duration) return;
    var frames = explicitFrames != null ? explicitFrames : Math.max(1, Number(els.frames.value) || 0);
    var mult = Math.max(1, Number(els.step.value) || 1);
    if (baseMinutes <= 0 || frames <= 0) { els.duration.textContent = ""; return; }
    var minutes = frames * mult * baseMinutes;
    els.duration.textContent = "Loop length: " + formatDuration(minutes);
  }

  // formatDuration renders minutes as "N min", adding an "(Hh Mm)" hint for spans of an hour or more.
  function formatDuration(minutes) {
    var rounded = Math.round(minutes);
    if (rounded < 60) return rounded + " min";
    var h = Math.floor(rounded / 60);
    var m = rounded % 60;
    return rounded + " min (" + h + "h" + (m ? " " + m + "m" : "") + ")";
  }

  // A tile layer bound to one timestamp. getTileUrl emits a path the proxy validates and caches.
  var SliderLayer = L.TileLayer.extend({
    getTileUrl: function (coords) {
      var o = this.options.slider;
      return (
        "/tiles/" + o.satellite + "/" + o.sector + "/" + o.product + "/" + o.timestamp +
        "/" + pad(coords.z, 2) + "/" + pad(coords.y, 3) + "/" + pad(coords.x, 3) + ".png"
      );
    },
    // Leaflet sizes each tile img to exactly tileSize, so adjacent tiles butt edge-to-edge and
    // sub-pixel rounding leaves hairline gaps. Render each tile 1px larger so neighbors overlap
    // and there is never a gap — the imagery is continuous, so the overlap is invisible. This
    // (with mix-blend-mode:normal in style.css) replaces Leaflet's plus-lighter seam hack, which
    // rendered as a white grid in Edge.
    _initTile: function (tile) {
      L.TileLayer.prototype._initTile.call(this, tile);
      var size = this.getTileSize();
      tile.style.width = (size.x + 1) + "px";
      tile.style.height = (size.y + 1) + "px";
    },
  });

  function clearFrames() {
    stop();
    frameLayers.forEach(function (layer) {
      map.removeLayer(layer);
    });
    frameLayers = [];
    // Product overlays keep parallel frame layers; drop them too (the entries persist and are rebuilt).
    Object.keys(overlays).forEach(function (key) {
      var entry = overlays[key];
      if (entry.kind === "product") {
        entry.frames.forEach(function (l) { map.removeLayer(l); });
        entry.frames = [];
      }
    });
    timestamps = [];
    frameIndex = 0;
    syncScrubber();
    scheduleMemoryUpdate();
    updateLoadingIndicator();
  }

  function currentSelection() {
    var sat = inventory.satellites[els.satellite.value];
    if (!sat) return null;
    var sector = sat.sectors[els.sector.value];
    var product = sat.products[els.product.value];
    if (!sector || !product) return null;
    return { sat: sat, sector: sector, product: product };
  }

  // selectionQS builds the satellite/sector/product query string shared by the /api/times and
  // /api/maxzoom endpoints.
  function selectionQS(sel) {
    return (
      "satellite=" + encodeURIComponent(sel.sat.id) +
      "&sector=" + encodeURIComponent(sel.sector.id) +
      "&product=" + encodeURIComponent(sel.product.id)
    );
  }

  // Configure the Leaflet map for the selected sector's tile pyramid. The image is a square of
  // 2^zoom tiles of tileSize px; we express that to Leaflet via CRS.Simple bounds of side tileSize.
  // Number of extra zoom levels allowed past the deepest available resolution. These upscale the native
  // tiles (digital zoom) rather than fetching a finer — and nonexistent — resolution.
  var OVERZOOM_LEVELS = 2;

  // nativeMax is the deepest level with imagery, probed server-side (the metadata is unreliable). We allow
  // the map to zoom OVERZOOM_LEVELS past it for digital zoom.
  function configureMap(sel, nativeMax) {
    var tileSize = sel.sector.tile_size || 678;
    var bounds = L.latLngBounds([[-tileSize, 0], [0, tileSize]]);
    var overMax = nativeMax + OVERZOOM_LEVELS;
    // SLIDER expresses x/y in pixels of the full image at the sector's maximum zoom level.
    coordBaseZoom = sel.sector.MaxZoomLevel;

    if (!map) {
      map = L.map("map", {
        crs: L.CRS.Simple,
        attributionControl: false,
        // The built-in zoom control lives inside #map, which rotation enlarges and offsets off-screen.
        // We use static buttons pinned to #map-wrap instead (see #zoom-in / #zoom-out).
        zoomControl: false,
        minZoom: 0,
        maxZoom: overMax,
      });
      window.sliderMap = map; // exposed for debugging/automation
      map.on("moveend zoomend", updateURL);
      map.on("zoomend moveend", scheduleMemoryUpdate);
      map.on("zoomend", updateZoomButtons);
      map.on("click", onMaxZoomClick);
    }
    map.setMinZoom(0);
    map.setMaxZoom(overMax);
    map.setMaxBounds(bounds.pad(0.25));
    updateZoomButtons();
    // Keep the current view if it still fits; otherwise frame the whole sector.
    if (map.getZoom() === undefined || map.getZoom() > overMax) {
      map.fitBounds(bounds);
    } else if (!map._loaded) {
      map.fitBounds(bounds);
    }
    return { tileSize: tileSize, nativeMax: nativeMax, overMax: overMax, bounds: bounds };
  }

  function showFrame(index) {
    if (!frameLayers.length) return;
    var clamped = Math.max(0, Math.min(index, frameLayers.length - 1));
    frameLayers.forEach(function (layer, i) {
      layer.setOpacity(i === clamped ? productOpacity : 0);
    });
    frameIndex = clamped;
    // Keep any product overlays in lock-step with the base loop.
    Object.keys(overlays).forEach(function (key) {
      if (overlays[key].kind === "product") showProductOverlayFrame(overlays[key], clamped);
    });
    els.timestamp.textContent = formatTimestamp(timestamps[clamped]);
    syncScrubber();
  }

  // syncScrubber keeps the frame slider's range/thumb in step with frameLayers/frameIndex, and disables
  // the scrubber and Prev/Next when there's nothing to animate (≤1 frame), mirroring the Play button.
  function syncScrubber() {
    var n = frameLayers.length;
    els.scrubber.max = String(Math.max(0, n - 1));
    els.scrubber.value = String(frameIndex);
    var disabled = n <= 1;
    els.scrubber.disabled = disabled;
    els.prev.disabled = disabled;
    els.next.disabled = disabled;
  }

  // step moves the displayed frame by delta (wrapping like the loop) and pauses playback, for Prev/Next.
  function step(delta) {
    stop();
    var n = frameLayers.length;
    if (n <= 1) return;
    showFrame((frameIndex + delta + n) % n);
  }

  function formatTimestamp(ts) {
    if (!ts) return "";
    // YYYYMMDDhhmmss -> YYYY-MM-DD HH:MM UTC
    return (
      ts.slice(0, 4) + "-" + ts.slice(4, 6) + "-" + ts.slice(6, 8) + " " +
      ts.slice(8, 10) + ":" + ts.slice(10, 12) + " UTC"
    );
  }

  function advance() {
    var style = els.loopStyle.value;
    var n = frameLayers.length;
    if (n <= 1) return;
    if (style === "reverse") {
      showFrame((frameIndex - 1 + n) % n);
    } else if (style === "rock") {
      if (frameIndex + rockDir >= n || frameIndex + rockDir < 0) rockDir *= -1;
      showFrame(frameIndex + rockDir);
    } else {
      showFrame((frameIndex + 1) % n);
    }
  }

  function play() {
    if (playing || frameLayers.length <= 1) return;
    playing = true;
    els.play.textContent = "Pause";
    var tick = function () {
      if (!playing) return;
      advance();
      playTimer = setTimeout(tick, Number(els.speed.value));
    };
    playTimer = setTimeout(tick, Number(els.speed.value));
  }

  function stop() {
    playing = false;
    els.play.textContent = "Play";
    if (playTimer) {
      clearTimeout(playTimer);
      playTimer = null;
    }
  }

  function togglePlay() {
    if (playing) stop();
    else play();
  }

  // Fetch timestamps for the current selection and (re)build the animation frames.
  function loadFrames() {
    var sel = currentSelection();
    if (!sel) return;

    var token = ++loadToken;
    var bounds = rangeBounds();
    var frames = Math.max(1, Math.min(100, Number(els.frames.value) || 24));
    var step = Math.max(1, Math.min(96, Number(els.step.value) || 1));
    // With a Begin/End bound active we must look across an arbitrary historical window and filter it
    // client-side; otherwise just the most recent `frames × step` images are enough.
    var need = bounds.beginTS || bounds.endTS ? RANGE_WINDOW : frames * step;
    var wasPlaying = playing; // restore playback after the rebuild (e.g. an auto-refresh)

    setStatus("Loading…");
    els.play.disabled = true;

    var baseQS = selectionQS(sel);

    // Fetch the available times and the (probed) deepest zoom level in parallel.
    var timesP = fetch("/api/times?" + baseQS + "&count=" + need).then(function (r) {
      if (!r.ok) throw new Error("times request failed: " + r.status);
      return r.json();
    });
    var maxZoomP = fetch("/api/maxzoom?" + baseQS).then(function (r) {
      if (!r.ok) throw new Error("maxzoom request failed: " + r.status);
      return r.json();
    });

    Promise.all([timesP, maxZoomP])
      .then(function (results) {
        if (token !== loadToken) return; // a newer selection superseded this one
        var data = results[0];
        var maxZoom = results[1].max_zoom;
        var cfg = configureMap(sel, maxZoom);
        currentCfg = cfg;
        var all = (data.timestamps_int || []).map(function (n) { return String(n); });
        all.sort(); // chronological (zero-padded fixed-width strings sort lexically)
        // Restrict to the selected [Begin, End] window (each bound optional). An inverted range (Begin
        // after End) simply yields nothing, handled by the empty-`picked` guard below.
        var inRange = all.filter(function (ts) {
          return (!bounds.beginTS || ts >= bounds.beginTS) && (!bounds.endTS || ts <= bounds.endTS);
        });
        // Derive the product's native cadence from the in-range images and relabel the step options.
        baseMinutes = computeBaseMinutes(inRange) || baseMinutes;
        populateStepOptions();
        var picked = pickFrames(inRange, frames, step, bounds);
        if (!picked.length) {
          setStatus(bounds.beginTS || bounds.endTS
            ? "No imagery available in the selected time range."
            : "No imagery available for this selection.");
          return;
        }
        // The visible loop length follows the frames we actually built (matters in Begin+End mode, where
        // the count is derived from the range rather than the Frames field).
        updateDuration(picked.length);

        clearFrames();
        timestamps = picked;
        var sliderOpts = {
          satellite: sel.sat.id,
          sector: sel.sector.id,
          product: sel.product.id,
        };
        timestamps.forEach(function (ts) {
          var layer = new SliderLayer("", {
            tileSize: cfg.tileSize,
            minZoom: 0,
            maxZoom: cfg.overMax,
            // Stop fetching finer tiles at the deepest available resolution; the extra map zoom level
            // upscales these native tiles instead of requesting a resolution that doesn't exist.
            maxNativeZoom: cfg.nativeMax,
            noWrap: true,
            bounds: cfg.bounds,
            keepBuffer: 4,
            updateWhenIdle: false,
            opacity: 0,
            // Cropped sectors (e.g. CONUS) have no tiles in the trimmed region; render those cleanly blank.
            errorTileUrl: TRANSPARENT_PNG,
            slider: Object.assign({ timestamp: ts }, sliderOpts),
          });
          // Tile/loading events fire on the layer (not the map), so listen here.
          layer.on("loading load tileload tileerror", updateLoadingIndicator);
          layer.on("tileload tileunload", scheduleMemoryUpdate);
          layer.addTo(map);
          frameLayers.push(layer);
        });

        // Rebuild any product overlays for the new timestamps before showing the first frame, so they
        // appear in sync with the base loop.
        rebuildProductOverlayFrames();
        showFrame(frameLayers.length - 1); // start on the most recent frame
        els.play.disabled = frameLayers.length <= 1;
        // In Begin+End mode the range can exceed the layer cap; note when the newest frames were kept.
        var capped = bounds.beginTS && bounds.endTS && Math.ceil(inRange.length / step) > MAX_RANGE_FRAMES;
        setStatus(frameLayers.length + " frames" + (capped ? " (capped)" : "") + " · zoom 0–" + cfg.nativeMax);
        updateLoadingIndicator();

        if (pendingView) {
          applyPendingView(cfg);
          pendingView = null;
        }
        // clearFrames() above stops any active loop; resume it after the rebuild so an auto-refresh
        // (or a manual reload while playing) doesn't silently pause the animation.
        if (wasPlaying) play();
        // (re)apply rotation once the map container exists (e.g. an ?angle= URL param) and fill its corners.
        applyRotation(rotation);
        fitRotation();
        // Re-arm auto-refresh so its interval tracks the current product's cadence (baseMinutes).
        if (els.autoRefresh.checked) { stopAutoRefresh(); startAutoRefresh(); }
        updateURL();
      })
      .catch(function (err) {
        if (token !== loadToken) return;
        setStatus("Error: " + err.message);
      });
  }

  // --- Auto-refresh -----------------------------------------------------------
  //
  // While enabled, poll the times endpoint on a cadence-derived interval and only rebuild the frames
  // when a newer image has appeared upstream — so an idle, unchanged loop never flickers.

  function newestTimestamp() {
    return timestamps.length ? timestamps[timestamps.length - 1] : null;
  }

  // refreshInterval picks how often to poll: roughly the product's native cadence, clamped to a sane
  // 30s–5min window (falling back to 60s before the cadence is known).
  function refreshInterval() {
    var ms = baseMinutes > 0 ? baseMinutes * 60000 : 60000;
    return Math.max(30000, Math.min(300000, ms));
  }

  // checkForNewImagery fetches just the latest timestamp and rebuilds the loop only if it's newer than
  // what we're currently showing.
  function checkForNewImagery() {
    var sel = currentSelection();
    if (!sel) return;
    // A loop pinned to an explicit End is bounded in time, so newer upstream imagery is irrelevant.
    if (rangeBounds().endTS) return;
    fetch("/api/times?" + selectionQS(sel) + "&count=1")
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (!data) return;
        var latest = (data.timestamps_int || []).map(String).sort().pop();
        if (latest && (!newestTimestamp() || latest > newestTimestamp())) loadFrames();
      })
      .catch(function () { /* transient network errors are ignored; the next tick retries */ });
  }

  function startAutoRefresh() {
    stopAutoRefresh();
    refreshTimer = setInterval(checkForNewImagery, refreshInterval());
  }

  function stopAutoRefresh() {
    if (refreshTimer) {
      clearInterval(refreshTimer);
      refreshTimer = null;
    }
  }

  // --- Selector population ----------------------------------------------------

  function fillSelect(select, items) {
    select.innerHTML = "";
    items.forEach(function (it) {
      var opt = document.createElement("option");
      opt.value = it.id;
      opt.textContent = it.title;
      select.appendChild(opt);
    });
  }

  function sortedEntries(mapObj) {
    return Object.keys(mapObj)
      .map(function (id) { return { id: id, obj: mapObj[id] }; });
  }

  function populateSatellites() {
    var items = sortedEntries(inventory.satellites)
      .map(function (e) { return { id: e.id, title: e.obj.satellite_title || e.id }; })
      .sort(function (a, b) { return a.title.localeCompare(b.title); });
    fillSelect(els.satellite, items);
    var def = inventory.default_satellite ? toID(inventory.default_satellite) : items[0].id;
    if (inventory.satellites[def]) els.satellite.value = def;
  }

  function populateSectors() {
    var sat = inventory.satellites[els.satellite.value];
    var items = sortedEntries(sat.sectors)
      .map(function (e) { return { id: e.id, title: e.obj.sector_title || e.id }; })
      .sort(function (a, b) { return a.title.localeCompare(b.title); });
    fillSelect(els.sector, items);
    var def = sat.default_sector ? toID(sat.default_sector) : items[0].id;
    if (sat.sectors[def]) els.sector.value = def;
  }

  // productCategoriesFor returns the satellite's product sections in SLIDER order, each with the
  // products available for the given sector (missing ones removed). Empty sections are dropped. When the
  // inventory carries no category data it falls back to a single untitled section of all products.
  function productCategoriesFor(sat, sector) {
    var missing = {};
    (sector.missing_products || []).forEach(function (v) { missing[toID(v)] = true; });
    var cats = sat.product_categories && sat.product_categories.length
      ? sat.product_categories
      : [{ title: "", products: Object.keys(sat.products) }];
    var out = [];
    cats.forEach(function (c) {
      var items = (c.products || [])
        .filter(function (id) { return sat.products[id] && !missing[id]; })
        .map(function (id) { return { id: id, title: sat.products[id].product_title || id }; });
      if (items.length) out.push({ title: c.title, items: items });
    });
    return out;
  }

  // appendOptions adds an item list to a select, under an <optgroup> when a section title is given.
  function appendOptions(select, title, items, valuePrefix) {
    var parent = select;
    if (title) {
      var grp = document.createElement("optgroup");
      grp.label = title;
      select.appendChild(grp);
      parent = grp;
    }
    items.forEach(function (it) {
      var opt = document.createElement("option");
      opt.value = (valuePrefix || "") + it.id;
      opt.textContent = it.title;
      parent.appendChild(opt);
    });
  }

  function populateProducts() {
    var sat = inventory.satellites[els.satellite.value];
    var sector = sat.sectors[els.sector.value];
    var missing = {};
    (sector.missing_products || []).forEach(function (v) { missing[toID(v)] = true; });
    els.product.innerHTML = "";
    productCategoriesFor(sat, sector).forEach(function (c) {
      appendOptions(els.product, c.title, c.items, "");
    });
    var def = sector.default_product ? toID(sector.default_product) : null;
    if (def && sat.products[def] && !missing[def]) {
      els.product.value = def;
    } else if (els.product.options.length) {
      els.product.selectedIndex = 0;
    }
  }

  // The inventory JSON uses Go field names for untagged fields (Satellites/Sectors/Products/Value). Normalize
  // to a predictable lowercase shape and attach IDs (the map keys).
  function normalizeInventory(raw) {
    var inv = {
      default_satellite: raw.default_satellite,
      time_step_options: raw.time_step_options || [1, 2, 3, 4, 6, 8, 12, 18, 24, 36, 48, 96],
      // Available map overlays (name -> friendly title) and their default colors (name -> color).
      maps: (raw.defaults && raw.defaults.maps) || {},
      colors: raw.colors || {},
      satellites: {},
    };
    var sats = raw.Satellites || raw.satellites || {};
    Object.keys(sats).forEach(function (satID) {
      var s = sats[satID];
      var sat = {
        id: satID,
        value: s.Value || satID, // SLIDER's URL value (e.g. "goes-16")
        satellite_title: s.satellite_title,
        default_sector: s.default_sector,
        // SLIDER's ordered product sections ([{title, products:[ids]}]); used to group the selectors.
        product_categories: s.product_categories || [],
        sectors: {},
        products: {},
      };
      var sectors = s.Sectors || s.sectors || {};
      Object.keys(sectors).forEach(function (secID) {
        var c = sectors[secID];
        sat.sectors[secID] = {
          id: secID,
          value: c.Value || secID, // SLIDER's URL value (e.g. "full_disk")
          sector_title: c.sector_title,
          default_product: c.default_product,
          max_zoom_level: c.max_zoom_level,
          MaxZoomLevel: c.max_zoom_level,
          tile_size: c.tile_size,
          missing_products: c.missing_products,
          missing_maps: c.missing_maps || [],
        };
      });
      var products = s.Products || s.products || {};
      Object.keys(products).forEach(function (pID) {
        var p = products[pID];
        sat.products[pID] = {
          id: pID,
          value: p.Value || pID, // SLIDER's URL value (e.g. "geocolor")
          product_title: p.product_title,
          zoom_level_adjust: p.zoom_level_adjust || 0,
        };
      });
      inv.satellites[satID] = sat;
    });
    return inv;
  }

  // --- Overlays ---------------------------------------------------------------
  //
  // The "Add Overlay" control adds two kinds of layer above the base imagery, matching the public
  // SLIDER:
  //   - Map overlays (borders, roads, cities, ...): a single static tile layer served by the /maps/
  //     proxy, which shares the imagery tile pyramid so it aligns tile-for-tile.
  //   - Product overlays: an additional satellite product stacked on top, animated in sync with the
  //     base loop. Each product overlay keeps its own per-timestamp frame layers (parallel to the base
  //     frames) and is driven by the same frameIndex.
  // Overlays are keyed by "map:<name>" or "product:<id>". Each gets a control panel for opacity/hide
  // (and colour, for maps).

  // A small, generally-available colour palette for map overlays. The map's own default colour (from
  // the inventory) is always offered too; not every colour exists upstream for every map, and any that
  // doesn't simply renders as transparent (errorTileUrl below).
  var OVERLAY_COLOR_CHOICES = ["white", "black", "red", "yellow", "green", "blue", "purple"];
  var productOverlayZ = 500; // z-index assigned to product-overlay frames (above base, below map overlays)

  var OverlayLayer = L.TileLayer.extend({
    getTileUrl: function (coords) {
      var o = this.options.overlay;
      return (
        "/maps/" + o.satellite + "/" + o.sector + "/" + o.map + "/" + o.color +
        "/" + pad(coords.z, 2) + "/" + pad(coords.y, 3) + "/" + pad(coords.x, 3) + ".png"
      );
    },
    _initTile: function (tile) {
      L.TileLayer.prototype._initTile.call(this, tile);
      var size = this.getTileSize();
      tile.style.width = (size.x + 1) + "px";
      tile.style.height = (size.y + 1) + "px";
    },
  });

  function mapOverlayTitle(name) {
    return (inventory && inventory.maps && inventory.maps[name]) || name;
  }
  function overlayDefaultColor(name) {
    return (inventory && inventory.colors && inventory.colors[name]) || "white";
  }
  function overlayColorChoices(name) {
    var def = overlayDefaultColor(name);
    var list = OVERLAY_COLOR_CHOICES.slice();
    if (list.indexOf(def) === -1) list.unshift(def);
    return list;
  }

  // sectorAllowsMap reports whether the current sector lists the map as available (not in missing_maps).
  function sectorAllowsMap(name) {
    var sel = currentSelection();
    if (!sel) return false;
    var missing = sel.sector.missing_maps || [];
    return missing.indexOf(name) === -1;
  }

  // populateOverlaySelect rebuilds the "Add Overlay…" dropdown with a Maps section and the product
  // sections (in SLIDER order), omitting overlays that are already active, the current base product, or
  // maps unavailable for the current sector.
  function populateOverlaySelect() {
    if (!inventory) return;
    var sel = currentSelection();
    els.overlay.innerHTML = "";
    var placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Add Overlay…";
    els.overlay.appendChild(placeholder);

    var maps = Object.keys(inventory.maps || {})
      .filter(function (name) { return !overlays["map:" + name] && sectorAllowsMap(name); })
      .map(function (name) { return { id: name, title: mapOverlayTitle(name) }; });
    appendOptions(els.overlay, "Maps", maps, "map:");

    if (sel) {
      productCategoriesFor(sel.sat, sel.sector).forEach(function (c) {
        var items = c.items.filter(function (it) {
          return it.id !== sel.product.id && !overlays["product:" + it.id];
        });
        if (items.length) appendOptions(els.overlay, c.title || "Products", items, "product:");
      });
    }
  }

  // buildMapOverlayLayer (re)creates the single tile layer for a map overlay. The colour is part of the
  // tile URL, so a colour change rebuilds the layer.
  function buildMapOverlayLayer(entry) {
    var sel = currentSelection();
    if (!map || !currentCfg || !sel) return;
    if (entry.layer) { map.removeLayer(entry.layer); entry.layer = null; }
    var layer = new OverlayLayer("", {
      tileSize: currentCfg.tileSize,
      minZoom: 0,
      maxZoom: currentCfg.overMax,
      maxNativeZoom: currentCfg.nativeMax,
      noWrap: true,
      bounds: currentCfg.bounds,
      opacity: entry.hidden ? 0 : entry.opacity,
      zIndex: 650, // above both the base imagery frames and the product overlays
      errorTileUrl: TRANSPARENT_PNG,
      overlay: { satellite: sel.sat.id, sector: sel.sector.id, map: entry.map, color: entry.color },
    });
    layer.addTo(map);
    entry.layer = layer;
  }

  // buildProductOverlayFrames (re)creates a product overlay's per-timestamp frame layers for the current
  // selection's timestamps, so it animates in lock-step with the base loop.
  function buildProductOverlayFrames(entry) {
    var sel = currentSelection();
    if (!map || !currentCfg || !sel) return;
    entry.frames.forEach(function (l) { map.removeLayer(l); });
    entry.frames = [];
    timestamps.forEach(function (ts) {
      var layer = new SliderLayer("", {
        tileSize: currentCfg.tileSize,
        minZoom: 0,
        maxZoom: currentCfg.overMax,
        maxNativeZoom: currentCfg.nativeMax,
        noWrap: true,
        bounds: currentCfg.bounds,
        keepBuffer: 4,
        updateWhenIdle: false,
        opacity: 0,
        zIndex: entry.zIndex,
        // Product tiles are opaque with a black "no-data" background, so a normal overlay would paint the
        // base solid black. Blend with "screen" (matching SLIDER) so black regions reveal the base and
        // only the brighter features stack on top.
        className: "overlay-product",
        errorTileUrl: TRANSPARENT_PNG,
        slider: { satellite: sel.sat.id, sector: sel.sector.id, product: entry.product, timestamp: ts },
      });
      layer.addTo(map);
      entry.frames.push(layer);
    });
    showProductOverlayFrame(entry, frameIndex);
  }

  // showProductOverlayFrame reveals the overlay's layer for the given frame index (at the overlay's
  // opacity, unless hidden) and hides the rest — mirroring showFrame for the base imagery.
  function showProductOverlayFrame(entry, index) {
    if (!entry.frames.length) return;
    var clamped = Math.max(0, Math.min(index, entry.frames.length - 1));
    var vis = entry.hidden ? 0 : entry.opacity;
    entry.frames.forEach(function (l, i) { l.setOpacity(i === clamped ? vis : 0); });
  }

  // rebuildProductOverlayFrames rebuilds every active product overlay's frames after the base loop is
  // (re)built, so they track the same timestamps. Called from loadFrames.
  function rebuildProductOverlayFrames() {
    Object.keys(overlays).forEach(function (key) {
      if (overlays[key].kind === "product") buildProductOverlayFrames(overlays[key]);
    });
  }

  function buildOverlayPanel(entry) {
    var panel = document.createElement("div");
    panel.className = "subpanel";

    var head = document.createElement("div");
    head.className = "subpanel-head";
    var title = document.createElement("span");
    title.className = "subpanel-title";
    title.textContent = entry.title;
    var hideLabel = document.createElement("label");
    hideLabel.className = "checkbox inline";
    var hide = document.createElement("input");
    hide.type = "checkbox";
    hide.addEventListener("change", function () { setOverlayHidden(entry.key, hide.checked); });
    hideLabel.appendChild(hide);
    hideLabel.appendChild(document.createTextNode(" Hide"));
    var close = document.createElement("button");
    close.className = "close";
    close.type = "button";
    close.setAttribute("aria-label", "Remove");
    close.innerHTML = "&times;";
    close.addEventListener("click", function () { removeOverlay(entry.key); });
    head.appendChild(title);
    head.appendChild(hideLabel);
    head.appendChild(close);

    var row = document.createElement("div");
    row.className = "row";

    // Map overlays expose a colour selector; product overlays do not.
    if (entry.kind === "map") {
      var colCol = document.createElement("div");
      colCol.className = "col";
      var colLabel = document.createElement("label");
      colLabel.textContent = "Color";
      var colorSel = document.createElement("select");
      overlayColorChoices(entry.map).forEach(function (c) {
        var o = document.createElement("option");
        o.value = c;
        o.textContent = c.charAt(0).toUpperCase() + c.slice(1);
        if (c === entry.color) o.selected = true;
        colorSel.appendChild(o);
      });
      colorSel.addEventListener("change", function () { setMapOverlayColor(entry.key, colorSel.value); });
      colCol.appendChild(colLabel);
      colCol.appendChild(colorSel);
      row.appendChild(colCol);
    }

    var opCol = document.createElement("div");
    opCol.className = "col";
    var opLabel = document.createElement("label");
    opLabel.textContent = "Opacity";
    var opacity = document.createElement("input");
    opacity.type = "range";
    opacity.min = "0";
    opacity.max = "100";
    opacity.value = String(Math.round(entry.opacity * 100));
    opacity.addEventListener("input", function () { setOverlayOpacity(entry.key, Number(opacity.value) / 100); });
    opCol.appendChild(opLabel);
    opCol.appendChild(opacity);
    row.appendChild(opCol);

    panel.appendChild(head);
    panel.appendChild(row);
    return panel;
  }

  function addMapOverlay(name) {
    var key = "map:" + name;
    if (!map || !currentCfg || !name || overlays[key]) return;
    var entry = {
      key: key, kind: "map", map: name, title: mapOverlayTitle(name),
      color: overlayDefaultColor(name), opacity: 1, hidden: false, layer: null, panel: null,
    };
    overlays[key] = entry;
    buildMapOverlayLayer(entry);
    entry.panel = buildOverlayPanel(entry);
    els.overlayList.appendChild(entry.panel);
  }

  function addProductOverlay(id) {
    var key = "product:" + id;
    var sel = currentSelection();
    if (!map || !currentCfg || !sel || !id || overlays[key]) return;
    var prod = sel.sat.products[id];
    productOverlayZ += 10;
    var entry = {
      key: key, kind: "product", product: id, title: (prod && prod.product_title) || id,
      opacity: 1, hidden: false, frames: [], zIndex: productOverlayZ, panel: null,
    };
    overlays[key] = entry;
    buildProductOverlayFrames(entry);
    entry.panel = buildOverlayPanel(entry);
    els.overlayList.appendChild(entry.panel);
  }

  function removeOverlay(key) {
    var entry = overlays[key];
    if (!entry) return;
    if (entry.kind === "map") {
      if (entry.layer) map.removeLayer(entry.layer);
    } else {
      entry.frames.forEach(function (l) { map.removeLayer(l); });
    }
    if (entry.panel && entry.panel.parentNode) entry.panel.parentNode.removeChild(entry.panel);
    delete overlays[key];
    populateOverlaySelect();
  }

  function setMapOverlayColor(key, color) {
    var entry = overlays[key];
    if (!entry || entry.kind !== "map") return;
    entry.color = color;
    buildMapOverlayLayer(entry);
  }

  function setOverlayOpacity(key, opacity) {
    var entry = overlays[key];
    if (!entry) return;
    entry.opacity = opacity;
    if (entry.kind === "map") {
      if (entry.layer && !entry.hidden) entry.layer.setOpacity(opacity);
    } else {
      showProductOverlayFrame(entry, frameIndex);
    }
  }

  function setOverlayHidden(key, hidden) {
    var entry = overlays[key];
    if (!entry) return;
    entry.hidden = hidden;
    if (entry.kind === "map") {
      if (entry.layer) entry.layer.setOpacity(hidden ? 0 : entry.opacity);
    } else {
      showProductOverlayFrame(entry, frameIndex);
    }
  }

  // clearOverlays removes every active overlay (layers/frames and panels). Called when the satellite or
  // sector changes, since overlays are specific to a satellite/sector.
  function clearOverlays() {
    Object.keys(overlays).forEach(function (key) {
      var entry = overlays[key];
      if (map) {
        if (entry.kind === "map") {
          if (entry.layer) map.removeLayer(entry.layer);
        } else {
          entry.frames.forEach(function (l) { map.removeLayer(l); });
        }
      }
      if (entry.panel && entry.panel.parentNode) entry.panel.parentNode.removeChild(entry.panel);
    });
    overlays = {};
  }

  // --- URL parameters (SLIDER-compatible) -------------------------------------
  //
  // The query string uses the same parameter names and value encodings as the public SLIDER website
  // (https://slider.cira.colostate.edu/), so URLs are interchangeable for the settings we support:
  //   sat, sec, p[0]  satellite/sector/product upstream values
  //   z               zoom level
  //   im              number of images (frames)
  //   ts              time step (frames skipped between images)
  //   speed           animation frame delay in milliseconds
  //   motion          loop | rev | rock
  //   angle           view rotation in degrees (−180…180, applied as a CSS transform on the map)
  //   st, et          start/end time (always 0; the loop tracks the latest imagery)
  //   x, y            map center, in pixels of the full image at the sector's max zoom level

  function styleToMotion(style) {
    return style === "reverse" ? "rev" : style === "rock" ? "rock" : "loop";
  }
  function motionToStyle(motion) {
    return motion === "rev" ? "reverse" : motion === "rock" ? "rock" : "forward";
  }

  function satIdByValue(v) {
    var s = inventory.satellites;
    for (var id in s) { if (s[id].value === v) return id; }
    return null;
  }
  function secIdByValue(sat, v) {
    for (var id in sat.sectors) { if (sat.sectors[id].value === v) return id; }
    return null;
  }
  function prodIdByValue(sat, v) {
    for (var id in sat.products) { if (sat.products[id].value === v) return id; }
    return null;
  }

  // updateURL rewrites the query string to reflect the current settings. It is a no-op while URL params are
  // being applied, to avoid clobbering values we haven't read yet.
  function updateURL() {
    if (suspendURLSync || !inventory) return;
    var sel = currentSelection();
    if (!sel) return;
    var q = new URLSearchParams();
    q.set("sat", sel.sat.value);
    q.set("sec", sel.sector.value);
    q.set("p[0]", sel.product.value);
    q.set("z", map ? String(Math.round(map.getZoom())) : "0");
    q.set("im", String(Math.max(1, Math.min(100, Number(els.frames.value) || 24))));
    q.set("ts", String(Math.max(1, Math.min(96, Number(els.step.value) || 1))));
    // Persist the Begin/End window in the reserved st/et slots as 14-digit UTC stamps (0 when unset).
    var bounds = rangeBounds();
    q.set("st", bounds.beginTS || "0");
    q.set("et", bounds.endTS || "0");
    q.set("speed", String(Number(els.speed.value)));
    q.set("motion", styleToMotion(els.loopStyle.value));
    q.set("angle", String(rotation));
    q.set("opacity[0]", productOpacity.toFixed(2));
    if (map) {
      var c = map.getCenter();
      var scale = Math.pow(2, coordBaseZoom);
      q.set("x", (c.lng * scale).toFixed(6));
      q.set("y", (-c.lat * scale).toFixed(6));
    }
    history.replaceState(null, "", location.pathname + "?" + q.toString());
  }

  // applyParamsToControls sets the dropdowns and numeric controls from the URL, in dependency order
  // (satellite before sector before product). Selects must already be populated by the caller.
  function applyParamsToControls(p) {
    if (p.has("sat")) {
      var satID = satIdByValue(p.get("sat"));
      if (satID) els.satellite.value = satID;
    }
    populateSectors();
    if (p.has("sec")) {
      var sat = inventory.satellites[els.satellite.value];
      var secID = secIdByValue(sat, p.get("sec"));
      if (secID) els.sector.value = secID;
    }
    populateProducts();
    if (p.has("p[0]")) {
      var sat2 = inventory.satellites[els.satellite.value];
      var prodID = prodIdByValue(sat2, p.get("p[0]"));
      var exists = Array.prototype.some.call(els.product.options, function (o) { return o.value === prodID; });
      if (prodID && exists) els.product.value = prodID;
    }
    // Restore the Begin/End window from st/et (14-digit UTC stamps; "0" or absent means unset) before the
    // frame-count logic, so updateRangeState() can disable the Frames field when both bounds are present.
    if (/^\d{14}$/.test(p.get("st") || "")) stampToFields(p.get("st"), els.beginDate, els.beginTime);
    if (/^\d{14}$/.test(p.get("et") || "")) stampToFields(p.get("et"), els.endDate, els.endTime);
    updateRangeState();
    if (p.has("im") && !els.frames.disabled) {
      var im = parseInt(p.get("im"), 10);
      if (im > 0) els.frames.value = Math.min(100, im);
    }
    if (p.has("ts")) {
      var ts = parseInt(p.get("ts"), 10);
      // The step <select> is pre-populated, so this selects the matching multiplier option if present.
      if (ts > 0) els.step.value = String(ts);
    }
    if (p.has("speed")) {
      var sp = parseInt(p.get("speed"), 10);
      if (sp > 0) els.speed.value = Math.max(30, Math.min(600, sp));
    }
    if (p.has("motion")) els.loopStyle.value = motionToStyle(p.get("motion"));
    if (p.has("opacity[0]")) {
      var op = parseFloat(p.get("opacity[0]"));
      if (!isNaN(op)) {
        productOpacity = Math.max(0, Math.min(1, op));
        els.productOpacity.value = String(Math.round(productOpacity * 100));
      }
    }
    if (p.has("angle")) {
      var ang = parseInt(p.get("angle"), 10);
      if (!isNaN(ang)) {
        // Snap to the slider's 15° steps within −180…180 so the control and the view stay in sync.
        ang = Math.max(-180, Math.min(180, Math.round(ang / 15) * 15));
        els.rotation.value = String(ang);
        applyRotation(ang);
      }
    }
    updateSpeedLabel();
  }

  // applyPendingView restores the map center/zoom from the x/y/z URL params after the layers are built.
  function applyPendingView(cfg) {
    var z = parseInt(pendingView.z, 10);
    if (isNaN(z)) z = map.getZoom();
    z = Math.max(0, Math.min(cfg.overMax, z));
    var scale = Math.pow(2, coordBaseZoom);
    var x = parseFloat(pendingView.x);
    var y = parseFloat(pendingView.y);
    if (!isNaN(x) && !isNaN(y)) {
      map.setView(L.latLng(-(y / scale), x / scale), z);
    } else {
      map.setZoom(z);
    }
  }

  // --- Wiring -----------------------------------------------------------------

  function updateSpeedLabel() {
    els.speedLabel.textContent = "(" + els.speed.value + " ms)";
  }

  // applyRotation rotates the map view about its center via a CSS transform on the Leaflet container.
  // Leaflet has no native rotation, so this is purely visual (cheap; used for live slider feedback):
  // pan/zoom is most accurate at 0°. Call fitRotation() to actually fill the rotated corners with tiles.
  function applyRotation(deg) {
    rotation = deg;
    els.rotationLabel.textContent = "(" + deg + "°)";
    if (!map) return;
    map.getContainer().style.transform = deg ? "rotate(" + deg + "deg)" : "";
  }

  // fitRotation enlarges the Leaflet viewport to the rotated bounding box of its frame so the rotated map
  // covers the whole frame with real adjacent tiles — no blank corners — while preserving the zoom and
  // center. At 0° it restores the exact fit. The map clips to #map-wrap, so the oversize never spills out.
  function fitRotation() {
    if (!map) return;
    var el = map.getContainer();
    var wrap = el.parentNode;
    var W0 = wrap.clientWidth, H0 = wrap.clientHeight;
    if (!W0 || !H0) return;
    var center = map.getCenter(), zoom = map.getZoom();
    if (rotation) {
      var rad = (rotation * Math.PI) / 180;
      var c = Math.abs(Math.cos(rad)), s = Math.abs(Math.sin(rad));
      var W2 = Math.ceil(W0 * c + H0 * s);
      var H2 = Math.ceil(W0 * s + H0 * c);
      el.style.width = W2 + "px";
      el.style.height = H2 + "px";
      el.style.left = Math.round((W0 - W2) / 2) + "px";
      el.style.top = Math.round((H0 - H2) / 2) + "px";
    } else {
      // Unrotated: clear the inline sizing so the element returns to its fluid 100% fit and Leaflet
      // handles window resizing on its own.
      el.style.width = el.style.height = el.style.left = el.style.top = "";
    }
    map.invalidateSize({ animate: false, pan: false });
    map.setView(center, zoom, { animate: false });
  }

  // updateZoomButtons greys out the static +/- buttons at the zoom limits, mirroring Leaflet's control.
  function updateZoomButtons() {
    if (!map || !els.zoomIn) return;
    els.zoomIn.disabled = map.getZoom() >= map.getMaxZoom();
    els.zoomOut.disabled = map.getZoom() <= map.getMinZoom();
  }

  // --- Max Zoom (click-to-target) ---------------------------------------------
  //
  // Clicking the Max Zoom button arms a one-shot "pick a point" mode (matching the public SLIDER): the
  // next click on the map recenters there at the deepest native zoom. Click the button again or press
  // Escape to cancel.

  // clickLatLng converts a mouse event to a map latlng, compensating for the view rotation (Leaflet's
  // own mapping ignores the CSS transform). It also handles the enlarged, rotation-fitted container.
  function clickLatLng(ev) {
    var el = map.getContainer();
    var rect = el.getBoundingClientRect();
    var dx = ev.clientX - (rect.left + rect.width / 2);
    var dy = ev.clientY - (rect.top + rect.height / 2);
    var rad = (rotation * Math.PI) / 180;
    var cos = Math.cos(rad), sin = Math.sin(rad);
    // Un-rotate the offset from the map center, then express it relative to the container's top-left.
    var pt = L.point(
      el.offsetWidth / 2 + dx * cos + dy * sin,
      el.offsetHeight / 2 - dx * sin + dy * cos
    );
    return map.containerPointToLatLng(pt);
  }

  function armMaxZoom() {
    if (!map || !currentCfg) return;
    maxZoomArmed = true;
    els.maxZoom.classList.add("armed");
    map.getContainer().style.cursor = "crosshair";
  }

  function disarmMaxZoom() {
    maxZoomArmed = false;
    els.maxZoom.classList.remove("armed");
    if (map) map.getContainer().style.cursor = "";
  }

  function onMaxZoomClick(e) {
    if (!maxZoomArmed) return;
    disarmMaxZoom();
    if (currentCfg) map.setView(clickLatLng(e.originalEvent), currentCfg.nativeMax);
  }

  // patchRotatedDrag makes drag-to-pan follow the rotated view. Leaflet measures the drag offset in
  // screen pixels and applies it to the (unrotated) map pane, so on a CSS-rotated map the pan goes the
  // wrong way. We rotate the offset by −rotation back into the pane's local space before it's applied.
  function patchRotatedDrag() {
    if (!window.L || !L.Draggable || L.Draggable.prototype._rotPatched) return;
    var orig = L.Draggable.prototype._updatePosition;
    L.Draggable.prototype._updatePosition = function () {
      if (rotation && this._startPos && this._newPos) {
        var offset = this._newPos.subtract(this._startPos);
        var rad = (-rotation * Math.PI) / 180;
        var cos = Math.cos(rad), sin = Math.sin(rad);
        this._newPos = this._startPos.add(
          L.point(offset.x * cos - offset.y * sin, offset.x * sin + offset.y * cos)
        );
      }
      orig.call(this);
    };
    L.Draggable.prototype._rotPatched = true;
  }

  function init() {
    updateSpeedLabel();
    applyRotation(0); // initialize the rotation label (the map doesn't exist yet)
    patchRotatedDrag(); // make drag-to-pan respect the view rotation
    els.satellite.addEventListener("change", function () {
      populateSectors();
      populateProducts();
      clearOverlays();
      populateOverlaySelect();
      loadFrames();
    });
    els.sector.addEventListener("change", function () {
      populateProducts();
      clearOverlays();
      populateOverlaySelect();
      loadFrames();
    });
    els.product.addEventListener("change", function () { populateOverlaySelect(); loadFrames(); });
    els.frames.addEventListener("change", function () { updateDuration(); loadFrames(); });
    els.step.addEventListener("change", function () { updateDuration(); loadFrames(); });
    // Begin/End fields: recouple the Frames count, refresh the loop-length hint, and reload the window.
    [els.beginDate, els.beginTime, els.endDate, els.endTime].forEach(function (el) {
      el.addEventListener("change", function () { updateRangeState(); updateDuration(); loadFrames(); });
    });
    els.speed.addEventListener("input", updateSpeedLabel);
    els.speed.addEventListener("change", updateURL);
    els.rotation.addEventListener("input", function () { applyRotation(Number(els.rotation.value)); });
    els.rotation.addEventListener("change", function () { fitRotation(); updateURL(); });
    // Our enlarged viewport is sized to the frame; recompute it when the window (and thus the frame) resizes.
    window.addEventListener("resize", function () { if (rotation) fitRotation(); });
    els.loopStyle.addEventListener("change", function () { rockDir = 1; updateURL(); });
    els.autoRefresh.addEventListener("change", function () {
      if (els.autoRefresh.checked) startAutoRefresh();
      else stopAutoRefresh();
    });
    els.scrubber.addEventListener("input", function () { stop(); showFrame(Number(els.scrubber.value)); });
    els.prev.addEventListener("click", function () { step(-1); });
    els.next.addEventListener("click", function () { step(1); });
    els.play.addEventListener("click", togglePlay);
    els.maxZoom.addEventListener("click", function (ev) {
      ev.stopPropagation();
      if (maxZoomArmed) disarmMaxZoom();
      else armMaxZoom();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && maxZoomArmed) disarmMaxZoom();
    });
    els.zoomIn.addEventListener("click", function () { if (map) map.zoomIn(); });
    els.zoomOut.addEventListener("click", function () { if (map) map.zoomOut(); });
    els.overlay.addEventListener("change", function () {
      var v = els.overlay.value;
      if (v.indexOf("map:") === 0) addMapOverlay(v.slice(4));
      else if (v.indexOf("product:") === 0) addProductOverlay(v.slice(8));
      els.overlay.value = "";
      populateOverlaySelect();
    });
    els.productOpacity.addEventListener("input", function () {
      productOpacity = Number(els.productOpacity.value) / 100;
      if (frameLayers[frameIndex]) frameLayers[frameIndex].setOpacity(productOpacity);
      updateURL();
    });

    // Refresh the estimate periodically so the JS-heap figure stays current while the page is idle.
    setInterval(scheduleMemoryUpdate, 2000);

    fetch("/api/inventory")
      .then(function (r) { return r.json(); })
      .then(function (raw) {
        inventory = normalizeInventory(raw);
        var params = new URLSearchParams(location.search);

        // Apply any URL params to the controls before the first load, then stash the view (z/x/y) to apply
        // once the frames are built. suspendURLSync keeps these reads from rewriting the URL prematurely.
        suspendURLSync = true;
        populateSatellites();
        populateStepOptions(); // create the step options up front so a URL `ts` value can select one
        applyParamsToControls(params);
        if (params.has("z") || params.has("x") || params.has("y")) {
          pendingView = { z: params.get("z"), x: params.get("x"), y: params.get("y") };
        }
        suspendURLSync = false;

        populateOverlaySelect();
        loadFrames();
      })
      .catch(function (err) {
        setStatus("Failed to load inventory: " + err.message);
      });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
