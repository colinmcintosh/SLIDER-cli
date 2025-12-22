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

package slider

import (
	"image"
	"image/color"
	"image/png"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestImageTileURL(t *testing.T) {
	request := &TileImageRequest{
		Date:           "2021/04/04",
		Satellite:      "jpss",
		Sector:         "northern_hemisphere",
		Product:        "cira_geocolor",
		ImageTimestamp: "20210404215820",
		ZoomLevel:      4,
		TileXPosition:  7,
		TileYPosition:  11,
	}

	expected := "https://rammb-slider.cira.colostate.edu/data/imagery/2021/04/04/jpss---northern_hemisphere/cira_geocolor/20210404215820/04/011_007.png"
	got := ImageTileURL(request)

	assert.Equal(t, expected, got)
}

func TestImageTileURL_ZeroPadding(t *testing.T) {
	tests := []struct {
		name     string
		request  *TileImageRequest
		expected string
	}{
		{
			name: "single digit zoom and positions",
			request: &TileImageRequest{
				Date:           "2021/01/01",
				Satellite:      "goes-16",
				Sector:         "full_disk",
				Product:        "geocolor",
				ImageTimestamp: "20210101120000",
				ZoomLevel:      0,
				TileXPosition:  0,
				TileYPosition:  0,
			},
			expected: "https://rammb-slider.cira.colostate.edu/data/imagery/2021/01/01/goes-16---full_disk/geocolor/20210101120000/00/000_000.png",
		},
		{
			name: "double digit zoom",
			request: &TileImageRequest{
				Date:           "2021/12/31",
				Satellite:      "himawari",
				Sector:         "full_disk",
				Product:        "band_03",
				ImageTimestamp: "20211231235959",
				ZoomLevel:      12,
				TileXPosition:  99,
				TileYPosition:  99,
			},
			expected: "https://rammb-slider.cira.colostate.edu/data/imagery/2021/12/31/himawari---full_disk/band_03/20211231235959/12/099_099.png",
		},
		{
			name: "triple digit positions",
			request: &TileImageRequest{
				Date:           "2022/06/15",
				Satellite:      "goes-17",
				Sector:         "conus",
				Product:        "geocolor",
				ImageTimestamp: "20220615120000",
				ZoomLevel:      5,
				TileXPosition:  123,
				TileYPosition:  456,
			},
			expected: "https://rammb-slider.cira.colostate.edu/data/imagery/2022/06/15/goes-17---conus/geocolor/20220615120000/05/456_123.png",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got := ImageTileURL(tt.request)
			assert.Equal(t, tt.expected, got)
		})
	}
}

func TestAvailableDates_NilValidation(t *testing.T) {
	satellite := &Satellite{Value: "goes-16"}
	sector := &Sector{Value: "full_disk"}
	product := &Product{Value: "geocolor"}

	tests := []struct {
		name      string
		satellite *Satellite
		sector    *Sector
		product   *Product
		errMsg    string
	}{
		{
			name:      "nil satellite",
			satellite: nil,
			sector:    sector,
			product:   product,
			errMsg:    "satellite must not be nil",
		},
		{
			name:      "nil sector",
			satellite: satellite,
			sector:    nil,
			product:   product,
			errMsg:    "sector must not be nil",
		},
		{
			name:      "nil product",
			satellite: satellite,
			sector:    sector,
			product:   nil,
			errMsg:    "product must not be nil",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			dates, err := AvailableDates(tt.satellite, tt.sector, tt.product)
			assert.Error(t, err)
			assert.Nil(t, dates)
			assert.Contains(t, err.Error(), tt.errMsg)
		})
	}
}

func TestLatestTimes_NilValidation(t *testing.T) {
	satellite := &Satellite{Value: "goes-16"}
	sector := &Sector{Value: "full_disk"}
	product := &Product{Value: "geocolor"}

	tests := []struct {
		name      string
		satellite *Satellite
		sector    *Sector
		product   *Product
		errMsg    string
	}{
		{
			name:      "nil satellite",
			satellite: nil,
			sector:    sector,
			product:   product,
			errMsg:    "satellite must not be nil",
		},
		{
			name:      "nil sector",
			satellite: satellite,
			sector:    nil,
			product:   product,
			errMsg:    "sector must not be nil",
		},
		{
			name:      "nil product",
			satellite: satellite,
			sector:    sector,
			product:   nil,
			errMsg:    "product must not be nil",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			times, err := LatestTimes(tt.satellite, tt.sector, tt.product, 10)
			assert.Error(t, err)
			assert.Nil(t, times)
			assert.Contains(t, err.Error(), tt.errMsg)
		})
	}
}

func TestAvailableDates_Success(t *testing.T) {
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, _ *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		_, _ = w.Write([]byte(`{"dates_int": [20210401, 20210402, 20210403]}`))
	}))
	defer server.Close()

	// Temporarily override the URI for testing
	originalURI := AvailableDatesURI
	defer func() { AvailableDatesURI = originalURI }()
	AvailableDatesURI = server.URL + "/%s/%s/%s/available_dates.json"

	satellite := &Satellite{Value: "goes-16"}
	sector := &Sector{Value: "full_disk"}
	product := &Product{Value: "geocolor"}

	dates, err := AvailableDates(satellite, sector, product)
	require.NoError(t, err)
	assert.Equal(t, []int{20210401, 20210402, 20210403}, dates)
}

func TestAvailableDates_InvalidJSON(t *testing.T) {
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, _ *http.Request) {
		w.WriteHeader(http.StatusOK)
		_, _ = w.Write([]byte(`{invalid json`))
	}))
	defer server.Close()

	originalURI := AvailableDatesURI
	defer func() { AvailableDatesURI = originalURI }()
	AvailableDatesURI = server.URL + "/%s/%s/%s/available_dates.json"

	satellite := &Satellite{Value: "goes-16"}
	sector := &Sector{Value: "full_disk"}
	product := &Product{Value: "geocolor"}

	dates, err := AvailableDates(satellite, sector, product)
	assert.Error(t, err)
	assert.Nil(t, dates)
	assert.Contains(t, err.Error(), "unable to decode available dates JSON")
}

func TestLatestTimes_Success(t *testing.T) {
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, _ *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		_, _ = w.Write([]byte(`{"timestamps_int": [20210404120000, 20210404121000, 20210404122000]}`))
	}))
	defer server.Close()

	originalURI := LatestTimesURI
	defer func() { LatestTimesURI = originalURI }()
	LatestTimesURI = server.URL + "/%s/%s/%s/latest_times.json"

	satellite := &Satellite{Value: "goes-16"}
	sector := &Sector{Value: "full_disk"}
	product := &Product{Value: "geocolor"}

	times, err := LatestTimes(satellite, sector, product, 10)
	require.NoError(t, err)
	assert.Equal(t, []int{20210404120000, 20210404121000, 20210404122000}, times)
}

func TestLatestTimes_URISelection(t *testing.T) {
	tests := []struct {
		name           string
		count          int
		expectExtended bool
	}{
		{"count 50 uses standard URI", 50, false},
		{"count 100 uses standard URI", 100, false},
		{"count 101 uses extended URI", 101, true},
		{"count 1000 uses extended URI", 1000, true},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			var requestedPath string
			server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
				requestedPath = r.URL.Path
				w.WriteHeader(http.StatusOK)
				_, _ = w.Write([]byte(`{"timestamps_int": [20210404120000]}`))
			}))
			defer server.Close()

			originalStandard := LatestTimesURI
			originalExtended := LatestTimes5760URI
			defer func() {
				LatestTimesURI = originalStandard
				LatestTimes5760URI = originalExtended
			}()
			LatestTimesURI = server.URL + "/%s/%s/%s/latest_times.json"
			LatestTimes5760URI = server.URL + "/%s/%s/%s/latest_times_5760.json"

			satellite := &Satellite{Value: "goes-16"}
			sector := &Sector{Value: "full_disk"}
			product := &Product{Value: "geocolor"}

			_, err := LatestTimes(satellite, sector, product, tt.count)
			require.NoError(t, err)

			// Check if path ends with the 5760 version
			contains5760 := strings.HasSuffix(requestedPath, "latest_times_5760.json")
			assert.Equal(t, tt.expectExtended, contains5760, "Path was: %s", requestedPath)
		})
	}
}

func TestLatestTimes_InvalidJSON(t *testing.T) {
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, _ *http.Request) {
		w.WriteHeader(http.StatusOK)
		_, _ = w.Write([]byte(`not valid json`))
	}))
	defer server.Close()

	originalURI := LatestTimesURI
	defer func() { LatestTimesURI = originalURI }()
	LatestTimesURI = server.URL + "/%s/%s/%s/latest_times.json"

	satellite := &Satellite{Value: "goes-16"}
	sector := &Sector{Value: "full_disk"}
	product := &Product{Value: "geocolor"}

	times, err := LatestTimes(satellite, sector, product, 10)
	assert.Error(t, err)
	assert.Nil(t, times)
	assert.Contains(t, err.Error(), "unable to decode latest times JSON")
}

func TestDownloadImage_Success(t *testing.T) {
	// Create a test image
	testImg := image.NewRGBA(image.Rect(0, 0, 10, 10))
	for y := 0; y < 10; y++ {
		for x := 0; x < 10; x++ {
			testImg.Set(x, y, color.RGBA{R: 255, G: 0, B: 0, A: 255})
		}
	}

	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, _ *http.Request) {
		w.Header().Set("Content-Type", "image/png")
		w.WriteHeader(http.StatusOK)
		_ = png.Encode(w, testImg)
	}))
	defer server.Close()

	img, err := DownloadImage(server.URL + "/test.png")
	require.NoError(t, err)
	require.NotNil(t, img)
	assert.Equal(t, testImg.Bounds(), img.Bounds())
}

func TestDownloadImage_Non200Status(t *testing.T) {
	tests := []struct {
		name       string
		statusCode int
	}{
		{"404 Not Found", http.StatusNotFound},
		{"500 Internal Server Error", http.StatusInternalServerError},
		{"403 Forbidden", http.StatusForbidden},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, _ *http.Request) {
				w.WriteHeader(tt.statusCode)
			}))
			defer server.Close()

			img, err := DownloadImage(server.URL + "/test.png")
			assert.Error(t, err)
			assert.Nil(t, img)
			assert.Contains(t, err.Error(), "unable to download image")
		})
	}
}

func TestDownloadImage_InvalidPNG(t *testing.T) {
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, _ *http.Request) {
		w.Header().Set("Content-Type", "image/png")
		w.WriteHeader(http.StatusOK)
		_, _ = w.Write([]byte("not a valid PNG"))
	}))
	defer server.Close()

	img, err := DownloadImage(server.URL + "/test.png")
	assert.Error(t, err)
	assert.Nil(t, img)
	assert.Contains(t, err.Error(), "unable to decode image response")
}

func TestDownloadImage_EmptyResponse(t *testing.T) {
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, _ *http.Request) {
		w.WriteHeader(http.StatusOK)
		// Empty body
	}))
	defer server.Close()

	img, err := DownloadImage(server.URL + "/test.png")
	assert.Error(t, err)
	assert.Nil(t, img)
}

func TestAvailableDates_EmptyResponse(t *testing.T) {
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, _ *http.Request) {
		w.WriteHeader(http.StatusOK)
		_, _ = w.Write([]byte(`{"dates_int": []}`))
	}))
	defer server.Close()

	originalURI := AvailableDatesURI
	defer func() { AvailableDatesURI = originalURI }()
	AvailableDatesURI = server.URL + "/%s/%s/%s/available_dates.json"

	satellite := &Satellite{Value: "goes-16"}
	sector := &Sector{Value: "full_disk"}
	product := &Product{Value: "geocolor"}

	dates, err := AvailableDates(satellite, sector, product)
	require.NoError(t, err)
	assert.Empty(t, dates)
}

func TestLatestTimes_EmptyResponse(t *testing.T) {
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, _ *http.Request) {
		w.WriteHeader(http.StatusOK)
		_, _ = w.Write([]byte(`{"timestamps_int": []}`))
	}))
	defer server.Close()

	originalURI := LatestTimesURI
	defer func() { LatestTimesURI = originalURI }()
	LatestTimesURI = server.URL + "/%s/%s/%s/latest_times.json"

	satellite := &Satellite{Value: "goes-16"}
	sector := &Sector{Value: "full_disk"}
	product := &Product{Value: "geocolor"}

	times, err := LatestTimes(satellite, sector, product, 10)
	require.NoError(t, err)
	assert.Empty(t, times)
}

func TestDownloadImage_InvalidURL(t *testing.T) {
	img, err := DownloadImage("ht!tp://invalid-url")
	assert.Error(t, err)
	assert.Nil(t, img)
	assert.Contains(t, err.Error(), "unable to get image file")
}
