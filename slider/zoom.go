package slider

import "math"

// Zoom contains information for a single zoom level or resolution.
type Zoom struct {
	Level int
	Scale string
}

// NumCells is the number of cells along each axis of the image.
// Cell X/Y axis origin (0,0) is the upper-left-hand corner of the image.
func (z *Zoom) NumCells() int {
	return int(math.Pow(2, float64(z.Level)))
}

// GOESHimawariZoomLevels zoom level is a common zoom level list for both
// GOES and Himawari satellites.
var GOESHimawariZoomLevels = []*Zoom{
	{
		Level: 0,
		Scale: "16 km",
	},
	{
		Level: 1,
		Scale: "8 km",
	},
	{
		Level: 2,
		Scale: "4 km",
	},
	{
		Level: 3,
		Scale: "2 km",
	},
	{
		Level: 4,
		Scale: "1 km",
	},
	{
		Level: 5,
		Scale: ".5 km",
	},
	{
		Level: 6,
		Scale: ".25 km",
	},
	{
		Level: 7,
		Scale: ".125 km",
	},
}
