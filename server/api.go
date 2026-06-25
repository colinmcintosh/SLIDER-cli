// Copyright (c) 2021 Colin McIntosh
// Author: Colin McIntosh (colin@colinmcintosh.com)
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package server

import (
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"strconv"

	"github.com/colinmcintosh/slider-cli/slider"
)

// handleInventory serves the full product inventory as JSON. The UI uses this single response to populate all
// of its satellite/sector/product/zoom selectors.
func (s *Server) handleInventory(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Cache-Control", "public, max-age=300")
	if err := json.NewEncoder(w).Encode(s.Inventory); err != nil {
		http.Error(w, "unable to encode inventory", http.StatusInternalServerError)
	}
}

// handleTimes serves the list of available image timestamps for a satellite/sector/product. It accepts the
// query parameters satellite, sector, product, and an optional count (default 100). IDs are validated against
// the inventory before any upstream request is made.
func (s *Server) handleTimes(w http.ResponseWriter, r *http.Request) {
	satellite, sector, product, ok := s.resolve(w, r.URL.Query().Get("satellite"),
		r.URL.Query().Get("sector"), r.URL.Query().Get("product"))
	if !ok {
		return
	}

	count := 100
	if c := r.URL.Query().Get("count"); c != "" {
		parsed, err := strconv.Atoi(c)
		if err != nil || parsed < 1 {
			http.Error(w, "invalid count", http.StatusBadRequest)
			return
		}
		count = parsed
	}

	times, err := slider.LatestTimes(satellite, sector, product, count)
	if err != nil {
		http.Error(w, "unable to get latest times", http.StatusBadGateway)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Cache-Control", "no-cache")
	_ = json.NewEncoder(w).Encode(struct {
		TimestampsInt []int `json:"timestamps_int"`
	}{TimestampsInt: times})
}

// handleMaxZoom returns the deepest zoom level that actually has imagery for a satellite/sector/product. The
// product metadata (max_zoom_level / zoom_level_adjust) is not a reliable predictor of this, so the value is
// probed against the upstream tile server and memoized.
func (s *Server) handleMaxZoom(w http.ResponseWriter, r *http.Request) {
	satellite, sector, product, ok := s.resolve(w, r.URL.Query().Get("satellite"),
		r.URL.Query().Get("sector"), r.URL.Query().Get("product"))
	if !ok {
		return
	}

	maxZoom, err := s.effectiveMaxZoom(satellite, sector, product)
	if err != nil {
		http.Error(w, "unable to determine max zoom", http.StatusBadGateway)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Cache-Control", "public, max-age=3600")
	_ = json.NewEncoder(w).Encode(struct {
		MaxZoom int `json:"max_zoom"`
	}{MaxZoom: maxZoom})
}

// effectiveMaxZoom probes from the sector's advertised maximum zoom downward and returns the first level that
// has data for a recent timestamp. Results are memoized per satellite/sector/product.
func (s *Server) effectiveMaxZoom(satellite *slider.Satellite, sector *slider.Sector, product *slider.Product) (int, error) {
	key := satellite.ID() + "/" + sector.ID() + "/" + product.ID()

	s.maxZoomMu.Lock()
	if z, ok := s.maxZoomCache[key]; ok {
		s.maxZoomMu.Unlock()
		return z, nil
	}
	s.maxZoomMu.Unlock()

	times, err := slider.LatestTimes(satellite, sector, product, 1)
	if err != nil || len(times) == 0 {
		// Fall back to the advertised maximum if we can't get a timestamp to probe with.
		return sector.MaxZoomLevel, nil
	}
	timestamp := strconv.Itoa(times[0])
	date := fmt.Sprintf("%s/%s/%s", timestamp[0:4], timestamp[4:6], timestamp[6:8])

	result := 0
	for z := sector.MaxZoomLevel; z >= 0; z-- {
		center := (1 << z) / 2 // a center tile is the most likely to contain imagery
		url := slider.ImageTileURL(&slider.TileImageRequest{
			Date:           date,
			Satellite:      satellite.Value,
			Sector:         sector.Value,
			Product:        product.Value,
			ImageTimestamp: timestamp,
			ZoomLevel:      z,
			TileXPosition:  center,
			TileYPosition:  center,
		})
		cacheKey, keyErr := slider.URLToFilePath(url)
		if keyErr != nil {
			continue
		}
		_, fetchErr := s.tileBytes(cacheKey, url)
		if fetchErr == nil {
			result = z
			break
		}
		if !errors.Is(fetchErr, errUpstreamNotFound) {
			return 0, fetchErr
		}
	}

	s.maxZoomMu.Lock()
	s.maxZoomCache[key] = result
	s.maxZoomMu.Unlock()
	return result, nil
}

// resolve looks up a satellite/sector/product by their IDs and validates that the combination is available.
// It writes an HTTP 400 response and returns ok=false if any ID is invalid.
func (s *Server) resolve(w http.ResponseWriter, satelliteID, sectorID, productID string) (
	*slider.Satellite, *slider.Sector, *slider.Product, bool) {
	satellite := s.Inventory.Satellites[satelliteID]
	if satellite == nil {
		http.Error(w, "unknown satellite", http.StatusBadRequest)
		return nil, nil, nil, false
	}
	sector := satellite.Sectors[sectorID]
	if sector == nil {
		http.Error(w, "unknown sector", http.StatusBadRequest)
		return nil, nil, nil, false
	}
	product := satellite.Products[productID]
	if product == nil || sector.ProductMissing(product) {
		http.Error(w, "unknown product", http.StatusBadRequest)
		return nil, nil, nil, false
	}
	return satellite, sector, product, true
}
