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
	"encoding/json"
	"fmt"
	"github.com/rs/zerolog/log"
	"image"
	"image/png"
	"io/ioutil"
	"net/http"
)

// Full SLIDER URL Example:
// https://rammb-slider.cira.colostate.edu/
//		?sat=goes-16
//		&z=1
//		&angle=150
//		&im=24
//		&ts=1
//		&st=0
//		&et=0
//		&speed=130
//		&motion=rock
//		&maps%5Bborders%5D=white
//		&mops%5Bborders%5D=0.3
//		&mhidden%5Bborders%5D=1
//		&lat=0&opacity%5B0%5D=1
//		&hidden%5B0%5D=0
//		&pause=20210404224807
//		&slider=-1
//		&hide_controls=0
//		&mouse_draw=0
//		&follow_feature=0
//		&follow_hide=0
//		&s=rammb-slider
//		&sec=full_disk
//		&p%5B0%5D=geocolor
//		&x=12664.071436031289
//		&y=10806.47205375142

// TileImageURI is the request address for images. It contains the following fields:
// 	- Date
//  - Satellite
//  - Sector
//	- Product
//	- Image Timestamp
//  - Zoom Level
//  - Tile Y-Position
//  - Tile X-Position
// 	Example: https://rammb-slider.cira.colostate.edu/data/imagery/20210404/jpss---northern_hemisphere/cira_geocolor/20210404215820/04/011_007.png
const TileImageURI = "https://rammb-slider.cira.colostate.edu/data/imagery/%s/%s---%s/%s/%s/%02d/%03d_%03d.png"

// AvailableDatesURI is the address for retrieving the latest dates for available images.
//  - Satellite
//  - Sector
//	- Product
// 	Example: https://rammb-slider.cira.colostate.edu/data/json/jpss/northern_hemisphere/cira_geocolor/available_dates.json
const AvailableDatesURI = "https://rammb-slider.cira.colostate.edu/data/json/%s/%s/%s/available_dates.json"

// LatestTimesURI is the address for retrieving the latest times for available images.
//  - Satellite
//  - Sector
//	- Product
//  Example: https://rammb-slider.cira.colostate.edu/data/json/jpss/northern_hemisphere/cira_geocolor/latest_times.json
const LatestTimesURI = "https://rammb-slider.cira.colostate.edu/data/json/%s/%s/%s/latest_times.json"

// LatestTimes5760URI is the same as LatestTimesURI but with more times.
const LatestTimes5760URI = "https://rammb-slider.cira.colostate.edu/data/json/%s/%s/%s/latest_times_5760.json"

// AvailableDates returns the list of dates that SLIDER has available data for as ints in the form of YYYYMMDD.
func AvailableDates(satellite *Satellite, sector *Sector, product *Product) ([]int, error) {
	if satellite == nil {
		return nil, fmt.Errorf("satellite must not be nil")
	}
	if sector == nil {
		return nil, fmt.Errorf("sector must not be nil")
	}
	if product == nil {
		return nil, fmt.Errorf("product must not be nil")
	}

	uri := fmt.Sprintf(AvailableDatesURI, satellite.Value, sector.Value, product.Value)
	resp, err := http.Get(uri)
	if err != nil {
		return nil, fmt.Errorf("unable to get available dates: %w", err)
	}
	defer func() { _ = resp.Body.Close() }()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, fmt.Errorf("unable to read data from HTTP response body: %w", err)
	}

	data := new(struct {
		DatesInt []int `json:"dates_int"`
	})
	err = json.Unmarshal(body, data)
	if err != nil {
		return nil, fmt.Errorf("unable to decode available dates JSON: %w", err)
	}

	return data.DatesInt, nil
}

// LatestTimes returns the list of timestamps that SLIDER has available data for as ints in the form of YYYYMMDDhhmmss.
func LatestTimes(satellite *Satellite, sector *Sector, product *Product, count int) ([]int, error) {
	if satellite == nil {
		return nil, fmt.Errorf("satellite must not be nil")
	}
	if sector == nil {
		return nil, fmt.Errorf("sector must not be nil")
	}
	if product == nil {
		return nil, fmt.Errorf("product must not be nil")
	}

	var uri string
	if count > 100 {
		uri = fmt.Sprintf(LatestTimes5760URI, satellite.Value, sector.Value, product.Value)
	} else {
		uri = fmt.Sprintf(LatestTimesURI, satellite.Value, sector.Value, product.Value)
	}
	resp, err := http.Get(uri)
	if err != nil {
		return nil, fmt.Errorf("unable to get latest times: %w", err)
	}
	defer func() { _ = resp.Body.Close() }()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, fmt.Errorf("unable to read data from HTTP response body: %w", err)
	}

	data := new(struct {
		TimestampsInt []int `json:"timestamps_int"`
	})
	err = json.Unmarshal(body, data)
	if err != nil {
		return nil, fmt.Errorf("unable to decode latest times JSON: %w", err)
	}

	return data.TimestampsInt, nil
}

// TileImageRequest contains the parameters required to request an individual image tile from SLIDER.
type TileImageRequest struct {
	Date           string
	Satellite      string
	Sector         string
	Product        string
	ImageTimestamp string
	ZoomLevel      int
	TileXPosition  int
	TileYPosition  int
}

// ImageTileURL returns the full request URL for an image tile.
func ImageTileURL(request *TileImageRequest) string {
	uri := fmt.Sprintf(TileImageURI, request.Date, request.Satellite, request.Sector, request.Product,
		request.ImageTimestamp, request.ZoomLevel, request.TileYPosition, request.TileXPosition)
	return uri
}

// DownloadImage downloads an individual image file.
func DownloadImage(uri string) (image.Image, error) {
	log.Debug().Msgf("Downloading image file: %s", uri)
	resp, err := http.Get(uri)
	if err != nil {
		return nil, fmt.Errorf("unable to get image file: %w", err)
	}
	if resp.StatusCode != 200 {
		return nil, fmt.Errorf("unable to download image: %s: HTTP%d", uri, resp.StatusCode)
	}

	defer func() { _ = resp.Body.Close() }()

	img, err := png.Decode(resp.Body)
	if err != nil {
		return nil, fmt.Errorf("unable to decode image response: %w", err)
	}

	return img, nil
}
