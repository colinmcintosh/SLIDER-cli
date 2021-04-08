package slider

// Sector contains all of the information for a single sector captured by a weather satellite.
type Sector struct {
	// ID is the shorthand string used on the command-line and in the config
	ID string
	// FriendlyName is a longer string with a human-readable name for the sector
	FriendlyName string
	// Value is the string for this sector sent to SLIDER when requesting images
	Value string
	// CellSize is the size of each cell tile in pixels
	CellSize int
	// CropRatioX is the amount to crop the image on the X-axis from 0 to 1
	CropRatioX float32
	// CropRatioY is the amount to crop the image on the X-axis from 0 to 1
	CropRatioY float32
	// MaxZoomLevel is the max zoom level or resolution that this is available for this sector.
	MaxZoomLevel int
	// MissingProducts is a list of satellite products that are unavailable for this sector (typically due to the lack
	// of data availability).
	MissingProducts []*Product
}

func (s *Sector) ProductMissing(product *Product) bool {
	for _, missing := range s.MissingProducts {
		if product == missing {
			return true
		}
	}
	return false
}

// XSize is the number of pixels along the X-axis after the image is cropped
func (s *Sector) XSize(zoom *Zoom) int {
	if s.CropRatioX > 0 {
		return int(float32(zoom.NumCells()*s.CellSize) * s.CropRatioX)
	} else {
		return zoom.NumCells() * s.CellSize
	}
}

// YSize is the number of pixels along the Y-axis after the image is cropped
func (s *Sector) YSize(zoom *Zoom) int {
	if s.CropRatioY > 0 {
		return int(float32(zoom.NumCells()*s.CellSize) * s.CropRatioY)
	} else {
		return zoom.NumCells() * s.CellSize
	}
}

// Sectors contains all of the available and included sectors for all satellites.
var Sectors = map[string]*Sector{
	GOESCONUSSector.ID: GOESCONUSSector,
}

var GOESCONUSSector = &Sector{
	ID:              "conus",
	FriendlyName:    "CONUS",
	Value:           "conus",
	CellSize:        625,
	CropRatioX:      0,
	CropRatioY:      .6,
	MaxZoomLevel:    4,
	MissingProducts: []*Product{},
}

var GOESFullDiskSector = &Sector{
	ID:           "fd",
	FriendlyName: "Full Disk",
	Value:        "full-disk",
}
