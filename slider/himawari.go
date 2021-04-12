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

// Himawari8Satellite is the Himawari-8 Satellite
var Himawari8Satellite = &Satellite{
	ID:           "himawari-8",
	FriendlyName: "Himawari-8",
	Description:  "Japan, 140.7E",
	Value:        "himawari",
	Products: map[string]*Product{
		CIRAGeoColorProduct.ID:          CIRAGeoColorProduct,
		CIRAShortwaveAlbedoProduct.ID:   CIRAShortwaveAlbedoProduct,
		CIRADustDEBRAProduct.ID:         CIRADustDEBRAProduct,
		CIRAVisibleAlbedoProduct.ID:     CIRAVisibleAlbedoProduct,
		SplitWindowDifferenceProduct.ID: SplitWindowDifferenceProduct,
	},
	Sectors: map[string]*Sector{
		HimawariFullDiskSector.ID:   HimawariFullDiskSector,
		HimawariJapanSector.ID:      HimawariJapanSector,
		HimawariMesoscale1Sector.ID: HimawariMesoscale1Sector,
	},
	ZoomLevels: GOESHimawariZoomLevels,
}

// HimawariFullDiskSector is the Himawari Full Disk Sector
var HimawariFullDiskSector = &Sector{
	ID:              "fd",
	FriendlyName:    "Full Disk",
	Value:           "full_disk",
	CellSize:        688,
	MaxZoomLevel:    5,
	MissingProducts: []*Product{},
}

// HimawariJapanSector is the Himawari Japan Sector
var HimawariJapanSector = &Sector{
	ID:           "japan",
	FriendlyName: "Japan",
	Value:        "japan",
	CellSize:     750,
	MaxZoomLevel: 3,
	MissingProducts: []*Product{
		CIRAGeoColorProduct,
	},
}

// HimawariMesoscale1Sector is the Himawari Mesoscale 1 Sector
var HimawariMesoscale1Sector = &Sector{
	ID:           "ms1",
	FriendlyName: "Japan",
	Value:        "japan",
	CellSize:     750,
	MaxZoomLevel: 3,
	MissingProducts: []*Product{
		CIRAGeoColorProduct,
	},
}
