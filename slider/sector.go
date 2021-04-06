package slider

type Sector struct {
	ID           string
	FriendlyName string
}

var Sectors = map[string]*Sector{
	GOESCONUSSector.ID: GOESCONUSSector,
}

var GOESCONUSSector = &Sector{
	ID:           "conus",
	FriendlyName: "CONUS",
}
