package slider

import (
	"fmt"
	"github.com/disintegration/imaging"
	"github.com/rs/zerolog/log"
	"image"
	"image/color"
	"math"
	"path"
	"sort"
	"strconv"
	"sync"
	"time"
)

type LoopOptions struct {
	Satellite        *Satellite
	Sector           *Sector
	Product          *Product
	Loop             LoopStyle
	NumberOfImages   int
	Speed            int
	ZoomLevel        int
	TimeStep         int
	OutputDirectory  string
	AllowStaleImages bool
	zoom             *Zoom
}

type LoopStyle int

const (
	ForwardLoop LoopStyle = iota
	ReverseLoop
	RockLoop
)

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

	if (opts.Sector.MaxZoomLevel - opts.Product.ZoomAdjust) < opts.ZoomLevel {
		return fmt.Errorf("ZoomLevel %d is greater than sector or product max of %d",
			opts.ZoomLevel, opts.Sector.MaxZoomLevel-opts.Product.ZoomAdjust)
	}

	opts.zoom = opts.Satellite.ZoomLevels[opts.ZoomLevel]

	// Download Images
	images, err := downloadImages(opts, selectedTimes)
	if err != nil {
		return fmt.Errorf("unable to download images: %w", err)
	}

	// Animate
	animation, err := AnimateImages(images, opts.Speed, opts.Loop)
	lastTimestamp := selectedTimes[0].Format("20060102150405")
	firstTimestamp := selectedTimes[len(selectedTimes)-1].Format("20060102150405")
	outPath := path.Join(opts.OutputDirectory, makeFileName(opts, firstTimestamp, lastTimestamp))
	_, err = SaveGIF(outPath, animation)
	if err != nil {
		return fmt.Errorf("unable to save animation: %w", err)
	}
	return nil
}

func downloadImages(opts *LoopOptions, selectedTimes []time.Time) ([]image.Image, error) {
	timeIn := time.Now()
	images := make([]image.Image, len(selectedTimes))
	lock := sync.Mutex{}
	wg := sync.WaitGroup{}
	errChan := make(chan error)
	for i, timestamp := range selectedTimes {
		wg.Add(1)
		go func(timestamp time.Time, i int) {
			//log.Debug().Msgf("Building canvas %dx%d", zoom.CellSizeX*zoom.XCells, zoom.CellSizeY*zoom.YCells)
			canvas := imaging.New(opts.Sector.CellSize*opts.zoom.NumCells(), opts.Sector.CellSize*opts.zoom.NumCells(), color.NRGBA{})
			for x := 0; x < opts.zoom.NumCells(); x++ {
				for y := 0; y < opts.zoom.NumCells(); y++ {
					cell, err := DownloadImage(&ImageRequest{
						Date:             timestamp.Format("20060102"),
						Satellite:        opts.Satellite.Value,
						Sector:           opts.Sector.Value,
						Product:          opts.Product.Value,
						ImageTimestamp:   timestamp.Format("20060102150405"),
						ZoomLevel:        opts.ZoomLevel,
						SectionXPosition: x,
						SectionYPosition: y,
					})
					if err != nil {
						errChan <- fmt.Errorf("unable to download image for timestamp %v: %w", timestamp, err)
					}
					canvas = imaging.Paste(canvas, cell, image.Pt(x*opts.Sector.CellSize, y*opts.Sector.CellSize))
				}
			}
			if opts.Sector.CropRatioX > 0 && opts.Sector.CropRatioY > 0 {
				canvas = imaging.CropAnchor(canvas, opts.Sector.XSize(opts.zoom), opts.Sector.YSize(opts.zoom), imaging.Center)
			}
			lock.Lock()
			images[i] = canvas
			lock.Unlock()
			wg.Done()
		}(timestamp, i)
	}

	waitChan := make(chan bool)
	go func() {
		wg.Wait()
		close(waitChan)
	}()

	select {
	case <-waitChan:
		break
	case err := <-errChan:
		return nil, err
	}
	timeOut := time.Now()
	log.Debug().Msgf("Download took %.3fs", timeOut.Sub(timeIn).Seconds())
	return images, nil
}

func SelectTimestamps(times []int, opts *LoopOptions) ([]time.Time, error) {
	sort.Sort(sort.Reverse(sort.IntSlice(times)))
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
	return fmt.Sprintf("cira-rammb-slider_%s_%s_%s_%dx%d_%s-%s",
		opts.Satellite.ID, opts.Sector.ID, opts.Product.ID, opts.Sector.XSize(opts.zoom), opts.Sector.YSize(opts.zoom),
		startTime, endTime)
}
