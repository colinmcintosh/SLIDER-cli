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
	"errors"
	"fmt"
	"hash/fnv"
	"io/ioutil"
	"net/http"
	"strconv"
	"strings"

	"github.com/colinmcintosh/slider-cli/slider"
	"github.com/rs/zerolog/log"
)

// errUpstreamNotFound signals that the upstream SLIDER server returned a 404 for the requested tile (the tile
// simply does not exist at that position), which we pass through as a 404 rather than a gateway error.
var errUpstreamNotFound = errors.New("tile not found upstream")

// handleTile proxies and caches a single image tile. The request path mirrors the SLIDER tile pyramid but is
// keyed by inventory IDs so it can be validated:
//
//	/tiles/{satellite}/{sector}/{product}/{timestamp}/{zoom}/{y}/{x}.png
//
// The date segment of the upstream URL is derived from the 14-digit timestamp. Every path component is
// validated against the inventory and zoom/x/y bounds before any upstream request is made, which prevents the
// proxy from being abused to fetch arbitrary URLs.
func (s *Server) handleTile(w http.ResponseWriter, r *http.Request) {
	rest := strings.TrimPrefix(r.URL.Path, "/tiles/")
	parts := strings.Split(rest, "/")
	if len(parts) != 7 {
		http.Error(w, "invalid tile path", http.StatusBadRequest)
		return
	}
	satelliteID, sectorID, productID := parts[0], parts[1], parts[2]
	timestamp, zoomStr, yStr := parts[3], parts[4], parts[5]
	xStr := strings.TrimSuffix(parts[6], ".png")

	satellite, sector, product, ok := s.resolve(w, satelliteID, sectorID, productID)
	if !ok {
		return
	}

	if len(timestamp) != 14 || !isAllDigits(timestamp) {
		http.Error(w, "invalid timestamp", http.StatusBadRequest)
		return
	}

	zoom, err := strconv.Atoi(zoomStr)
	if err != nil || zoom < 0 || zoom > sector.MaxZoomLevel {
		http.Error(w, "invalid zoom", http.StatusBadRequest)
		return
	}

	numTiles := (&slider.Zoom{Level: zoom}).NumTiles()
	x, errX := strconv.Atoi(xStr)
	y, errY := strconv.Atoi(yStr)
	if errX != nil || errY != nil || x < 0 || y < 0 || x >= numTiles || y >= numTiles {
		http.Error(w, "invalid tile coordinates", http.StatusBadRequest)
		return
	}

	date := fmt.Sprintf("%s/%s/%s", timestamp[0:4], timestamp[4:6], timestamp[6:8])
	upstream := slider.ImageTileURL(&slider.TileImageRequest{
		Date:           date,
		Satellite:      satellite.Value,
		Sector:         sector.Value,
		Product:        product.Value,
		ImageTimestamp: timestamp,
		ZoomLevel:      zoom,
		TileXPosition:  x,
		TileYPosition:  y,
	})

	cacheKey, err := slider.URLToFilePath(upstream)
	if err != nil {
		http.Error(w, "invalid tile", http.StatusBadRequest)
		return
	}

	// Tiles are immutable for a given timestamp, so a path-derived ETag is stable. Honour conditional
	// requests before doing any I/O so repeat views are essentially free.
	etag := tileETag(cacheKey)
	w.Header().Set("ETag", etag)
	if match := r.Header.Get("If-None-Match"); match == etag {
		w.WriteHeader(http.StatusNotModified)
		return
	}

	data, err := s.tileBytes(cacheKey, upstream)
	if err != nil {
		if errors.Is(err, errUpstreamNotFound) {
			http.Error(w, "tile not found", http.StatusNotFound)
			return
		}
		log.Warn().Msgf("unable to fetch tile %s: %v", upstream, err)
		http.Error(w, "unable to fetch tile", http.StatusBadGateway)
		return
	}

	w.Header().Set("Content-Type", "image/png")
	w.Header().Set("Cache-Control", "public, max-age=31536000, immutable")
	w.Header().Set("Content-Length", strconv.Itoa(len(data)))
	_, _ = w.Write(data)
}

// tileBytes returns the bytes for a tile, serving from the cache when possible and otherwise fetching from
// upstream exactly once (concurrent identical requests are collapsed via singleflight).
func (s *Server) tileBytes(cacheKey, upstream string) ([]byte, error) {
	if s.Cache != nil {
		if data, err := s.Cache.GetBytes(cacheKey); err != nil {
			log.Warn().Msgf("unable to read tile cache %s: %v", cacheKey, err)
		} else if data != nil {
			return data, nil
		}
	}

	v, err, _ := s.group.Do(cacheKey, func() (interface{}, error) {
		// Re-check the cache inside the singleflight window in case another goroutine just populated it.
		if s.Cache != nil {
			if data, _ := s.Cache.GetBytes(cacheKey); data != nil {
				return data, nil
			}
		}
		return s.fetchTile(cacheKey, upstream)
	})
	if err != nil {
		return nil, err
	}
	return v.([]byte), nil
}

// fetchTile downloads a tile from upstream and, if caching is enabled, stores it before returning the bytes.
func (s *Server) fetchTile(cacheKey, upstream string) ([]byte, error) {
	log.Debug().Msgf("Fetching tile from upstream: %s", upstream)
	resp, err := s.client.Get(upstream)
	if err != nil {
		return nil, fmt.Errorf("unable to get tile: %w", err)
	}
	defer func() { _ = resp.Body.Close() }()

	if resp.StatusCode == http.StatusNotFound {
		return nil, errUpstreamNotFound
	}
	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("upstream returned HTTP %d", resp.StatusCode)
	}

	data, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, fmt.Errorf("unable to read tile body: %w", err)
	}

	if s.Cache != nil {
		if err := s.Cache.WriteBytes(cacheKey, data); err != nil {
			log.Warn().Msgf("unable to write tile cache %s: %v", cacheKey, err)
		}
	}
	return data, nil
}

// isAllDigits reports whether s is non-empty and contains only ASCII digits.
func isAllDigits(s string) bool {
	if s == "" {
		return false
	}
	for _, c := range s {
		if c < '0' || c > '9' {
			return false
		}
	}
	return true
}

// tileETag returns a stable, quoted ETag derived from a tile's cache key.
func tileETag(cacheKey string) string {
	h := fnv.New64a()
	_, _ = h.Write([]byte(cacheKey))
	return fmt.Sprintf(`"%x"`, h.Sum64())
}
