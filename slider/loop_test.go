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

import (
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"testing"
)

func TestLoopOptsFromURL(t *testing.T) {
	NoProductDownload = true
	var TestURI = "https://rammb-slider.cira.colostate.edu/?sat=himawari&sec=full_disk&x=11008&y=11008&z=0&angle=0&im=12&ts=1&st=0&et=0&speed=130&motion=loop&maps%5Bborders%5D=off&maps%5Bstates%5D=white&maps%5Bcities%5D=white&mops%5Bstates%5D=0.2&lat=0&p%5B0%5D=geocolor&opacity%5B0%5D=1&pause=20210408211114&slider=-1&hide_controls=0&mouse_draw=0&follow_feature=0&follow_hide=0&s=rammb-slider"
	got, err := LoopOptsFromURL(TestURI)
	require.NoError(t, err)
	assert.Equal(t, "himawari", got.Satellite.ID(), "Incorrect satellite")
	assert.Equal(t, "full-disk", got.Sector.ID(), "Incorrect sector")
	assert.Equal(t, "geocolor", got.Product.ID(), "Incorrect product")
	assert.Equal(t, ForwardLoop, got.Loop, "Incorrect loop style")
	assert.Equal(t, float64(0), got.Angle, "Incorrect angle")
	assert.Equal(t, 12, got.NumberOfImages, "Incorrect number of images")
	assert.Equal(t, 13, got.Speed, "Incorrect speed")
	assert.Equal(t, 0, got.ZoomLevel, "Incorrect zoom")
	assert.Zero(t, got.BeginTime, "Incorrect end time")
	assert.Zero(t, got.EndTime, "Incorrect end time")
}
