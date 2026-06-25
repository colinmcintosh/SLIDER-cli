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
    loopStyle: document.getElementById("loop-style"),
    speed: document.getElementById("speed"),
    speedLabel: document.getElementById("speed-label"),
    rotation: document.getElementById("rotation"),
    rotationLabel: document.getElementById("rotation-label"),
    autoRefresh: document.getElementById("auto-refresh"),
    play: document.getElementById("play"),
    maxZoom: document.getElementById("max-zoom"),
    zoomIn: document.getElementById("zoom-in"),
    zoomOut: document.getElementById("zoom-out"),
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
  var maxZoomArmed = false; // true while the Max Zoom button awaits a click on the map to pick the target

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

  // updateDuration shows the total loop length: frames × the per-step interval, in minutes.
  function updateDuration() {
    if (!els.duration) return;
    var frames = Math.max(1, Number(els.frames.value) || 0);
    var mult = Math.max(1, Number(els.step.value) || 1);
    if (baseMinutes <= 0) { els.duration.textContent = ""; return; }
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
    timestamps = [];
    frameIndex = 0;
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
      layer.setOpacity(i === clamped ? 1 : 0);
    });
    frameIndex = clamped;
    els.timestamp.textContent = formatTimestamp(timestamps[clamped]);
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
    var frames = Math.max(1, Math.min(100, Number(els.frames.value) || 24));
    var step = Math.max(1, Math.min(96, Number(els.step.value) || 1));
    var need = frames * step;
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
        // Take the most recent `need`, subsample by `step`, keep chronological order.
        var recent = all.slice(Math.max(0, all.length - need));
        // Derive the product's native cadence and relabel the time-step options in minutes.
        baseMinutes = computeBaseMinutes(recent) || baseMinutes;
        populateStepOptions();
        updateDuration();
        var picked = [];
        for (var i = recent.length - 1; i >= 0 && picked.length < frames; i -= step) {
          picked.unshift(recent[i]);
        }
        if (!picked.length) {
          setStatus("No imagery available for this selection.");
          return;
        }

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

        showFrame(frameLayers.length - 1); // start on the most recent frame
        els.play.disabled = frameLayers.length <= 1;
        setStatus(frameLayers.length + " frames · zoom 0–" + cfg.nativeMax);
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

  function populateProducts() {
    var sat = inventory.satellites[els.satellite.value];
    var sector = sat.sectors[els.sector.value];
    var missing = {};
    (sector.missing_products || []).forEach(function (v) { missing[toID(v)] = true; });
    var items = sortedEntries(sat.products)
      .filter(function (e) { return !missing[e.id]; })
      .map(function (e) { return { id: e.id, title: e.obj.product_title || e.id }; })
      .sort(function (a, b) { return a.title.localeCompare(b.title); });
    fillSelect(els.product, items);
    var def = sector.default_product ? toID(sector.default_product) : items[0].id;
    if (!missing[def] && sat.products[def]) els.product.value = def;
  }

  // The inventory JSON uses Go field names for untagged fields (Satellites/Sectors/Products/Value). Normalize
  // to a predictable lowercase shape and attach IDs (the map keys).
  function normalizeInventory(raw) {
    var inv = {
      default_satellite: raw.default_satellite,
      time_step_options: raw.time_step_options || [1, 2, 3, 4, 6, 8, 12, 18, 24, 36, 48, 96],
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
    q.set("st", "0");
    q.set("et", "0");
    q.set("speed", String(Number(els.speed.value)));
    q.set("motion", styleToMotion(els.loopStyle.value));
    q.set("angle", String(rotation));
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
    if (p.has("im")) {
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
      loadFrames();
    });
    els.sector.addEventListener("change", function () {
      populateProducts();
      loadFrames();
    });
    els.product.addEventListener("change", loadFrames);
    els.frames.addEventListener("change", function () { updateDuration(); loadFrames(); });
    els.step.addEventListener("change", function () { updateDuration(); loadFrames(); });
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

        loadFrames();
      })
      .catch(function (err) {
        setStatus("Failed to load inventory: " + err.message);
      });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
