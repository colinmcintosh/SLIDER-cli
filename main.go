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
	"strconv"
	"syscall"
)

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
	pflag.Int("speed", 15, "Desired frame rate in 100ths of a second. The lowest value accepted is 1.")

	pflag.Bool("debug", false, "Enable debugging output.")
	pflag.StringP("dir", "d", ".", "Output filename to save rendered animation in.")
	pflag.StringP("output", "o", "", "Output filename to save rendered animation in. "+
		"(default auto-generated)")
	pflag.Bool("allow-stale", false, "Allow imagery more than a year old -- filtering these images out"+
		"helps eliminate issues with loops containing old data.")

	pflag.Usage = func() {
		_, _ = fmt.Fprintf(os.Stderr, "SLIDER CLI Usage:\n\n")
		pflag.PrintDefaults()
		_, _ = fmt.Fprintf(os.Stderr, "\n")
	}
	pflag.ErrHelp = nil
	pflag.Parse()
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
	log.Logger = log.Output(zerolog.ConsoleWriter{Out: os.Stderr})
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
	if config.GetBool("debug") {
		zerolog.SetGlobalLevel(zerolog.DebugLevel)
	}

	handleFlags(config)
}

func handleFlags(config *viper.Viper) {
	if config.GetBool("satellite-list") {
		fmt.Println("Available Satellites")
		for _, satellite := range slider.Satellites {
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
		fmt.Println(fmt.Sprintf("Available Sectors on Satellite %s", satellite.FriendlyName))
		for sector := range satellite.SectorProducts {
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
		sector = slider.Sectors[id]
		if sector == nil {
			log.Fatal().Msgf("'%s' is not a valid satellite sector. "+
				"Check --sector-list for the available options.", id)
		}
		if !satellite.ValidSector(sector) {
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
		for _, zoom := range sector.ZoomLevels {
			var x, y int
			if zoom.CropX > 0 && zoom.CropY > 0 {
				x = zoom.CropX
				y = zoom.CropY
			} else {
				x = zoom.XCells * zoom.CellSizeX
				y = zoom.YCells * zoom.CellSizeY
			}
			fmt.Println(fmt.Sprintf("%5d = %dpx x %dpx", zoom.Level, x, y))
		}
		os.Exit(0)
	}

	if config.GetBool("product-list") {
		if satellite == nil || sector == nil {
			log.Fatal().Msg("You must set --satellite and --sector first to list available products.")
			os.Exit(1)
		}
		fmt.Println(fmt.Sprintf("Available Products for Sector %s on Satellite %s",
			sector.FriendlyName, satellite.FriendlyName))
		for _, product := range satellite.SectorProducts[sector] {
			fmt.Println(fmt.Sprintf("%20s = %s (%s)", product.ID, product.FriendlyName, product.Description))
		}
		os.Exit(0)
	}

	var product *slider.Product
	if id := config.GetString("product"); id != "" {
		if satellite == nil || sector == nil {
			log.Fatal().Msg("You must set --satellite and --sector first to select a product. ")
			os.Exit(1)
		}
		product = slider.Products[id]
		if product == nil {
			log.Fatal().Msgf("'%s' is not a valid satellite product. "+
				"Check --product-list for the available options.", id)
		}
		if !satellite.ValidSectorProduct(sector, product) {
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

	err := slider.CreateLoop(&slider.LoopOptions{
		Satellite:       satellite,
		Sector:          sector,
		Product:         product,
		NumberOfImages:  config.GetInt("image-count"),
		Speed:           config.GetInt("speed"),
		ZoomLevel:       config.GetInt("zoom"),
		TimeStep:        config.GetInt("time-step"),
		OutputDirectory: config.GetString("dir"),
	})
	if err != nil {
		log.Fatal().Msgf("unable to create loop: %v", err)
	}
}
