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
    play: document.getElementById("play"),
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
        zoomControl: true,
        minZoom: 0,
        maxZoom: overMax,
      });
      window.sliderMap = map; // exposed for debugging/automation
      map.on("moveend zoomend", updateURL);
      map.on("zoomend moveend", scheduleMemoryUpdate);
    }
    map.setMinZoom(0);
    map.setMaxZoom(overMax);
    map.setMaxBounds(bounds.pad(0.25));
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

    setStatus("Loading…");
    els.play.disabled = true;

    var baseQS =
      "satellite=" + encodeURIComponent(sel.sat.id) +
      "&sector=" + encodeURIComponent(sel.sector.id) +
      "&product=" + encodeURIComponent(sel.product.id);

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
        updateURL();
      })
      .catch(function (err) {
        if (token !== loadToken) return;
        setStatus("Error: " + err.message);
      });
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
  //   angle           rotation in degrees (always 0; rotation is not yet supported)
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
    q.set("angle", "0");
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

  function init() {
    updateSpeedLabel();
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
    els.loopStyle.addEventListener("change", function () { rockDir = 1; updateURL(); });
    els.play.addEventListener("click", togglePlay);

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
