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

    if (!map) {
      map = L.map("map", {
        crs: L.CRS.Simple,
        attributionControl: false,
        zoomControl: true,
        minZoom: 0,
        maxZoom: overMax,
      });
      window.sliderMap = map; // exposed for debugging/automation
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
    var step = Math.max(1, Math.min(30, Number(els.step.value) || 1));
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
          layer.addTo(map);
          frameLayers.push(layer);
        });

        showFrame(frameLayers.length - 1); // start on the most recent frame
        els.play.disabled = frameLayers.length <= 1;
        setStatus(frameLayers.length + " frames · zoom 0–" + cfg.nativeMax);
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
      satellites: {},
    };
    var sats = raw.Satellites || raw.satellites || {};
    Object.keys(sats).forEach(function (satID) {
      var s = sats[satID];
      var sat = {
        id: satID,
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
          product_title: p.product_title,
          zoom_level_adjust: p.zoom_level_adjust || 0,
        };
      });
      inv.satellites[satID] = sat;
    });
    return inv;
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
    els.frames.addEventListener("change", loadFrames);
    els.step.addEventListener("change", loadFrames);
    els.speed.addEventListener("input", updateSpeedLabel);
    els.loopStyle.addEventListener("change", function () { rockDir = 1; });
    els.play.addEventListener("click", togglePlay);

    fetch("/api/inventory")
      .then(function (r) { return r.json(); })
      .then(function (raw) {
        inventory = normalizeInventory(raw);
        populateSatellites();
        populateSectors();
        populateProducts();
        loadFrames();
      })
      .catch(function (err) {
        setStatus("Failed to load inventory: " + err.message);
      });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
