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

// Meteosat8Satellite is the Meteosat-8 Satellite
var Meteosat8Satellite = &Satellite{
	ID:           "meteosat-8",
	FriendlyName: "Meteosat-8",
	Description:  "Middle East, 42.0E",
	Value:        "meteosat-8",
	Products: map[string]*Product{
		CIRAGeoColorProduct.ID:          CIRAGeoColorProduct,
		SplitWindowDifferenceProduct.ID: SplitWindowDifferenceProduct,
	},
	Sectors: map[string]*Sector{
		MeteosatFullDiskSector.ID: MeteosatFullDiskSector,
	},
	ZoomLevels: MeteosatZoomLevels,
}

// Meteosat11Satellite is the Meteosat-11 Satellite
var Meteosat11Satellite = &Satellite{
	ID:           "meteosat-11",
	FriendlyName: "Meteosat-11",
	Description:  "0.0",
	Value:        "meteosat-11",
	Products: map[string]*Product{
		CIRAGeoColorProduct.ID:          CIRAGeoColorProduct,
		SplitWindowDifferenceProduct.ID: SplitWindowDifferenceProduct,
	},
	Sectors: map[string]*Sector{
		MeteosatFullDiskSector.ID: MeteosatFullDiskSector,
	},
	ZoomLevels: MeteosatZoomLevels,
}

// MeteosatZoomLevels is the zoom level list for Meteosat satellites.
var MeteosatZoomLevels = []*Zoom{
	{
		Level: 0,
		Scale: "24 km",
	},
	{
		Level: 1,
		Scale: "12 km",
	},
	{
		Level: 2,
		Scale: "6 km",
	},
	{
		Level: 3,
		Scale: "3 km",
	},
	{
		Level: 4,
		Scale: "1.5 km",
	},
	{
		Level: 5,
		Scale: ".75 km",
	},
}

// MeteosatFullDiskSector is the Meteosat Full Disk Sector
var MeteosatFullDiskSector = &Sector{
	ID:           "fd",
	FriendlyName: "Full Disk",
	Value:        "full_disk",
	CellSize:     464,
	MaxZoomLevel: 3,
	MissingProducts: []*Product{
		SplitWindowDifferenceProduct,
	},
}
