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

// Product contains all of the information for a single product captured by a weather satellite.
type Product struct {
	// ID is the shorthand string used on the command-line and in the config for this product
	ID string
	// FriendlyName is the friendly human-readable name for this product
	FriendlyName string
	// Description is a short description of the product details
	Description string
	// Value is the string sent to SLIDER for this product when requesting images
	Value string
	// ZoomAdjust is the number of zoom levels to remove from available zoom levels for this product.
	ZoomAdjust int
}

// Below are common products not specific to any single satellite system.

// CIRA GeoColor Product
var CIRAGeoColorProduct = &Product{
	ID:           "geocolor",
	FriendlyName: "GeoColor",
	Description:  "CIRA",
	Value:        "geocolor",
	ZoomAdjust:   1,
}

// CIRA Proxy Visible Product
var CIRAProxyVisibleProduct = &Product{
	ID:           "proxy-visible",
	FriendlyName: "Proxy Visible",
	Description:  "CIRA",
	Value:        "cira_proxy_visible",
}

// CIRA Shortwave Albedo Product
var CIRAShortwaveAlbedoProduct = &Product{
	ID:           "shortwave-albedo",
	FriendlyName: "Shortwave Albedo",
	Description:  "CIRA",
	Value:        "shortwave_albedo_cira",
	ZoomAdjust:   2,
}

// CIRA Dust DEBRA Product
var CIRADustDEBRAProduct = &Product{
	ID:           "debra",
	FriendlyName: "Dust - DEBRA",
	Description:  "CIRA",
	Value:        "cira_debra_dust",
	ZoomAdjust:   2,
}

// CIRA Visible Albedo Product
var CIRAVisibleAlbedoProduct = &Product{
	ID:           "visible-albedo",
	FriendlyName: "Visible Albedo",
	Description:  "CIRA",
	Value:        "visible_albedo_cira",
	ZoomAdjust:   2,
}

// CIRA Snow/Cloud Product
var CIRASnowCloudProduct = &Product{
	ID:           "snow-cloud",
	FriendlyName: "Snow/Cloud",
	Description:  "CIRA",
	Value:        "cira_cloud_snow_discriminator",
	ZoomAdjust:   1,
}

// CIRA Snow/Cloud-Layers Product
var CIRASnowCloudLayersProduct = &Product{
	ID:           "snow-cloud-layers",
	FriendlyName: "Snow/Cloud-Layers",
	Description:  "CIRA",
	Value:        "cira_high_low_cloud_and_snow",
	ZoomAdjust:   1,
}

// CIRA NUCAPS Cold Air Aloft Product
var CIRANUCAPSColdAirAloftProduct = &Product{
	ID:           "cold-air-aloft",
	FriendlyName: "NUCAPS Cold Air Aloft",
	Description:  "CIRA",
	Value:        "cira_nucaps_cold_air_aloft",
	ZoomAdjust:   2,
}

// Split Window Difference Product
var SplitWindowDifferenceProduct = &Product{
	ID:           "split-window-difference",
	FriendlyName: "Split Window Difference",
	Description:  "10.3 µm - 12.3 µm ",
	Value:        "split_window_difference_10_3-12_3",
	ZoomAdjust:   2,
}
