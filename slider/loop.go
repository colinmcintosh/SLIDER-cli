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
	"github.com/disintegration/imaging"
	"github.com/rs/zerolog/log"
	"image"
	"image/color"
	"math"
	"net/url"
	"path"
	"sort"
	"strconv"
	"sync"
	"time"
)

// LoopOptions are the config options used to create a new loop.
type LoopOptions struct {
	// Satellite is the satellite to request imagery from.
	Satellite *Satellite
	// Sector is the sector to request imagery for.
	Sector *Sector
	// Product is the product to request imagery for.
	Product *Product
	// LoopStyle is the animation style of the output animation.
	Loop LoopStyle
	// NumberOfImages is the number of frames in the output animation.
	NumberOfImages int
	// Angle is the number of degrees to rotate the image.
	Angle float64
	// Speed is the interval between frames. A higher number increases the delay between frames.
	Speed int
	// ZoomLevel is the zoom level to request imagery for. Increasing ZoomLevel increases the output animation
	// resolution and therefore filesize.
	ZoomLevel int
	// TimeStep is the interval between image capture times in minutes.
	TimeStep int
	// BeginTime is the desired capture time of the first image in the loop.
	BeginTime time.Time
	// EndTime is the desired capture time of the last image in the loop.
	EndTime time.Time
	// OutputDirectory is the directory to save output animations in.
	OutputDirectory string
	// AllowStaleImages allows imagery that is over one year old to be included in animations. Disallowing this old
	// imagery by default helps to prevent old images from being accidentally included in loops.
	AllowStaleImages bool
	zoom             *Zoom
}

// CreateLoop creates a new loop with the options specified in the provided LoopOptions.
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
	animation, err := AnimateGIF(images, opts.Speed, opts.Loop)
	firstTimestamp := selectedTimes[0].Format("20060102150405")
	lastTimestamp := selectedTimes[len(selectedTimes)-1].Format("20060102150405")
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

			if opts.Angle != 0 {
				canvas = imaging.Rotate(canvas, opts.Angle, image.Transparent)
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

// SelectTimestamps selects the desired timestamps from the list of int timestamps returned by SLIDER. Timestamps
// are returned in sorted chronological order.
func SelectTimestamps(times []int, opts *LoopOptions) ([]time.Time, error) {
	var selectedTimes timeSortable
	var err error
	if !opts.BeginTime.IsZero() {
		selectedTimes, err = beginSearch(times, opts)
	} else {
		selectedTimes, err = endSearch(times, opts)
	}
	if err != nil {
		return nil, err
	}
	sort.Sort(selectedTimes) // timestamps are sorted in chronological order
	log.Debug().Msgf("Selected %d timestamps from available list", len(selectedTimes))
	return selectedTimes, nil
}

func beginSearch(times []int, opts *LoopOptions) (timeSortable, error) {
	sort.Sort(sort.IntSlice(times)) // timestamps are sorted in chronological order
	var selectedTimes timeSortable
	var count = 0
	var target = opts.BeginTime
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

		log.Debug().Msgf("Including %v", timestamp)
		selectedTimes = append(selectedTimes, timestamp)
		target = timestamp.Add(time.Duration(opts.TimeStep) * time.Minute)
		count++
		if count >= opts.NumberOfImages {
			break
		}
	}
	return selectedTimes, nil
}

func endSearch(times []int, opts *LoopOptions) (timeSortable, error) {
	sort.Sort(sort.Reverse(sort.IntSlice(times))) // timestamps are sorted in reverse chronological order
	var selectedTimes timeSortable
	var count = 0
	var target = opts.EndTime
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

		log.Debug().Msgf("Including %v", timestamp)
		selectedTimes = append(selectedTimes, timestamp)
		target = timestamp.Add(-1 * time.Duration(opts.TimeStep) * time.Minute)
		count++
		if count >= opts.NumberOfImages {
			break
		}
	}
	return selectedTimes, nil
}

type timeSortable []time.Time

func (s timeSortable) Less(i, j int) bool { return s[i].Before(s[j]) }
func (s timeSortable) Swap(i, j int)      { s[i], s[j] = s[j], s[i] }
func (s timeSortable) Len() int           { return len(s) }

func makeFileName(opts *LoopOptions, startTime string, endTime string) string {
	return fmt.Sprintf("cira-rammb-slider_%s_%s_%s_%dx%d_%s-%s",
		opts.Satellite.ID, opts.Sector.ID, opts.Product.ID, opts.Sector.XSize(opts.zoom), opts.Sector.YSize(opts.zoom),
		startTime, endTime)
}

func LoopOptsFromURL(uri string) (*LoopOptions, error) {
	u, err := url.Parse(uri)
	if err != nil {
		return nil, fmt.Errorf("unable to parse URL: %w", err)
	}
	data, err := url.ParseQuery(u.RawQuery)
	if err != nil {
		return nil, fmt.Errorf("unable to parse URL query parameters: %w", err)
	}

	var satellite *Satellite
	if data.Get("sat") != "" {
		for _, s := range Satellites {
			if s.Value == data.Get("sat") {
				satellite = s
			}
		}
	}
	if satellite == nil {
		return nil, fmt.Errorf("unable to parse satellite from URL: '%s'", data.Get("sat"))
	}

	var sector *Sector
	if data.Get("sec") != "" {
		for _, c := range satellite.Sectors {
			if c.Value == data.Get("sec") {
				sector = c
			}
		}
	}
	if sector == nil {
		return nil, fmt.Errorf("unable to parse sector from URL: '%s'", data.Get("sec"))
	}

	var product *Product
	if data.Get("p[0]") != "" {
		for _, p := range satellite.Products {
			if p.Value == data.Get("p[0]") {
				product = p
			}
		}
	}
	if product == nil {
		return nil, fmt.Errorf("unable to parse product from URL: '%s'", data.Get("p[0]"))
	}

	var loop LoopStyle
	switch data.Get("motion") {
	case "loop":
		loop = ForwardLoop
	case "rev":
		loop = ReverseLoop
	case "rock":
		loop = RockLoop
	default:
		return nil, fmt.Errorf("unable to parse loop style: '%s'", data.Get("motion"))
	}

	count, err := strconv.Atoi(data.Get("im"))
	if err != nil {
		return nil, fmt.Errorf("unable to parse image count: '%s'", data.Get("im"))
	}

	angle, err := strconv.Atoi(data.Get("angle"))
	if err != nil {
		return nil, fmt.Errorf("unable to parse angle: '%s'", data.Get("angle"))
	}

	zoom, err := strconv.Atoi(data.Get("z"))
	if err != nil {
		return nil, fmt.Errorf("unable to parse zoom: '%s'", data.Get("z"))
	}

	speed, err := strconv.Atoi(data.Get("speed"))
	if err != nil {
		return nil, fmt.Errorf("unable to parse zoom: '%s'", data.Get("z"))
	}
	speed = speed / 10

	var beginTime time.Time
	if i, _ := strconv.Atoi(data.Get("st")); i > 0 {
		beginTime, err = time.Parse("20060102150405", data.Get("st"))
		if err != nil {
			return nil, fmt.Errorf("unable to parse begin time: '%s'", data.Get("st"))
		}
	}
	var endTime time.Time
	if i, _ := strconv.Atoi(data.Get("et")); i > 0 {
		endTime, err = time.Parse("20060102150405", data.Get("et"))
		if err != nil {
			return nil, fmt.Errorf("unable to parse begin time: '%s'", data.Get("et"))
		}
	}

	return &LoopOptions{
		Satellite:      satellite,
		Sector:         sector,
		Product:        product,
		Loop:           loop,
		Angle:          float64(angle),
		NumberOfImages: count,
		Speed:          speed,
		ZoomLevel:      zoom,
		BeginTime:      beginTime,
		EndTime:        endTime,
	}, nil
}
