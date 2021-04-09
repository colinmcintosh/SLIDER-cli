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

// GOES-16 Satellite
var GOES16Satellite = &Satellite{
	ID:           "goes-16",
	FriendlyName: "GOES-16",
	Description:  "East, 75.2W",
	Value:        "goes-16",
	Products: map[string]*Product{
		GOESBand1Product.ID:    GOESBand1Product,
		GOESBand2Product.ID:    GOESBand2Product,
		CIRAGeoColorProduct.ID: CIRAGeoColorProduct,
	},
	Sectors: map[string]*Sector{
		GOESCONUSSector.ID:      GOESCONUSSector,
		GOESFullDiskSector.ID:   GOESFullDiskSector,
		GOESMesoscale1Sector.ID: GOESMesoscale1Sector,
		GOESMesoscale2Sector.ID: GOESMesoscale2Sector,
	},
	ZoomLevels: GOESHimawariZoomLevels,
}

// GOES-17 Satellite
var GOES17Satellite = &Satellite{
	ID:           "goes-17",
	FriendlyName: "GOES-17",
	Description:  "West, 137.2W",
	Value:        "goes-17",
	Products: map[string]*Product{
		GOESBand1Product.ID:    GOESBand1Product,
		GOESBand2Product.ID:    GOESBand2Product,
		CIRAGeoColorProduct.ID: CIRAGeoColorProduct,
	},
	Sectors: map[string]*Sector{
		GOESCONUSSector.ID:      GOESCONUSSector,
		GOESFullDiskSector.ID:   GOESFullDiskSector,
		GOESMesoscale1Sector.ID: GOESMesoscale1Sector,
		GOESMesoscale2Sector.ID: GOESMesoscale2Sector,
	},
	ZoomLevels: GOESHimawariZoomLevels,
}

// GOES CONUS Sector
var GOESCONUSSector = &Sector{
	ID:              "conus",
	FriendlyName:    "CONUS",
	Value:           "conus",
	CellSize:        625,
	CropRatioX:      1,
	CropRatioY:      .6,
	MaxZoomLevel:    4,
	MissingProducts: []*Product{},
}

// GOES Full Disk Sector
var GOESFullDiskSector = &Sector{
	ID:              "fd",
	FriendlyName:    "Full Disk",
	Value:           "full_disk",
	CellSize:        678,
	MaxZoomLevel:    5,
	MissingProducts: []*Product{},
}

// GOES Mesoscale 1 Sector
var GOESMesoscale1Sector = &Sector{
	ID:              "ms1",
	FriendlyName:    "Mesoscale 1",
	Value:           "mesoscale_01",
	CellSize:        500,
	MaxZoomLevel:    2,
	MissingProducts: []*Product{},
}

// GOES Mesoscale 2 Sector
var GOESMesoscale2Sector = &Sector{
	ID:              "ms2",
	FriendlyName:    "Mesoscale 2",
	Value:           "mesoscale_02",
	CellSize:        500,
	MaxZoomLevel:    2,
	MissingProducts: []*Product{},
}

// GOES Band 1 Product
var GOESBand1Product = &Product{
	ID:           "band-1",
	FriendlyName: "Band 1",
	Description:  "0.47 µm 'Blue'",
	Value:        "band_01",
}

// GOES Band 2 Product
var GOESBand2Product = &Product{
	ID:           "band-2",
	FriendlyName: "Band 2",
	Description:  "0.64 µm 'Red'",
	Value:        "band_02",
}
