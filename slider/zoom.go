// Copyright (c) 2021 Colin McIntosh
// Author: Colin McIntosh (colin@colinmcintosh.com)
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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

// Below are common zoom level lists not specific to any single satellite system.

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
