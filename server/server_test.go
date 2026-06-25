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
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/colinmcintosh/slider-cli/slider"
	"github.com/stretchr/testify/require"
)

// newTestServer builds a Server backed by the offline, built-in product inventory so tests never touch the
// network. Returns the server, an httptest server for its routes, and a known-valid satellite/sector/product.
func newTestServer(t *testing.T) (*httptest.Server, *slider.Satellite, *slider.Sector, *slider.Product) {
	t.Helper()
	slider.NoProductDownload = true

	s, err := New("") // no cache directory; caching is irrelevant to validation tests
	require.NoError(t, err)

	var sat *slider.Satellite
	var sec *slider.Sector
	var prod *slider.Product
	for _, candSat := range s.Inventory.Satellites {
		for _, candSec := range candSat.Sectors {
			for _, candProd := range candSat.Products {
				if !candSec.ProductMissing(candProd) {
					sat, sec, prod = candSat, candSec, candProd
					break
				}
			}
			if prod != nil {
				break
			}
		}
		if prod != nil {
			break
		}
	}
	require.NotNil(t, prod, "expected at least one valid satellite/sector/product in the inventory")

	ts := httptest.NewServer(s.Routes())
	t.Cleanup(ts.Close)
	return ts, sat, sec, prod
}

func TestInventoryEndpoint(t *testing.T) {
	ts, _, _, _ := newTestServer(t)

	resp, err := http.Get(ts.URL + "/api/inventory")
	require.NoError(t, err)
	defer func() { _ = resp.Body.Close() }()
	require.Equal(t, http.StatusOK, resp.StatusCode)

	var payload struct {
		Satellites map[string]json.RawMessage `json:"satellites"`
	}
	require.NoError(t, json.NewDecoder(resp.Body).Decode(&payload))
	require.NotEmpty(t, payload.Satellites)
}

func TestTimesRejectsUnknownIDs(t *testing.T) {
	ts, _, _, _ := newTestServer(t)
	resp, err := http.Get(ts.URL + "/api/times?satellite=bogus&sector=bogus&product=bogus")
	require.NoError(t, err)
	defer func() { _ = resp.Body.Close() }()
	require.Equal(t, http.StatusBadRequest, resp.StatusCode)
}

func TestMaxZoomRejectsUnknownIDs(t *testing.T) {
	ts, _, _, _ := newTestServer(t)
	resp, err := http.Get(ts.URL + "/api/maxzoom?satellite=bogus&sector=bogus&product=bogus")
	require.NoError(t, err)
	defer func() { _ = resp.Body.Close() }()
	require.Equal(t, http.StatusBadRequest, resp.StatusCode)
}

// TestTileValidation exercises the proxy's input validation. Every case has exactly one invalid component so
// the request is rejected with 400 before any upstream fetch is attempted.
func TestTileValidation(t *testing.T) {
	ts, sat, sec, prod := newTestServer(t)
	const validTS = "20210101000000"

	cases := map[string]string{
		"too few segments":  "/tiles/" + sat.ID() + "/" + sec.ID() + "/x.png",
		"unknown satellite": "/tiles/nope/" + sec.ID() + "/" + prod.ID() + "/" + validTS + "/00/000/000.png",
		"unknown sector":    "/tiles/" + sat.ID() + "/nope/" + prod.ID() + "/" + validTS + "/00/000/000.png",
		"unknown product":   "/tiles/" + sat.ID() + "/" + sec.ID() + "/nope/" + validTS + "/00/000/000.png",
		"bad timestamp":     "/tiles/" + sat.ID() + "/" + sec.ID() + "/" + prod.ID() + "/123/00/000/000.png",
		"zoom out of range": "/tiles/" + sat.ID() + "/" + sec.ID() + "/" + prod.ID() + "/" + validTS + "/99/000/000.png",
		"coord out of range": "/tiles/" + sat.ID() + "/" + sec.ID() + "/" + prod.ID() + "/" + validTS +
			"/00/000/005.png",
	}

	for name, path := range cases {
		t.Run(name, func(t *testing.T) {
			resp, err := http.Get(ts.URL + path)
			require.NoError(t, err)
			defer func() { _ = resp.Body.Close() }()
			require.Equal(t, http.StatusBadRequest, resp.StatusCode, "path %s", path)
		})
	}
}
