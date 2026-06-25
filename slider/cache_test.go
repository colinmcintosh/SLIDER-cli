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
	"path/filepath"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestURLToFilePath(t *testing.T) {
	const url = "https://rammb-slider.cira.colostate.edu/data/imagery/20210404/jpss---northern_hemisphere/cira_geocolor/20210404215820/04/011_007.png"
	const expected = "rammb-slider.cira.colostate.edu/data/imagery/20210404/jpss---northern_hemisphere/cira_geocolor/20210404215820/04/011_007.png"
	got, err := URLToFilePath(url)
	require.NoError(t, err)
	assert.Equal(t, expected, got)
}

func TestGetWriteBytesRoundTrip(t *testing.T) {
	cache := &ImageCache{Dir: t.TempDir()}
	const key = "rammb-slider.cira.colostate.edu/data/imagery/a/b/c/000_000.png"
	want := []byte("not really a png, but raw bytes are preserved")

	// Miss before write.
	got, err := cache.GetBytes(key)
	require.NoError(t, err)
	assert.Nil(t, got)

	require.NoError(t, cache.WriteBytes(key, want))

	got, err = cache.GetBytes(key)
	require.NoError(t, err)
	assert.Equal(t, want, got)
}

func TestWriteBytesCreatesDirsAndIsAtomic(t *testing.T) {
	dir := t.TempDir()
	cache := &ImageCache{Dir: dir}
	const key = "deep/nested/path/tile.png"
	require.NoError(t, cache.WriteBytes(key, []byte("data")))

	// File exists at the expected location and no leftover temp files remain in its directory.
	matches, err := filepath.Glob(filepath.Join(dir, "deep", "nested", "path", ".tmp-*"))
	require.NoError(t, err)
	assert.Empty(t, matches, "temporary files should be renamed away")

	got, err := cache.GetBytes(key)
	require.NoError(t, err)
	assert.Equal(t, []byte("data"), got)
}
