package slider

// Cell X/Y axis origin (0,0) is the upper-left-hand corner of the image.
type Zoom struct {
	Level     int
	XCells    int
	YCells    int
	CellSizeX int
	CellSizeY int
	CropX     int
	CropY     int
}
