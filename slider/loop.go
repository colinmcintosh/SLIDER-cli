package slider

import (
	"fmt"
	"image"
	"path"
)

type LoopOptions struct {
	Satellite       *Satellite
	Sector          *Sector
	Product         *Product
	NumberOfImages  int
	TimeStep        int
	OutputDirectory string
}

func CreateLoop(opts *LoopOptions) error {
	latestTimes, err := LatestTimes(opts.Satellite, opts.Sector, opts.Product)
	if err != nil {
		return fmt.Errorf("unable to get latest times: %w", err)
	}

	if opts.NumberOfImages > len(latestTimes) {
		return fmt.Errorf("too many images requested -- only %d images available but %d requested",
			len(latestTimes), opts.NumberOfImages)
	}

	var images []image.Image
	for i := 0; i < opts.NumberOfImages; i++ {
		timestamp := latestTimes[i]
		date := timestamp / 1000000
		img, err := DownloadImage(&ImageRequest{
			Date:             date,
			Satellite:        opts.Satellite.ID,
			Sector:           opts.Sector.ID,
			Product:          opts.Product.Value,
			ImageTimestamp:   timestamp,
			ZoomLevel:        0,
			SectionXPosition: 0,
			SectionYPosition: 0,
		})
		if err != nil {
			return fmt.Errorf("unable to download image for timestamp %d: %w", timestamp, err)
		}
		images = append(images, img)
	}

	animation, err := AnimateImages(images, 0)
	outPath := path.Join(opts.OutputDirectory, makeFileName(opts, latestTimes[0], latestTimes[opts.NumberOfImages-1]))
	err = SaveGIF(outPath, animation)
	if err != nil {
		return fmt.Errorf("unable to save animation: %w", err)
	}
	return nil
}

func makeFileName(opts *LoopOptions, startTime int, endTime int) string {
	return fmt.Sprintf("cira-rammb-slider---%s---%s---%s---%d-%d.gif", opts.Satellite.ID, opts.Sector.ID,
		opts.Product.ID, startTime, endTime)
}
