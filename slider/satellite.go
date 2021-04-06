package slider

type Satellite struct {
	// ID is the value sent in the request to SLIDER
	ID string
	// FriendlyName is the friendly human-readable name for the satellite
	FriendlyName string
	// Description is a short description of the satellite details
	Description string
	// SectorProducts contains a mapping of available sectors for this Satellite and Products available for each Sector.
	SectorProducts map[*Sector][]*Product
}

func (s *Satellite) ValidSector(sector *Sector) bool {
	if s.SectorProducts == nil {
		return false
	}
	_, ok := s.SectorProducts[sector]
	return ok
}

func (s *Satellite) ValidSectorProduct(sector *Sector, product *Product) bool {
	if s.SectorProducts == nil {
		return false
	}
	products, ok := s.SectorProducts[sector]
	if !ok {
		return false
	}
	for _, p := range products {
		if p == product {
			return true
		}
	}
	return false
}

var Satellites = map[string]*Satellite{
	GOES16Satellite.ID: GOES16Satellite,
}

var GOES16Satellite = &Satellite{
	ID:           "goes-16",
	FriendlyName: "GOES-16",
	Description:  "East, 75.2W",
	SectorProducts: map[*Sector][]*Product{
		GOESCONUSSector: {
			GOESBand1Product,
			GeoColorProduct,
		},
	},
}
