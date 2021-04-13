# RAMMB/CIRA SLIDER CLI

[![License](https://img.shields.io/github/license/colinmcintosh/SLIDER-cli.svg)](https://github.com/colinmcintosh/SLIDER-cli/blob/main/LICENSE)
[![Go Reference](https://pkg.go.dev/badge/github.com/colinmcintosh/slider-cli/slider.svg)](https://pkg.go.dev/github.com/colinmcintosh/slider-cli/slider)
[![Testing](https://github.com/colinmcintosh/SLIDER-cli/actions/workflows/build-main.yml/badge.svg?branch=main)](https://github.com/colinmcintosh/SLIDER-cli/actions/workflows/build-main.yml)
[![Go Report Card](https://goreportcard.com/badge/github.com/colinmcintosh/SLIDER-cli)](https://goreportcard.com/report/github.com/colinmcintosh/SLIDER-cli)
[![Release](https://img.shields.io/github/release/colinmcintosh/SLIDER-cli.svg)](https://github.com/colinmcintosh/SLIDER-cli/releases/latest)

A command-line implementation of the
RAMMB/CIRA [SLIDER tool](https://rammb-slider.cira.colostate.edu/)
in Golang. This tool downloads NOAA images taken by weather satellites in space and creates
animations/GIFs from those images. See an example below.

SLIDER is
the [Satellite Loop Interactive Data Explorer in Real-time](https://www.satelliteconferences.noaa.gov/2017/doc/poster/94.pdf)
.

### Motivation

This tool is meant to replicate most of the features of SLIDER and includes some additional
flexibility in configuration options. The goal of this utility is to resolve some common issues with
the SLIDER web interface, specifically:

- Missing tiles / tiles not being rendered on screen
- Slow to generate animations
- Web browser may crash for complex animations
- Limited options for features like time-step and speed

This is not to downplay the awesomeness that is the SLIDER web UI. The folks who created it (
specifically Kevin Micke) did amazing work and this CLI tool hopes to be complementary to that
effort. For more details on their effort check out this
2018 [talk from AMS](https://ams.confex.com/ams/98Annual/webprogram/Paper336810.html)
on SLIDER.

This is not an official product of NWS, NOAA, RAMMB, or CIRA. This is not officially related to the
SLIDER product.

## Download

**Platforms Supported:** Windows, Linux, Mac

Head to the [Releases](https://github.com/colinmcintosh/SLIDER-cli/releases)
page to download the latest version. Or you can build the source code with
`make build`, which requires Golang and CMake.

## Example Usage

### CONUS GeoColor

```bash
./slider-cli --satellite=goes-16 --sector=conus --product=geocolor -z=2
```

![Example CONUS Animation](examples/cira-rammb-slider---goes-16---conus---geocolor---20210407140615-20210407154115.gif)

### Second 2021 Eruption of the La Soufrière volcano on 2021-04-10

```bash
./slider-cli -s=goes-16 -c=mesoscale-02 -p=geocolor -i=90 -b=20210410152000 -t=2 --speed=10 --crop=250,250,750,750
```

![Example MS2 Animation](examples/cira-rammb-slider_goes-16_ms2_geocolor_500x500_20210410151951-20210410181751.gif)

See the [examples/](examples) folder for more commands and example images, such as animated PNGs.

## Help Dialog

```
slider-cli version v0.5.0-1-g38db1fd-38db1fd (Built 2021-04-13T07:58:02Z)

Usage:
      --allow-stale        Allow imagery more than a year old -- filtering these images
                           outhelps eliminate issues with loops containing old data.
      --angle int          Degrees to rotate the animation.
  -b, --begin string       Desired image capture time of the first image in the loop. Use the
                           timestamp format YYYYMMDDhhmmss. This flag cannot be used with --end.
      --cache string       Directory to cache downloaded images in. Caching will not be used
                           if a cache directory is not provided.
      --crop ints          List of points in the final image (before rotation) to crop to. Use
                           the format X1,Y1,X2,Y2 for the rectangle you want to crop to.
      --date-list          Print a list of available dates
      --decode string      Decode a SLIDER URL into a loop config and create an animation. You
                           must supply --time-step as well as that can't be decoded from the URL.
  -d, --dir string         Output filename to save rendered animation in. (default ".")
  -e, --end string         Desired image capture time of the last image in the loop. Use the
                           timestamp format YYYYMMDDhhmmss. This flag cannot be used with --begin.
  -f, --format string      Output animation file format. Options are "gif" or "png". (default
                           "gif")
      --help               Print help dialog.
  -i, --image-count int    Number of images in the loop. (default 6)
  -l, --loop string        Loop style. Options are 'forward', 'reverse', or 'rock'. Note that
                           using 'rock' will nearly double the output animation file size.
                           (default "forward")
  -o, --output string      Output filename to save rendered animation in. (default auto-generated)
  -p, --product string     Satellite product to request imagery for. See --product-list for
                           the full list. (Example: geocolor)
      --product-list       Print a list of available satellite products
  -s, --satellite string   Satellite to request imagery for. See --satellite-list for the full
                           list. (Example: goes-17)
      --satellite-list     Print a list of available satellites
  -c, --sector string      Satellite sector to request imagery for. See --sector-list for the
                           full list. (Example: conus)
      --sector-list        Print a list of available satellite sectors
      --speed int          Desired frame rate in 100ths of a second. The lowest value accepted
                           is 1. (default 15)
  -t, --time-step int      Desired interval of image capture times in minutes. (default 5)
  -v, --verbose            Enable verbose output.
  -V, --version            Print version and exit.
  -z, --zoom int           Zoom level (changes resolution). See --zoom-list for the full list
                           of allowed zoom levels. (default 1)
      --zoom-list          Print a list of available zoom levels for satellite sectors


Usage Examples:
    ./slider-cli --satellite-list
    ./slider-cli --sector-list --satellite=goes-16
    ./slider-cli --satellite=goes-16 --sector=conus --product=band-01 -z=2
    ./slider-cli --satellite=goes-16 --sector=conus --product=geocolor -i=24 -t=60
```

## Feature To-Do List

- [x] Loop
- [x] Rock
- [x] Reverse
- [x] Speed
- [x] Zoom (Resolution)
- [x] Pan/Crop
- [x] Rotation/Angle
- [ ] Slider
- [x] Satellite Selection
- [x] Sector Selection
- [x] Product Selection
- [ ] Product Overlays
- [ ] Overlay Opacity
- [x] Number of Images
- [x] Time Step
- [ ] Map Overlays
- [ ] Lat/Lon Overlays
- [ ] RAMMB/CIRA Watermark Overlays
- [x] Begin Timestamp
- [x] End Timestamp
- [x] Animated GIF
- [x] Animated PNG
- [ ] Separate Images
- [ ] Follow Feature
- [x] URL Parsing
- [x] GOES-16 Satellite
- [x] GOES-17 Satellite
- [x] Himawari-8 Satellite
- [x] Meteosat-8 Satellite
- [x] Meteosat-11 Satellite
- [x] JPSS Satellite
- [x] GOES Complete Sector List
- [x] Himawari-8 Complete Sector List
- [x] Meteosat Complete Sector List
- [x] JPSS Complete Sector List
- [x] GOES Complete Product List
- [x] Himawari-8 Complete Product List
- [x] Meteosat Complete Product List
- [x] JPSS Complete Product List
- [x] Local Image Caching
- [x] Import products from `define-products.js`

### Known Issues

- The 10000x6000px images for GOES Bands 1, 2, 3, & 5 are missing because I don't know of a good
  source for them without the map overlays already included. If anyone knows where to find these
  images please open a GitHub issue and let me know.
- At this time you can only specify a begin timestamp or an end timestamp but not both at the same
  time. In the future I want to be able to support that feature as an alternative to specifying an
  image count.

## Development

To work on or build `slider-cli` locally you should have:

- Golang 1.14+
- GNU Make 4+
- golangci-lint (`go get github.com/golangci/golangci-lint/cmd/golangci-lint@v1.39.0`)

Use the following `make` commands:

`make build` - build the `slider-cli` binary

`make check` - run all of the CI checks: `build`, `test`, and `lint`

`make clean` - remove binaries and the `release` folder

`make godoc` - start a local godoc server on `localhost:6060`

`make lint` - run linting and staticcheck

`make release` - build the release .zip and .sha256 files in the `release` folder

`make sync` - download Golang dependencies with `go get`

`make test` - run the test suite

`make usage` - update USAGE.md and README.md with the usage text from the `--help` dialog

PRs or Issues welcome!
