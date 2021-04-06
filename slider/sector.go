package slider

type Sector struct {
	ID           string
	FriendlyName string
	ZoomLevels   []Zoom
}

var Sectors = map[string]*Sector{
	GOESCONUSSector.ID: GOESCONUSSector,
}

var GOESCONUSSector = &Sector{
	ID:           "conus",
	FriendlyName: "CONUS",
	ZoomLevels: []Zoom{
		{
			Level:     0,
			XCells:    1,
			YCells:    1,
			CellSizeX: 625,
			CellSizeY: 625,
			CropX:     625,
			CropY:     375,
		},
		{
			Level:     1,
			XCells:    2,
			YCells:    2,
			CellSizeX: 625,
			CellSizeY: 625,
			CropX:     1250,
			CropY:     750,
		},
		{
			Level:     2,
			XCells:    4,
			YCells:    4,
			CellSizeX: 625,
			CellSizeY: 625,
			CropX:     2500,
			CropY:     1500,
		},
		{
			Level:     3,
			XCells:    8,
			YCells:    8,
			CellSizeX: 625,
			CellSizeY: 625,
			CropX:     5000,
			CropY:     3000,
		},
	},
}
