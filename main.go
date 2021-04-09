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

package main

import (
	"fmt"
	"github.com/colinmcintosh/slider-cli/slider"
	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"
	"github.com/spf13/pflag"
	"github.com/spf13/viper"
	"os"
	"os/signal"
	"runtime"
	"sort"
	"strconv"
	"syscall"
	"time"
)

var Version = "develop"
var BuildTime = "develop"

func ParseFlags() {
	pflag.Bool("date-list", false, "Print a list of available dates")
	pflag.Bool("satellite-list", false, "Print a list of available satellites")
	pflag.Bool("sector-list", false, "Print a list of available satellite sectors")
	pflag.Bool("product-list", false, "Print a list of available satellite products")
	pflag.Bool("zoom-list", false, "Print a list of available zoom levels for satellite sectors")

	pflag.StringP("satellite", "s", "", "Satellite to request imagery for. "+
		"See --satellite-list for the full list. (Example: goes-17)")
	pflag.StringP("sector", "c", "", "Satellite sector to request imagery for. "+
		"See --sector-list for the full list. (Example: conus)")
	pflag.StringP("product", "p", "", "Satellite product to request imagery for. "+
		"See --product-list for the full list. (Example: geocolor)")
	pflag.IntP("zoom", "z", 1, "Zoom level (changes resolution). "+
		"See --zoom-list for the full list of allowed zoom levels.")
	pflag.IntP("image-count", "i", 6, "Number of images in the loop.")
	pflag.IntP("time-step", "t", 5, "Desired interval of image capture times in minutes.")
	pflag.StringP("begin", "b", "", "Desired image capture time of the first image in the "+
		"loop. Use the timestamp format YYYYMMDDhhmmss. This flag cannot be used with --end.")
	pflag.StringP("end", "e", "", "Desired image capture time of the last image in the "+
		"loop. Use the timestamp format YYYYMMDDhhmmss. This flag cannot be used with --begin.")
	pflag.Int("speed", 15, "Desired frame rate in 100ths of a second. The lowest value accepted is 1.")
	pflag.StringP("loop", "l", "forward", "Loop style. Options are 'forward', 'reverse', "+
		"or 'rock'. Note that using 'rock' will nearly double the output animation file size.")
	pflag.String("decode", "", "Decode a SLIDER URL into a loop config and create an animation. "+
		"You must supply --time-step as well as that can't be decoded from the URL.")

	pflag.Bool("help", false, "Print help dialog.")
	pflag.Bool("help-wrapped", false, "Print help dialog with text wrapped.")
	_ = pflag.CommandLine.MarkHidden("help-wrapped")
	pflag.BoolP("verbose", "v", false, "Enable verbose output.")
	pflag.BoolP("version", "V", false, "Print version and exit.")
	pflag.StringP("dir", "d", ".", "Output filename to save rendered animation in.")
	pflag.StringP("output", "o", "", "Output filename to save rendered animation in. "+
		"(default auto-generated)")
	pflag.Bool("allow-stale", false, "Allow imagery more than a year old -- filtering these images out"+
		"helps eliminate issues with loops containing old data.")

	pflag.CommandLine.SetOutput(os.Stdout)
	pflag.Usage = func() {
		helpText(false)
	}
	pflag.ErrHelp = nil
	pflag.Parse()
}

func helpText(wrapped bool) {
	_, _ = fmt.Fprintf(os.Stdout, "slider-cli version %s (Built %s)\n\n", Version, BuildTime)
	_, _ = fmt.Fprintf(os.Stdout, "Usage:\n")
	if wrapped {
		_, _ = fmt.Fprintf(os.Stdout, "%s\n", pflag.CommandLine.FlagUsagesWrapped(100))
	} else {
		pflag.PrintDefaults()
	}
	_, _ = fmt.Fprintf(os.Stdout, "\nUsage Examples:\n")
	_, _ = fmt.Fprintf(os.Stdout, "    ./slider-cli --satellite-list\n")
	_, _ = fmt.Fprintf(os.Stdout, "    ./slider-cli --sector-list --satellite=goes-16\n")
	_, _ = fmt.Fprintf(os.Stdout, "    ./slider-cli --satellite=goes-16 --sector=conus --product=geocolor -z=2\n")
	_, _ = fmt.Fprintf(os.Stdout, "    ./slider-cli --satellite=goes-16 --sector=conus --product=band-1 -i=20 -t=10\n\n")
}

func LoadConfig() (*viper.Viper, error) {
	v := viper.New()

	// Flags
	ParseFlags()
	err := v.BindPFlags(pflag.CommandLine)
	if err != nil {
		return nil, fmt.Errorf("unable to bind flags to config: %w", err)
	}

	return v, nil
}

func main() {
	writer := zerolog.ConsoleWriter{
		Out: os.Stderr,
	}
	if runtime.GOOS != "linux" {
		writer.NoColor = true
	}
	log.Logger = log.Output(writer)
	zerolog.SetGlobalLevel(zerolog.WarnLevel)

	var deferred []func()
	c := make(chan os.Signal, 2)
	signal.Notify(c, os.Interrupt, syscall.SIGTERM)
	go func() {
		<-c
		log.Debug().Msg("Ctrl^C pressed.")
		for _, deferredFunc := range deferred {
			deferredFunc()
		}
		log.Debug().Msg("Exit.")
		os.Exit(0)
	}()

	config, err := LoadConfig()
	if err != nil {
		log.Fatal().Msgf("unable to load config: %v", err)
	}
	if config.GetBool("verbose") {
		zerolog.SetGlobalLevel(zerolog.DebugLevel)
	}
	if config.GetBool("help") {
		pflag.Usage()
		os.Exit(0)
	}
	if config.GetBool("help-wrapped") {
		helpText(true)
		os.Exit(0)
	}
	if config.GetBool("version") {
		fmt.Println(fmt.Sprintf("slider-cli version %s (Built %s)",
			Version, BuildTime))
		os.Exit(0)
	}

	handleFlags(config)
}

func handleFlags(config *viper.Viper) {
	if config.GetString("decode") != "" {
		opts, err := slider.LoopOptsFromURL(config.GetString("decode"))
		if err != nil {
			log.Fatal().Msgf("unable to create loop opts from URL: %v", err)
		}
		opts.OutputDirectory = config.GetString("dir")
		opts.TimeStep = config.GetInt("time-step")

		err = slider.CreateLoop(opts)
		if err != nil {
			log.Fatal().Msgf("unable to create loop from decoded URL: %v", err)
		}
		os.Exit(0)
	}

	if config.GetBool("satellite-list") {
		fmt.Println("Available Satellites")
		keys := make([]string, 0, len(slider.Satellites))
		for k := range slider.Satellites {
			keys = append(keys, k)
		}
		sort.Strings(keys)
		for _, k := range keys {
			satellite := slider.Satellites[k]
			fmt.Println(fmt.Sprintf("%20s = %s (%s)", satellite.ID, satellite.FriendlyName, satellite.Description))
		}
		os.Exit(0)
	}

	var satellite *slider.Satellite
	if id := config.GetString("satellite"); id != "" {
		satellite = slider.Satellites[id]
		if satellite == nil {
			log.Fatal().Msgf("'%s' is not a valid satellite."+
				"Check --satellite-list for the available options.", id)
		}
	}

	if config.GetBool("sector-list") {
		if satellite == nil {
			log.Fatal().Msg("You must set --satellite first to list available sectors.")
			os.Exit(1)
		}
		keys := make([]string, 0, len(satellite.Sectors))
		for k := range satellite.Sectors {
			keys = append(keys, k)
		}
		sort.Strings(keys)
		fmt.Println(fmt.Sprintf("Available Sectors on Satellite %s", satellite.FriendlyName))
		for _, k := range keys {
			sector := satellite.Sectors[k]
			fmt.Println(fmt.Sprintf("%20s = %s", sector.ID, sector.FriendlyName))
		}
		os.Exit(0)
	}

	var sector *slider.Sector
	if id := config.GetString("sector"); id != "" {
		if satellite == nil {
			log.Fatal().Msg("You must set --satellite first to select a sector.")
			os.Exit(1)
		}
		sector = satellite.Sectors[id]
		if sector == nil {
			log.Fatal().Msgf("'%s' is not a valid sector for the '%s' satellite. "+
				"Check --sector-list for the available options.", id, satellite.ID)
		}
	}

	if config.GetBool("zoom-list") {
		if satellite == nil || sector == nil {
			log.Fatal().Msg("You must set --satellite and --sector first to list available zoom levels.")
			os.Exit(1)
		}
		fmt.Println(fmt.Sprintf("Zoom Levels for Sector %s on Satellite %s",
			sector.FriendlyName, satellite.FriendlyName))
		for _, zoom := range satellite.ZoomLevels {
			if zoom.Level > sector.MaxZoomLevel {
				continue
			}
			fmt.Println(fmt.Sprintf("%5d = %dpx x %dpx", zoom.Level, sector.XSize(zoom), sector.YSize(zoom)))
		}
		os.Exit(0)
	}

	if config.GetBool("product-list") {
		if satellite == nil || sector == nil {
			log.Fatal().Msg("You must set --satellite and --sector first to list available products.")
			os.Exit(1)
		}
		keys := make([]string, 0, len(satellite.Products))
		for k := range satellite.Products {
			keys = append(keys, k)
		}
		sort.Strings(keys)

		fmt.Println(fmt.Sprintf("Available Products for Sector %s on Satellite %s",
			sector.FriendlyName, satellite.FriendlyName))

		for _, k := range keys {
			product := satellite.Products[k]
			if sector.ProductMissing(product) {
				continue
			}
			fmt.Println(fmt.Sprintf("%30s = %s (%s)", product.ID, product.FriendlyName, product.Description))
		}
		os.Exit(0)
	}

	var product *slider.Product
	if id := config.GetString("product"); id != "" {
		if satellite == nil || sector == nil {
			log.Fatal().Msg("You must set --satellite and --sector first to select a product. ")
			os.Exit(1)
		}
		product = satellite.Products[id]
		if product == nil || sector.ProductMissing(product) {
			log.Fatal().Msgf("'%s' is not a valid sector product for the '%s' satellite. "+
				"Check --product-list for the available options.", id, satellite.ID)
		}
	}

	if config.GetBool("date-list") {
		if satellite == nil || sector == nil || product == nil {
			log.Fatal().Msg("You must set --satellite, --sector, and --product first to see available dates.")
		}

		dates, err := slider.AvailableDates(satellite, sector, product)
		if err != nil {
			log.Fatal().Msgf("unable to get available dates: %v", err)
		}
		for _, date := range dates {
			fmt.Println(strconv.Itoa(date))
		}
		os.Exit(0)
	}

	if satellite == nil || sector == nil || product == nil {
		log.Fatal().Msg("You must set --satellite, --sector, and --product to create a new loop.")
	}

	var loop slider.LoopStyle
	switch config.GetString("loop") {
	case "forward":
		loop = slider.ForwardLoop
	case "reverse":
		loop = slider.ReverseLoop
	case "rock":
		loop = slider.RockLoop
	default:
		log.Fatal().Msgf("Loop style '%s' is not valid. Options are 'forward', 'reverse', and 'rock'.",
			config.GetString("loop"))
	}

	var beginTime time.Time
	if config.GetString("begin") != "" {
		var err error
		beginTime, err = time.Parse("20060102150405", config.GetString("begin"))
		if err != nil {
			log.Fatal().Msgf("unable to parse begin time: %s", config.GetString("begin"))
		}
	}

	var endTime time.Time
	if config.GetString("end") != "" {
		var err error
		endTime, err = time.Parse("20060102150405", config.GetString("end"))
		if err != nil {
			log.Fatal().Msgf("unable to parse end time: %s", config.GetString("end"))
		}
	}

	err := slider.CreateLoop(&slider.LoopOptions{
		Satellite:       satellite,
		Sector:          sector,
		Product:         product,
		Loop:            loop,
		NumberOfImages:  config.GetInt("image-count"),
		Speed:           config.GetInt("speed"),
		ZoomLevel:       config.GetInt("zoom"),
		TimeStep:        config.GetInt("time-step"),
		BeginTime:       beginTime,
		EndTime:         endTime,
		OutputDirectory: config.GetString("dir"),
	})
	if err != nil {
		log.Fatal().Msgf("unable to create loop: %v", err)
	}
	os.Exit(0)
}
