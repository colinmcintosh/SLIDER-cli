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

func AnimateImages(images []image.Image, delay int, style LoopStyle) (*gif.GIF, error) {
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
				newGIF.Image[i] = palettedImage
				newGIF.Delay[i] = delay
			case ReverseLoop:
				newGIF.Image[len(images)-1-i] = palettedImage
				newGIF.Delay[len(images)-1-i] = delay
			case RockLoop:
				newGIF.Image[i] = palettedImage
				newGIF.Delay[i] = delay
				newGIF.Image[(len(images)*2)-1-i] = palettedImage
				newGIF.Delay[(len(images)*2)-1-i] = delay
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

func SaveGIF(output string, img *gif.GIF) error {
	f, _ := os.OpenFile(output, os.O_WRONLY|os.O_CREATE, 0644)
	defer func() { _ = f.Close() }()
	err := gif.EncodeAll(f, img)
	if err != nil {
		return fmt.Errorf("unable to encode GIF: %w", err)
	}
	log.Debug().Msgf("Saved GIF to '%s'", output)
	return nil
}
