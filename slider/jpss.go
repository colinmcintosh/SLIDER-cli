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

// JPSS Satellite
var JPSSSatellite = &Satellite{
	ID:           "jpss",
	FriendlyName: "JPSS",
	Description:  "SNPP, N20, Global",
	Value:        "jpss",
	Products: map[string]*Product{
		JPSSDayNightProduct.ID: JPSSDayNightProduct,
		JPSSBandM1Product.ID:   JPSSBandM1Product,
		JPSSBandM2Product.ID:   JPSSBandM2Product,
		JPSSBandM3Product.ID:   JPSSBandM3Product,
		JPSSBandM4Product.ID:   JPSSBandM4Product,
		JPSSBandM5Product.ID:   JPSSBandM5Product,
		JPSSBandM6Product.ID:   JPSSBandM6Product,
		JPSSBandM7Product.ID:   JPSSBandM7Product,
		JPSSBandM8Product.ID:   JPSSBandM8Product,
		JPSSBandM9Product.ID:   JPSSBandM9Product,
		JPSSBandM10Product.ID:  JPSSBandM10Product,
		JPSSBandM11Product.ID:  JPSSBandM11Product,
		JPSSBandM12Product.ID:  JPSSBandM12Product,
		JPSSBandM13Product.ID:  JPSSBandM13Product,
		JPSSBandM14Product.ID:  JPSSBandM14Product,
		JPSSBandM15Product.ID:  JPSSBandM15Product,
		JPSSBandM16Product.ID:  JPSSBandM16Product,
		JPSSBandI1Product.ID:   JPSSBandI1Product,
		JPSSBandI2Product.ID:   JPSSBandI2Product,
		JPSSBandI3Product.ID:   JPSSBandI3Product,
		JPSSBandI4Product.ID:   JPSSBandI4Product,
		JPSSBandI5Product.ID:   JPSSBandI5Product,
	},
	Sectors: map[string]*Sector{
		JPSSNorthernHemisphereSector.ID: JPSSNorthernHemisphereSector,
		JPSSSouthernHemisphereSector.ID: JPSSSouthernHemisphereSector,
	},
	ZoomLevels: JPSSZoomLevels,
}

// JPSSZoomLevels is the zoom level list for JPSS satellites.
var JPSSZoomLevels = []*Zoom{
	{
		Level: 0,
		Scale: "12 km",
	},
	{
		Level: 1,
		Scale: "6 km",
	},
	{
		Level: 2,
		Scale: "3 km",
	},
	{
		Level: 3,
		Scale: "1.5 km",
	},
	{
		Level: 4,
		Scale: "750 m",
	},
	{
		Level: 5,
		Scale: "375 m",
	},
	{
		Level: 6,
		Scale: "187.5 m",
	},
	{
		Level: 7,
		Scale: "93.75 m",
	},
}

// JPSS Northern Hemisphere Sector
var JPSSNorthernHemisphereSector = &Sector{
	ID:           "north",
	FriendlyName: "Northern Hemisphere",
	Value:        "northern_hemisphere",
	CellSize:     1000,
	MaxZoomLevel: 5,
}

// JPSS Southern Hemisphere Sector
var JPSSSouthernHemisphereSector = &Sector{
	ID:           "south",
	FriendlyName: "Southern Hemisphere",
	Value:        "southern_hemisphere",
	CellSize:     1000,
	MaxZoomLevel: 5,
	MissingProducts: []*Product{
		CIRANUCAPSColdAirAloftProduct,
	},
}

// JPSS Day/Night Band Product
var JPSSDayNightProduct = &Product{
	ID:           "day-night",
	FriendlyName: "Day/Night Band",
	Description:  "0.7 µm 'Low Light Visible'",
	Value:        "day_night_band",
	ZoomAdjust:   1,
}

// JPSS Band M1 Product
var JPSSBandM1Product = &Product{
	ID:           "band-m1",
	FriendlyName: "Band M1",
	Description:  "0.412 µm 'Violet-Blue'",
	Value:        "band_m01",
	ZoomAdjust:   1,
}

// JPSS Band M2 Product
var JPSSBandM2Product = &Product{
	ID:           "band-m2",
	FriendlyName: "Band M2",
	Description:  "0.445 µm 'Deep-Blue'",
	Value:        "band_m02",
	ZoomAdjust:   1,
}

// JPSS Band M3 Product
var JPSSBandM3Product = &Product{
	ID:           "band-m3",
	FriendlyName: "Band M3",
	Description:  "0.488 µm 'Blue'",
	Value:        "band_m03",
	ZoomAdjust:   1,
}

// JPSS Band M4 Product
var JPSSBandM4Product = &Product{
	ID:           "band-m4",
	FriendlyName: "Band M4",
	Description:  "0.555 µm 'Green'",
	Value:        "band_m04",
	ZoomAdjust:   1,
}

// JPSS Band M5 Product
var JPSSBandM5Product = &Product{
	ID:           "band-m5",
	FriendlyName: "Band M5",
	Description:  "0.672 µm 'Red'",
	Value:        "band_m05",
	ZoomAdjust:   1,
}

// JPSS Band M6 Product
var JPSSBandM6Product = &Product{
	ID:           "band-m6",
	FriendlyName: "Band M6",
	Description:  "0.746 µm 'Atmospheric Correction'",
	Value:        "band_m06",
	ZoomAdjust:   1,
}

// JPSS Band M7 Product
var JPSSBandM7Product = &Product{
	ID:           "band-m7",
	FriendlyName: "Band M7",
	Description:  "0.865 µm 'Veggie'",
	Value:        "band_m07",
	ZoomAdjust:   1,
}

// JPSS Band M8 Product
var JPSSBandM8Product = &Product{
	ID:           "band-m8",
	FriendlyName: "Band M8",
	Description:  "1.240 µm 'Cloud/Snow'",
	Value:        "band_m08",
	ZoomAdjust:   1,
}

// JPSS Band M9 Product
var JPSSBandM9Product = &Product{
	ID:           "band-m9",
	FriendlyName: "Band M9",
	Description:  "1.378 µm 'Cirrus'",
	Value:        "band_m09",
	ZoomAdjust:   1,
}

// JPSS Band M10 Product
var JPSSBandM10Product = &Product{
	ID:           "band-m10",
	FriendlyName: "Band M10",
	Description:  "1.61 µm 'Snow/Ice'",
	Value:        "band_m10",
	ZoomAdjust:   1,
}

// JPSS Band M11 Product
var JPSSBandM11Product = &Product{
	ID:           "band-m11",
	FriendlyName: "Band M11",
	Description:  "2.25 µm 'Cloud Particle Size'",
	Value:        "band_m11",
	ZoomAdjust:   1,
}

// JPSS Band M12 Product
var JPSSBandM12Product = &Product{
	ID:           "band-m12",
	FriendlyName: "Band M12",
	Description:  "3.7 µm 'Shortwave IR Window'",
	Value:        "band_m12",
	ZoomAdjust:   1,
}

// JPSS Band M13 Product
var JPSSBandM13Product = &Product{
	ID:           "band-m13",
	FriendlyName: "Band M13",
	Description:  "4.05 µm 'Fire Detection'",
	Value:        "band_m13",
	ZoomAdjust:   1,
}

// JPSS Band M14 Product
var JPSSBandM14Product = &Product{
	ID:           "band-m14",
	FriendlyName: "Band M14",
	Description:  "8.55 µm 'Cloud Top Phase'",
	Value:        "band_m14",
	ZoomAdjust:   1,
}

// JPSS Band M15 Product
var JPSSBandM15Product = &Product{
	ID:           "band-m15",
	FriendlyName: "Band M15",
	Description:  "10.763 µm 'Clean IR Longwave Window'",
	Value:        "band_m15",
	ZoomAdjust:   1,
}

// JPSS Band M16 Product
var JPSSBandM16Product = &Product{
	ID:           "band-m16",
	FriendlyName: "Band M16",
	Description:  "12.013 µm 'Dirty IR Longwave Window'",
	Value:        "band_m16",
	ZoomAdjust:   1,
}

// JPSS Band I1 Product
var JPSSBandI1Product = &Product{
	ID:           "band-i1",
	FriendlyName: "Band I1",
	Description:  "0.64 µm 'Red/Visible'",
	Value:        "band_i01",
	ZoomAdjust:   0,
}

// JPSS Band I2 Product
var JPSSBandI2Product = &Product{
	ID:           "band-i2",
	FriendlyName: "Band I2",
	Description:  "0.865 µm 'Veggie'",
	Value:        "band_i02",
	ZoomAdjust:   0,
}

// JPSS Band I3 Product
var JPSSBandI3Product = &Product{
	ID:           "band-i3",
	FriendlyName: "Band I3",
	Description:  "1.61 µm 'Snow/Ice'",
	Value:        "band_i03",
	ZoomAdjust:   0,
}

// JPSS Band I4 Product
var JPSSBandI4Product = &Product{
	ID:           "band-i4",
	FriendlyName: "Band I4",
	Description:  "3.74 µm 'Shortwave IR Window'",
	Value:        "band_i04",
	ZoomAdjust:   0,
}

// JPSS Band I5 Product
var JPSSBandI5Product = &Product{
	ID:           "band-i5",
	FriendlyName: "Band I5",
	Description:  "11.45 µm 'Longwave IR Window'",
	Value:        "band_i05",
	ZoomAdjust:   0,
}
