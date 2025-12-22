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
	"testing"

	"github.com/stretchr/testify/require"
)

func TestParseProductsJS(t *testing.T) {
	inventory, err := ParseProductsJS(BackupProductsJS)
	require.NoError(t, err)
	require.NotNil(t, inventory)
	require.NotEmptyf(t, inventory.Satellites, "list of satellites should not be empty in define-products.js")
	require.Equal(t, "GOES-19 (East; 75.2W)", inventory.Satellites["goes-19"].SatelliteTitle)
}
