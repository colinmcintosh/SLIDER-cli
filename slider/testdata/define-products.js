// Set up JSON object for all the sectors
var json = {
    "number_of_images_options": [6, 12, 14, 18, 24, 28, 30, 36, 42, 48, 54, 56, 60],
    "time_step_options": [1, 2, 3, 4, 6, 8, 12, 18, 24, 36, 48, 96],
    "default_satellite": "goes-16",
    "defaults": {
        "starting_opacity": 0.5,
        "zoom_level_adjust": 0,
        "max_zoom_level": 5,
        "colors": {
            "borders": "white",
            "city_lights": "sodium",
            "cities": "white",
            "airports": "purple",
            "counties": "silver",
            "roads": "purple",
            "rivers": "teal",
            "lakes": "blue",
            "nws_county_warning_areas": "gold",
            "states": "yellow",
            "countries": "yellow",
            "coastlines": "gold"
        },
        "maps": {
            "borders": "Default Borders",
            "city_lights": "City Lights",
            "cities": "Cities",
            "airports": "Airports",
            "counties": "U.S. Counties",
            "roads": "Roads",
            "rivers": "Rivers",
            "lakes": "Lakes",
            "nws_county_warning_areas": "NWS CWAs",
            "states": "States/Provinces",
            "countries": "Countries",
            "coastlines": "Coastlines"
        }
    },
    "colors": {
        "white": "White",
        "silver": "Silver",
        "slate": "Slate",
        "black": "Black",
        "pink": "Pink",
        "red": "Red",
        "maroon": "Maroon",
        "orange": "Orange",
        "yellow": "Yellow",
        "gold": "Gold",
        "brown": "Brown",
        "lime": "Lime",
        "green": "Green",
        "teal": "Teal",
        "blue": "Blue",
        "purple": "Purple",
        "sodium": "Sodium"
    },
    "unique_colors": {
        "sodium": "city_lights"
    },
    "ignore_white_maps_only": ["city_lights"],
    "satellites": {
        "goes-16": {
            "satellite_title": "GOES-16 (East; 75.2W)",
            "imagery_resolutions": {
                "0": "16 km",
                "1": "8 km",
                "2": "4 km",
                "3": "2 km",
                "4": "1 km",
                "5": "0.5 km",
                "6": "0.25 km",
                "7": "0.125 km"
            },
            "default_sector": "full_disk",
            "defaults": {
                "starting_opacity": 0.5
            },
            "sectors": {
                "full_disk": {
                    "sector_title": "Full Disk",
                    "max_zoom_level": 5,
                    "tile_size": 678,
                    "default_product": "geocolor",
                    "defaults": {
                        "starting_opacity": 0.5,
                        "minutes_between_images": 10
                    },
                    "lat_lon_query": {
                        "lon0": -75.0,
                        "sat_alt": 42171.7,
                        "max_rad_x": 0.151398,
                        "max_rad_y": 0.150927,
                        "disk_radius_x_z0": 338,
                        "disk_radius_y_z0": 337,
                        "decimal_places": 2
                    },
                    "navigation": {
                        "up": {
                            "satellite": "jpss",
                            "sector": "northern_hemisphere"
                        },
                        "right": {
                            "satellite": "meteosat-11",
                            "sector": "full_disk"
                        },
                        "left": {
                            "satellite": "goes-17",
                            "sector": "full_disk"
                        },
                        "down": {
                            "satellite": "jpss",
                            "sector": "southern_hemisphere"
                        }
                    },
                    "missing_products": ["mrms_products", "mrms_merged_base_reflectivity_qc", "mrms_reflectivity_at_lowest_altitude", "mrms_radar_precipitation_accumulation_01-hour", "mrms_lightning_probability_0-30-min_nldn", "mrms_precip_flag", "mrms_radar_precipitation_rate", "cira_boundary_layer_precipitable_water"]
                },
                "conus": {
                    "sector_title": "CONUS",
                    "max_zoom_level": 4,
                    "tile_size": 625,
                    "default_product": "geocolor",
                    "defaults": {
                        "minutes_between_images": 5
                    },
                    "missing_products": ["cira_proxy_visible_experimental", "cira_proxy_visible", "day_night_band", "cira_low_cloud_night_cloud_cleared_background", "mrms_lightning_probability_0-30-min_nldn"]
                },
                "mesoscale_01": {
                    "sector_title": "Mesoscale 1",
                    "max_zoom_level": 2,
                    "tile_size": 500,
                    "default_product": "geocolor",
                    "defaults": {
                        "minutes_between_images": 1
                    },
                    "missing_products": ["shortwave_albedo_cira", "cira_snow-cloud_discriminator_rgb", "mrms_products", "mrms_merged_base_reflectivity_qc", "mrms_reflectivity_at_lowest_altitude", "mrms_radar_precipitation_accumulation_01-hour", "mrms_lightning_probability_0-30-min_nldn", "mrms_precip_flag", "mrms_radar_precipitation_rate", "cira_proxy_visible_experimental", "cira_proxy_visible", "day_night_band", "cira_low_cloud_night_cloud_cleared_background", "cira_boundary_layer_precipitable_water", "eumetsat_dust"],
                    "missing_maps": ["city_lights"]
                },
                "mesoscale_02": {
                    "sector_title": "Mesoscale 2",
                    "max_zoom_level": 2,
                    "tile_size": 500,
                    "default_product": "geocolor",
                    "defaults": {
                        "minutes_between_images": 1
                    },
                    "missing_products": ["shortwave_albedo_cira", "cira_snow-cloud_discriminator_rgb", "mrms_products", "mrms_merged_base_reflectivity_qc", "mrms_reflectivity_at_lowest_altitude", "mrms_radar_precipitation_accumulation_01-hour", "mrms_lightning_probability_0-30-min_nldn", "mrms_precip_flag", "mrms_radar_precipitation_rate", "cira_proxy_visible_experimental", "cira_proxy_visible", "day_night_band", "cira_low_cloud_night_cloud_cleared_background", "cira_boundary_layer_precipitable_water", "eumetsat_dust"],
                    "missing_maps": ["city_lights"]
                }
            },
            "products": {
                "individual_abi_bands": {
                    "product_title": "----------INDIVIDUAL ABI BANDS----------"
                },
                "band_01": {
                    "product_title": "Band 1: 0.47 &micro;m (&quot;Blue&quot;)",
                    "product_description": "Aerosol detection and visibility estimation (daytime only). More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band01.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band01.pdf</a>",
                    "zoom_level_adjust": 1,
                    "resolution": "1 km",
                    "color_table_name": "lowlight4"
                },
                "band_02": {
                    "product_title": "Band 2: 0.64 &micro;m (&quot;Red&quot;)",
                    "product_description": "Primary visible band for monitoring clouds (daytime only). More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band02.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band02.pdf</a>",
                    "zoom_level_adjust": 0,
                    "resolution": "0.5 km",
                    "color_table_name": "lowlight4"
                },
                "band_03": {
                    "product_title": "Band 3: 0.86 &micro;m (&quot;Veggie&quot;)",
                    "product_description": "Aerosol detection and estimation of vegetation health (daytime only). More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band03.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band03.pdf</a>",
                    "zoom_level_adjust": 1,
                    "resolution": "1 km",
                    "color_table_name": "lowlight4"
                },
                "band_04": {
                    "product_title": "Band 4: 1.37 &micro;m (&quot;Cirrus&quot;)",
                    "product_description": "Cirrus cloud detection (daytime only). More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band04.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band04.pdf</a>",
                    "zoom_level_adjust": 2,
                    "resolution": "1 km",
                    "color_table_name": "cirrusband"
                },
                "band_05": {
                    "product_title": "Band 5: 1.6 &micro;m (&quot;Snow/Ice&quot;)",
                    "product_description": "Snow/cloud discrimination (daytime only). More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band05.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band05.pdf</a>",
                    "zoom_level_adjust": 1,
                    "resolution": "2 km",
                    "color_table_name": "cirrusband"
                },
                "band_06": {
                    "product_title": "Band 6: 2.2 &micro;m (&quot;Cloud Particle Size&quot;)",
                    "product_description": "Aerosol and cloud particle size estimation, vegetation, cloud properties/screening, hot-spot detection, moisture determination, snow detection, and fire detection (daytime only). More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band06.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band06.pdf</a>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "cirrusband"
                },
                "band_07": {
                    "product_title": "Band 7: 3.9 &micro;m (&quot;Shortwave Window&quot;)",
                    "product_description": "Fire detection, fog/stratus v/s ice cloud detection, and particle size estimation. More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band07.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band07.pdf</a>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "svgair2"
                },
                "band_08": {
                    "product_title": "Band 8: 6.2 &micro;m (&quot;Upper-Level Tropospheric Water Vapor&quot;)",
                    "product_description": "Water vapor detection and tracking in the upper-level troposphere. More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band08.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band08.pdf</a>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "svgawvx"
                },
                "band_09": {
                    "product_title": "Band 9: 6.9 &micro;m (&quot;Mid-Level Tropospheric Water Vapor&quot;)",
                    "product_description": "Water vapor detection and tracking in the mid-level troposphere. More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band09.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band09.pdf</a>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "svgawvx"
                },
                "band_10": {
                    "product_title": "Band 10: 7.3 &micro;m (&quot;Lower-level Water Vapor&quot;)",
                    "product_description": "Water vapor detection and tracking in the mid- to lower-level troposphere and upper-level sulfur dioxide (SO2) detection. More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band10.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band10.pdf</a>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "svgawvx"
                },
                "band_11": {
                    "product_title": "Band 11: 8.4 &micro;m (&quot;Cloud-Top Phase&quot;)",
                    "product_description": "Detection of volcanic dust clouds containing sulfuric acid aerosols and estimation of cloud phase. More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band11.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band11.pdf</a>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "ircimss2"
                },
                "band_12": {
                    "product_title": "Band 12: 9.6 &micro;m (&quot;Ozone&quot;)",
                    "product_description": "Atmospheric total column ozone and upper-level dynamics. More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band12.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band12.pdf</a>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "ircimss2"
                },
                "band_13": {
                    "product_title": "Band 13: 10.3 &micro;m (&quot;Clean&quot; IR Longwave Window)",
                    "product_description": "Cloud detection day and night (has very little water vapor absorption). More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band13.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band13.pdf</a>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "ircimss2"
                },
                "band_14": {
                    "product_title": "Band 14: 11.2 &micro;m (IR Longwave Window)",
                    "product_description": "Cloud detection day and night (has slightly more water vapor absorption) and also helpful in cloud retrievals such as cloud phase. More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band14.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band14.pdf</a>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "zehr4a"
                },
                "band_15": {
                    "product_title": "Band 15: 12.3 &micro;m (&quot;Dirty&quot; Longwave Window)",
                    "product_description": "Cloud detection day and night (has more water vapor absorption) and most useful in a difference with the 10.3 &micro;m band in order to detect low-level water vapor, in addition to blowing dust and volcanic ash. More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band15.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band15.pdf</a>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "svgair"
                },
                "band_16": {
                    "product_title": "Band 16: 13.3 &micro;m (&quot;CO2&quot; Longwave Infrared)",
                    "product_description": "Useful in retrievals of cloud top height. More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band16.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band16.pdf</a>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "ircimss2"
                },
                "multispectral_imagery": {
                    "product_title": "----------MULTISPECTRAL IMAGERY----------"
                },
                "geocolor": {
                    "product_title": "GeoColor (CIRA)",
                    "product_description": "GeoColor imagery provides as close an approximation to daytime True Color imagery as is possible from GOES-16, and thus allows for intuitive interpretation of meteorological and surface-based features. At night, instead of being dark like in other visible bands, an IR-based multispectral product is provided that differentiates between low liquid water clouds and higher ice clouds. A static city lights database derived from the VIIRS Day Night Band is provided as the nighttime background for geo-referencing. More info: <a href='http://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_CIRA_Geocolor_20171019.pdf' target='_blank'>http://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_CIRA_Geocolor_20171019.pdf</a>",
                    "zoom_level_adjust": 1,
                    "resolution": "1 km",
                    "color_table_name": ""
                },
                "cira_proxy_visible": {
                    "product_title": "ProxyVisible (CIRA)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "0.5 km",
                    "color_table_name": ""
                },
                "shortwave_albedo_cira": {
                    "product_title": "Shortwave Albedo (CIRA)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "svgair_albedo"
                },
                "cira_debra_dust": {
                    "product_title": "Dust - DEBRA (CIRA)",
                    "product_description": "More info: <a href='http://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DEBRA-Dust_20210217.pdf' target='_blank'>http://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DEBRA-Dust_20210217.pdf</a>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": ""
                },
                "cira_cloud_snow_discriminator": {
                    "product_title": "Snow/Cloud (CIRA)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": "1 km",
                    "color_table_name": "cira_cloud_snow_discriminator"
                },
                "cira_high_low_cloud_and_snow": {
                    "product_title": "Snow/Cloud-Layers (CIRA)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": "1 km",
                    "color_table_name": "cira_high_low_cloud_and_snow"
                },
                "split_window_difference_10_3-12_3": {
                    "product_title": "Split Window Difference (10.3 &micro;m - 12.3 &micro;m)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": ""
                },
                "split_window_difference_dust": {
                    "product_title": "Split Window Difference Dust (10.3 &micro;m - 12.3 &micro;m)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": ""
                },
                "split_window_difference_grayscale": {
                    "product_title": "Split Window Difference Grayscale (10.3 &micro;m - 12.3 &micro;m)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": ""
                },
                "multispectral_rgb_composites": {
                    "product_title": "----------MULTISPECTRAL RGB COMPOSITES----------"
                },
                "natural_color": {
                    "product_title": "Natural Color (EUMETSAT)",
                    "product_description": "In AWIPS, referred to as 'Day Land Cloud'.",
                    "zoom_level_adjust": 1,
                    "resolution": "1 km",
                    "color_table_name": ""
                },
                "rgb_air_mass": {
                    "product_title": "Airmass (EUMETSAT)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "rgb_air_mass"
                },
                "jma_day_cloud_phase_distinction_rgb": {
                    "product_title": "Day Cloud Phase Distinction (JMA)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": "1 km",
                    "color_table_name": "jma_day_cloud_phase_distinction_rgb"
                },
                "eumetsat_nighttime_microphysics": {
                    "product_title": "Nighttime Microphysics (EUMETSAT)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": ""
                },
                "day_snow_fog": {
                    "product_title": "Day Snow/Fog (EUMETSAT/NASA SPoRT)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": "1 km",
                    "color_table_name": ""
                },
                "awips_dust": {
                    "product_title": "Dust (EUMETSAT)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": ""
                },
                "fire_temperature": {
                    "product_title": "Fire Temperature (CIRA)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": ""
                },
                "cira_natural_fire_color": {
                    "product_title": "Natural Color-Fire (CIRA)",
                    "product_description": "In AWIPS, referred to as 'Day Land Cloud Fire'.",
                    "zoom_level_adjust": 1,
                    "resolution": "1 km",
                    "color_table_name": ""
                },
                "eumetsat_ash": {
                    "product_title": "Ash (EUMETSAT)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": ""
                },
                "jma_so2": {
                    "product_title": "SO<sub>2</sub> - Sulfur Dioxide (JMA)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": ""
                },
                "cloud_products": {
                    "product_title": "----------CLOUD PRODUCTS----------"
                },
                "cloud_top_height_cira_clavr-x": {
                    "product_title": "Cloud-Top Height (NOAA)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "cloud_top_height_cira_clavr-x"
                },
                "cloud_geometric_thickness_cira_clavr-x": {
                    "product_title": "Cloud Geometric Thickness (CIRA/NOAA)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "cloud_geometric_thickness_cira_clavr-x"
                },
                "cloud_layers_cira_clavr-x": {
                    "product_title": "Cloud Layers (CIRA/NOAA)",
                    "product_description": "The Cloud Layers are derived from the cloud top information using the predefined flight level thresholds, currently below 10 kft (about 3 km) for the Low layer and above 24 kft (about 7.3 km) for the High layer. The product has been improved to the vertically-extended layers such as H+M (high to mid-levels) or H+M+L (deep cloud) using a cloud geometric thickness/base height retrieval. See User Quick Guide for more information: <a href='http://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_JPSS_VIIRS_CBH.pdf' target='_blank'>http://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_JPSS_VIIRS_CBH.pdf</a>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "cloud_layers_cira_clavr-x"
                },
                "cloud_optical_thickness_cira_clavr-x": {
                    "product_title": "Cloud Optical Depth (NOAA)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "cloud_optical_thickness_cira_clavr-x_and_cloud_effective_radius_cira_clavr-x"
                },
                "cloud_effective_radius_cira_clavr-x": {
                    "product_title": "Cloud-Top Effective Particle Size (NOAA)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "cloud_optical_thickness_cira_clavr-x_and_cloud_effective_radius_cira_clavr-x"
                },
                "cloud_phase_cira_clavr-x": {
                    "product_title": "Cloud Phase (NOAA)",
                    "product_description": "Cloud Top Phase using IR bands (<a href='https://www.star.nesdis.noaa.gov/jpss/documents/ATBD/ATBD_EPS_Cloud_CldType_v2.0.pdf' target='_blank'>https://www.star.nesdis.noaa.gov/jpss/documents/ATBD/ATBD_EPS_Cloud_CldType_v2.0.pdf</a>). LTMP represents 'Supercooled Liquid water topped Mixed Phase' from CIRA's daytime sub-cloud phase detection based on differential reflectance ratios between 1.6 &micro;m and 2.2 &micro;m for liquid and ice (Miller et al. 2014 JGR; Noh et al. 2019 JGR).",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "cloud_phase_cira_clavr-x"
                },
                "cloud_mask_cira_clavr-x": {
                    "product_title": "Cloud Mask (NOAA)",
                    "product_description": "The cloud mask algorithm is based on 'A Naive Bayesian Cloud-Detection Scheme' by Andrew K. Heidinger (2012, J. Applied Meteorology and Climatology, <a href='https://doi.org/10.1175/JAMC-D-11-02.1' target='_blank' target='_blank'>https://doi.org/10.1175/JAMC-D-11-02.1</a>).",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "cloud_mask_cira_clavr-x"
                },
                "geostationary_lightning_mapper": {
                    "product_title": "----------GEOSTATIONARY LIGHTNING MAPPER----------"
                },
                "cira_glm_l2_group_energy": {
                    "product_title": "Group Energy Density (CIRA)",
                    "product_description": "Accumulation of GLM Level-2 'Group' energy over ABI's scan duration (1-min for meso, 5-min for conus, 10-min for full-disk), inverse-distance weighted over a given area for each centroid point and normalized to have [pJ/min] for all sectors. See User Quick Guide for more information: <a href='http://rammb.cira.colostate.edu/training/visit/quick_guides/GLM_Quick_Guide_Detection_Methods_June_2018.pdf' target='_blank' target='_blank'>http://rammb.cira.colostate.edu/training/visit/quick_guides/GLM_Quick_Guide_Detection_Methods_June_2018.pdf</a>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "cira_glm_l2_group_energy",
                    "starting_opacity": 1
                },
                "cira_glm_l2_group_counts": {
                    "product_title": "Group Count Density (CIRA)",
                    "product_description": "Accumulated counts of GLM Level-2 'Group' area over ABI's scan duration (1-min for meso, 5-min for conus, 10-min for full-disk). See User Quick Guide for more information: <a href='http://rammb.cira.colostate.edu/training/visit/quick_guides/GLM_Quick_Guide_Detection_Methods_June_2018.pdf' target='_blank' target='_blank'>http://rammb.cira.colostate.edu/training/visit/quick_guides/GLM_Quick_Guide_Detection_Methods_June_2018.pdf</a>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "cira_glm_l2_group_counts",
                    "starting_opacity": 1
                },
                "mrms_products": {
                    "product_title": "----------MRMS PRODUCTS----------"
                },
                "mrms_merged_base_reflectivity_qc": {
                    "product_title": "MRMS Merged Base Reflectivity QC",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "0.5 km",
                    "color_table_name": "mrms_merged_base_reflectivity_qc"
                },
                "mrms_reflectivity_at_lowest_altitude": {
                    "product_title": "MRMS Reflectivity At Lowest Altitude",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "0.5 km",
                    "color_table_name": "mrms_reflectivity_at_lowest_altitude"
                },
                "mrms_radar_precipitation_accumulation_01-hour": {
                    "product_title": "MRMS Radar Precipitation Accumulation 1-hour",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "0.5 km",
                    "color_table_name": "mrms_radar_precipitation_accumulation_01-hour"
                },
                "mrms_lightning_probability_0-30-min_nldn": {
                    "product_title": "MRMS Lightning Probability 0-30 minutes - NLDN",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "0.5 km",
                    "color_table_name": "mrms_lightning_probability_0-30-min_nldn"
                },
                "mrms_precip_flag": {
                    "product_title": "MRMS Surface Precipitation Type/Flag",
                    "product_description": "Surface Precipitation Type (Convective, Stratiform, Tropical, Hail, Snow)",
                    "zoom_level_adjust": 0,
                    "resolution": "0.5 km",
                    "color_table_name": "mrms_precip_flag"
                },
                "mrms_radar_precipitation_rate": {
                    "product_title": "MRMS Radar Precipitation Rate",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "0.5 km",
                    "color_table_name": "mrms_radar_precipitation_rate"
                }
            }
        },
        "goes-17": {
            "satellite_title": "GOES-17 (West; 137.2W)",
            "imagery_resolutions": {
                "0": "16 km",
                "1": "8 km",
                "2": "4 km",
                "3": "2 km",
                "4": "1 km",
                "5": "0.5 km",
                "6": "0.25 km",
                "7": "0.125 km"
            },
            "default_sector": "full_disk",
            "sectors": {
                "full_disk": {
                    "sector_title": "Full Disk",
                    "max_zoom_level": 5,
                    "tile_size": 678,
                    "default_product": "geocolor",
                    "defaults": {
                        "minutes_between_images": 10
                    },
                    "lat_lon_query": {
                        "lon0": -137.0,
                        "sat_alt": 42171.7,
                        "max_rad_x": 0.151337,
                        "max_rad_y": 0.150988,
                        "disk_radius_x_z0": 338,
                        "disk_radius_y_z0": 337,
                        "decimal_places": 2
                    },
                    "navigation": {
                        "up": {
                            "satellite": "jpss",
                            "sector": "northern_hemisphere"
                        },
                        "right": {
                            "satellite": "goes-16",
                            "sector": "full_disk"
                        },
                        "left": {
                            "satellite": "himawari",
                            "sector": "full_disk"
                        },
                        "down": {
                            "satellite": "jpss",
                            "sector": "southern_hemisphere"
                        }
                    },
                    "missing_products": ["mrms_products", "mrms_merged_base_reflectivity_qc"]
                },
                "conus": {
                    "sector_title": "CONUS",
                    "max_zoom_level": 4,
                    "tile_size": 625,
                    "default_product": "geocolor",
                    "defaults": {
                        "minutes_between_images": 5
                    },
                    "missing_products": ["cira_proxy_visible_experimental", "cira_proxy_visible", "mit_ll_synthetic_imagery", "mit_ll_demo_synthetic_advect_band_08", "mit_ll_demo_synthetic_advect_cnn_band_08", "mit_ll_demo_synthetic_masked_band_08", "mit_ll_band_08", "mit_ll_demo_synthetic_advect_band_09", "mit_ll_demo_synthetic_advect_cnn_band_09", "mit_ll_demo_synthetic_masked_band_09", "mit_ll_band_09", "mit_ll_demo_synthetic_advect_band_10", "mit_ll_demo_synthetic_advect_cnn_band_10", "mit_ll_demo_synthetic_masked_band_10", "mit_ll_band_10"],
                    "products": {
                        "geocolor": {
                            "zoom_level_adjust": 0
                        }
                    }
                },
                "mesoscale_01": {
                    "sector_title": "Mesoscale 1",
                    "max_zoom_level": 2,
                    "tile_size": 500,
                    "default_product": "geocolor",
                    "defaults": {
                        "minutes_between_images": 1
                    },
                    "missing_products": ["shortwave_albedo_cira", "mrms_products", "mrms_merged_base_reflectivity_qc", "cira_proxy_visible_experimental", "cira_proxy_visible", "mit_ll_synthetic_imagery", "mit_ll_demo_synthetic_advect_band_08", "mit_ll_demo_synthetic_advect_cnn_band_08", "mit_ll_demo_synthetic_masked_band_08", "mit_ll_band_08", "mit_ll_demo_synthetic_advect_band_09", "mit_ll_demo_synthetic_advect_cnn_band_09", "mit_ll_demo_synthetic_masked_band_09", "mit_ll_band_09", "mit_ll_demo_synthetic_advect_band_10", "mit_ll_demo_synthetic_advect_cnn_band_10", "mit_ll_demo_synthetic_masked_band_10", "mit_ll_band_10"],
                    "missing_maps": ["city_lights"]
                },
                "mesoscale_02": {
                    "sector_title": "Mesoscale 2",
                    "max_zoom_level": 2,
                    "tile_size": 500,
                    "defaults": {
                        "minutes_between_images": 1
                    },
                    "default_product": "geocolor",
                    "missing_products": ["shortwave_albedo_cira", "mrms_products", "mrms_merged_base_reflectivity_qc", "cira_proxy_visible_experimental", "cira_proxy_visible", "mit_ll_synthetic_imagery", "mit_ll_demo_synthetic_advect_band_08", "mit_ll_demo_synthetic_advect_cnn_band_08", "mit_ll_demo_synthetic_masked_band_08", "mit_ll_band_08", "mit_ll_demo_synthetic_advect_band_09", "mit_ll_demo_synthetic_advect_cnn_band_09", "mit_ll_demo_synthetic_masked_band_09", "mit_ll_band_09", "mit_ll_demo_synthetic_advect_band_10", "mit_ll_demo_synthetic_advect_cnn_band_10", "mit_ll_demo_synthetic_masked_band_10", "mit_ll_band_10"],
                    "missing_maps": ["city_lights"]
                }
            },
            "products": {
                "individual_abi_bands": {
                    "product_title": "----------INDIVIDUAL ABI BANDS----------"
                },
                "band_01": {
                    "product_title": "Band 1: 0.47 &micro;m (&quot;Blue&quot;)",
                    "product_description": "Aerosol detection and visibility estimation (daytime only). More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band01.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band01.pdf</a>",
                    "zoom_level_adjust": 1,
                    "resolution": "1 km",
                    "color_table_name": "lowlight4"
                },
                "band_02": {
                    "product_title": "Band 2: 0.64 &micro;m (&quot;Red&quot;)",
                    "product_description": "Primary visible band for monitoring clouds (daytime only). More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band02.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band02.pdf</a>",
                    "zoom_level_adjust": 0,
                    "resolution": "0.5 km",
                    "color_table_name": "lowlight4"
                },
                "band_03": {
                    "product_title": "Band 3: 0.86 &micro;m (&quot;Veggie&quot;)",
                    "product_description": "Aerosol detection and estimation of vegetation health (daytime only). More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band03.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band03.pdf</a>",
                    "zoom_level_adjust": 1,
                    "resolution": "1 km",
                    "color_table_name": "lowlight4"
                },
                "band_04": {
                    "product_title": "Band 4: 1.37 &micro;m (&quot;Cirrus&quot;)",
                    "product_description": "Cirrus cloud detection (daytime only). More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band04.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band04.pdf</a>",
                    "zoom_level_adjust": 2,
                    "resolution": "1 km",
                    "color_table_name": "cirrusband"
                },
                "band_05": {
                    "product_title": "Band 5: 1.6 &micro;m (&quot;Snow/Ice&quot;)",
                    "product_description": "Snow/cloud discrimination (daytime only). More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band05.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band05.pdf</a>",
                    "zoom_level_adjust": 1,
                    "resolution": "2 km",
                    "color_table_name": "cirrusband"
                },
                "band_06": {
                    "product_title": "Band 6: 2.2 &micro;m (&quot;Cloud Particle Size&quot;)",
                    "product_description": "Aerosol and cloud particle size estimation, vegetation, cloud properties/screening, hot-spot detection, moisture determination, snow detection, and fire detection (daytime only). More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band06.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band06.pdf</a>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "cirrusband"
                },
                "band_07": {
                    "product_title": "Band 7: 3.9 &micro;m (&quot;Shortwave Window&quot;)",
                    "product_description": "Fire detection, fog/stratus v/s ice cloud detection, and particle size estimation. More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band07.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band07.pdf</a>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "svgair2"
                },
                "band_08": {
                    "product_title": "Band 8: 6.2 &micro;m (&quot;Upper-Level Tropospheric Water Vapor&quot;)",
                    "product_description": "Water vapor detection and tracking in the upper-level troposphere. More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band08.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band08.pdf</a>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "svgawvx"
                },
                "band_09": {
                    "product_title": "Band 9: 6.9 &micro;m (&quot;Mid-Level Tropospheric Water Vapor&quot;)",
                    "product_description": "Water vapor detection and tracking in the mid-level troposphere. More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band09.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band09.pdf</a>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "svgawvx"
                },
                "band_10": {
                    "product_title": "Band 10: 7.3 &micro;m (&quot;Lower-level Water Vapor&quot;)",
                    "product_description": "Water vapor detection and tracking in the mid- to lower-level troposphere and upper-level sulfur dioxide (SO2) detection. More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band10.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band10.pdf</a>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "svgawvx"
                },
                "band_11": {
                    "product_title": "Band 11: 8.4 &micro;m (&quot;Cloud-Top Phase&quot;)",
                    "product_description": "Detection of volcanic dust clouds containing sulfuric acid aerosols and estimation of cloud phase. More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band11.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band11.pdf</a>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "ircimss2"
                },
                "band_12": {
                    "product_title": "Band 12: 9.6 &micro;m (&quot;Ozone&quot;)",
                    "product_description": "Atmospheric total column ozone and upper-level dynamics. More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band12.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band12.pdf</a>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "ircimss2"
                },
                "band_13": {
                    "product_title": "Band 13: 10.3 &micro;m (&quot;Clean&quot; IR Longwave Window)",
                    "product_description": "Cloud detection day and night (has very little water vapor absorption). More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band13.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band13.pdf</a>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "ircimss2"
                },
                "band_14": {
                    "product_title": "Band 14: 11.2 &micro;m (IR Longwave Window)",
                    "product_description": "Cloud detection day and night (has slightly more water vapor absorption) and also helpful in cloud retrievals such as cloud phase. More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band14.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band14.pdf</a>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "zehr4a"
                },
                "band_15": {
                    "product_title": "Band 15: 12.3 &micro;m (&quot;Dirty&quot; Longwave Window)",
                    "product_description": "Cloud detection day and night (has more water vapor absorption) and most useful in a difference with the 10.3 &micro;m band in order to detect low-level water vapor, in addition to blowing dust and volcanic ash. More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band15.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band15.pdf</a>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "svgair"
                },
                "band_16": {
                    "product_title": "Band 16: 13.3 &micro;m (&quot;CO2&quot; Longwave Infrared)",
                    "product_description": "Useful in retrievals of cloud top height. More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band16.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band16.pdf</a>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "ircimss2"
                },
                "multispectral_imagery": {
                    "product_title": "----------MULTISPECTRAL IMAGERY----------"
                },
                "geocolor": {
                    "product_title": "GeoColor (CIRA)",
                    "product_description": "GeoColor imagery provides as close an approximation to daytime True Color imagery as is possible from GOES-16, and thus allows for intuitive interpretation of meteorological and surface-based features. At night, instead of being dark like in other visible bands, an IR-based multispectral product is provided that differentiates between low liquid water clouds and higher ice clouds. A static city lights database derived from the VIIRS Day Night Band is provided as the nighttime background for geo-referencing. More info: <a href='http://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_CIRA_Geocolor_20171019.pdf' target='_blank'>http://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_CIRA_Geocolor_20171019.pdf</a>",
                    "zoom_level_adjust": 1,
                    "resolution": "1 km",
                    "color_table_name": ""
                },
                "cira_proxy_visible": {
                    "product_title": "ProxyVisible (CIRA)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "0.5 km",
                    "color_table_name": ""
                },
                "shortwave_albedo_cira": {
                    "product_title": "Shortwave Albedo (CIRA)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "svgair_albedo"
                },
                "cira_debra_dust": {
                    "product_title": "Dust - DEBRA (CIRA)",
                    "product_description": "More info: <a href='http://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DEBRA-Dust_20210217.pdf' target='_blank'>http://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DEBRA-Dust_20210217.pdf</a>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": ""
                },
                "cira_cloud_snow_discriminator": {
                    "product_title": "Snow/Cloud (CIRA)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": "1 km",
                    "color_table_name": "cira_cloud_snow_discriminator"
                },
                "cira_high_low_cloud_and_snow": {
                    "product_title": "Snow/Cloud-Layers (CIRA)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": "1 km",
                    "color_table_name": "cira_high_low_cloud_and_snow"
                },
                "split_window_difference_10_3-12_3": {
                    "product_title": "Split Window Difference (10.3 &micro;m - 12.3 &micro;m)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": ""
                },
                "split_window_difference_dust": {
                    "product_title": "Split Window Difference Dust (10.3 &micro;m - 12.3 &micro;m)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": ""
                },
                "split_window_difference_grayscale": {
                    "product_title": "Split Window Difference Grayscale (10.3 &micro;m - 12.3 &micro;m)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": ""
                },
                "multispectral_rgb_composites": {
                    "product_title": "----------MULTISPECTRAL RGB COMPOSITES----------"
                },
                "natural_color": {
                    "product_title": "Natural Color (EUMETSAT)",
                    "product_description": "In AWIPS, referred to as 'Day Land Cloud'.",
                    "zoom_level_adjust": 1,
                    "resolution": "1 km",
                    "color_table_name": ""
                },
                "rgb_air_mass": {
                    "product_title": "Airmass (EUMETSAT)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "rgb_air_mass"
                },
                "jma_day_cloud_phase_distinction_rgb": {
                    "product_title": "Day Cloud Phase Distinction (JMA)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": "1 km",
                    "color_table_name": "jma_day_cloud_phase_distinction_rgb"
                },
                "eumetsat_nighttime_microphysics": {
                    "product_title": "Nighttime Microphysics (EUMETSAT)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": ""
                },
                "day_snow_fog": {
                    "product_title": "Day Snow/Fog (EUMETSAT/NASA SPoRT)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": "1 km",
                    "color_table_name": ""
                },
                "awips_dust": {
                    "product_title": "Dust (EUMETSAT)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": ""
                },
                "fire_temperature": {
                    "product_title": "Fire Temperature (CIRA)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": ""
                },
                "cira_natural_fire_color": {
                    "product_title": "Natural Color-Fire (CIRA)",
                    "product_description": "In AWIPS, referred to as 'Day Land Cloud Fire'.",
                    "zoom_level_adjust": 1,
                    "resolution": "1 km",
                    "color_table_name": ""
                },
                "eumetsat_ash": {
                    "product_title": "Ash (EUMETSAT)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": ""
                },
                "jma_so2": {
                    "product_title": "SO<sub>2</sub> - Sulfur Dioxide (JMA)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": ""
                },
                "geostationary_lightning_mapper": {
                    "product_title": "----------GEOSTATIONARY LIGHTNING MAPPER----------"
                },
                "cira_glm_l2_group_energy": {
                    "product_title": "Group Energy Density (CIRA)",
                    "product_description": "Accumulation of GLM Level-2 'Group' energy over ABI's scan duration (1-min for meso, 5-min for conus, 10-min for full-disk), inverse-distance weighted over a given area for each centroid point and normalized to have [pJ/min] for all sectors. See User Quick Guide for more information: <a href='http://rammb.cira.colostate.edu/training/visit/quick_guides/GLM_Quick_Guide_Detection_Methods_June_2018.pdf' target='_blank' target='_blank'>http://rammb.cira.colostate.edu/training/visit/quick_guides/GLM_Quick_Guide_Detection_Methods_June_2018.pdf</a>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "cira_glm_l2_group_energy",
                    "starting_opacity": 1
                },
                "cira_glm_l2_group_counts": {
                    "product_title": "Group Count Density (CIRA)",
                    "product_description": "Accumulated counts of GLM Level-2 'Group' area over ABI's scan duration (1-min for meso, 5-min for conus, 10-min for full-disk). See User Quick Guide for more information: <a href='http://rammb.cira.colostate.edu/training/visit/quick_guides/GLM_Quick_Guide_Detection_Methods_June_2018.pdf' target='_blank' target='_blank'>http://rammb.cira.colostate.edu/training/visit/quick_guides/GLM_Quick_Guide_Detection_Methods_June_2018.pdf</a>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "cira_glm_l2_group_counts",
                    "starting_opacity": 1
                },
                "mrms_products": {
                    "product_title": "----------MRMS PRODUCTS----------"
                },
                "mrms_merged_base_reflectivity_qc": {
                    "product_title": "MRMS Merged Base Reflectivity QC",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "0.5 km",
                    "color_table_name": "mrms_merged_base_reflectivity_qc"
                },
                "cloud_products": {
                    "product_title": "----------CLOUD PRODUCTS----------"
                },
                "cloud_top_height_cira_clavr-x": {
                    "product_title": "Cloud-Top Height (NOAA)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "cloud_top_height_cira_clavr-x"
                },
                "cloud_geometric_thickness_cira_clavr-x": {
                    "product_title": "Cloud Geometric Thickness (CIRA/NOAA)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "cloud_geometric_thickness_cira_clavr-x"
                },
                "cloud_layers_cira_clavr-x": {
                    "product_title": "Cloud Layers (CIRA/NOAA)",
                    "product_description": "The Cloud Layers are derived from the cloud top information using the predefined flight level thresholds, currently below 10 kft (about 3 km) for the Low layer and above 24 kft (about 7.3 km) for the High layer. The product has been improved to the vertically-extended layers such as H+M (high to mid-levels) or H+M+L (deep cloud) using a cloud geometric thickness/base height retrieval. See User Quick Guide for more information: <a href='http://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_JPSS_VIIRS_CBH.pdf' target='_blank'>http://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_JPSS_VIIRS_CBH.pdf</a>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "cloud_layers_cira_clavr-x"
                },
                "cloud_optical_thickness_cira_clavr-x": {
                    "product_title": "Cloud Optical Depth (NOAA)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "cloud_optical_thickness_cira_clavr-x_and_cloud_effective_radius_cira_clavr-x"
                },
                "cloud_effective_radius_cira_clavr-x": {
                    "product_title": "Cloud-Top Effective Particle Size (NOAA)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "cloud_optical_thickness_cira_clavr-x_and_cloud_effective_radius_cira_clavr-x"
                },
                "cloud_phase_cira_clavr-x": {
                    "product_title": "Cloud Phase (NOAA)",
                    "product_description": "Cloud Top Phase using IR bands (<a href='https://www.star.nesdis.noaa.gov/jpss/documents/ATBD/ATBD_EPS_Cloud_CldType_v2.0.pdf' target='_blank'>https://www.star.nesdis.noaa.gov/jpss/documents/ATBD/ATBD_EPS_Cloud_CldType_v2.0.pdf</a>). LTMP represents 'Supercooled Liquid water topped Mixed Phase' from CIRA's daytime sub-cloud phase detection based on differential reflectance ratios between 1.6 &micro;m and 2.2 &micro;m for liquid and ice (Miller et al. 2014 JGR; Noh et al. 2019 JGR).",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "cloud_phase_cira_clavr-x"
                },
                "cloud_mask_cira_clavr-x": {
                    "product_title": "Cloud Mask (NOAA)",
                    "product_description": "The cloud mask algorithm is based on 'A Naive Bayesian Cloud-Detection Scheme' by Andrew K. Heidinger (2012, J. Applied Meteorology and Climatology, <a href='https://doi.org/10.1175/JAMC-D-11-02.1' target='_blank' target='_blank'>https://doi.org/10.1175/JAMC-D-11-02.1</a>).",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "cloud_mask_cira_clavr-x"
                },
                "mit_ll_synthetic_imagery": {
                    "product_title": "----------MIT LL SYNTHETIC IMAGERY----------"
                },
                "mit_ll_demo_synthetic_advect_band_08": {
                    "product_title": "Demo Synthetic Advect Band 8 (MIT LL)",
                    "product_description": "Synthetic replacement for GOES-17 ABI Band 8 (6.2 &micro;m) during times when detectors are saturated due to the cooling system anomaly. When the imagery displayed is synthetic, a &quot;Synthetic Non-Operational Imagery&quot; banner is shown at the top of the window. Otherwise the operational imagery is redisplayed using an alternate color map.<br /><br />The algorithm computes an optical flow field from the last image pair prior to saturation, then extrapolates the motion by advecting the last unsaturated image along the flow field.<br /><br />Note that the quality of the synthetic data will degrade towards the end of longer outages.<br /><br /><span class='fine-print'>DISTRIBUTION STATEMENT A. Approved for public release. Distribution is unlimited.<br /><br />This material is based upon work supported by the National Oceanic and Atmospheric Administration under Air Force Contract No. FA8702-15-D-0001. Any opinions, findings, conclusions or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the National Oceanic and Atmospheric Administration.<br /><br />&copy; 2020 Massachusetts Institute of Technology.<br /><br />Delivered to the U.S. Government with Unlimited Rights, as defined in DFARS Part 252.227-7013 or 7014 (Feb 2014). Notwithstanding any copyright notice, U.S. Government rights in this work are defined by DFARS 252.227-7013 or DFARS 252.227-7014 as detailed above. Use of this work other than as specifically authorized by the U.S. Government may violate any copyrights that exist in this work.</span>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "mit_ll_water_vapor",
                    "initial_message_title": "Synthetic Imagery",
                    "initial_message_content": "The banner on top of the screen will indicate when images are 1) re-displays of operational imagery from the GOES-R ground system using an alternate color map than typical water vapor imagery displayed in SLIDER vs 2) synthetic non-operational imagery generated by MIT LL using the same alternate color map. Click the 'info' button on this product for more information."
                },
                "mit_ll_demo_synthetic_advect_cnn_band_08": {
                    "product_title": "Demo Synthetic Advect+CNN Band 8 (MIT LL)",
                    "product_description": "Synthetic replacement for GOES-17 ABI Band 8 (6.2 &micro;m) during times when detectors are saturated due to the cooling system anomaly. When the imagery displayed is synthetic, a &quot;Synthetic Non-Operational Imagery&quot; banner is shown at the top of the window. Otherwise the operational imagery is redisplayed using an alternate color map.<br /><br />The algorithm computes an optical flow field from the last image pair prior to saturation, then extrapolates the motion by advecting the last unsaturated image along the flow field. Additionally, the unsaturated window bands 7, 13 and 14 are used as inputs to a convolutional neural network to refine estimation of the cloudier parts of the Band 8 image.<br /><br />Note that the quality of the synthetic data will degrade towards the end of longer outages.<br /><br /><span class='fine-print'>DISTRIBUTION STATEMENT A. Approved for public release. Distribution is unlimited.<br /><br />This material is based upon work supported by the National Oceanic and Atmospheric Administration under Air Force Contract No. FA8702-15-D-0001. Any opinions, findings, conclusions or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the National Oceanic and Atmospheric Administration.<br /><br />&copy; 2020 Massachusetts Institute of Technology.<br /><br />Delivered to the U.S. Government with Unlimited Rights, as defined in DFARS Part 252.227-7013 or 7014 (Feb 2014). Notwithstanding any copyright notice, U.S. Government rights in this work are defined by DFARS 252.227-7013 or DFARS 252.227-7014 as detailed above. Use of this work other than as specifically authorized by the U.S. Government may violate any copyrights that exist in this work.</span>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "mit_ll_water_vapor",
                    "initial_message_title": "Synthetic Imagery",
                    "initial_message_content": "The banner on top of the screen will indicate when images are 1)  re-displays of operational imagery from the GOES-R ground system using an alternate color map than typical water vapor imagery displayed in SLIDER vs 2) synthetic non-operational imagery generated by MIT LL using the same alternate color map. Click the 'info' button on this product for more information."
                },
                "mit_ll_demo_synthetic_masked_band_08": {
                    "product_title": "Demo Synthetic Masked Band 8 (MIT LL)",
                    "product_description": "Synthetic replacement for GOES-17 ABI Band 8 (6.2 &micro;m) during times when detectors are saturated due to the cooling system anomaly. When the imagery displayed is synthetic, a &quot;Synthetic Non-Operational Imagery&quot; banner is shown at the top of the window. Otherwise the operational imagery is redisplayed using an alternate color map.<br /><br />The algorithm computes an optical flow field from the last image pair prior to saturation, then extrapolates the motion by advecting the last unsaturated image along the flow field. Additionally, a mask is applied to the image prior to advection in order to focus the viewer’s attention on the relevant water vapor features. The mask utilizes the ABI Cloud Top Phase product to discard ice clouds.<br /><br />Note that the quality of the synthetic data will degrade towards the end of longer outages.<br /><br /><span class='fine-print'>DISTRIBUTION STATEMENT A. Approved for public release. Distribution is unlimited.<br /><br />This material is based upon work supported by the National Oceanic and Atmospheric Administration under Air Force Contract No. FA8702-15-D-0001. Any opinions, findings, conclusions or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the National Oceanic and Atmospheric Administration.<br /><br />&copy; 2020 Massachusetts Institute of Technology.<br /><br />Delivered to the U.S. Government with Unlimited Rights, as defined in DFARS Part 252.227-7013 or 7014 (Feb 2014). Notwithstanding any copyright notice, U.S. Government rights in this work are defined by DFARS 252.227-7013 or DFARS 252.227-7014 as detailed above. Use of this work other than as specifically authorized by the U.S. Government may violate any copyrights that exist in this work.</span>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "mit_ll_water_vapor",
                    "initial_message_title": "Synthetic Imagery",
                    "initial_message_content": "The banner on top of the screen will indicate when images are 1)  re-displays of operational imagery from the GOES-R ground system using an alternate color map than typical water vapor imagery displayed in SLIDER vs 2) synthetic non-operational imagery generated by MIT LL using the same alternate color map. Click the 'info' button on this product for more information."
                },
                "mit_ll_band_08": {
                    "product_title": "Band 8: 6.2 &micro;m (MIT LL Color Table)",
                    "product_description": "Water vapor detection and tracking in the upper-level troposphere. The underlying data is identical to the other version of this band, but with a different color table applied to be able to directly compare it with the synthetic imagery from MIT LL. More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band08.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band08.pdf</a>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "mit_ll_water_vapor"
                },
                "mit_ll_demo_synthetic_advect_band_09": {
                    "product_title": "Demo Synthetic Advect Band 9 (MIT LL)",
                    "product_description": "Synthetic replacement for GOES-17 ABI Band 9 (6.9 &micro;m) during times when detectors are saturated due to the cooling system anomaly. When the imagery displayed is synthetic, a &quot;Synthetic Non-Operational Imagery&quot; banner is shown at the top of the window. Otherwise the operational imagery is redisplayed using an alternate color map.<br /><br />The algorithm computes an optical flow field from the last image pair prior to saturation, then extrapolates the motion by advecting the last unsaturated image along the flow field.<br /><br />Note that the quality of the synthetic data will degrade towards the end of longer outages.<br /><br /><span class='fine-print'>DISTRIBUTION STATEMENT A. Approved for public release. Distribution is unlimited.<br /><br />This material is based upon work supported by the National Oceanic and Atmospheric Administration under Air Force Contract No. FA8702-15-D-0001. Any opinions, findings, conclusions or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the National Oceanic and Atmospheric Administration.<br /><br />&copy; 2020 Massachusetts Institute of Technology.<br /><br />Delivered to the U.S. Government with Unlimited Rights, as defined in DFARS Part 252.227-7013 or 7014 (Feb 2014). Notwithstanding any copyright notice, U.S. Government rights in this work are defined by DFARS 252.227-7013 or DFARS 252.227-7014 as detailed above. Use of this work other than as specifically authorized by the U.S. Government may violate any copyrights that exist in this work.</span>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "mit_ll_water_vapor",
                    "initial_message_title": "Synthetic Imagery",
                    "initial_message_content": "The banner on top of the screen will indicate when images are 1)  re-displays of operational imagery from the GOES-R ground system using an alternate color map than typical water vapor imagery displayed in SLIDER vs 2) synthetic non-operational imagery generated by MIT LL using the same alternate color map. Click the 'info' button on this product for more information."
                },
                "mit_ll_demo_synthetic_advect_cnn_band_09": {
                    "product_title": "Demo Synthetic Advect+CNN Band 9 (MIT LL)",
                    "product_description": "Synthetic replacement for GOES-17 ABI Band 9 (6.9 &micro;m) during times when detectors are saturated due to the cooling system anomaly. When the imagery displayed is synthetic, a &quot;Synthetic Non-Operational Imagery&quot; banner is shown at the top of the window. Otherwise the operational imagery is redisplayed using an alternate color map.<br /><br />The algorithm computes an optical flow field from the last image pair prior to saturation, then extrapolates the motion by advecting the last unsaturated image along the flow field. Additionally, the unsaturated window bands 7, 13 and 14 are used as inputs to a convolutional neural network to refine estimation of the cloudier parts of the Band 9 image.<br /><br />Note that the quality of the synthetic data will degrade towards the end of longer outages.<br /><br /><span class='fine-print'>DISTRIBUTION STATEMENT A. Approved for public release. Distribution is unlimited.<br /><br />This material is based upon work supported by the National Oceanic and Atmospheric Administration under Air Force Contract No. FA8702-15-D-0001. Any opinions, findings, conclusions or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the National Oceanic and Atmospheric Administration.<br /><br />&copy; 2020 Massachusetts Institute of Technology.<br /><br />Delivered to the U.S. Government with Unlimited Rights, as defined in DFARS Part 252.227-7013 or 7014 (Feb 2014). Notwithstanding any copyright notice, U.S. Government rights in this work are defined by DFARS 252.227-7013 or DFARS 252.227-7014 as detailed above. Use of this work other than as specifically authorized by the U.S. Government may violate any copyrights that exist in this work.</span>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "mit_ll_water_vapor",
                    "initial_message_title": "Synthetic Imagery",
                    "initial_message_content": "The banner on top of the screen will indicate when images are 1)  re-displays of operational imagery from the GOES-R ground system using an alternate color map than typical water vapor imagery displayed in SLIDER vs 2) synthetic non-operational imagery generated by MIT LL using the same alternate color map. Click the 'info' button on this product for more information."
                },
                "mit_ll_demo_synthetic_masked_band_09": {
                    "product_title": "Demo Synthetic Masked Band 9 (MIT LL)",
                    "product_description": "Synthetic replacement for GOES-17 ABI Band 9 (6.9 &micro;m) during times when detectors are saturated due to the cooling system anomaly. When the imagery displayed is synthetic, a &quot;Synthetic Non-Operational Imagery&quot; banner is shown at the top of the window. Otherwise the operational imagery is redisplayed using an alternate color map.<br /><br />The algorithm computes an optical flow field from the last image pair prior to saturation, then extrapolates the motion by advecting the last unsaturated image along the flow field. Additionally, a mask is applied to the image prior to advection in order to focus the viewer’s attention on the relevant water vapor features. The mask utilizes the ABI Cloud Top Phase product to discard ice clouds.<br /><br />Note that the quality of the synthetic data will degrade towards the end of longer outages.<br /><br /><span class='fine-print'>DISTRIBUTION STATEMENT A. Approved for public release. Distribution is unlimited.<br /><br />This material is based upon work supported by the National Oceanic and Atmospheric Administration under Air Force Contract No. FA8702-15-D-0001. Any opinions, findings, conclusions or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the National Oceanic and Atmospheric Administration.<br /><br />&copy; 2020 Massachusetts Institute of Technology.<br /><br />Delivered to the U.S. Government with Unlimited Rights, as defined in DFARS Part 252.227-7013 or 7014 (Feb 2014). Notwithstanding any copyright notice, U.S. Government rights in this work are defined by DFARS 252.227-7013 or DFARS 252.227-7014 as detailed above. Use of this work other than as specifically authorized by the U.S. Government may violate any copyrights that exist in this work.</span>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "mit_ll_water_vapor",
                    "initial_message_title": "Synthetic Imagery",
                    "initial_message_content": "The banner on top of the screen will indicate when images are 1)  re-displays of operational imagery from the GOES-R ground system using an alternate color map than typical water vapor imagery displayed in SLIDER vs 2) synthetic non-operational imagery generated by MIT LL using the same alternate color map. Click the 'info' button on this product for more information."
                },
                "mit_ll_band_09": {
                    "product_title": "Band 9: 6.9 &micro;m (MIT LL Color Table)",
                    "product_description": "Water vapor detection and tracking in the mid-level troposphere. The underlying data is identical to the other version of this band, but with a different color table applied to be able to directly compare it with the synthetic imagery from MIT LL. More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band09.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band09.pdf</a>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "mit_ll_water_vapor"
                },
                "mit_ll_demo_synthetic_advect_band_10": {
                    "product_title": "Demo Synthetic Advect Band 10 (MIT LL)",
                    "product_description": "Synthetic replacement for GOES-17 ABI Band 10 (7.3 &micro;m) during times when detectors are saturated due to the cooling system anomaly. When the imagery displayed is synthetic, a &quot;Synthetic Non-Operational Imagery&quot; banner is shown at the top of the window. Otherwise the operational imagery is redisplayed using an alternate color map.<br /><br />The algorithm computes an optical flow field from the last image pair prior to saturation, then extrapolates the motion by advecting the last unsaturated image along the flow field.<br /><br />Note that the quality of the synthetic data will degrade towards the end of longer outages.<br /><br /><span class='fine-print'>DISTRIBUTION STATEMENT A. Approved for public release. Distribution is unlimited.<br /><br />This material is based upon work supported by the National Oceanic and Atmospheric Administration under Air Force Contract No. FA8702-15-D-0001. Any opinions, findings, conclusions or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the National Oceanic and Atmospheric Administration.<br /><br />&copy; 2020 Massachusetts Institute of Technology.<br /><br />Delivered to the U.S. Government with Unlimited Rights, as defined in DFARS Part 252.227-7013 or 7014 (Feb 2014). Notwithstanding any copyright notice, U.S. Government rights in this work are defined by DFARS 252.227-7013 or DFARS 252.227-7014 as detailed above. Use of this work other than as specifically authorized by the U.S. Government may violate any copyrights that exist in this work.</span>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "mit_ll_water_vapor",
                    "initial_message_title": "Synthetic Imagery",
                    "initial_message_content": "The banner on top of the screen will indicate when images are 1)  re-displays of operational imagery from the GOES-R ground system using an alternate color map than typical water vapor imagery displayed in SLIDER vs 2) synthetic non-operational imagery generated by MIT LL using the same alternate color map. Click the 'info' button on this product for more information."
                },
                "mit_ll_demo_synthetic_advect_cnn_band_10": {
                    "product_title": "Demo Synthetic Advect+CNN Band 10 (MIT LL)",
                    "product_description": "Synthetic replacement for GOES-17 ABI Band 10 (7.3 &micro;m) during times when detectors are saturated due to the cooling system anomaly. When the imagery displayed is synthetic, a &quot;Synthetic Non-Operational Imagery&quot; banner is shown at the top of the window. Otherwise the operational imagery is redisplayed using an alternate color map.<br /><br />The algorithm computes an optical flow field from the last image pair prior to saturation, then extrapolates the motion by advecting the last unsaturated image along the flow field. Additionally, the unsaturated window bands 7, 13 and 14 are used as inputs to a convolutional neural network to refine estimation of the cloudier parts of the Band 10 image.<br /><br />Note that the quality of the synthetic data will degrade towards the end of longer outages.<br /><br /><span class='fine-print'>DISTRIBUTION STATEMENT A. Approved for public release. Distribution is unlimited.<br /><br />This material is based upon work supported by the National Oceanic and Atmospheric Administration under Air Force Contract No. FA8702-15-D-0001. Any opinions, findings, conclusions or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the National Oceanic and Atmospheric Administration.<br /><br />&copy; 2020 Massachusetts Institute of Technology.<br /><br />Delivered to the U.S. Government with Unlimited Rights, as defined in DFARS Part 252.227-7013 or 7014 (Feb 2014). Notwithstanding any copyright notice, U.S. Government rights in this work are defined by DFARS 252.227-7013 or DFARS 252.227-7014 as detailed above. Use of this work other than as specifically authorized by the U.S. Government may violate any copyrights that exist in this work.</span>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "mit_ll_water_vapor",
                    "initial_message_title": "Synthetic Imagery",
                    "initial_message_content": "The banner on top of the screen will indicate when images are 1)  re-displays of operational imagery from the GOES-R ground system using an alternate color map than typical water vapor imagery displayed in SLIDER vs 2) synthetic non-operational imagery generated by MIT LL using the same alternate color map. Click the 'info' button on this product for more information."
                },
                "mit_ll_demo_synthetic_masked_band_10": {
                    "product_title": "Demo Synthetic Masked Band 10 (MIT LL)",
                    "product_description": "Synthetic replacement for GOES-17 ABI Band 10 (7.3 &micro;m) during times when detectors are saturated due to the cooling system anomaly. When the imagery displayed is synthetic, a &quot;Synthetic Non-Operational Imagery&quot; banner is shown at the top of the window. Otherwise the operational imagery is redisplayed using an alternate color map.<br /><br />The algorithm computes an optical flow field from the last image pair prior to saturation, then extrapolates the motion by advecting the last unsaturated image along the flow field. Additionally, a mask is applied to the image prior to advection in order to focus the viewer’s attention on the relevant water vapor features. The mask utilizes the ABI Cloud Top Phase product to discard ice clouds.<br /><br />Note that the quality of the synthetic data will degrade towards the end of longer outages.<br /><br /><span class='fine-print'>DISTRIBUTION STATEMENT A. Approved for public release. Distribution is unlimited.<br /><br />This material is based upon work supported by the National Oceanic and Atmospheric Administration under Air Force Contract No. FA8702-15-D-0001. Any opinions, findings, conclusions or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the National Oceanic and Atmospheric Administration.<br /><br />&copy; 2020 Massachusetts Institute of Technology.<br /><br />Delivered to the U.S. Government with Unlimited Rights, as defined in DFARS Part 252.227-7013 or 7014 (Feb 2014). Notwithstanding any copyright notice, U.S. Government rights in this work are defined by DFARS 252.227-7013 or DFARS 252.227-7014 as detailed above. Use of this work other than as specifically authorized by the U.S. Government may violate any copyrights that exist in this work.</span>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "mit_ll_water_vapor",
                    "initial_message_title": "Synthetic Imagery",
                    "initial_message_content": "The banner on top of the screen will indicate when images are 1)  re-displays of operational imagery from the GOES-R ground system using an alternate color map than typical water vapor imagery displayed in SLIDER vs 2) synthetic non-operational imagery generated by MIT LL using the same alternate color map. Click the 'info' button on this product for more information."
                },
                "mit_ll_band_10": {
                    "product_title": "Band 10: 7.3 &micro;m (MIT LL Color Table)",
                    "product_description": "Water vapor detection and tracking in the mid- to lower-level troposphere and upper-level sulfur dioxide (SO2) detection. The underlying data is identical to the other version of this band, but with a different color table applied to be able to directly compare it with the synthetic imagery from MIT LL. More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band10.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band10.pdf</a>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "mit_ll_water_vapor"
                }
            }
        },
        "himawari": {
            "satellite_title": "Himawari-8 (140.7E)",
            "imagery_resolutions": {
                "0": "16 km",
                "1": "8 km",
                "2": "4 km",
                "3": "2 km",
                "4": "1 km",
                "5": "0.5 km",
                "6": "0.25 km",
                "7": "0.125 km"
            },
            "default_sector": "full_disk",
            "sectors": {
                "full_disk": {
                    "sector_title": "Full Disk",
                    "max_zoom_level": 5,
                    "tile_size": 688,
                    "default_product": "geocolor",
                    "defaults": {
                        "minutes_between_images": 10
                    },
                    "lat_lon_query": {
                        "lon0": 140.69,
                        "sat_alt": 42171.7,
                        "max_rad_x": 0.150618,
                        "max_rad_y": 0.150485,
                        "disk_radius_x_z0": 337,
                        "disk_radius_y_z0": 336,
                        "decimal_places": 1
                    },
                    "navigation": {
                        "up": {
                            "satellite": "jpss",
                            "sector": "northern_hemisphere"
                        },
                        "right": {
                            "satellite": "goes-17",
                            "sector": "full_disk"
                        },
                        "left": {
                            "satellite": "meteosat-8",
                            "sector": "full_disk"
                        },
                        "down": {
                            "satellite": "jpss",
                            "sector": "southern_hemisphere"
                        }
                    },
                    "missing_maps": ["counties", "nws_county_warning_areas"]
                },
                "japan": {
                    "sector_title": "Japan",
                    "max_zoom_level": 3,
                    "tile_size": 750,
                    "default_product": "band_13",
                    "defaults": {
                        "minutes_between_images": 2.5
                    },
                    "missing_products": ["multispectral_imagery", "geocolor", "natural_color", "rgb_air_mass", "eumetsat_dust", "fire_temperature", "eumetsat_ash", "jma_so2", "cloud_products", "cloud_geometric_thickness_cira_clavr-x", "cloud_layers_cira_clavr-x", "cloud_top_height_cira_clavr-x", "cloud_optical_thickness_cira_clavr-x", "cloud_effective_radius_cira_clavr-x", "cloud_phase_cira_clavr-x", "cira_natural_fire_color", "shortwave_albedo_cira", "cira_debra_dust", "visible_albedo_cira", "split_window_difference_10_3-12_3", "multispectral_rgb_composites", "jma_day_cloud_phase_distinction_rgb"],
                    "missing_maps": ["city_lights", "counties", "nws_county_warning_areas"]
                },
                "mesoscale_01": {
                    "sector_title": "Mesoscale",
                    "max_zoom_level": 2,
                    "tile_size": 500,
                    "default_product": "band_13",
                    "defaults": {
                        "minutes_between_images": 2.5
                    },
                    "missing_products": ["multispectral_imagery", "geocolor", "natural_color", "rgb_air_mass", "eumetsat_dust", "fire_temperature", "eumetsat_ash", "jma_so2", "cloud_products", "cloud_geometric_thickness_cira_clavr-x", "cloud_layers_cira_clavr-x", "cloud_top_height_cira_clavr-x", "cloud_optical_thickness_cira_clavr-x", "cloud_effective_radius_cira_clavr-x", "cloud_phase_cira_clavr-x", "cira_natural_fire_color", "shortwave_albedo_cira", "cira_debra_dust", "visible_albedo_cira", "split_window_difference_10_3-12_3", "multispectral_rgb_composites", "jma_day_cloud_phase_distinction_rgb"],
                    "missing_maps": ["city_lights", "counties", "nws_county_warning_areas"]
                }
            },
            "products": {
                "individual_ahi_bands": {
                    "product_title": "----------INDIVIDUAL AHI BANDS----------"
                },
                "band_01": {
                    "product_title": "Band 1: 0.47 &micro;m (&quot;Blue&quot;)",
                    "product_description": "Aerosol detection and visibility estimation (daytime only)",
                    "zoom_level_adjust": 1,
                    "resolution": "1 km",
                    "color_table_name": "lowlight3"
                },
                "band_02": {
                    "product_title": "Band 2: 0.51 &micro;m (&quot;Green&quot;)",
                    "product_description": "Observations related to the land, clouds and aerosols (daytime only)",
                    "zoom_level_adjust": 1,
                    "resolution": "1 km",
                    "color_table_name": "lowlight3"
                },
                "band_03": {
                    "product_title": "Band 3: 0.64 &micro;m (&quot;Red&quot;)",
                    "product_description": "Primary visible band for monitoring clouds (daytime only)",
                    "zoom_level_adjust": 0,
                    "resolution": "0.5 km",
                    "color_table_name": "lowlight3"
                },
                "band_04": {
                    "product_title": "Band 4: 0.86 &micro;m (&quot;Veggie&quot;)",
                    "product_description": "Aerosol detection and estimation of vegetation health (daytime only)",
                    "zoom_level_adjust": 1,
                    "resolution": "1 km",
                    "color_table_name": "lowlight3"
                },
                "band_05": {
                    "product_title": "Band 5: 1.6 &micro;m (&quot;Snow/Ice&quot;)",
                    "product_description": "Snow/cloud discrimination (daytime only)",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "lowlight3"
                },
                "band_06": {
                    "product_title": "Band 6: 2.3 &micro;m (&quot;Cloud Particle Size&quot;)",
                    "product_description": "Aerosol and cloud particle size estimation, vegetation, cloud properties/screening, hot-spot detection, moisture determination, snow detection, and fire detection (daytime only)",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "lowlight3"
                },
                "band_07": {
                    "product_title": "Band 7: 3.9 &micro;m (&quot;Shortwave Window&quot;)",
                    "product_description": "Fire detection, fog/stratus v/s ice cloud detection, and particle size estimation",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "svgair2"
                },
                "band_08": {
                    "product_title": "Band 8: 6.2 &micro;m (&quot;Upper-Level Tropospheric Water Vapor&quot;)",
                    "product_description": "Water vapor detection and tracking in the upper-level troposphere",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "svgawvx"
                },
                "band_09": {
                    "product_title": "Band 9: 6.9 &micro;m (&quot;Mid-Level Tropospheric Water Vapor&quot;)",
                    "product_description": "Water vapor detection and tracking in the mid-level troposphere",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "svgawvx"
                },
                "band_10": {
                    "product_title": "Band 10: 7.3 &micro;m (&quot;Lower-level Water Vapor&quot;)",
                    "product_description": "Water vapor detection and tracking in the mid- to lower-level troposphere and upper-level sulfur dioxide (SO2) detection",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "svgawvx"
                },
                "band_11": {
                    "product_title": "Band 11: 8.6 &micro;m (&quot;Cloud-Top Phase&quot;)",
                    "product_description": "Detection of volcanic dust clouds containing sulfuric acid aerosols and estimation of cloud phase",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "ircimss2"
                },
                "band_12": {
                    "product_title": "Band 12: 9.6 &micro;m (&quot;Ozone&quot;)",
                    "product_description": "Atmospheric total column ozone and upper-level dynamics",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "ircimss2"
                },
                "band_13": {
                    "product_title": "Band 13: 10.4 &micro;m (&quot;Clean&quot; IR Longwave Window)",
                    "product_description": "Cloud detection day and night (has very little water vapor absorption)",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "ircimss2"
                },
                "band_14": {
                    "product_title": "Band 14: 11.2 &micro;m (IR Longwave Window)",
                    "product_description": "Cloud detection day and night (has slightly more water vapor absorption) and also helpful in cloud retrievals such as cloud phase",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "zehr4a"
                },
                "band_15": {
                    "product_title": "Band 15: 12.4 &micro;m (&quot;Dirty&quot; Longwave Window)",
                    "product_description": "Cloud detection day and night (has more water vapor absorption) and most useful in a difference with the 10.3 &micro;m band in order to detect low-level water vapor, in addition to blowing dust and volcanic ash",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "svgair"
                },
                "band_16": {
                    "product_title": "Band 16: 13.3 &micro;m (&quot;CO2&quot; Longwave Infrared)",
                    "product_description": "Useful in retrievals of cloud top height",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "ircimss2"
                },
                "multispectral_imagery": {
                    "product_title": "----------MULTISPECTRAL IMAGERY----------"
                },
                "geocolor": {
                    "product_title": "GeoColor (CIRA)",
                    "product_description": "GeoColor imagery provides as close an approximation to daytime True Color imagery as is possible from GOES-16, and thus allows for intuitive interpretation of meteorological and surface-based features. At night, instead of being dark like in other visible bands, an IR-based multispectral product is provided that differentiates between low liquid water clouds and higher ice clouds. A static city lights database derived from the VIIRS Day Night Band is provided as the nighttime background for geo-referencing. More info: <a href='http://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_CIRA_Geocolor_20171019.pdf' target='_blank'>http://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_CIRA_Geocolor_20171019.pdf</a>",
                    "zoom_level_adjust": 1,
                    "resolution": "1 km",
                    "color_table_name": ""
                },
                "shortwave_albedo_cira": {
                    "product_title": "Shortwave Albedo (CIRA)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "svgair_albedo"
                },
                "cira_debra_dust": {
                    "product_title": "Dust - DEBRA (CIRA)",
                    "product_description": "More info: <a href='http://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DEBRA-Dust_20210217.pdf' target='_blank'>http://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DEBRA-Dust_20210217.pdf</a>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": ""
                },
                "visible_albedo_cira": {
                    "product_title": "Visible Albedo (CIRA)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": ""
                },
                "split_window_difference_10_3-12_3": {
                    "product_title": "Split Window Difference (10.3 &micro;m - 12.3 &micro;m)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": ""
                },
                "split_window_difference_dust": {
                    "product_title": "Split Window Difference Dust (10.3 &micro;m - 12.3 &micro;m)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": ""
                },
                "split_window_difference_grayscale": {
                    "product_title": "Split Window Difference Grayscale (10.3 &micro;m - 12.3 &micro;m)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": ""
                },
                "multispectral_rgb_composites": {
                    "product_title": "----------MULTISPECTRAL RGB COMPOSITES----------"
                },
                "natural_color": {
                    "product_title": "Natural Color (EUMETSAT)",
                    "product_description": "In AWIPS, referred to as 'Day Land Cloud'.",
                    "zoom_level_adjust": 1,
                    "resolution": "1 km",
                    "color_table_name": ""
                },
                "rgb_air_mass": {
                    "product_title": "Airmass (EUMETSAT)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "rgb_air_mass"
                },
                "jma_day_cloud_phase_distinction_rgb": {
                    "product_title": "Day Cloud Phase Distinction (JMA)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": "1 km",
                    "color_table_name": "jma_day_cloud_phase_distinction_rgb"
                },
                "eumetsat_dust": {
                    "product_title": "Dust (EUMETSAT)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": ""
                },
                "fire_temperature": {
                    "product_title": "Fire Temperature (CIRA)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": ""
                },
                "cira_natural_fire_color": {
                    "product_title": "Natural Color-Fire (CIRA)",
                    "product_description": "In AWIPS, referred to as 'Day Land Cloud Fire'.",
                    "zoom_level_adjust": 1,
                    "resolution": "1 km",
                    "color_table_name": ""
                },
                "eumetsat_ash": {
                    "product_title": "Ash (EUMETSAT)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": ""
                },
                "jma_so2": {
                    "product_title": "SO<sub>2</sub> - Sulfur Dioxide (JMA)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": ""
                },
                "cloud_products": {
                    "product_title": "----------CLOUD PRODUCTS----------"
                },
                "cloud_top_height_cira_clavr-x": {
                    "product_title": "Cloud-Top Height (NOAA)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "cloud_top_height_cira_clavr-x"
                },
                "cloud_geometric_thickness_cira_clavr-x": {
                    "product_title": "Cloud Geometric Thickness (CIRA/NOAA)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "cloud_geometric_thickness_cira_clavr-x"
                },
                "cloud_layers_cira_clavr-x": {
                    "product_title": "Cloud Layers (CIRA/NOAA)",
                    "product_description": "The Cloud Layers are derived from the cloud top information using the predefined flight level thresholds, currently below 10 kft (about 3 km) for the Low layer and above 24 kft (about 7.3 km) for the High layer. The product has been improved to the vertically-extended layers such as H+M (high to mid-levels) or H+M+L (deep cloud) using a cloud geometric thickness/base height retrieval. See User Quick Guide for more information: <a href='http://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_JPSS_VIIRS_CBH.pdf' target='_blank'>http://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_JPSS_VIIRS_CBH.pdf</a>",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "cloud_layers_cira_clavr-x"
                },
                "cloud_optical_thickness_cira_clavr-x": {
                    "product_title": "Cloud Optical Depth (NOAA)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "cloud_optical_thickness_cira_clavr-x_and_cloud_effective_radius_cira_clavr-x"
                },
                "cloud_effective_radius_cira_clavr-x": {
                    "product_title": "Cloud-Top Effective Particle Size (NOAA)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "cloud_optical_thickness_cira_clavr-x_and_cloud_effective_radius_cira_clavr-x"
                },
                "cloud_phase_cira_clavr-x": {
                    "product_title": "Cloud Phase (NOAA)",
                    "product_description": "Cloud Top Phase using IR bands (<a href='https://www.star.nesdis.noaa.gov/jpss/documents/ATBD/ATBD_EPS_Cloud_CldType_v2.0.pdf' target='_blank'>https://www.star.nesdis.noaa.gov/jpss/documents/ATBD/ATBD_EPS_Cloud_CldType_v2.0.pdf</a>). LTMP represents 'Supercooled Liquid water topped Mixed Phase' from CIRA's daytime sub-cloud phase detection based on differential reflectance ratios between 1.6 &micro;m and 2.2 &micro;m for liquid and ice (Miller et al. 2014 JGR; Noh et al. 2019 JGR).",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": "cloud_phase_cira_clavr-x"
                }
            }
        },
        "meteosat-8": {
            "satellite_title": "Meteosat-8 (42.0E)",
            "imagery_resolutions": {
                "0": "24 km",
                "1": "12 km",
                "2": "6 km",
                "3": "3 km",
                "4": "1.5 km",
                "5": "0.75 km"
            },
            "default_sector": "full_disk",
            "defaults": {
                "starting_opacity": 0.5,
                "max_zoom_level": 3
            },
            "sectors": {
                "full_disk": {
                    "sector_title": "Full Disk",
                    "max_zoom_level": 3,
                    "tile_size": 464,
                    "default_product": "geocolor",
                    "defaults": {
                        "starting_opacity": 0.5,
                        "minutes_between_images": 15
                    },
                    "lat_lon_query": {
                        "lon0": 41.485,
                        "sat_alt": 42169.7,
                        "max_rad_x": 0.150671,
                        "max_rad_y": 0.150490,
                        "disk_radius_x_z0": 225,
                        "disk_radius_y_z0": 224,
                        "decimal_places": 1
                    },
                    "navigation": {
                        "up": {
                            "satellite": "jpss",
                            "sector": "northern_hemisphere"
                        },
                        "right": {
                            "satellite": "himawari",
                            "sector": "full_disk"
                        },
                        "left": {
                            "satellite": "meteosat-11",
                            "sector": "full_disk"
                        },
                        "down": {
                            "satellite": "jpss",
                            "sector": "southern_hemisphere"
                        }
                    },
                    "missing_products": ["day_snow_fog", "fire_temperature"],
                    "missing_maps": ["counties", "nws_county_warning_areas"]
                }
            },
            "products": {
                "individual_seviri_bands": {
                    "product_title": "----------INDIVIDUAL SEVIRI BANDS----------"
                },
                "band_01": {
                    "product_title": "Band 1: 0.635 &micro;m (EUMETSAT, Hourly)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "1 km",
                    "color_table_name": "lowlight3",
                    "minutes_between_images": 60
                },
                "band_02": {
                    "product_title": "Band 2: 0.81 &micro;m (EUMETSAT, Hourly)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "3 km",
                    "color_table_name": "lowlight3",
                    "minutes_between_images": 60
                },
                "band_03": {
                    "product_title": "Band 3: 1.64 &micro;m (EUMETSAT, Hourly)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "3 km",
                    "color_table_name": "lowlight3",
                    "minutes_between_images": 60
                },
                "band_04": {
                    "product_title": "Band 4: 3.90 &micro;m (EUMETSAT, Hourly)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "3 km",
                    "color_table_name": "svgair2",
                    "minutes_between_images": 60
                },
                "band_05": {
                    "product_title": "Band 5: 6.25 &micro;m (EUMETSAT, Hourly)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "3 km",
                    "color_table_name": "svgawvx",
                    "minutes_between_images": 60
                },
                "band_06": {
                    "product_title": "Band 6: 7.35 &micro;m (EUMETSAT, Hourly)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "3 km",
                    "color_table_name": "svgawvx",
                    "minutes_between_images": 60
                },
                "band_07": {
                    "product_title": "Band 7: 8.70 &micro;m (EUMETSAT, Hourly)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "3 km",
                    "color_table_name": "ircimss2",
                    "minutes_between_images": 60
                },
                "band_08": {
                    "product_title": "Band 8: 9.66 &micro;m (EUMETSAT, Hourly)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "3 km",
                    "color_table_name": "ircimss2",
                    "minutes_between_images": 60
                },
                "band_09": {
                    "product_title": "Band 9: 10.80 &micro;m (EUMETSAT, Hourly)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "3 km",
                    "color_table_name": "zehr4a",
                    "minutes_between_images": 60
                },
                "band_10": {
                    "product_title": "Band 10: 12.00 &micro;m (EUMETSAT, Hourly)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "3 km",
                    "color_table_name": "svgair",
                    "minutes_between_images": 60
                },
                "band_11": {
                    "product_title": "Band 11: 13.4 &micro;m (EUMETSAT, Hourly)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "3 km",
                    "color_table_name": "ircimss2",
                    "minutes_between_images": 60
                },
                "multispectral_imagery": {
                    "product_title": "----------MULTISPECTRAL IMAGERY----------"
                },
                "geocolor": {
                    "product_title": "GeoColor (CIRA)",
                    "product_description": "GeoColor imagery provides as close an approximation to daytime True Color imagery as is possible from GOES-16, and thus allows for intuitive interpretation of meteorological and surface-based features. At night, instead of being dark like in other visible bands, an IR-based multispectral product is provided that differentiates between low liquid water clouds and higher ice clouds. A static city lights database derived from the VIIRS Day Night Band is provided as the nighttime background for geo-referencing. More info: <a href='http://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_CIRA_Geocolor_20171019.pdf' target='_blank'>http://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_CIRA_Geocolor_20171019.pdf</a>",
                    "zoom_level_adjust": 0,
                    "resolution": "1 km",
                    "color_table_name": ""
                },
                "split_window_difference_10_3-12_3": {
                    "product_title": "Split Window Difference (10.7 &micro;m - 12.0 &micro;m)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "3 km",
                    "color_table_name": ""
                },
                "split_window_difference_dust": {
                    "product_title": "Split Window Difference Dust (10.7 &micro;m - 12.0 &micro;m)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "3 km",
                    "color_table_name": ""
                },
                "split_window_difference_grayscale": {
                    "product_title": "Split Window Difference Grayscale (10.7 &micro;m - 12.0 &micro;m)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "3 km",
                    "color_table_name": ""
                },
                "multispectral_rgb_composites": {
                    "product_title": "----------MULTISPECTRAL RGB COMPOSITES----------"
                },
                "natural_color": {
                    "product_title": "Natural Color (EUMETSAT)",
                    "product_description": "In AWIPS, referred to as 'Day Land Cloud'.",
                    "zoom_level_adjust": 0,
                    "resolution": "1 km",
                    "color_table_name": ""
                },
                "rgb_air_mass": {
                    "product_title": "Airmass (EUMETSAT)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "2 km",
                    "color_table_name": "rgb_air_mass"
                },
                "jma_day_cloud_phase_distinction_rgb": {
                    "product_title": "Day Cloud Phase Distinction (JMA)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "1 km",
                    "color_table_name": "jma_day_cloud_phase_distinction_rgb"
                },
                "eumetsat_nighttime_microphysics": {
                    "product_title": "Nighttime Microphysics (EUMETSAT)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "2 km",
                    "color_table_name": ""
                },
                "day_snow_fog": {
                    "product_title": "Day Snow/Fog (EUMETSAT/NASA SPoRT)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "1 km",
                    "color_table_name": ""
                },
                "awips_dust": {
                    "product_title": "Dust (EUMETSAT)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "2 km",
                    "color_table_name": ""
                },
                "fire_temperature": {
                    "product_title": "Fire Temperature (CIRA)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "2 km",
                    "color_table_name": ""
                },
                "cira_natural_fire_color": {
                    "product_title": "Natural Color-Fire (CIRA)",
                    "product_description": "In AWIPS, referred to as 'Day Land Cloud Fire'.",
                    "zoom_level_adjust": 0,
                    "resolution": "1 km",
                    "color_table_name": ""
                },
                "eumetsat_ash": {
                    "product_title": "Ash (EUMETSAT)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "2 km",
                    "color_table_name": ""
                }
            }
        },
        "meteosat-11": {
            "satellite_title": "Meteosat-11 (0.0)",
            "imagery_resolutions": {
                "0": "24 km",
                "1": "12 km",
                "2": "6 km",
                "3": "3 km",
                "4": "1.5 km",
                "5": "0.75 km"
            },
            "default_sector": "full_disk",
            "defaults": {
                "starting_opacity": 0.5,
                "max_zoom_level": 3
            },
            "sectors": {
                "full_disk": {
                    "sector_title": "Full Disk",
                    "max_zoom_level": 3,
                    "tile_size": 464,
                    "default_product": "geocolor",
                    "defaults": {
                        "starting_opacity": 0.5,
                        "minutes_between_images": 15
                    },
                    "lat_lon_query": {
                        "lon0": -0.0840,
                        "sat_alt": 42171.2,
                        "max_rad_x": 0.150583,
                        "max_rad_y": 0.150548,
                        "disk_radius_x_z0": 225,
                        "disk_radius_y_z0": 224,
                        "decimal_places": 1
                    },
                    "navigation": {
                        "up": {
                            "satellite": "jpss",
                            "sector": "northern_hemisphere"
                        },
                        "right": {
                            "satellite": "meteosat-8",
                            "sector": "full_disk"
                        },
                        "left": {
                            "satellite": "goes-16",
                            "sector": "full_disk"
                        },
                        "down": {
                            "satellite": "jpss",
                            "sector": "southern_hemisphere"
                        }
                    },
                    "missing_products": ["day_snow_fog", "fire_temperature"],
                    "missing_maps": ["counties", "nws_county_warning_areas"]
                }
            },
            "products": {
                "individual_seviri_bands": {
                    "product_title": "----------INDIVIDUAL SEVIRI BANDS----------"
                },
                "band_01": {
                    "product_title": "Band 1: 0.635 &micro;m (EUMETSAT, Hourly)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "1 km",
                    "color_table_name": "lowlight3",
                    "minutes_between_images": 60
                },
                "band_02": {
                    "product_title": "Band 2: 0.81 &micro;m (EUMETSAT, Hourly)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "3 km",
                    "color_table_name": "lowlight3",
                    "minutes_between_images": 60
                },
                "band_03": {
                    "product_title": "Band 3: 1.64 &micro;m (EUMETSAT, Hourly)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "3 km",
                    "color_table_name": "lowlight3",
                    "minutes_between_images": 60
                },
                "band_04": {
                    "product_title": "Band 4: 3.90 &micro;m (EUMETSAT, Hourly)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "3 km",
                    "color_table_name": "svgair2",
                    "minutes_between_images": 60
                },
                "band_05": {
                    "product_title": "Band 5: 6.25 &micro;m (EUMETSAT, Hourly)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "3 km",
                    "color_table_name": "svgawvx",
                    "minutes_between_images": 60
                },
                "band_06": {
                    "product_title": "Band 6: 7.35 &micro;m (EUMETSAT, Hourly)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "3 km",
                    "color_table_name": "svgawvx",
                    "minutes_between_images": 60
                },
                "band_07": {
                    "product_title": "Band 7: 8.70 &micro;m (EUMETSAT, Hourly)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "3 km",
                    "color_table_name": "ircimss2",
                    "minutes_between_images": 60
                },
                "band_08": {
                    "product_title": "Band 8: 9.66 &micro;m (EUMETSAT, Hourly)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "3 km",
                    "color_table_name": "ircimss2",
                    "minutes_between_images": 60
                },
                "band_09": {
                    "product_title": "Band 9: 10.80 &micro;m (EUMETSAT, Hourly)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "3 km",
                    "color_table_name": "zehr4a",
                    "minutes_between_images": 60
                },
                "band_10": {
                    "product_title": "Band 10: 12.00 &micro;m (EUMETSAT, Hourly)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "3 km",
                    "color_table_name": "svgair",
                    "minutes_between_images": 60
                },
                "band_11": {
                    "product_title": "Band 11: 13.4 &micro;m (EUMETSAT, Hourly)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "3 km",
                    "color_table_name": "ircimss2",
                    "minutes_between_images": 60
                },
                "multispectral_imagery": {
                    "product_title": "----------MULTISPECTRAL IMAGERY----------"
                },
                "geocolor": {
                    "product_title": "GeoColor (CIRA)",
                    "product_description": "GeoColor imagery provides as close an approximation to daytime True Color imagery as is possible from GOES-16, and thus allows for intuitive interpretation of meteorological and surface-based features. At night, instead of being dark like in other visible bands, an IR-based multispectral product is provided that differentiates between low liquid water clouds and higher ice clouds. A static city lights database derived from the VIIRS Day Night Band is provided as the nighttime background for geo-referencing. More info: <a href='http://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_CIRA_Geocolor_20171019.pdf' target='_blank'>http://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_CIRA_Geocolor_20171019.pdf</a>",
                    "zoom_level_adjust": 0,
                    "resolution": "1 km",
                    "color_table_name": ""
                },
                "split_window_difference_10_3-12_3": {
                    "product_title": "Split Window Difference (10.7 &micro;m - 12.0 &micro;m)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "3 km",
                    "color_table_name": ""
                },
                "split_window_difference_dust": {
                    "product_title": "Split Window Difference Dust (10.7 &micro;m - 12.0 &micro;m)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "3 km",
                    "color_table_name": ""
                },
                "split_window_difference_grayscale": {
                    "product_title": "Split Window Difference Grayscale (10.7 &micro;m - 12.0 &micro;m)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "3 km",
                    "color_table_name": ""
                },
                "multispectral_rgb_composites": {
                    "product_title": "----------MULTISPECTRAL RGB COMPOSITES----------"
                },
                "natural_color": {
                    "product_title": "Natural Color (EUMETSAT)",
                    "product_description": "In AWIPS, referred to as 'Day Land Cloud'.",
                    "zoom_level_adjust": 0,
                    "resolution": "1 km",
                    "color_table_name": ""
                },
                "rgb_air_mass": {
                    "product_title": "Airmass (EUMETSAT)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "2 km",
                    "color_table_name": "rgb_air_mass"
                },
                "jma_day_cloud_phase_distinction_rgb": {
                    "product_title": "Day Cloud Phase Distinction (JMA)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "1 km",
                    "color_table_name": "jma_day_cloud_phase_distinction_rgb"
                },
                "eumetsat_nighttime_microphysics": {
                    "product_title": "Nighttime Microphysics (EUMETSAT)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "2 km",
                    "color_table_name": ""
                },
                "day_snow_fog": {
                    "product_title": "Day Snow/Fog (EUMETSAT/NASA SPoRT)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "1 km",
                    "color_table_name": ""
                },
                "awips_dust": {
                    "product_title": "Dust (EUMETSAT)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "2 km",
                    "color_table_name": ""
                },
                "fire_temperature": {
                    "product_title": "Fire Temperature (CIRA)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "2 km",
                    "color_table_name": ""
                },
                "cira_natural_fire_color": {
                    "product_title": "Natural Color-Fire (CIRA)",
                    "product_description": "In AWIPS, referred to as 'Day Land Cloud Fire'.",
                    "zoom_level_adjust": 0,
                    "resolution": "1 km",
                    "color_table_name": ""
                },
                "eumetsat_ash": {
                    "product_title": "Ash (EUMETSAT)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "2 km",
                    "color_table_name": ""
                }
            }
        },
        "jpss": {
            "satellite_title": "JPSS (SNPP, N20; Global)",
            "imagery_resolutions": {
                "0": "12 km",
                "1": "6 km",
                "2": "3 km",
                "3": "1.5 km",
                "4": "750 m",
                "5": "375 m",
                "6": "187.5 m",
                "7": "93.75 m"
            },
            "default_sector": "northern_hemisphere",
            "sectors": {
                "northern_hemisphere": {
                    "sector_title": "Northern Hemisphere",
                    "max_zoom_level": 5,
                    "tile_size": 1000,
                    "default_product": "cira_geocolor",
                    "defaults": {
                        "minutes_between_images": 51
                    },
                    "navigation": {
                        "up": {
                            "satellite": "meteosat-8",
                            "sector": "full_disk"
                        },
                        "right": {
                            "satellite": "goes-16",
                            "sector": "full_disk"
                        },
                        "left": {
                            "satellite": "himawari",
                            "sector": "full_disk"
                        },
                        "down": {
                            "satellite": "goes-17",
                            "sector": "full_disk"
                        }
                    },
                    "missing_maps": ["airports", "cities", "city_lights", "coastlines", "counties", "countries", "lakes", "nws_county_warning_areas", "rivers", "roads", "states"],
                    "white_maps_only": true
                },
                "southern_hemisphere": {
                    "sector_title": "Southern Hemisphere",
                    "max_zoom_level": 5,
                    "tile_size": 1000,
                    "default_product": "cira_geocolor",
                    "defaults": {
                        "minutes_between_images": 51
                    },
                    "navigation": {
                        "up": {
                            "satellite": "goes-17",
                            "sector": "full_disk"
                        },
                        "right": {
                            "satellite": "goes-16",
                            "sector": "full_disk"
                        },
                        "left": {
                            "satellite": "himawari",
                            "sector": "full_disk"
                        },
                        "down": {
                            "satellite": "meteosat-11",
                            "sector": "full_disk"
                        }
                    },
                    "missing_products": ["retrieval_products", "cira_nucaps_cold_air_aloft"],
                    "missing_maps": ["airports", "cities", "city_lights", "coastlines", "counties", "countries", "lakes", "nws_county_warning_areas", "rivers", "roads", "states"],
                    "white_maps_only": true
                }
            },
            "products": {
                "individual_viirs_bands": {
                    "product_title": "----------INDIVIDUAL VIIRS BANDS----------"
                },
                "day_night_band": {
                    "product_title": "Day/Night Band: 0.7 &micro;m (&quot;Low Light Visible&quot;)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": " km",
                    "color_table_name": ""
                },
                "band_m01": {
                    "product_title": "Band M1: 0.412 &micro;m (&quot;Violet-Blue&quot;)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": " km",
                    "color_table_name": ""
                },
                "band_m02": {
                    "product_title": "Band M2: 0.445 &micro;m (&quot;Deep Blue&quot;)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": " km",
                    "color_table_name": ""
                },
                "band_m03": {
                    "product_title": "Band M3: 0.488 &micro;m (&quot;Blue&quot;)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": " km",
                    "color_table_name": ""
                },
                "band_m04": {
                    "product_title": "Band M4: 0.555 &micro;m (&quot;Green&quot;)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": " km",
                    "color_table_name": ""
                },
                "band_m05": {
                    "product_title": "Band M5: 0.672 &micro;m (&quot;Red&quot;)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": " km",
                    "color_table_name": ""
                },
                "band_m06": {
                    "product_title": "Band M6: 0.746 &micro;m (&quot;Atmospheric Correction&quot;)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": " km",
                    "color_table_name": ""
                },
                "band_m07": {
                    "product_title": "Band M7: 0.865 &micro;m (&quot;Veggie&quot;)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": " km",
                    "color_table_name": ""
                },
                "band_m08": {
                    "product_title": "Band M8: 1.240 &micro;m (&quot;Cloud/Snow&quot;)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": " km",
                    "color_table_name": ""
                },
                "band_m09": {
                    "product_title": "Band M9: 1.378 &micro;m (&quot;Cirrus&quot;)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": " km",
                    "color_table_name": ""
                },
                "band_m10": {
                    "product_title": "Band M10: 1.61 &micro;m (&quot;Snow/Ice&quot;)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": " km",
                    "color_table_name": ""
                },
                "band_m11": {
                    "product_title": "Band M11: 2.25 &micro;m (&quot;Cloud Particle Size&quot;)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": " km",
                    "color_table_name": ""
                },
                "band_m12": {
                    "product_title": "Band M12: 3.7 &micro;m (&quot;Shortwave IR Window&quot;)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": " km",
                    "color_table_name": ""
                },
                "band_m13": {
                    "product_title": "Band M13: 4.05 &micro;m (&quot;Fire Detection&quot;)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": " km",
                    "color_table_name": ""
                },
                "band_m14": {
                    "product_title": "Band M14: 8.55 &micro;m (&quot;Cloud Top Phase&quot;)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": " km",
                    "color_table_name": "ircimss2"
                },
                "band_m15": {
                    "product_title": "Band M15: 10.763 &micro;m (&quot;Clean IR Longwave Window&quot;)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": " km",
                    "color_table_name": "ircimss2"
                },
                "band_m16": {
                    "product_title": "Band M16: 12.013 &micro;m (&quot;Dirty IR Longwave Window&quot;)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": " km",
                    "color_table_name": "ircimss2"
                },
                "band_i01": {
                    "product_title": "Band I1: 0.64 &micro;m (&quot;Red/Visible&quot;)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": " km",
                    "color_table_name": ""
                },
                "band_i02": {
                    "product_title": "Band I2: 0.865 &micro;m (&quot;Veggie&quot;)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": " km",
                    "color_table_name": ""
                },
                "band_i03": {
                    "product_title": "Band I3: 1.61 &micro;m (&quot;Snow/Ice&quot;)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": " km",
                    "color_table_name": ""
                },
                "band_i04": {
                    "product_title": "Band I4: 3.74 &micro;m (&quot;Shortwave IR Window&quot;)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": " km",
                    "color_table_name": ""
                },
                "band_i05": {
                    "product_title": "Band I5: 11.45 &micro;m (&quot;Longwave IR Window&quot;)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": " km",
                    "color_table_name": "ircimss2"
                },
                "multispectral_imagery": {
                    "product_title": "----------MULTISPECTRAL IMAGERY----------"
                },
                "cira_geocolor": {
                    "product_title": "GeoColor (CIRA)",
                    "product_description": "GeoColor imagery provides as close an approximation to daytime True Color imagery as is possible from GOES-16, and thus allows for intuitive interpretation of meteorological and surface-based features. At night, instead of being dark like in other visible bands, an IR-based multispectral product is provided that differentiates between low liquid water clouds and higher ice clouds. A static city lights database derived from the VIIRS Day Night Band is provided as the nighttime background for geo-referencing. More info: <a href='http://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_CIRA_Geocolor_20171019.pdf' target='_blank'>http://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_CIRA_Geocolor_20171019.pdf</a>",
                    "zoom_level_adjust": 1,
                    "resolution": " km",
                    "color_table_name": ""
                },
                "cira_debra_dust": {
                    "product_title": "Dust - DEBRA (CIRA)",
                    "product_description": "More info: <a href='http://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DEBRA-Dust_20210217.pdf' target='_blank'>http://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DEBRA-Dust_20210217.pdf</a>",
                    "zoom_level_adjust": 0,
                    "resolution": "",
                    "color_table_name": ""
                },
                "cira_high_low_cloud_and_snow": {
                    "product_title": "Snow/Cloud-Layers (CIRA)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": "",
                    "color_table_name": "cira_high_low_cloud_and_snow"
                },
                "split_window_difference_10_7-12_0": {
                    "product_title": "Split Window Difference (10.7 &micro;m - 12.0 &micro;m)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": " km",
                    "color_table_name": ""
                },
                "split_window_difference_dust": {
                    "product_title": "Split Window Difference Dust (10.3 &micro;m - 12.3 &micro;m)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": ""
                },
                "split_window_difference_grayscale": {
                    "product_title": "Split Window Difference Grayscale (10.3 &micro;m - 12.3 &micro;m)",
                    "product_description": "",
                    "zoom_level_adjust": 2,
                    "resolution": "2 km",
                    "color_table_name": ""
                },
                "multispectral_rgb_composites": {
                    "product_title": "----------MULTISPECTRAL RGB COMPOSITES----------"
                },
                "eumetsat_natural_color": {
                    "product_title": "Natural Color (EUMETSAT)",
                    "product_description": "In AWIPS, referred to as 'Day Land Cloud'.",
                    "zoom_level_adjust": 1,
                    "resolution": " km",
                    "color_table_name": ""
                },
                "jma_day_cloud_phase_distinction_rgb": {
                    "product_title": "Day Cloud Phase Distinction (JMA)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": " km",
                    "color_table_name": "jma_day_cloud_phase_distinction_rgb"
                },
                "eumetsat_nighttime_microphysics": {
                    "product_title": "Nighttime Microphysics (EUMETSAT)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": " km",
                    "color_table_name": ""
                },
                "day_snow_fog": {
                    "product_title": "Day Snow/Fog (EUMETSAT/NASA SPoRT)",
                    "product_description": "",
                    "zoom_level_adjust": 0,
                    "resolution": " km",
                    "color_table_name": ""
                },
                "eumetsat_dust": {
                    "product_title": "Dust (EUMETSAT)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": " km",
                    "color_table_name": ""
                },
                "fire_temperature": {
                    "product_title": "Fire Temperature (CIRA)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": " km",
                    "color_table_name": ""
                },
                "cira_natural_fire_color": {
                    "product_title": "Natural Color-Fire (CIRA)",
                    "product_description": "In AWIPS, referred to as 'Day Land Cloud Fire'.",
                    "zoom_level_adjust": 0,
                    "resolution": " km",
                    "color_table_name": ""
                },
                "eumetsat_ash": {
                    "product_title": "Ash (EUMETSAT)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": " km",
                    "color_table_name": ""
                },
                "cira_snowmelt": {
                    "product_title": "Snowmelt RGB (CIRA)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": " km",
                    "color_table_name": ""
                },
                "meteofrance_snow": {
                    "product_title": "Snow RGB (MeteoFrance)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": " km",
                    "color_table_name": ""
                },
                "cloud_products": {
                    "product_title": "----------CLOUD PRODUCTS----------"
                },
                "cloud_top_height_cira_clavr-x": {
                    "product_title": "Cloud-Top Height (NOAA)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": "2 km",
                    "color_table_name": "cloud_top_height_cira_clavr-x"
                },
                "cloud_geometric_thickness_cira_clavr-x": {
                    "product_title": "Cloud Geometric Thickness (CIRA/NOAA)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": "2 km",
                    "color_table_name": "cloud_geometric_thickness_cira_clavr-x"
                },
                "cloud_optical_thickness_cira_clavr-x": {
                    "product_title": "Cloud Optical Depth (NOAA)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": "2 km",
                    "color_table_name": "cloud_optical_thickness_cira_clavr-x_and_cloud_effective_radius_cira_clavr-x"
                },
                "cloud_effective_radius_cira_clavr-x": {
                    "product_title": "Cloud-Top Effective Particle Size (NOAA)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": "2 km",
                    "color_table_name": "cloud_optical_thickness_cira_clavr-x_and_cloud_effective_radius_cira_clavr-x"
                },
                "cloud_top_altitude_cira_clavr-x": {
                    "product_title": "Cloud Top Altitude (NOAA)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": " km",
                    "color_table_name": "cloud_top_altitude_cira_clavr-x_and_cloud_base_altitude_cira_clavr-x"
                },
                "cloud_base_altitude_cira_clavr-x": {
                    "product_title": "Cloud Base Altitude (CIRA/NOAA)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": " km",
                    "color_table_name": "cloud_top_altitude_cira_clavr-x_and_cloud_base_altitude_cira_clavr-x"
                },
                "cloud_phase_cira_clavr-x": {
                    "product_title": "Cloud Phase (NOAA)",
                    "product_description": "Cloud Top Phase using IR bands (<a href='https://www.star.nesdis.noaa.gov/jpss/documents/ATBD/ATBD_EPS_Cloud_CldType_v2.0.pdf' target='_blank'>https://www.star.nesdis.noaa.gov/jpss/documents/ATBD/ATBD_EPS_Cloud_CldType_v2.0.pdf</a>). LTMP represents 'Supercooled Liquid water topped Mixed Phase' from CIRA's daytime sub-cloud phase detection based on differential reflectance ratios between 1.6 &micro;m and 2.2 &micro;m for liquid and ice (Miller et al. 2014 JGR; Noh et al. 2019 JGR).",
                    "zoom_level_adjust": 1,
                    "resolution": " km",
                    "color_table_name": "cloud_phase_cira_clavr-x"
                },
                "flight_level_based_cloud_layers_rgb_cira_clavr-x": {
                    "product_title": "Flight Level-Based Cloud Layers RGB (CIRA/NOAA)",
                    "product_description": "",
                    "zoom_level_adjust": 1,
                    "resolution": " km",
                    "color_table_name": "flight_level_based_cloud_layers_rgb_cira_clavr-x"
                },
                "retrieval_products": {
                    "product_title": "----------RETRIEVAL PRODUCTS----------"
                },
                "cira_nucaps_cold_air_aloft": {
                    "product_title": "NUCAPS Cold Air Aloft (CIRA)",
                    "product_description": "If the air outside jet aircraft is cold enough, fuel flow may be restricted either by the fuel itself beginning to gel, or by the formation of ice crystals from any water in the fuel. For most planes, temperatures below -65 C are cause for concern. This product monitors the northern hemisphere between 100 hPa and 700 hPa for temperatures dropping below -65 C. A '+' sign indicates where the cold conditions exist below Flight Level 450 (approximately 45,000 ft). The vertical temperature profile information comes from the NOAA Unique Combined Atmospheric Processing System (NUCAPS) algorithm applied to the CrIS and ATMS instruments aboard S-NPP.",
                    "zoom_level_adjust": 2,
                    "resolution": " km",
                    "color_table_name": "cira_nucaps_cold_air_aloft"
                }
            }
        }
    }
};
