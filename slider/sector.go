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

import "strings"

// Sector contains all of the information for a single sector captured by a weather satellite.
type Sector struct {
	// CropRatioX is the amount to crop the image on the X-axis from 0 to 1
	CropRatioX float32
	// CropRatioY is the amount to crop the image on the X-axis from 0 to 1
	CropRatioY float32
	// Defaults contains the default products settings for this sector
	Defaults *ProductDefaults `json:"defaults"`
	// DefaultProduct is the default product selected by SLIDER for this sector.
	DefaultProduct string `json:"default_product"`
	// MaxZoomLevel is the max zoom level or resolution that this is available for this sector.
	MaxZoomLevel int `json:"max_zoom_level"`
	// MissingProducts is a list of satellite products that are unavailable for this sector (typically due to the lack
	// of data availability).
	MissingProducts []string `json:"missing_products"`
	// Navigation contains the navigation configuration for the SLIDER UI
	Navigation *ProductNavigation `json:"navigation"`
	// SectorTitle is a longer string with a human-readable name for the sector
	SectorTitle string `json:"sector_title"`
	// TileSize is the size of each tile in pixels
	TileSize int `json:"tile_size"`
	// Value is the string for this sector sent to SLIDER when requesting images
	Value string
}

// ID is the shorthand string used on the command-line and in the config
func (s *Sector) ID() string {
	return strings.ReplaceAll(s.Value, "_", "-")
}

// ProductMissing returns true if the provided product is present in the MissingProducts list.
func (s *Sector) ProductMissing(product *Product) bool {
	for _, missing := range s.MissingProducts {
		if product.Value == missing {
			return true
		}
	}
	return false
}

// XSize is the number of pixels along the X-axis after the image is cropped
func (s *Sector) XSize(zoom *Zoom) int {
	if s.CropRatioX > 0 {
		return int(float32(zoom.NumTiles()*s.TileSize) * s.CropRatioX)
	}
	return zoom.NumTiles() * s.TileSize
}

// YSize is the number of pixels along the Y-axis after the image is cropped
func (s *Sector) YSize(zoom *Zoom) int {
	if s.CropRatioY > 0 {
		return int(float32(zoom.NumTiles()*s.TileSize) * s.CropRatioY)
	}
	return zoom.NumTiles() * s.TileSize
}

// CropSettings contains the crop ratio settings for a single satellite sector.
type CropSettings struct {
	RatioX float32
	RatioY float32
}

// SectorCropTable includes the builtin crop settings for satellites and sectors.
var SectorCropTable = map[string]map[string]*CropSettings{
	"goes-16": {
		"conus": {RatioX: 1, RatioY: 0.6},
	},
	"goes-17": {
		"conus": {RatioX: 1, RatioY: 0.6},
	},
}

// GetCropSettings will return the crop settings for the specified satellite and sector if they exist, otherwise nil.
func GetCropSettings(satelliteID, sectorID string) *CropSettings {
	sectors := SectorCropTable[satelliteID]
	if sectors == nil {
		return nil
	}
	return sectors[sectorID]
}
