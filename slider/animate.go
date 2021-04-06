package slider

import (
	"fmt"
	"github.com/andybons/gogif"
	"image"
	"image/gif"
	"os"
)

func AnimateImages(images []image.Image, delay int) (*gif.GIF, error) {
	newGIF := new(gif.GIF)
	for _, img := range images {
		palettedImage := image.NewPaletted(img.Bounds(), nil)
		quantizer := gogif.MedianCutQuantizer{NumColor: 256}
		quantizer.Quantize(palettedImage, img.Bounds(), img, image.Point{})
		newGIF.Image = append([]*image.Paletted{palettedImage}, newGIF.Image...)
		newGIF.Delay = append([]int{delay}, newGIF.Delay...)
	}
	return newGIF, nil
}

func SaveGIF(output string, img *gif.GIF) error {
	f, _ := os.OpenFile(output, os.O_WRONLY|os.O_CREATE, 0644)
	defer func() { _ = f.Close() }()
	err := gif.EncodeAll(f, img)
	if err != nil {
		return fmt.Errorf("unable to encode GIF: %w", err)
	}
	return nil
}
