# RAMMB/CIRA SLIDER CLI

A command-line implementation of the RAMMB/CIRA SLIDER tool in Golang.

This is not an official product of NOAA, RAMMB, or CIRA.

## Example Usage

```bash
slider-cli --satellite=goes-16 --sector=conus --product=geocolor -z=2
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
    slider-cli --satellite=goes-16 --sector=conus --product=geocolor -z=2
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
