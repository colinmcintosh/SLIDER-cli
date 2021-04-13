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
	"strings"
)

// Satellite contains all of the information for a single weather satellite and all of it's sectors and products.
type Satellite struct {
	// Defaults contains default settings for products on this satellite
	Defaults *ProductDefaults `json:"defaults"`
	// DefaultSector is the default sector selected by SLIDER
	DefaultSector string `json:"default_sector"`
	// ImageryResolutions is the list of imagery resolutions used by SLIDER. Using ZoomLevels() is preferred to
	// to using ImageryResolutions.
	ImageryResolutions map[string]string `json:"imagery_resolutions"`
	// Products contains a list of available products for this satellite keyed by ID.
	Products map[string]*Product
	// SatelliteTitle is the friendly human-readable name for this satellite
	SatelliteTitle string `json:"satellite_title"`
	// Sectors contains a list of available sectors for this Satellite keyed by ID.
	Sectors map[string]*Sector
	// Value is the string sent to SLIDER for this satellite when requesting images
	Value string
}

// ID is the value sent in the request to SLIDER
func (s *Satellite) ID() string {
	return strings.ReplaceAll(s.Value, "_", "-")
}

// ZoomLevels is the list of available zoom levels or resolutions for this satellite
func (s *Satellite) ZoomLevels() []*Zoom {
	zoomLevels := make([]*Zoom, len(s.ImageryResolutions))
	var i int
	for _, v := range s.ImageryResolutions {
		zoomLevels[i] = &Zoom{
			Level: i,
			Scale: v,
		}
		i++
	}
	return zoomLevels
}

// ValidSector returns true if the provided sector is available for this satellite.
func (s *Satellite) ValidSector(sector *Sector) bool {
	if s.Sectors == nil {
		return false
	}
	c, ok := s.Sectors[sector.Value]
	if !ok {
		return false
	}
	if c != sector {
		return false
	}
	return true
}

// ValidProduct returns true if the provided product is available for this satellite.
func (s *Satellite) ValidProduct(product *Product) bool {
	if s.Products == nil {
		return false
	}
	p, ok := s.Products[product.Value]
	if !ok {
		return false
	}
	if p != product {
		return false
	}
	return true
}

// ValidSectorProduct returns true if the provided sector and products are available for this satellite AND the
// product is not included in the sector's MissingProducts list. Generally this is the method that should be used
// to validate that sectors and products are available for the satellite.
func (s *Satellite) ValidSectorProduct(sector *Sector, product *Product) bool {
	if !s.ValidSector(sector) {
		return false
	}
	if !s.ValidProduct(product) {
		return false
	}
	if sector.ProductMissing(product) {
		return false
	}
	return true
}
