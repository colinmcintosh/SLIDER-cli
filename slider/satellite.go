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

// GOES 16 Satellite
var GOES16Satellite = &Satellite{
	ID:           "goes-16",
	FriendlyName: "GOES-16",
	Description:  "East, 75.2W",
	Value:        "goes-16",
	Products: []*Product{
		GOESBand1Product,
		CIRAGeoColorProduct,
	},
	Sectors: []*Sector{
		GOESFullDiskSector,
		GOESCONUSSector,
		GOESMesoscale1Sector,
		GOESMesoscale2Sector,
	},
	ZoomLevels: GOESHimawariZoomLevels,
}

// GOES 17 Satellite
var GOES17Satellite = &Satellite{
	ID:           "goes-17",
	FriendlyName: "GOES-17",
	Description:  "West, 137.2W",
	Value:        "goes-17",
	Products: []*Product{
		GOESBand1Product,
		CIRAGeoColorProduct,
	},
	Sectors: []*Sector{
		GOESFullDiskSector,
		GOESCONUSSector,
		GOESMesoscale1Sector,
		GOESMesoscale2Sector,
	},
	ZoomLevels: GOESHimawariZoomLevels,
}
