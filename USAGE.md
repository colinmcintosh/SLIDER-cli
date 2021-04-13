
```
slider-cli version v0.4.0-13-g0559fc5-0559fc5 (Built 2021-04-13T01:10:31Z)

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
    ./slider-cli --satellite=goes-16 --sector=conus --product=geocolor -z=2
    ./slider-cli --satellite=goes-16 --sector=conus --product=band-1 -i=20 -t=10
```

