## Examples

Most of these are examples of how to generate imagery with `slider-cli` and some interesting loops
that were generated. Note that many of the commands here reference specific times for which the
imagery don't exist on the SLIDER servers anymore; therefore running many of these commands won't
generate the exact same image for you or you may get a message that the specified times are not
available.

Some images are animated PNGs which may not be supported by your browser.

### CONUS GeoColor

```bash
./slider-cli --satellite=goes-16 --sector=conus --product=geocolor -z=2
```

![CONUS GeoColor](cira-rammb-slider---goes-16---conus---geocolor---20210407140615-20210407154115.gif)

### Second 2021 Eruption of the La Soufrière volcano on 2021-04-10 (GIF)

```bash
./slider-cli -s=goes-16 -c=ms2 -p=geocolor -i=90 -b=20210410152000 -t=2 --speed=10 --crop=250,250,750,750
```

![La Soufrière 2021-04-10](cira-rammb-slider_goes-16_ms2_geocolor_500x500_20210410151951-20210410181751.gif)

### Third 2021 Eruption of the La Soufrière volcano on 2021-04-11 (PNG)

```bash
./slider-cli -s=goes-16 -c=ms2 -p=geocolor -i=70 -b=20210411132500 -t=1 -z=1 --crop=100,100,900,900 --format=png
```

![La Soufrière 2021-04-11](cira-rammb-slider_goes-16_ms2_geocolor_800x800_20210411132454-20210411143354.png)
