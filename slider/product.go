package slider

type Product struct {
	ID           string
	FriendlyName string
	Description  string
	Value        string
}

var Products = map[string]*Product{
	GOESBand1Product.ID: GOESBand1Product,
	GeoColorProduct.ID:  GeoColorProduct,
}

var GOESBand1Product = &Product{
	ID:           "band-1",
	FriendlyName: "Band 1",
	Description:  "0.47 µm ('Blue')",
	Value:        "band_01",
}

var GeoColorProduct = &Product{
	ID:           "geocolor",
	FriendlyName: "GeoColor",
	Description:  "GeoColor (CIRA)",
	Value:        "geocolor",
}
