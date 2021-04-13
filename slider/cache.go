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
	"errors"
	"fmt"
	"image"
	"image/png"
	"net/url"
	"os"
	"path"
	"strings"
)

// ImageCache is a file system cache for image files.
type ImageCache struct {
	// Dir is the directory to store the cache in.
	Dir string
}

// Get will return the image stored in Dir at filePath or nil if that filePath doesn't exist.
func (c *ImageCache) Get(filePath string) (image.Image, error) {
	fullPath := path.Join(c.Dir, filePath)
	f, err := os.Open(fullPath)
	if errors.Is(err, os.ErrNotExist) {
		// No error and no file means the item isn't "present" in the cache.
		return nil, nil
	}
	if err != nil {
		return nil, fmt.Errorf("unable to read image bytes from cache file: %w", err)
	}
	defer func() { _ = f.Close() }()
	var im image.Image
	fileTypeParts := strings.Split(fullPath, ".")
	fileType := fileTypeParts[len(fileTypeParts)-1]
	switch fileType {
	case "png", "PNG":
		im, err = png.Decode(f)
		if err != nil {
			return nil, fmt.Errorf("unable to decode PNG file bytes: %s: %w", fullPath, err)
		}
	default:
		return nil, fmt.Errorf("unknown file type for image cache file: %s: %s", fullPath, fileType)
	}
	return im, err
}

// Delete will delete the image in Dir at filePath. No error will be returned if the file doesn't exist.
func (c *ImageCache) Delete(filePath string) error {
	fullPath := path.Join(c.Dir, filePath)
	err := os.Remove(fullPath)
	if errors.Is(err, os.ErrNotExist) {
		return nil
	}
	if err != nil {
		return fmt.Errorf("unable to delete image cache file: %s: %w", fullPath, err)
	}
	return nil
}

// Write will store an image at the file path. Write will overwrite any existing files and create missing paths
// or directories.
func (c *ImageCache) Write(filePath string, img image.Image) error {
	fullPath := path.Join(c.Dir, filePath)
	err := os.MkdirAll(path.Dir(fullPath), 0750)
	if err != nil {
		return fmt.Errorf("unable to create path for cache: %s: %w", fullPath, err)
	}

	f, err := os.OpenFile(fullPath, os.O_WRONLY|os.O_CREATE, 0600)
	if err != nil {
		return fmt.Errorf("unable to open cache file for writing: %s: %w", fullPath, err)
	}
	fileTypeParts := strings.Split(fullPath, ".")
	fileType := fileTypeParts[len(fileTypeParts)-1]
	switch fileType {
	case "png", "PNG":
		err = png.Encode(f, img)
		if err != nil {
			return fmt.Errorf("unable to encode PNG file: %s: %w", fullPath, err)
		}
	default:
		return fmt.Errorf("unknown file type for image cache file encoding: %s: %s", fullPath, fileType)
	}
	err = f.Close()
	if err != nil {
		return fmt.Errorf("unable to close file: %s: %w", fullPath, err)
	}
	return nil
}

// URLToFilePath converts a URL to a file system path by removing the URL scheme (e.g. https://) and converting
// the URL path to a file system directory path. For example 'https://example.com/a/b/c/d' will return
// 'example.com/a/b/c/d'
func URLToFilePath(urlString string) (string, error) {
	u, err := url.Parse(urlString)
	if err != nil {
		return "", fmt.Errorf("unable to parse URL: %w", err)
	}
	pathParts := strings.Split(u.Path, "/")
	return path.Join(u.Host, path.Join(pathParts...)), nil
}
