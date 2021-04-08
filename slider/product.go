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

// Products contains all of the available and included products.
var Products = map[string]*Product{
	GOESBand1Product.ID:    GOESBand1Product,
	CIRAGeoColorProduct.ID: CIRAGeoColorProduct,
}

// GOES Band 1 Product
var GOESBand1Product = &Product{
	ID:           "band-1",
	FriendlyName: "Band 1",
	Description:  "0.47 µm 'Blue'",
	Value:        "band_01",
}

// CIRA GeoColor Product
var CIRAGeoColorProduct = &Product{
	ID:           "geocolor",
	FriendlyName: "GeoColor",
	Description:  "CIRA",
	Value:        "geocolor",
}
