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
	"bytes"
	_ "embed"
	"encoding/json"
	"fmt"
	"html"
	"io"
	"net/http"
	"strings"

	"github.com/rs/zerolog/log"
)

// Product contains all of the information for a single product captured by a weather satellite.
type Product struct {
	// ColorTableName is the name of the color table legend
	ColorTableName string `json:"color_table_name"`
	// ProductTitle is the friendly human-readable name for this product
	ProductTitle string `json:"product_title"`
	// ProductDescription is a long description of this product
	ProductDescription string `json:"product_description"`
	// Resolution is the minimum resolution for imagery for this product.
	Resolution string `json:"resolution"`
	// Value is the string sent to SLIDER for this product when requesting images
	Value string
	// ZoomLevelAdjust is the number of zoom levels to remove from available zoom levels for this product.
	ZoomLevelAdjust int `json:"zoom_level_adjust"`
}

// ID is the shorthand string used on the command-line and in the config for this product
func (p *Product) ID() string {
	return strings.ReplaceAll(p.Value, "_", "-")
}

// ProductInventory contains all of the product information for SLIDER.
type ProductInventory struct {
	NumberOfImagesOptions []int                 `json:"number_of_images_options"`
	TimeStepOptions       []int                 `json:"time_step_options"`
	DefaultSatellite      string                `json:"default_satellite"`
	Defaults              *ProductDefaults      `json:"defaults"`
	Colors                map[string]string     `json:"colors"`
	UniqueColors          map[string]string     `json:"unique_colors"`
	IgnoreWhiteMapsOnly   []string              `json:"ignore_white_maps_only"`
	Satellites            map[string]*Satellite `json:"satellites"`
}

// ProductDefaults contains the default settings for satellites, sectors, and products.
type ProductDefaults struct {
	StartingOpacity      float64           `json:"starting_opacity"`
	ZoomLevelAdjust      int               `json:"zoom_level_adjust"`
	MaxZoomLevel         int               `json:"max_zoom_level"`
	MinutesBetweenImages float64           `json:"minutes_between_images"`
	Colors               map[string]string `json:"colors"`
	Maps                 map[string]string `json:"maps"`
}

// ProductNavigation contains details for navigating between products in the SLIDER UI.
type ProductNavigation struct {
	Up    *ProductNavigationDirection `json:"up"`
	Right *ProductNavigationDirection `json:"right"`
	Left  *ProductNavigationDirection `json:"left"`
	Down  *ProductNavigationDirection `json:"down"`
}

// ProductNavigationDirection contains details for navigating between products in the SLIDER UI.
type ProductNavigationDirection struct {
	Satellite string `json:"satellite"`
	Sector    string `json:"sector"`
}

// ProductsJSURL is the address to download the latest product data from.
const ProductsJSURL = "https://rammb-slider.cira.colostate.edu/js/define-products---rammb-slider.js"

// NoProductDownload will disable downloading the latest products from SLIDER.
var NoProductDownload = false

var latestProductInventory *ProductInventory
var productsJSPreamble = []byte("{")
var productsJSEnd = []byte("};")

// ParseProductsJS will parse the define-products.js file which is available on the SLIDER server.
// ParseProductsJS can also parse the BackupProductsJS data in the event that the file cannot be retrieved
// from the SLIDER server.
func ParseProductsJS(data []byte) (*ProductInventory, error) {
	s := bytes.Index(data, productsJSPreamble)
	if s == -1 {
		return nil, fmt.Errorf("unable to find JSON start in define-products.js")
	}
	e := bytes.LastIndex(data, productsJSEnd)
	if e == -1 {
		return nil, fmt.Errorf("unable to find JSON end in define-products.js")
	}

	inventory := new(ProductInventory)
	err := json.Unmarshal(data[s:e+1], inventory)
	if err != nil {
		return nil, fmt.Errorf("unable to unmarshal products JSON: %w", err)
	}

	var newSatellites = make(map[string]*Satellite)
	for satVal, sat := range inventory.Satellites {
		sat.Value = satVal
		sat.SatelliteTitle = html.UnescapeString(sat.SatelliteTitle)
		newSatellites[sat.ID()] = sat
		var newSectors = make(map[string]*Sector)
		for sectorVal, sector := range sat.Sectors {
			sector.Value = sectorVal
			sector.SectorTitle = html.UnescapeString(sector.SectorTitle)
			cropSettings := GetCropSettings(sat.ID(), sector.ID())
			if cropSettings != nil {
				sector.CropRatioX = cropSettings.RatioX
				sector.CropRatioY = cropSettings.RatioY
			}
			newSectors[sector.ID()] = sector
		}
		sat.Sectors = newSectors
		var newProducts = make(map[string]*Product)
		for productVal, product := range sat.Products {
			product.Value = productVal
			product.ProductTitle = html.UnescapeString(product.ProductTitle)
			if strings.HasPrefix(product.ProductTitle, "---") {
				continue
			}
			newProducts[product.ID()] = product
		}
		sat.Products = newProducts
	}
	inventory.Satellites = newSatellites
	return inventory, nil
}

// GetProductInventory will download the latest products from SLIDER or return the builtin fail-safe product
// inventory if the latest products cannot be downloaded.
func GetProductInventory() (*ProductInventory, error) {
	if latestProductInventory == nil && !NoProductDownload {
		data, err := DownloadProductsJS()
		if err != nil {
			log.Warn().Msgf("Failed to download latest products from SLIDER: %v", err)
		} else {
			latestProductInventory, err = ParseProductsJS(data)
			if err != nil {
				log.Warn().Msgf("Failed to parse latest products from SLIDER: %v", err)
			}
		}
	}
	if latestProductInventory == nil {
		var err error
		latestProductInventory, err = ParseProductsJS(BackupProductsJS)
		if err != nil {
			return nil, fmt.Errorf("unable to parse fail-safe products data: %w", err)
		}
	}
	return latestProductInventory, nil
}

// DownloadProductsJS will download and return the bytes for the define-products.js file.
func DownloadProductsJS() ([]byte, error) {
	resp, err := http.Get(ProductsJSURL)
	if err != nil {
		return nil, fmt.Errorf("unable to get download define-products.js file: %w", err)
	}
	if resp.StatusCode != 200 {
		return nil, fmt.Errorf("unable to download define-products.js file: HTTP%d", resp.StatusCode)
	}
	defer func() { _ = resp.Body.Close() }()
	data, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, fmt.Errorf("unable to read define-products.js response: %w", err)
	}
	return data, nil
}

//go:embed data/define-products.js

// BackupProductsJS is a copy of the define-products.js for use in the event the file can't be retrieved
// from the SLIDER server.
var BackupProductsJS []byte
