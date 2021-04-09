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

// Satellite contains all of the information for a single weather satellite and all of it's sectors and products.
type Satellite struct {
	// ID is the value sent in the request to SLIDER
	ID string
	// FriendlyName is the friendly human-readable name for this satellite
	FriendlyName string
	// Description is a short description of the satellite details
	Description string
	// Value is the string sent to SLIDER for this satellite when requesting images
	Value string
	// Sectors contains a list of available sectors for this Satellite keyed by ID.
	Sectors map[string]*Sector
	// Products contains a list of available products for this satellite keyed by ID.
	Products map[string]*Product
	// ZoomLevels is the list of available zoom levels or resolutions for this satellite
	ZoomLevels []*Zoom
}

// ValidSector returns true if the provided sector is available for this satellite.
func (s *Satellite) ValidSector(sector *Sector) bool {
	if s.Sectors == nil {
		return false
	}
	c, ok := s.Sectors[sector.ID]
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
	p, ok := s.Products[product.ID]
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

// Satellites contains all of the available and included satellites.
var Satellites = map[string]*Satellite{
	GOES16Satellite.ID:    GOES16Satellite,
	GOES17Satellite.ID:    GOES17Satellite,
	Himawari8Satellite.ID: Himawari8Satellite,
}
