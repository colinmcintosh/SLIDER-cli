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

// GOES16Satellite is the GOES-16 Satellite
var GOES16Satellite = &Satellite{
	ID:           "goes-16",
	FriendlyName: "GOES-16",
	Description:  "East, 75.2W",
	Value:        "goes-16",
	Products: map[string]*Product{
		GOESBand1Product.ID:             GOESBand1Product,
		GOESBand2Product.ID:             GOESBand2Product,
		GOESBand3Product.ID:             GOESBand3Product,
		GOESBand4Product.ID:             GOESBand4Product,
		GOESBand5Product.ID:             GOESBand5Product,
		GOESBand6Product.ID:             GOESBand6Product,
		GOESBand7Product.ID:             GOESBand7Product,
		GOESBand8Product.ID:             GOESBand8Product,
		GOESBand9Product.ID:             GOESBand9Product,
		GOESBand10Product.ID:            GOESBand10Product,
		GOESBand11Product.ID:            GOESBand11Product,
		GOESBand12Product.ID:            GOESBand12Product,
		GOESBand13Product.ID:            GOESBand13Product,
		GOESBand14Product.ID:            GOESBand14Product,
		GOESBand15Product.ID:            GOESBand15Product,
		GOESBand16Product.ID:            GOESBand16Product,
		CIRAGeoColorProduct.ID:          CIRAGeoColorProduct,
		CIRAProxyVisibleProduct.ID:      CIRADustDEBRAProduct,
		CIRAShortwaveAlbedoProduct.ID:   CIRAShortwaveAlbedoProduct,
		CIRADustDEBRAProduct.ID:         CIRADustDEBRAProduct,
		CIRASnowCloudProduct.ID:         CIRASnowCloudProduct,
		CIRASnowCloudLayersProduct.ID:   CIRASnowCloudLayersProduct,
		SplitWindowDifferenceProduct.ID: SplitWindowDifferenceProduct,
	},
	Sectors: map[string]*Sector{
		GOESCONUSSector.ID:      GOESCONUSSector,
		GOESFullDiskSector.ID:   GOESFullDiskSector,
		GOESMesoscale1Sector.ID: GOESMesoscale1Sector,
		GOESMesoscale2Sector.ID: GOESMesoscale2Sector,
	},
	ZoomLevels: GOESHimawariZoomLevels,
}

// GOES17Satellite is the GOES-17 Satellite
var GOES17Satellite = &Satellite{
	ID:           "goes-17",
	FriendlyName: "GOES-17",
	Description:  "West, 137.2W",
	Value:        "goes-17",
	Products: map[string]*Product{
		GOESBand1Product.ID:             GOESBand1Product,
		GOESBand2Product.ID:             GOESBand2Product,
		GOESBand3Product.ID:             GOESBand3Product,
		GOESBand4Product.ID:             GOESBand4Product,
		GOESBand5Product.ID:             GOESBand5Product,
		GOESBand6Product.ID:             GOESBand6Product,
		GOESBand7Product.ID:             GOESBand7Product,
		GOESBand8Product.ID:             GOESBand8Product,
		GOESBand9Product.ID:             GOESBand9Product,
		GOESBand10Product.ID:            GOESBand10Product,
		GOESBand11Product.ID:            GOESBand11Product,
		GOESBand12Product.ID:            GOESBand12Product,
		GOESBand13Product.ID:            GOESBand13Product,
		GOESBand14Product.ID:            GOESBand14Product,
		GOESBand15Product.ID:            GOESBand15Product,
		GOESBand16Product.ID:            GOESBand16Product,
		CIRAGeoColorProduct.ID:          CIRAGeoColorProduct,
		CIRAProxyVisibleProduct.ID:      CIRADustDEBRAProduct,
		CIRAShortwaveAlbedoProduct.ID:   CIRAShortwaveAlbedoProduct,
		CIRADustDEBRAProduct.ID:         CIRADustDEBRAProduct,
		CIRASnowCloudProduct.ID:         CIRASnowCloudProduct,
		CIRASnowCloudLayersProduct.ID:   CIRASnowCloudLayersProduct,
		SplitWindowDifferenceProduct.ID: SplitWindowDifferenceProduct,
	},
	Sectors: map[string]*Sector{
		GOESCONUSSector.ID:      GOESCONUSSector,
		GOESFullDiskSector.ID:   GOESFullDiskSector,
		GOESMesoscale1Sector.ID: GOESMesoscale1Sector,
		GOESMesoscale2Sector.ID: GOESMesoscale2Sector,
	},
	ZoomLevels: GOESHimawariZoomLevels,
}

// GOESCONUSSector is the GOES CONUS Sector
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

// GOESFullDiskSector is the GOES Full Disk Sector
var GOESFullDiskSector = &Sector{
	ID:              "fd",
	FriendlyName:    "Full Disk",
	Value:           "full_disk",
	CellSize:        678,
	MaxZoomLevel:    5,
	MissingProducts: []*Product{},
}

// GOESMesoscale1Sector is the GOES Mesoscale 1 Sector
var GOESMesoscale1Sector = &Sector{
	ID:              "ms1",
	FriendlyName:    "Mesoscale 1",
	Value:           "mesoscale_01",
	CellSize:        500,
	MaxZoomLevel:    2,
	MissingProducts: []*Product{},
}

// GOESMesoscale2Sector is the GOES Mesoscale 2 Sector
var GOESMesoscale2Sector = &Sector{
	ID:              "ms2",
	FriendlyName:    "Mesoscale 2",
	Value:           "mesoscale_02",
	CellSize:        500,
	MaxZoomLevel:    2,
	MissingProducts: []*Product{},
}

// GOESBand1Product is the GOES Band 1 Product
var GOESBand1Product = &Product{
	ID:           "band-1",
	FriendlyName: "Band 1",
	Description:  "0.47 µm 'Blue'",
	Value:        "band_01",
	ZoomAdjust:   1,
}

// GOESBand2Product is the GOES Band 2 Product
var GOESBand2Product = &Product{
	ID:           "band-2",
	FriendlyName: "Band 2",
	Description:  "0.64 µm 'Red'",
	Value:        "band_02",
}

// GOESBand3Product is the GOES Band 3 Product
var GOESBand3Product = &Product{
	ID:           "band-3",
	FriendlyName: "Band 3",
	Description:  "0.86 µm 'Veggie'",
	Value:        "band_03",
	ZoomAdjust:   1,
}

// GOESBand4Product is the GOES Band 4 Product
var GOESBand4Product = &Product{
	ID:           "band-4",
	FriendlyName: "Band 4",
	Description:  "1.37 µm 'Cirrus'",
	Value:        "band_04",
	ZoomAdjust:   2,
}

// GOESBand5Product is the GOES Band 5 Product
var GOESBand5Product = &Product{
	ID:           "band-5",
	FriendlyName: "Band 5",
	Description:  "1.6 µm 'Snow/Ice'",
	Value:        "band_05",
	ZoomAdjust:   1,
}

// GOESBand6Product is the GOES Band 6 Product
var GOESBand6Product = &Product{
	ID:           "band-6",
	FriendlyName: "Band 6",
	Description:  "2.2 µm 'Cloud Particle Size'",
	Value:        "band_06",
	ZoomAdjust:   2,
}

// GOESBand7Product is the GOES Band 7 Product
var GOESBand7Product = &Product{
	ID:           "band-7",
	FriendlyName: "Band 7",
	Description:  "3.9 µm 'Shortwave Window'",
	Value:        "band_07",
	ZoomAdjust:   2,
}

// GOESBand8Product is the GOES Band 8 Product
var GOESBand8Product = &Product{
	ID:           "band-8",
	FriendlyName: "Band 8",
	Description:  "6.2 µm 'Upper-Level Tropospheric Water Vapor'",
	Value:        "band_08",
	ZoomAdjust:   2,
}

// GOESBand9Product is the GOES Band 9 Product
var GOESBand9Product = &Product{
	ID:           "band-9",
	FriendlyName: "Band 9",
	Description:  "6.9 µm 'Mid-Level Tropospheric Water Vapor'",
	Value:        "band_09",
	ZoomAdjust:   2,
}

// GOESBand10Product is the GOES Band 10 Product
var GOESBand10Product = &Product{
	ID:           "band-10",
	FriendlyName: "Band 10",
	Description:  "7.3 µm 'Lower-level Water Vapor'",
	Value:        "band_10",
	ZoomAdjust:   2,
}

// GOESBand11Product is the GOES Band 11 Product
var GOESBand11Product = &Product{
	ID:           "band-11",
	FriendlyName: "Band 11",
	Description:  "8.4 µm 'Cloud-Top Phase'",
	Value:        "band_11",
	ZoomAdjust:   2,
}

// GOESBand12Product is the GOES Band 12 Product
var GOESBand12Product = &Product{
	ID:           "band-12",
	FriendlyName: "Band 12",
	Description:  "9.6 µm 'Ozone'",
	Value:        "band_12",
	ZoomAdjust:   2,
}

// GOESBand13Product is the GOES Band 13 Product
var GOESBand13Product = &Product{
	ID:           "band-13",
	FriendlyName: "Band 13",
	Description:  "10.3 µm 'Clean & IR Longwave Window'",
	Value:        "band_13",
	ZoomAdjust:   2,
}

// GOESBand14Product is the GOES Band 14 Product
var GOESBand14Product = &Product{
	ID:           "band-14",
	FriendlyName: "Band 14",
	Description:  "11.2 µm 'IR Longwave Window'",
	Value:        "band_14",
	ZoomAdjust:   2,
}

// GOESBand15Product is the GOES Band 15 Product
var GOESBand15Product = &Product{
	ID:           "band-15",
	FriendlyName: "Band 15",
	Description:  "12.3 µm '\"Dirty\" Longwave Window'",
	Value:        "band_15",
	ZoomAdjust:   2,
}

// GOESBand16Product is the GOES Band 16 Product
var GOESBand16Product = &Product{
	ID:           "band-16",
	FriendlyName: "Band 16",
	Description:  "13.3 µm '\"CO2\" Longwave Infrared",
	Value:        "band_16",
	ZoomAdjust:   2,
}
