# RAMMB/CIRA SLIDER CLI

A command-line implementation of the
RAMMB/CIRA [SLIDER tool](https://rammb-slider.cira.colostate.edu/)
in Golang. This tool downloads NOAA images taken by weather satellites in space
and creates animations/GIFs from those images. See an example below.

SLIDER is
the [Satellite Loop Interactive Data Explorer in Real-time](https://www.satelliteconferences.noaa.gov/2017/doc/poster/94.pdf)
.

This tool is meant to replicate most of the features of SLIDER and includes some
additional flexibility in configuration options. The goal of this utility is to
resolve some common issues with the SLIDER web interface, specifically:

- Incomplete frames being rendered on screen
- Slow to generate animations
- Web browser may crash for complex animations
- Limited options for features like time-step and speed

This is not to downplay the awesomeness that is the SLIDER web UI. The folks who
created it did amazing work and this CLI tool hopes to be complementary to that
effort. For more details on their effort check out this
2018 [talk from AMS](https://ams.confex.com/ams/98Annual/webprogram/Paper336810.html)
on SLIDER.

## Download

**Platforms Supported:** Windows, Linux, Mac

Checkout the [Releases](https://github.com/colinmcintosh/SLIDER-cli/releases)
page to download the latest version, or you can build the source code with
`make build`, which requires Golang and CMake.

Note: This is not an official product of NWS, NOAA, RAMMB, or CIRA.

## Example Usage

```bash
./slider-cli --satellite=goes-16 --sector=conus --product=geocolor -z=2
```

![Example Animation](examples/cira-rammb-slider---goes-16---conus---geocolor---20210407140615-20210407154115.gif)

## Help Dialog

```
SLIDER CLI Usage:
      --allow-stale        Allow imagery more than a year old -- filtering these
                           images outhelps eliminate issues with loops
                           containing old data.
      --date-list          Print a list of available dates
  -d, --dir string         Output filename to save rendered animation in.
                           (default ".")
      --help               Print help dialog.
  -i, --image-count int    Number of images in the loop. (default 6)
  -l, --loop string        Loop style. Options are 'forward', 'reverse', or
                           'rock'. Note that using 'rock' will nearly double the
                           output animation file size. (default "forward")
  -o, --output string      Output filename to save rendered animation in.
                           (default auto-generated)
  -p, --product string     Satellite product to request imagery for. See
                           --product-list for the full list. (Example: geocolor)
      --product-list       Print a list of available satellite products
  -s, --satellite string   Satellite to request imagery for. See
                           --satellite-list for the full list.
                           (Example: goes-17)
      --satellite-list     Print a list of available satellites
  -c, --sector string      Satellite sector to request imagery for. See
                           --sector-list for the full list. (Example: conus)
      --sector-list        Print a list of available satellite sectors
      --speed int          Desired frame rate in 100ths of a second. The lowest
                           value accepted is 1. (default 15)
  -t, --time-step int      Desired interval of image capture times in minutes.
                           (default 5)
  -v, --verbose            Enable verbose output.
  -z, --zoom int           Zoom level (changes resolution). See --zoom-list for
                           the full list of allowed zoom levels. (default 1)
      --zoom-list          Print a list of available zoom levels for satellite
                           sectors

Usage Examples:
    ./slider-cli --satellite=goes-16 --sector=conus --product=geocolor -z=2
```

## Feature To-Do List

- [x] Loop
- [x] Rock
- [x] Reverse
- [x] Speed
- [x] Zoom (Resolution)
- [ ] Pan/Crop
- [ ] Rotation
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
- [ ] Begin Date
- [ ] End Date
- [x] Animated GIF
- [ ] Animated PNG
- [ ] Separate Images
- [ ] Follow Feature
- [ ] URL Parsing
- [ ] Complete Satellite List
- [ ] Complete Sector List
- [ ] Complete Product List
- [ ] RAMMB/CIRA Watermark Overlays
