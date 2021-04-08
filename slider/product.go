package slider

type Product struct {
	ID           string
	FriendlyName string
	Description  string
	Value        string
	// ZoomAdjust is the number of zoom levels to remove from available zoom levels for this product.
	ZoomAdjust int
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
