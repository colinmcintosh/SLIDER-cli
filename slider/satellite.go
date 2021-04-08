package slider

import "math"

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
	// Sectors contains a list of available sectors for this Satellite .
	Sectors []*Sector
	// Products contains a list of available products for this satellite.
	Products []*Product
	// ZoomLevels is the list of available zoom levels or resolutions for this satellite
	ZoomLevels []*Zoom
}

// ValidSector returns true if the provided sector is available for this satellite.
func (s *Satellite) ValidSector(sector *Sector) bool {
	if s.Sectors == nil {
		return false
	}
	for _, c := range s.Sectors {
		if c == sector {
			return true
		}
	}
	return false
}

// ValidProduct returns true if the provided product is available for this satellite.
func (s *Satellite) ValidProduct(product *Product) bool {
	if s.Products == nil {
		return false
	}
	for _, p := range s.Products {
		if p == product {
			return true
		}
	}
	return false
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
	GOES16Satellite.ID: GOES16Satellite,
	GOES17Satellite.ID: GOES17Satellite,
}

// Zoom contains information for a single zoom level or resolution.
type Zoom struct {
	Level int
	Scale string
}

// NumCells is the number of cells along each axis of the image.
// Cell X/Y axis origin (0,0) is the upper-left-hand corner of the image.
func (z *Zoom) NumCells() int {
	return int(math.Pow(2, float64(z.Level)))
}

var GOES16Satellite = &Satellite{
	ID:           "goes-16",
	FriendlyName: "GOES-16",
	Description:  "East, 75.2W",
	Value:        "goes-16",
	Products: []*Product{
		GOESBand1Product,
		GeoColorProduct,
	},
	Sectors: []*Sector{
		GOESFullDiskSector,
		GOESCONUSSector,
	},
	ZoomLevels: []*Zoom{
		{
			Level: 0,
			Scale: "16 km",
		},
		{
			Level: 1,
			Scale: "8 km",
		},
		{
			Level: 2,
			Scale: "4 km",
		},
		{
			Level: 3,
			Scale: "2 km",
		},
		{
			Level: 4,
			Scale: "1 km",
		},
		{
			Level: 5,
			Scale: ".5 km",
		},
		{
			Level: 6,
			Scale: ".25 km",
		},
		{
			Level: 7,
			Scale: ".125 km",
		},
	},
}

var GOES17Satellite = &Satellite{
	ID:           "goes-17",
	FriendlyName: "GOES-17",
	Description:  "West, 137.2W",
	Value:        "goes-17",
}
