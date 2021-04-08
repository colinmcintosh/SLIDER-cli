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

func (z *Zoom) XSize() int {
	if z.CropX > 0 {
		return z.CropX
	} else {
		return z.XCells * z.CellSizeX
	}
}

func (z *Zoom) YSize() int {
	if z.CropY > 0 {
		return z.CropY
	} else {
		return z.YCells * z.CellSizeY
	}
}
