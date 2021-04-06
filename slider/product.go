package slider

type Product struct {
	ID           string
	FriendlyName string
	Description  string
	Value        string
}

var Products = map[string]*Product{
	GOESBand1Product.ID: GOESBand1Product,
}

var GOESBand1Product = &Product{
	ID:           "band-1",
	FriendlyName: "Band 1",
	Description:  "0.47 µm ('Blue')",
	Value:        "band_01",
}
