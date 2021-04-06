package slider

import (
	"fmt"
	"github.com/rs/zerolog/log"
	"image"
	"math"
	"path"
	"sort"
	"strconv"
	"time"
)

type LoopOptions struct {
	Satellite        *Satellite
	Sector           *Sector
	Product          *Product
	NumberOfImages   int
	TimeStep         int
	OutputDirectory  string
	AllowStaleImages bool
}

func CreateLoop(opts *LoopOptions) error {
	estimateCount := opts.NumberOfImages * opts.TimeStep / 5
	latestTimesUnfiltered, err := LatestTimes(opts.Satellite, opts.Sector, opts.Product, estimateCount)
	if err != nil {
		return fmt.Errorf("unable to get latest times: %w", err)
	}

	selectedTimes, err := SelectTimestamps(latestTimesUnfiltered, opts)
	if err != nil {
		return fmt.Errorf("unable to select timestamps: %w", err)
	}

	if opts.NumberOfImages > len(selectedTimes) {
		log.Warn().Msgf("Too many images requested -- only %d images available but %d requested. "+
			"Continuing with the maximum amount.", len(selectedTimes), opts.NumberOfImages)
	}

	var images []image.Image
	for _, timestamp := range selectedTimes {
		img, err := DownloadImage(&ImageRequest{
			Date:             timestamp.Format("20060102"),
			Satellite:        opts.Satellite.ID,
			Sector:           opts.Sector.ID,
			Product:          opts.Product.Value,
			ImageTimestamp:   timestamp.Format("20060102150405"),
			ZoomLevel:        0,
			SectionXPosition: 0,
			SectionYPosition: 0,
		})
		if err != nil {
			return fmt.Errorf("unable to download image for timestamp %d: %w", timestamp, err)
		}
		images = append(images, img)
	}
	firstTimestamp := selectedTimes[0].Format("20060102150405")
	lastTimestamp := selectedTimes[len(selectedTimes)-1].Format("20060102150405")

	animation, err := AnimateImages(images, 0)
	outPath := path.Join(opts.OutputDirectory, makeFileName(opts, firstTimestamp, lastTimestamp))
	err = SaveGIF(outPath, animation)
	if err != nil {
		return fmt.Errorf("unable to save animation: %w", err)
	}
	return nil
}

func SelectTimestamps(times []int, opts *LoopOptions) ([]time.Time, error) {
	sort.Ints(times)
	var selectedTimes []time.Time
	var count = 0
	var target time.Time
	for i, t := range times {
		timestamp, err := time.Parse("20060102150405", strconv.Itoa(t))
		if err != nil {
			return nil, fmt.Errorf("unable to parse current timestamp '%v': %v", t, err)
		}

		if !opts.AllowStaleImages && timestamp.Add(366*24*time.Hour).Before(time.Now()) {
			continue
		}

		if i+1 >= len(times) {
			// Break early from the end of the loop to prevent a look-ahead failure
			break
		}

		nextTimestamp, err := time.Parse("20060102150405", strconv.Itoa(times[i+1]))
		if err != nil {
			return nil, fmt.Errorf("unable to parse next timestamp '%v': %v", t, err)
		}
		nextDistance := int(math.Abs(target.Sub(nextTimestamp).Seconds()))
		currentDistance := int(math.Abs(target.Sub(timestamp).Seconds()))
		if nextDistance < currentDistance {
			continue
		}

		selectedTimes = append(selectedTimes, timestamp)
		target = timestamp.Add(time.Duration(opts.TimeStep) * time.Minute)
		count++
		if count >= opts.NumberOfImages {
			break
		}
	}
	log.Debug().Msgf("Selected %d timestamps from available list", len(selectedTimes))
	return selectedTimes, nil
}

func makeFileName(opts *LoopOptions, startTime string, endTime string) string {
	return fmt.Sprintf("cira-rammb-slider---%s---%s---%s---%s-%s.gif", opts.Satellite.ID, opts.Sector.ID,
		opts.Product.ID, startTime, endTime)
}
