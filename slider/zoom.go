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

// NumTiles is the number of tiles along each axis of the image.
// Tile X/Y axis origin (0,0) is the upper-left-hand corner of the image.
func (z *Zoom) NumTiles() int {
	return int(math.Pow(2, float64(z.Level)))
}
