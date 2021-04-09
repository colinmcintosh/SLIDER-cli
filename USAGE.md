```
slider-cli version v0.2.0-12-gb1fe590-b1fe590 (Built 2021-04-09T03:59:39Z)

Usage:
      --allow-stale        Allow imagery more than a year old -- filtering these images
                           outhelps eliminate issues with loops containing old data.
  -b, --begin string       Desired image capture time of the first image in the loop. Use the
                           timestamp format YYYYMMDDhhmmss. This flag cannot be used with --end.
      --date-list          Print a list of available dates
  -d, --dir string         Output filename to save rendered animation in. (default ".")
  -e, --end string         Desired image capture time of the last image in the loop. Use the
                           timestamp format YYYYMMDDhhmmss. This flag cannot be used with --begin.
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
    ./slider-cli --satellite=goes-16 --sector=conus --product=geocolor -z=2
    ./slider-cli --satellite=goes-16 --sector=conus --product=band-1 -i=20 -t=10
```
