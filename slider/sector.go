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

// Sector contains all of the information for a single sector captured by a weather satellite.
type Sector struct {
	// ID is the shorthand string used on the command-line and in the config
	ID string
	// FriendlyName is a longer string with a human-readable name for the sector
	FriendlyName string
	// Value is the string for this sector sent to SLIDER when requesting images
	Value string
	// CellSize is the size of each cell tile in pixels
	CellSize int
	// CropRatioX is the amount to crop the image on the X-axis from 0 to 1
	CropRatioX float32
	// CropRatioY is the amount to crop the image on the X-axis from 0 to 1
	CropRatioY float32
	// MaxZoomLevel is the max zoom level or resolution that this is available for this sector.
	MaxZoomLevel int
	// MissingProducts is a list of satellite products that are unavailable for this sector (typically due to the lack
	// of data availability).
	MissingProducts []*Product
}

// ProductMissing returns true if the provided product is present in the MissingProducts list.
func (s *Sector) ProductMissing(product *Product) bool {
	for _, missing := range s.MissingProducts {
		if product == missing {
			return true
		}
	}
	return false
}

// XSize is the number of pixels along the X-axis after the image is cropped
func (s *Sector) XSize(zoom *Zoom) int {
	if s.CropRatioX > 0 {
		return int(float32(zoom.NumCells()*s.CellSize) * s.CropRatioX)
	}
	return zoom.NumCells() * s.CellSize
}

// YSize is the number of pixels along the Y-axis after the image is cropped
func (s *Sector) YSize(zoom *Zoom) int {
	if s.CropRatioY > 0 {
		return int(float32(zoom.NumCells()*s.CellSize) * s.CropRatioY)
	}
	return zoom.NumCells() * s.CellSize
}
