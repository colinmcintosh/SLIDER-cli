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

// Package server implements a local web server that hosts an interactive clone of the SLIDER web UI. It serves
// the embedded single-page UI, exposes a small JSON API for the product inventory and available times, and
// proxies (and caches) individual image tiles from the upstream SLIDER server.
package server

import (
	"net/http"
	"sync"
	"time"

	"github.com/colinmcintosh/slider-cli/slider"
	"github.com/rs/zerolog/log"
	"golang.org/x/sync/singleflight"
)

// Server hosts the SLIDER web UI and tile-proxy API.
type Server struct {
	// Inventory is the product inventory loaded once at startup and shared with the UI.
	Inventory *slider.ProductInventory
	// Cache is the on-disk tile cache. A nil Cache disables caching (tiles are proxied without storing).
	Cache *slider.ImageCache
	// client is a tuned HTTP client reused for all upstream requests so connections are pooled.
	client *http.Client
	// group collapses concurrent identical tile fetches into a single upstream request.
	group singleflight.Group

	// maxZoomMu guards maxZoomCache.
	maxZoomMu sync.Mutex
	// maxZoomCache memoizes the probed deepest available zoom level per satellite/sector/product, since
	// the product metadata cannot be trusted to report it accurately.
	maxZoomCache map[string]int

	// mapTimeMu guards mapTimeCache.
	mapTimeMu sync.Mutex
	// mapTimeCache memoizes the latest available timestamp for a map overlay per satellite/sector/map/color.
	mapTimeCache map[string]string
}

// New creates a Server, loading the product inventory once. If cacheDir is empty, tile caching is disabled.
func New(cacheDir string) (*Server, error) {
	inventory, err := slider.GetProductInventory()
	if err != nil {
		return nil, err
	}

	var cache *slider.ImageCache
	if cacheDir != "" {
		cache = &slider.ImageCache{Dir: cacheDir}
	}

	client := &http.Client{
		Timeout: 30 * time.Second,
		Transport: &http.Transport{
			MaxIdleConns:        100,
			MaxIdleConnsPerHost: 32,
			IdleConnTimeout:     90 * time.Second,
			ForceAttemptHTTP2:   true,
		},
	}

	return &Server{
		Inventory:    inventory,
		Cache:        cache,
		client:       client,
		maxZoomCache: make(map[string]int),
		mapTimeCache: make(map[string]string),
	}, nil
}

// Routes builds the HTTP handler for the server.
func (s *Server) Routes() http.Handler {
	mux := http.NewServeMux()
	mux.HandleFunc("/api/inventory", s.handleInventory)
	mux.HandleFunc("/api/times", s.handleTimes)
	mux.HandleFunc("/api/maxzoom", s.handleMaxZoom)
	// The /api/download endpoint is currently disabled. The handler (s.handleDownload) and the
	// underlying slider.RenderLoop renderer remain in place; re-register the route to re-enable it.
	mux.HandleFunc("/tiles/", s.handleTile)
	mux.HandleFunc("/maps/", s.handleMapTile)
	mux.Handle("/", s.uiHandler())
	return mux
}

// ListenAndServe starts the HTTP server on addr and blocks until it stops.
func (s *Server) ListenAndServe(addr string) error {
	srv := &http.Server{
		Addr:              addr,
		Handler:           s.Routes(),
		ReadHeaderTimeout: 10 * time.Second,
		IdleTimeout:       120 * time.Second,
	}
	log.Debug().Msgf("Web server listening on %s", addr)
	return srv.ListenAndServe()
}
