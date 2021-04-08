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
	"fmt"
	"github.com/andybons/gogif"
	"github.com/rs/zerolog/log"
	"image"
	"image/gif"
	"os"
	"sync"
	"time"
)

// LoopStyle is the animation direction of the images, for example forward or backward.
type LoopStyle int

const (
	// ForwardLoop animates loops with images in chronological order.
	ForwardLoop LoopStyle = iota
	// ReverseLoop animates loops in reverse order from ForwardLoop
	ReverseLoop
	// RockLoop animates the loop forward first then in reverse. Note that using the RockLoop style will cause
	// animation file sizes to be nearly twice the size has a forward and reverse loops due there being twice the
	// number of frames.
	RockLoop
)

// AnimateGIF animates the supplied images into a GIF image. This will convert RGB images to a 256-color palette
// due to the GIF color limit of 256. This will likely result in some down-sampling of your image colors.
func AnimateGIF(images []image.Image, delay int, style LoopStyle) (*gif.GIF, error) {
	newGIF := new(gif.GIF)
	log.Debug().Msgf("Animating %d images", len(images))
	timeIn := time.Now()
	wg := sync.WaitGroup{}
	lock := sync.Mutex{}
	switch style {
	case RockLoop:
		newGIF.Image = make([]*image.Paletted, len(images)*2)
		newGIF.Delay = make([]int, len(images)*2)
	case ForwardLoop, ReverseLoop:
		newGIF.Image = make([]*image.Paletted, len(images))
		newGIF.Delay = make([]int, len(images))
	default:
		return nil, fmt.Errorf("unkown animation loop style: %v", style)
	}
	for i, img := range images {
		wg.Add(1)
		go func(i int, img image.Image) {
			palettedImage := image.NewPaletted(img.Bounds(), nil)
			quantizer := gogif.MedianCutQuantizer{NumColor: 256}
			quantizer.Quantize(palettedImage, img.Bounds(), img, image.Point{})
			lock.Lock()
			switch style {
			case ForwardLoop:
				newGIF.Image[len(images)-1-i] = palettedImage
				newGIF.Delay[len(images)-1-i] = delay
			case ReverseLoop:
				newGIF.Image[i] = palettedImage
				newGIF.Delay[i] = delay
			case RockLoop:
				newGIF.Image[len(images)-1-i] = palettedImage
				newGIF.Delay[len(images)-1-i] = delay
				newGIF.Image[len(images)+i] = palettedImage
				newGIF.Delay[len(images)+i] = delay
			}
			lock.Unlock()
			wg.Done()
		}(i, img)
	}
	wg.Wait()
	timeOut := time.Now()
	log.Debug().Msgf("Animation took %.3fs", timeOut.Sub(timeIn).Seconds())
	return newGIF, nil
}

// SaveGIF encodes the GIF data into a .gif file. The .gif extension will be
// added automatically. If a file with the same name exists an incrementing
// number will be appended to the end of the file name.
func SaveGIF(output string, img *gif.GIF) (string, error) {
	if fileExists(output + ".gif") {
		var ok bool
		for i := 1; i < 100; i++ {
			newName := fmt.Sprintf("%s_%02d", output, i)
			if !fileExists(newName + ".gif") {
				output = newName
				ok = true
				break
			}
		}
		if !ok {
			return "", fmt.Errorf("too many duplicate files: %s", output)
		}
	}

	f, _ := os.OpenFile(output+".gif", os.O_WRONLY|os.O_CREATE, 0644)
	defer func() { _ = f.Close() }()
	err := gif.EncodeAll(f, img)
	if err != nil {
		return "", fmt.Errorf("unable to encode GIF: %w", err)
	}
	log.Debug().Msgf("Saved GIF to '%s'", output+".gif")
	return output + ".gif", nil
}

func fileExists(filename string) bool {
	info, err := os.Stat(filename)
	if os.IsNotExist(err) {
		return false
	}
	return !info.IsDir()
}
