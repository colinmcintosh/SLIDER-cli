    // Set up JSON object for all the sectors
    var json =
        {
            "number_of_images_options": [6, 12, 14, 18, 24, 28, 30, 36, 42, 48, 54, 56, 60],
            "time_step_options": [1, 2, 3, 4, 6, 8, 12, 18, 24, 36, 48, 96],
            "default_satellite": "goes-19",
            "defaults": {
                "starting_opacity": 0.5,
                "zoom_level_adjust": 0,
                "max_zoom_level": 5,
                "colors": {
                    "nasa_svs_center": "gold",
                    "nasa_svs_duration": "pink",
                    "nasa_svs_upath_lo": "black",
                    "nasa_svs_umbra_lo": "orange",
                    "nasa_svs_ppath": "lime",
                    "nasa_svs_ppath01": "purple",
                    "borders": "white",
                    "lat": "white",
                    "city_lights": "sodium",
                    "cities": "white",
                    "airports": "purple",
                    "counties": "gold",
                    "county_labels": "gold",
                    "roads": "purple",
                    "rivers": "teal",
                    "lakes": "blue",
                    "nws_county_warning_areas": "gold",
                    "mesoscale_boxes": "yellow",
                    "states": "gold",
                    "state_labels": "gold",
                    "countries": "gold",
                    "country_labels": "gold",
                    "coastlines": "gold"
                },
                "maps": {
                    "nasa_svs_center": "2024 Eclipse Center (NASA SVS)",
                    "nasa_svs_duration": "2024 Eclipse Maximum Total Duration - 30-Second Intervals (NASA SVS)",
                    "nasa_svs_upath_lo": "2024 Eclipse Umbra Path Shape (NASA SVS)",
                    "nasa_svs_umbra_lo": "2024 Eclipse Umbra Polygons - 10-Second Intervals (NASA SVS)",
                    "nasa_svs_ppath": "2024 Eclipse Penumbra Path - 5% Intervals (NASA SVS)",
                    "nasa_svs_ppath01": "2024 Eclipse Penumbra Path - 1% Intervals (NASA SVS)",
                    "borders": "Default Borders",
                    "lat": "Lat/Lo(n)",
                    "city_lights": "City Lights",
                    "cities": "Cities",
                    "airports": "Airports",
                    "counties": "U.S. Counties",
                    "county_labels": "U.S. County Labels",
                    "roads": "Roads",
                    "rivers": "Rivers",
                    "lakes": "Lakes",
                    "nws_county_warning_areas": "NWS CWAs",
                    "mesoscale_boxes": "Mesoscale Sector Outlines",
                    "states": "States/Provinces",
                    "state_labels": "State/Province Labels",
                    "countries": "Countries",
                    "country_labels": "Country Labels",
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
            "ignore_white_maps_only": [ "city_lights" ],
            "draw_colors": {
                "White": "#FFFFFF",
                "Silver": "#C0C0C0",
                "Slate": "#708090",
                "Black": "#000000",
                "Pink": "#FF1493",
                "Red": "#FF0000",
                "Maroon": "#800000",
                "Orange": "#FF8C00",
                "Yellow": "#FFFF00",
                "Gold": "#FFD700",
                "Brown": "#A0522D",
                "Lime": "#00FF00",
                "Green": "#008000",
                "Teal": "#00BFFF",
                "Blue": "#0000FF",
                "Purple": "#800080"
            },
            "draw_widths": [ 2, 4, 6, 12, 18, 24 ],
            "default_draw_color": "Gold",
            "default_draw_width": 6,
            "satellites": {
                "goes-19": {
                    "satellite_title": "GOES-19 (East; 75.2W)",
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
                                "lon0": -75.0,
                                "sat_alt": 42171.7,
                                "max_rad_x": 0.151337,
                                "max_rad_y": 0.150988,
                                "disk_radius_x_z0": 338,
                                "disk_radius_y_z0": 337,
                                "decimal_places": 2,
                                "scale_bar_min_zoom": 3
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
                                    "satellite": "goes-18",
                                    "sector": "full_disk"
                                },
                                "down": {
                                    "satellite": "jpss",
                                    "sector": "southern_hemisphere"
                                }
                            },
                            "missing_products": [
                                "mrms_products",
                                "mrms_merged_base_reflectivity_qc",
                                "mrms_reflectivity_at_lowest_altitude",
                                "mrms_radar_precipitation_accumulation_01-hour",
                                "mrms_lightning_probability_0-30-min_nldn",
                                "mrms_precip_flag",
                                "mrms_radar_precipitation_rate",
                                "cira_octane_speed_sandwich",
                                "cira_octane_speed_sandwich_barbs",
                                "cira_octane_ctcd_sandwich",
                                "cira_geosnow",
                                "cira_octane_direction_sandwich",
                                "cira_proxy_visible_experimental",
                                "products_under_development"
                            ]
                        },
                        "conus": {
                            "sector_title": "CONUS",
                            "max_zoom_level": 4,
                            "tile_size": 625,
                            "default_product": "geocolor",
                            "defaults": {
                                "minutes_between_images": 5
                            },
                            "missing_products": [
                                "cira_proxy_visible_experimental",
                                "cira_proxy_visible",
                                "cira_single_channel_proxyvis",
                                "reprojections",
                                "cira_ncoda_sea_surface_temperature",
                                "cira_ncoda_sea_surface_salinity",
                                "cira_ncoda_ocean_heat_content",
                                "cira_ocean_dynamic_depth_averaged_temperature",
                                "microwave_products",
                                "cira_blended_tpw",
                                "cira_advected_layered_precipitable_water_surface-850hPa",
                                "cira_advected_layered_precipitable_water_850-700hPa",
                                "cira_advected_layered_precipitable_water_700-500hPa",
                                "cira_advected_layered_precipitable_water_500-300hPa",
                                "products_under_development",
                                "cira_octane_speed_sandwich",
                                "cira_octane_speed_sandwich_barbs",
                                "cira_octane_ctcd_sandwich",
                                "level_2_products",
                                "acspo_sst",
                                "spm_37color",
                                "spm_89pct",
                                "cira_octane_direction_sandwich",
                                "gremlin",
                                "level_2_products",
                                "mrms_lightning_probability_0-30-min_nldn",
                                "cira_cloud_free_band_08",
                                "cira_cloud_free_band_09",
                                "cira_cloud_free_band_10",
                                "cira_layer_vapor_transport_surface-850hPa",
                                "cira_layer_vapor_transport_850-700hPa",
                                "cira_layer_vapor_transport_700-500hPa",
                                "cira_layer_vapor_transport_500-300hPa"
                            ],
                            "missing_maps": [
                                "mesoscale_boxes"
                            ],
                            "products": {
                                "geocolor": {
                                    "zoom_level_adjust": 0
                                },
                                "cira_geosst": {
                                    "zoom_level_adjust": 0
                                },
                                "cira_geoproxy": {
                                    "zoom_level_adjust": 0
                                },
                                "cira_geodust": {
                                    "zoom_level_adjust": 0
                                },
                                "cira_geodebra": {
                                    "zoom_level_adjust": 0
                                },
                                "cira_geosnow": {
                                    "zoom_level_adjust": 0
                                },
                                "cira_geofire": {
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
                            "missing_products": [
                                "reprojections",
                                "cira_ncoda_sea_surface_temperature",
                                "cira_ncoda_sea_surface_salinity",
                                "cira_ncoda_ocean_heat_content",
                                "cira_ocean_dynamic_depth_averaged_temperature",
                                "mrms_products",
                                "mrms_merged_base_reflectivity_qc",
                                "mrms_reflectivity_at_lowest_altitude",
                                "mrms_radar_precipitation_accumulation_01-hour",
                                "mrms_lightning_probability_0-30-min_nldn",
                                "mrms_precip_flag",
                                "mrms_radar_precipitation_rate",
                                "cira_proxy_visible_experimental",
                                "cira_proxy_visible",
                                "cira_single_channel_proxyvis",
                                "microwave_products",
                                "cira_blended_tpw",
                                "cira_advected_layered_precipitable_water_surface-850hPa",
                                "cira_advected_layered_precipitable_water_850-700hPa",
                                "cira_advected_layered_precipitable_water_700-500hPa",
                                "cira_advected_layered_precipitable_water_500-300hPa",
                                "cira_geosnow",
                                "level_2_products",
                                "acspo_sst",
                                "spm_37color",
                                "spm_89pct",
                                "band_09_alternate",
                                "gremlin",
                                "level_2_products",
                                "cira_cloud_free_band_08",
                                "cira_cloud_free_band_09",
                                "cira_cloud_free_band_10",
                                "cira_layer_vapor_transport_surface-850hPa",
                                "cira_layer_vapor_transport_850-700hPa",
                                "cira_layer_vapor_transport_700-500hPa",
                                "cira_layer_vapor_transport_500-300hPa"
                            ],
                            "products": {
                                "geocolor": {
                                    "zoom_level_adjust": 0
                                }
                            },
                            "missing_maps": [
                                "city_lights",
                                "mesoscale_boxes"
                            ]
                        },
                        "mesoscale_02": {
                            "sector_title": "Mesoscale 2",
                            "max_zoom_level": 2,
                            "tile_size": 500,
                            "defaults": {
                                "minutes_between_images": 1
                            },
                            "default_product": "geocolor",
                            "missing_products": [
                                "reprojections",
                                "cira_ncoda_sea_surface_temperature",
                                "cira_ncoda_sea_surface_salinity",
                                "cira_ncoda_ocean_heat_content",
                                "cira_ocean_dynamic_depth_averaged_temperature",
                                "mrms_products",
                                "mrms_merged_base_reflectivity_qc",
                                "mrms_reflectivity_at_lowest_altitude",
                                "mrms_radar_precipitation_accumulation_01-hour",
                                "mrms_lightning_probability_0-30-min_nldn",
                                "mrms_precip_flag",
                                "mrms_radar_precipitation_rate",
                                "cira_proxy_visible_experimental",
                                "cira_proxy_visible",
                                "cira_single_channel_proxyvis",
                                "microwave_products",
                                "cira_blended_tpw",
                                "cira_advected_layered_precipitable_water_surface-850hPa",
                                "cira_advected_layered_precipitable_water_850-700hPa",
                                "cira_advected_layered_precipitable_water_700-500hPa",
                                "cira_advected_layered_precipitable_water_500-300hPa",
                                "cira_geosnow",
                                "level_2_products",
                                "acspo_sst",
                                "spm_37color",
                                "spm_89pct",
                                "band_09_alternate",
                                "gremlin",
                                "level_2_products",
                                "cira_cloud_free_band_08",
                                "cira_cloud_free_band_09",
                                "cira_cloud_free_band_10",
                                "cira_layer_vapor_transport_surface-850hPa",
                                "cira_layer_vapor_transport_850-700hPa",
                                "cira_layer_vapor_transport_700-500hPa",
                                "cira_layer_vapor_transport_500-300hPa"
                            ],
                            "products": {
                                "geocolor": {
                                    "zoom_level_adjust": 0
                                }
                            },
                            "missing_maps": [
                                "city_lights",
                                "mesoscale_boxes"
                            ]
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
                        "level_2_products": {
                            "product_title": "----------LEVEL 2 PRODUCTS----------"
                        },
                        "acspo_sst": {
                            "product_title": "ACSPO SST (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "geosst"
                        },
                        "gremlin": {
                            "product_title": "GREMLIN (CIRA)",
                            "product_description": "GREMLIN (GOES Radar Estimation via Machine Learning to Inform NWP) provides synthetic composite radar reflectivity fields from GOES ABI and GLM data fusion using a convolutional neural network trained to match the Multi-Radar Multi-Sensor (MRMS) product. GREMLIN is primarily responding to information coming from (1) presence of lightning, (2) cold brightness temperatures, (3) strong brightness temperature gradients, (4) shortwave-longwave differences to see through thin cirrus, and (5) longwave-water vapor differences to identify deep convection.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "mrms_merged_base_reflectivity_qc"
                        },
                        "multispectral_imagery": {
                            "product_title": "----------MULTISPECTRAL IMAGERY----------"
                        },
                        "geocolor": {
                            "product_title": "GeoColor (CIRA)",
                            "product_description": "GeoColor imagery provides as close an approximation to daytime True Color imagery as is possible from GOES-16, and thus allows for intuitive interpretation of meteorological and surface-based features. At night, instead of being dark like in other visible bands, an IR-based multispectral product is provided that differentiates between low liquid water clouds and higher ice clouds. A static city lights database derived from the VIIRS Day Night Band is provided as the nighttime background for geo-referencing. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_CIRA_Geocolor_20171019.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_CIRA_Geocolor_20171019.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": ""
                        },
                        "cira_geosst": {
                            "product_title": "GeoSST (CIRA)",
                            "product_description": "a blend of GeoColor and the ABI L2 Sea Surface Temperature product requested by NWS/OPC.",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "geosst"
                        },
                        "cira_proxy_visible": {
                            "product_title": "ProxyVis (CIRA)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "0.5 km",
                            "color_table_name": "lowlight4"
                        },
                        "cira_single_channel_proxyvis": {
                            "product_title": "Single-Channel ProxyVis",
                            "product_description": "https://rammb2.cira.colostate.edu/research/goes-r-research/proxyvis/",
                            "zoom_level_adjust": 0,
                            "resolution": "0.5 km",
                            "color_table_name": "lowlight4"
                        },
                        "cira_geoproxy": {
                            "product_title": "GeoProxy (CIRA)",
                            "product_description": "A blend of GeoColor and ProxyVis to improve low cloud detection at night over the ocean.",
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
                            "product_description": "More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DEBRA-Dust_20210217.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DEBRA-Dust_20210217.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "abi_debra"
                        },
                        "cira_geodebra": {
                            "product_title": "GeoDEBRA (CIRA)",
                            "product_description": "A blend of GeoColor and DEBRA that also highlights dust in yellow.",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "abi_debra"
                        },
                        "cira_cloud_snow_discriminator": {
                            "product_title": "Snow/Cloud (CIRA)",
                            "product_description": "More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/GOES_Cloud_Snow_Discriminator_Quick_Guide_20190814.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/GOES_Cloud_Snow_Discriminator_Quick_Guide_20190814.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "cira_cloud_snow_discriminator"
                        },
                        "cira_high_low_cloud_and_snow": {
                            "product_title": "Snow/Cloud-Layers (CIRA)",
                            "product_description": "More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/GOES_Cloud_Snow_Discriminator_Quick_Guide_20190814.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/GOES_Cloud_Snow_Discriminator_Quick_Guide_20190814.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "cira_high_low_cloud_and_snow"
                        },
                        "split_window_difference_10_3-12_3": {
                            "product_title": "Split Window Difference (10.3 &micro;m - 12.3 &micro;m)",
                            "product_description": "The Split Window Difference has a variety of meteorological applications, and is leveraged in several multispectral and derived products. The primary applications are related to the relative sensitivity of the 10.3 &micro;m channel to absorption by dust particles, and the relative sensitivity of the 12.3 &micro;m channel to absorption by water vapor. In this version, blowing dust will appear as magenta (negative values). In clear sky conditions with a positive lapse rate, colors progressing from blue to green to yellow to red (higher positive values) represent greater amounts of low-level moisture. Very thin cirrus clouds, including contrails, appear as red to white (high positive values). Volcanic ash will appear very similarly to dust.<br /><br />More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_SplitWindowDifference.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_SplitWindowDifference.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "split_window_difference_10_3-12_3"
                        },
                        "split_window_difference_dust": {
                            "product_title": "Split Window Difference Dust (10.3 &micro;m - 12.3 &micro;m)",
                            "product_description": "The Split Window Difference has a variety of meteorological applications, and is leveraged in several multispectral and derived products. The primary applications are related to the relative sensitivity of the 10.3 &micro;m channel to absorption by dust particles, and the relative sensitivity of the 12.3 &micro;m channel to absorption by water vapor. In this version, areas of likely blowing dust are highlighted as non-gray colors, while the rest of the scene is grayscale. Volcanic ash will appear very similarly to dust.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "split_window_difference_dust"
                        },
                        "cira_geodust": {
                            "product_title": "GeoDust (CIRA)",
                            "product_description": "A blend of GeoColor and the Split Window Difference product that highlights dust.",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "abi_debra"
                        },
                        "split_window_difference_grayscale": {
                            "product_title": "Split Window Difference Grayscale (10.3 &micro;m - 12.3 &micro;m)",
                            "product_description": "The Split Window Difference has a variety of meteorological applications, and is leveraged in several multispectral and derived products. The primary applications are related to the relative sensitivity of the 10.3 &micro;m channel to absorption by dust particles, and the relative sensitivity of the 12.3 &micro;m channel to absorption by water vapor. In this version, blowing dust will appear as a relatively dark gray to black (negative values). In clear sky conditions with a positive lapse rate, progressively lighter shades of gray (higher positive values) represent greater amounts of low-level moisture. Very thin cirrus clouds, including contrails, appear as white (high positive values). Volcanic ash will appear very similarly to dust.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "split_window_difference_grayscale"
                        },
                        "cira_geosnow": {
                            "product_title": "GeoSnow (CIRA) ",
                            "product_description": "GeoSnow combines a snow mask derived from the Snow/Cloud-Layers product with GeoColor to track snow at night. In this product, snow at night appears cyan, in contrast to low clouds (light blue) and high clouds (grayscale). During the day, this product is identical to GeoColor.",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": ""
                        },
                        "cira_geofire": {
                            "product_title": "GeoFire (CIRA)",
                            "product_description": "This product is a blend of GeoColor with the Fire Temperature RGB to highlight fires and other hot spots. Active fires and other pixels with significant hot spots will appear with the coloration of the Fire Temperature RGB, while surrounding pixels appear as in GeoColor. This product uses the GeoProxy algorithm at night to improve low cloud detection over water surfaces.",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": ""
                        },
                        "multispectral_rgb_composites": {
                            "product_title": "----------MULTISPECTRAL RGB COMPOSITES----------"
                        },
                        "natural_color": {
                            "product_title": "Day Land Cloud (EUMETSAT)",
                            "product_description": "The Day Land Cloud RGB is the same as the Natural Color RGB by EUMETSAT, and is useful for discriminating between high ice clouds and low water clouds. High ice clouds, snow, and sea ice appear cyan while low water clouds appear dull grey or white. This imagery can also be used to assess vegetation and detect land surface changes. In AWIPS, referred to as 'Day Land Cloud'. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_daylandcloudRGB_final.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_daylandcloudRGB_final.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": ""
                        },
                        "rgb_air_mass": {
                            "product_title": "Airmass (EUMETSAT)",
                            "product_description": "The Air Mass RGB is used to diagnose the environment surrounding synoptic systems. Cyclogenesis can be inferred by the identification of warm, dry, ozone-rich descending stratospheric air associated with jet streams and potential vorticity anomalies. This RGB can distinguish between polar and tropical air masses, especially along upper-level frontal boundaries and identify high-, mid-, and low-level clouds. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_AirMassRGB_final.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_AirMassRGB_final.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "rgb_air_mass"
                        },
                        "jma_day_cloud_phase_distinction_rgb": {
                            "product_title": "Day Cloud Phase Distinction (JMA)",
                            "product_description": "This RGB is used to evaluate the phase of cooling cloud tops to monitor convective initiation, storm growth, and decay. It can also be used to identify snow on the ground. The Day Cloud Phase Distinction RGB takes advantage of cloud reflectance differences between the visible and near infrared channels and temperature variances between land and clouds in the infrared to provide increased contrast between background surfaces and phases of clouds (i.e. water vs. ice). More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/Day_Cloud_Phase_Distinction.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/Day_Cloud_Phase_Distinction.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "jma_day_cloud_phase_distinction_rgb"
                        },
                        "day_cloud_phase_microphysics_rgb": {
                            "product_title": "Day Cloud Phase Microphysics (EUMETSAT)",
                            "product_description": "The Day Cloud Phase Microphysics RGB (also known simply as Cloud Phase RGB) is useful for determining cloud phase and cloud particle size during the daytime. Ice clouds will appear blue, with lighter blue indicating small ice particles and darker blue indicating large ice particles. Liquid clouds will vary from cream-colored to pink to purple depending on droplet size, with cream-colored clouds having small liquid droplets and purple indicating very large droplet sizes. The background land surface will appear yellow to brown based on vegetation. Snow and ice-cover will appear dark blue. Depending on instrument resolution and fire intensity, fires may appear and will show up as bright green or lime green.  More info: https://eumetrain.org/sites/default/files/2023-01/CloudPhaseRGB.pdf ",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": ""
                        },
                        "eumetsat_nighttime_microphysics": {
                            "product_title": "Nighttime Microphysics (EUMETSAT)",
                            "product_description": "More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_NtMicroRGB_Final_20191206.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_NtMicroRGB_Final_20191206.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "eumetsat_nighttime_microphysics"
                        },
                        "day_snow_fog": {
                            "product_title": "Day Snow/Fog (EUMETSAT/NASA SPoRT)",
                            "product_description": "Differentiating between snow and clouds in satellite imagery can be challenging due to their similar characteristics and the high reflectivity of both at visible wavelengths.  The Day Snow/Fog RGB combines channels that bring out the distinguishing characteristics of snow (red-orange), ice clouds (shades of pink), and water clouds / fog (shades of yellow). More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DaySnowFogRGB_final_v2.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DaySnowFogRGB_final_v2.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "day_snow_fog"
                        },
                        "awips_dust": {
                            "product_title": "Dust (EUMETSAT)",
                            "product_description": "Dust can be difficult to see in VIS and IR imagery because it is optically thin and can appear similar to certain cloud types. The Dust RGB is able to contrast airborne dust from clouds, as well as land or ocean surfaces, given sufficient thickness/density. Dust appears pink/magenta during the day and can vary in color at night based on height. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/Dust_RGB_Quick_Guide.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/Dust_RGB_Quick_Guide.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "eumetsat_dust"
                        },
                        "cvd_dust_rgb": {
                            "product_title": "CVD Dust RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "dust_fire_rgb": {
                            "product_title": "Dust-Fire RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "fire_temperature": {
                            "product_title": "Fire Temperature (CIRA)",
                            "product_description": "The Fire Temperature RGB can be used to identify where the most intense fires are occurring and differentiate these from “cooler” fires. Fires need to be more intense in order to be detected by the 2.2 and 1.6 &micro;m bands. Small/”cool” fires will only show up at 3.9 &micro;m and appear red while increases in fire intensity cause greater contributions of the other channels resulting in white very intense fires. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/Fire_Temperature_RGB.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/Fire_Temperature_RGB.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "fire_temperature"
                        },
                        "cira_natural_fire_color": {
                            "product_title": "Day Fire (CIRA)",
                            "product_description": "The Day Fire RGB is similar to the original Natural Color RGB by EUMETSAT except the 1.6 &micro;m band used in the red component is replaced with the 2.2 &micro;m band. This change highlights the fire hotspots in red, but also limits the use of the RGB for differentiating water vs. ice clouds (both appear cyan, except for very small particles). In AWIPS, referred to as 'Day Land Cloud Fire'. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_DayLandCloudFireRGB_final.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_DayLandCloudFireRGB_final.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "cira_natural_fire_color"
                        },
                        "eumetsat_ash": {
                            "product_title": "Ash (EUMETSAT)",
                            "product_description": "The Ash RGB can be used to detect and monitor volcanic ash and sulfur dioxide gas. These emissions can be hazardous for public health and aviation activities. The detection of ash plumes (pink/magenta/red) is largely due to the opposite absorption characteristics of ash and ice clouds between the 12.3 and 10.3 &micro;m bands in the red component of the RGB recipe. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/GOES_Ash_RGB.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/GOES_Ash_RGB.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "eumetsat_ash"
                        },
                        "jma_so2": {
                            "product_title": "Volcanic Emissions (SO<sub>2</sub>) RGB (JMA)",
                            "product_description": "Sulfur dioxide (SO<sub>2</sub>) is a gas commonly released during volcanic eruptions. In high concentrations it is toxic to humans and has considerable environmental effects, including volcanic smog and acid rain. The SO<sub>2</sub> RGB can be used to detect and monitor large sulfur dioxide emissions from both volcanoes and industrial facilities.  It can also be used to detect volcanic ash and dust. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/Quick_Guide_SO2_RGB.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/Quick_Guide_SO2_RGB.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "jma_so2"
                        },
                        "eumetsat_tropical_airmass_rgb": {
                            "product_title": "Overshooting Tops RGB (EUMETSAT)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "eumetsat_severe_storms_rgb": {
                            "product_title": "Severe Storms RGB (EUMETSAT)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "ngfs_microphysics": {
                            "product_title": "NGFS Microphysics RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "blowing_snow_rgb": {
                            "product_title": "Blowing Snow RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 1,
                            "resolution": "2 km",
                            "color_table_name": "blowingsnow"
                        },
                        "sea_spray_rgb": {
                            "product_title": "Sea Spray RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 1,
                            "resolution": "2 km",
                            "color_table_name": "seaspray"
                        },
                        "cloud_products": {
                            "product_title": "----------CLOUD PRODUCTS - CLAVR-x----------"
                        },
                        "cloud_top_height_cira_clavr-x": {
                            "product_title": "Cloud-Top Height (NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA. See User Quick Guide for more information: <a href=' http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_BaselineCloudTopHeight.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_BaselineCloudTopHeight.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "cloud_top_height_cira_clavr-x"
                        },
                        "cloud_geometric_thickness_cira_clavr-x": {
                            "product_title": "Cloud Geometric Thickness (CIRA/NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "cloud_geometric_thickness_cira_clavr-x"
                        },
                        "cloud_layers_cira_clavr-x": {
                            "product_title": "Cloud Layers (CIRA/NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.The Cloud Layers are derived from the cloud top information using the predefined flight level thresholds, currently below 10 kft (about 3 km) for the Low layer and above 24 kft (about 7.3 km) for the High layer. The product has been improved to the vertically-extended layers such as H+M (high to mid-levels) or H+M+L (deep cloud) using a cloud geometric thickness/base height retrieval. See User Quick Guide for more information: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2023/08/QuickGuide_GOES_ABI_CCL_cira_31Aug2023.pdf' target='_blank'>https://rammb2.cira.colostate.edu/wp-content/uploads/2023/08/QuickGuide_GOES_ABI_CCL_cira_31Aug2023.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "cloud_layers_cira_clavr-x"
                        },
                        "cloud_optical_thickness_cira_clavr-x": {
                            "product_title": "Cloud Optical Depth (NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "cloud_optical_thickness_cira_clavr-x_and_cloud_effective_radius_cira_clavr-x"
                        },
                        "cloud_effective_radius_cira_clavr-x": {
                            "product_title": "Cloud-Top Effective Particle Size (NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "cloud_optical_thickness_cira_clavr-x_and_cloud_effective_radius_cira_clavr-x"
                        },
                        "cloud_phase_cira_clavr-x": {
                            "product_title": "Cloud Phase (CIRA/NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.Cloud Top Phase using IR bands (<a href='https://www.star.nesdis.noaa.gov/jpss/documents/ATBD/ATBD_EPS_Cloud_CldType_v2.0.pdf' target='_blank'>https://www.star.nesdis.noaa.gov/jpss/documents/ATBD/ATBD_EPS_Cloud_CldType_v2.0.pdf</a>). LTMP represents 'Supercooled Liquid water topped Mixed Phase' from CIRA's daytime sub-cloud phase detection based on differential reflectance ratios between 1.6 &micro;m and 2.2 &micro;m for liquid and ice (Miller et al. 2014 JGR; Noh et al. 2019 JGR).",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "cloud_phase_cira_clavr-x"
                        },
                        "cloud_mask_cira_clavr-x": {
                            "product_title": "Cloud Mask (NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.The cloud mask algorithm is based on 'A Naive Bayesian Cloud-Detection Scheme' by Andrew K. Heidinger (2012, J. Applied Meteorology and Climatology, <a href='https://doi.org/10.1175/JAMC-D-11-02.1' target='_blank' target='_blank'>https://doi.org/10.1175/JAMC-D-11-02.1</a>).",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "cloud_mask_cira_clavr-x"
                        },
                        "geostationary_lightning_mapper": {
                            "product_title": "----------GEOSTATIONARY LIGHTNING MAPPER----------"
                        },
                        "cira_glm_l2_group_energy": {
                            "product_title": "Group Energy Density (CIRA)",
                            "product_description": "Accumulation of GLM Level-2 'Group' energy over ABI's scan duration (1-min for meso, 5-min for conus, 10-min for full-disk), inverse-distance weighted over a given area for each centroid point and normalized to have [pJ/min] for all sectors. See User Quick Guide for more information: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/GLM_Quick_Guide_Detection_Methods_June_2018.pdf' target='_blank' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/GLM_Quick_Guide_Detection_Methods_June_2018.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "cira_glm_l2_group_energy",
                            "starting_opacity": 1
                        },
                        "cira_glm_l2_group_counts": {
                            "product_title": "Group Flash Count Density (CIRA)",
                            "product_description": "Accumulated counts of GLM Level-2 'Group' area over ABI's scan duration (1-min for meso, 5-min for conus, 10-min for full-disk). See User Quick Guide for more information: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/GLM_Quick_Guide_Detection_Methods_June_2018.pdf' target='_blank' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/GLM_Quick_Guide_Detection_Methods_June_2018.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "cira_glm_l2_group_counts",
                            "starting_opacity": 1
                        },
                        "microwave_products": {
                            "product_title": "----------MICROWAVE PRODUCTS----------"
                        },
                        "cira_blended_tpw": {
                            "product_title": "Blended TPW (CIRA)",
                            "product_description": "Blended TPW is a retrieval of the total precipitable water (TPW) in the column derived from a combination of microwave data from polar-orbiting satellites, infrared data from geostationary satellites, and ground-based GPS sensors. See User Quick Guide for more information: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/Blended_TPW_Quick_Guide_20180727-1.pdf' target='_blank' target='_blank'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/Blended_TPW_Quick_Guide_20180727-1.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "cira_blended_tpw"
                        },
                        "cira_advected_layered_precipitable_water_surface-850hPa": {
                            "product_title": "Advected Layered Precipitable Water [Surface-850 hPa] (CIRA)",
                            "product_description": "CIRA's Advected Layered Precipitable Water product is a retrieval of atmospheric water vapor in four layers of the atmosphere derived from five polar-orbiting satellites. A Quick Guide for the product is available here: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf</a> ",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "ALPW"
                        },"cira_advected_layered_precipitable_water_850-700hPa": {
                            "product_title": "Advected Layered Precipitable Water [850 - 700 hPa] (CIRA)",
                            "product_description": "CIRA's Advected Layered Precipitable Water product is a retrieval of atmospheric water vapor in four layers of the atmosphere derived from five polar-orbiting satellites. A Quick Guide for the product is available here: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf</a> ",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "ALPW"
                        },
                        "cira_advected_layered_precipitable_water_700-500hPa": {
                            "product_title": "Advected Layered Precipitable Water [700 - 500 hPa] (CIRA)",
                            "product_description": "CIRA's Advected Layered Precipitable Water product is a retrieval of atmospheric water vapor in four layers of the atmosphere derived from five polar-orbiting satellites. A Quick Guide for the product is available here: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf</a> ",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "ALPW"
                        },
                        "cira_advected_layered_precipitable_water_500-300hPa": {
                            "product_title": "Advected Layered Precipitable Water [500 - 300 hPa] (CIRA)",
                            "product_description": "CIRA's Advected Layered Precipitable Water product is a retrieval of atmospheric water vapor in four layers of the atmosphere derived from five polar-orbiting satellites. A Quick Guide for the product is available here: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf</a> ",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "ALPW"
                        },
                        "cira_layer_vapor_transport_surface-850hPa": {
                            "product_title": "Layer Vapor Transport [Surface-850 hPa] (CIRA)",
                            "product_description": "Layer Vapor Transport (LVT) is a measure of the transport of water vapor through the atmosphere in four layers, based on the Advected Layer Precipitable Water product (ALPW) and model-based wind speeds.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "LVT"
                        },
                        "cira_layer_vapor_transport_850-700hPa": {
                            "product_title": "Layer Vapor Transport [850-700 hPa] (CIRA)",
                            "product_description": "Layer Vapor Transport (LVT) is a measure of the transport of water vapor through the atmosphere in four layers, based on the Advected Layer Precipitable Water product (ALPW) and model-based wind speeds.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "LVT"
                        },
                        "cira_layer_vapor_transport_700-500hPa": {
                            "product_title": "Layer Vapor Transport [700-500 hPa] (CIRA)",
                            "product_description": "Layer Vapor Transport (LVT) is a measure of the transport of water vapor through the atmosphere in four layers, based on the Advected Layer Precipitable Water product (ALPW) and model-based wind speeds.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "LVT"
                        },
                        "cira_layer_vapor_transport_500-300hPa": {
                            "product_title": "Layer Vapor Transport [500-300 hPa] (CIRA)",
                            "product_description": "Layer Vapor Transport (LVT) is a measure of the transport of water vapor through the atmosphere in four layers, based on the Advected Layer Precipitable Water product (ALPW) and model-based wind speeds.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "LVT"
                        },
                        "cira_cloud_free_band_08": {
                            "product_title": "Cloud-free Simulated ABI Band 8 (6.2 μm; CIRA)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "svgawvx"
                        },
                        "cira_cloud_free_band_09": {
                            "product_title": "Cloud-free Simulated ABI Band 9 (6.9 μm; CIRA)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "svgawvx"
                        },
                        "cira_cloud_free_band_10": {
                            "product_title": " Cloud-free Simulated ABI Band 10 (7.3 μm; CIRA)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "svgawvx"
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
                        },
                        "products_under_development": {
                            "product_title": "----------PRODUCTS UNDER DEVELOPMENT----------"
                        },
                        "cira_proxy_visible_experimental": {
                            "product_title": "ProxyVis Experimental (CIRA)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "0.5 km",
                            "color_table_name": "lowlight4"
                        },
                        "cira_octane_speed_sandwich": {
                            "product_title": "OCTANE Speed Sandwich (CIRA)",
                            "product_description": "The OptiCal flow Toolkit for Atmospheric and Earth Sciences (OCTANE) Speed Sandwich is an RGB which combines cloud-top speeds computed from a variational optical flow algorithm (color shading, color bar; m/s) tuned by comparison to ground-truth wind speed datasets with the textures (brightness) from the 0.64 &micro;m (3.9 &micro;m) imagery during the day (night). The transition to infrared occurs when the solar zenith angle is > 80&deg;. This RGB is useful for determining vertical wind shear in a scene and approximating feature motion characteristics such as speed and direction. When observing convection initiation, it is useful to pair this RGB with the Day-Cloud Phase Distinction RGB, as the speed sandwich will highlight vertical growth from slow boundary layer motions into strong jet streams with increasingly hotter colors, and help highlight sheared vs non-sheared storms. The Speed Sandwich is most accurate when there are large regions of sharp textures in the visible (IR) imagery during the day (night). Use caution when determining wind speeds within multi-layer scene flows, as the accuracy may degrade while the product attempts to return the motion from the layer with the most prominent texture. The product is also sensitive to image navigation and registration jitters. As optical flow requires two satellite images of the same scene to function, the Speed Sandwich will return all stationary motion in the first frame after a mesosector is moved.",
                            "zoom_level_adjust": 0,
                            "resolution": "0.5 km",
                            "color_table_name": "cira_octane_speed_sandwich"
                        },
                        "cira_octane_direction_sandwich": {
                            "product_title": "OCTANE Direction Sandwich (CIRA)",
                            "product_description": "The Optical flow Code for Tracking, Atmospheric motion vector, and Nowcasting Experiments (OCTANE) Direction Sandwich is a product which combines cloud-top motion directions computed from a variational optical flow algorithm (color shading, color bar;  ° ) tuned by comparison to ground-truth wind speed datasets with the textures (brightness) from the 0.64 μm (10.3 μm) imagery during the day (night).  The transition to infrared occurs when the solar zenith angle is > 80°.  This product is useful for determining vertical wind shear in a scene and approximating feature motion characteristics such as speed and direction.  When observing convection initiation, it is useful to pair this product with the Day-Cloud Phase Distinction RGB, as the Direction Sandwich will highlight vertical growth from into layers with turning motions, and help highlight sheared vs non-sheared storms.  The Direction Sandwich is most accurate when there are large regions of sharp textures in the visible (IR) imagery during the day (night).  Use caution when determining wind directions within multi-layer scene flows, as the accuracy may degrade while the product attempts to return the motion from the layer with the most prominent texture.  The product is also sensitive to image navigation and registration jitters.  As optical flow requires two satellite images of the same scene to function, the Direction Sandwich will return all stationary motion in the first frame after a mesosector is moved.  Note, motions slower than 2.5 m/s are masked from the direction sandwich, as flow direction can become highly variable at slow wind speeds.",
                            "zoom_level_adjust": 0,
                            "resolution": "0.5 km",
                            "color_table_name": "cira_octane_dire_sandwich"
                        },
                        "cira_octane_speed_sandwich_barbs": {
                            "product_title": "OCTANE Speed Sandwich Barbs (CIRA)",
                            "product_description": "The Optical flow Code for Tracking, Atmospheric motion vector, and Nowcasting Experiments (OCTANE) Barbs are estimated motions (in knots) from a variational optical flow retrieval algorithm designed to quantify cloud-drifts within 0.64 &micro;m (3.9 &micro;m) imagery sequences during the day (night) and tuned by comparison to ground-truth wind speed datasets with the textures (brightness). The transition to infrared occurs when the solar zenith angle is > 80&deg;. Barbs are colored by brightness temperature, making them useful for determining vertical wind profile characteristics in a scene and approximating feature motion characteristics such as speed and direction. The barbs are most accurate when tracking large regions of sharp textures in the visible (IR) imagery during the day (night). Use caution when determining wind speeds within multi-layer scene flows, as the representativeness may degrade while the product attempts to return the motion from the layer with the most prominent texture. The product is also sensitive to image navigation and registration jitters. As optical flow requires two satellite images of the same scene to function, the barbs will return all stationary motion in the first frame after a mesosector is moved. Note that the barbs are only a subset of the retrieved optical flow motions, which increase in density with SLIDER zoom level. Fully dense motions (every image pixel) must be viewed with alternative OCTANE RGBs such as the Speed Sandwich.",
                            "zoom_level_adjust": 0,
                            "resolution": "0.5 km",
                            "color_table_name": "cira_octane_speed_sandwich_barbs"
                        },
                        "cira_octane_ctcd_sandwich": {
                            "product_title": "OCTANE Cloud-top Cooling and Divergence Sandwich (CIRA)",
                            "product_description": "The Optical flow Code for Tracking, Atmospheric motion vector, and Nowcasting Experiments (OCTANE) Cloud-Top Cooling and Divergence (CTCD) Sandwich is a product which combines retrievals of 10.3 &micro;m cooling (hotter colors) and horizontal divergence (colder colors) computed from a variational optical flow algorithm (&deg;C 5 min&#8315;&sup1; and s&#8315;&sup1;) with the textures (brightness) from the 0.64 &micro;m (10.3 &micro;m) imagery during the day (night). Cyan shading is used to denote where 10.3 &micro;m The transition to infrared occurs when the solar zenith angle is &gt; 80&deg;. This product is useful for for identifying early signals of convection initiation in cloud-top cooling and for observing mature deep convection updraft characteristics in divergence. Convection developing in stronger instability will generally have larger cloud-top cooling signatures, and stronger (more severe) updrafts will have larger cloud-top divergence. Use caution when interpreting in multi-layer scenes and flows, where thin cirrus can cause strong cloud-top cooling signatures over lower cumulus, and multi-layer flows may appear horizontally divergent. As optical flow and cloud-top cooling retrieval requires two satellite images of the same scene to function, the product will return only imagery texture in the frame where a mesosector is moved.",
                            "zoom_level_adjust": 0,
                            "resolution": "0.5 km",
                            "color_table_name": "cira_octane_ctcd_sandwich"
                        }
                    }
                },
                "goes-18": {
                    "satellite_title": "GOES-18 (West; 137.0W)",
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
                                "decimal_places": 2,
                                "scale_bar_min_zoom": 3
                            },
                            "navigation": {
                                "up": {
                                    "satellite": "jpss",
                                    "sector": "northern_hemisphere"
                                },
                                "right": {
                                    "satellite": "goes-19",
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
                            "missing_products": [
                                "mrms_products",
                                "mrms_merged_base_reflectivity_qc",
                                "cira_octane_speed_sandwich",
                                "cira_octane_speed_sandwich_barbs",
                                "cira_octane_ctcd_sandwich",
                                "cira_geosnow",
                                "cira_octane_direction_sandwich",
                                "thundercast",
                                "thunder_cast",
                                "products_under_development"
                            ]
                        },
                        "conus": {
                            "sector_title": "CONUS",
                            "max_zoom_level": 4,
                            "tile_size": 625,
                            "default_product": "geocolor",
                            "defaults": {
                                "minutes_between_images": 5
                            },
                            "missing_products": [
                                "cira_proxy_visible_experimental",
                                "cira_proxy_visible",
                                "cira_single_channel_proxyvis",
                                "reprojections",
                                "cira_ncoda_sea_surface_temperature",
                                "cira_ncoda_sea_surface_salinity",
                                "cira_ncoda_ocean_heat_content",
                                "cira_ocean_dynamic_depth_averaged_temperature",
                                "microwave_products",
                                "cira_blended_tpw",
                                "cira_advected_layered_precipitable_water_surface-850hPa",
                                "cira_advected_layered_precipitable_water_850-700hPa",
                                "cira_advected_layered_precipitable_water_700-500hPa",
                                "cira_advected_layered_precipitable_water_500-300hPa",
                                "products_under_development",
                                "cira_octane_speed_sandwich",
                                "cira_octane_speed_sandwich_barbs",
                                "cira_octane_ctcd_sandwich",
                                "level_2_products",
                                "acspo_sst",
                                "spm_37color",
                                "spm_89pct",
                                "cira_octane_direction_sandwich",
                                "gremlin",
                                "acspo_sst",
                                "cira_layer_vapor_transport_surface-850hPa",
                                "cira_layer_vapor_transport_850-700hPa",
                                "cira_layer_vapor_transport_700-500hPa",
                                "cira_layer_vapor_transport_500-300hPa"
                            ],
                            "missing_maps": [
                                "mesoscale_boxes"
                            ],
                            "products": {
                                "geocolor": {
                                    "zoom_level_adjust": 0
                                },
                                "cira_geoproxy": {
                                    "zoom_level_adjust": 0
                                },
                                "cira_geosst": {
                                    "zoom_level_adjust": 0
                                },
                                "cira_geodust": {
                                    "zoom_level_adjust": 0
                                },
                                "cira_geodebra": {
                                    "zoom_level_adjust": 0
                                },
                                "cira_geosnow": {
                                    "zoom_level_adjust": 0
                                },
                                "cira_geofire": {
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
                            "missing_products": [
                                "reprojections",
                                "cira_ncoda_sea_surface_temperature",
                                "cira_ncoda_sea_surface_salinity",
                                "cira_ncoda_ocean_heat_content",
                                "cira_ocean_dynamic_depth_averaged_temperature",
                                "mrms_products",
                                "mrms_merged_base_reflectivity_qc",
                                "cira_proxy_visible_experimental",
                                "cira_proxy_visible",
                                "cira_single_channel_proxyvis",
                                "microwave_products",
                                "cira_blended_tpw",
                                "cira_advected_layered_precipitable_water_surface-850hPa",
                                "cira_advected_layered_precipitable_water_850-700hPa",
                                "cira_advected_layered_precipitable_water_700-500hPa",
                                "cira_advected_layered_precipitable_water_500-300hPa",
                                "cira_geosnow",
                                "level_2_products",
                                "acspo_sst",
                                "spm_37color",
                                "spm_89pct",
                                "band_09_alternate",
                                "gremlin",
                                "acspo_sst",
                                "cira_layer_vapor_transport_surface-850hPa",
                                "cira_layer_vapor_transport_850-700hPa",
                                "cira_layer_vapor_transport_700-500hPa",
                                "cira_layer_vapor_transport_500-300hPa"
                            ],
                            "products": {
                                "geocolor": {
                                    "zoom_level_adjust": 0
                                }
                            },
                            "missing_maps": [
                                "city_lights",
                                "mesoscale_boxes"
                            ]
                        },
                        "mesoscale_02": {
                            "sector_title": "Mesoscale 2",
                            "max_zoom_level": 2,
                            "tile_size": 500,
                            "defaults": {
                                "minutes_between_images": 1
                            },
                            "default_product": "geocolor",
                            "missing_products": [
                                "reprojections",
                                "cira_ncoda_sea_surface_temperature",
                                "cira_ncoda_sea_surface_salinity",
                                "cira_ncoda_ocean_heat_content",
                                "cira_ocean_dynamic_depth_averaged_temperature",
                                "mrms_products",
                                "mrms_merged_base_reflectivity_qc",
                                "cira_proxy_visible_experimental",
                                "cira_proxy_visible",
                                "cira_single_channel_proxyvis",
                                "microwave_products",
                                "cira_blended_tpw",
                                "cira_advected_layered_precipitable_water_surface-850hPa",
                                "cira_advected_layered_precipitable_water_850-700hPa",
                                "cira_advected_layered_precipitable_water_700-500hPa",
                                "cira_advected_layered_precipitable_water_500-300hPa",
                                "cira_geosnow",
                                "level_2_products",
                                "acspo_sst",
                                "spm_37color",
                                "spm_89pct",
                                "band_09_alternate",
                                "gremlin",
                                "acspo_sst",
                                "cira_layer_vapor_transport_surface-850hPa",
                                "cira_layer_vapor_transport_850-700hPa",
                                "cira_layer_vapor_transport_700-500hPa",
                                "cira_layer_vapor_transport_500-300hPa"
                            ],
                            "products": {
                                "geocolor": {
                                    "zoom_level_adjust": 0
                                }
                            },
                            "missing_maps": [
                                "city_lights",
                                "mesoscale_boxes"
                            ]
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
                        "level_2_products": {
                            "product_title": "----------LEVEL 2 PRODUCTS----------"
                        },
                        "acspo_sst": {
                            "product_title": "ACSPO SST (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "geosst"
                        },
                        "gremlin": {
                            "product_title": "GREMLIN (CIRA)",
                            "product_description": "GREMLIN (GOES Radar Estimation via Machine Learning to Inform NWP) provides synthetic composite radar reflectivity fields from GOES ABI and GLM data fusion using a convolutional neural network trained to match the Multi-Radar Multi-Sensor (MRMS) product. GREMLIN is primarily responding to information coming from (1) presence of lightning, (2) cold brightness temperatures, (3) strong brightness temperature gradients, (4) shortwave-longwave differences to see through thin cirrus, and (5) longwave-water vapor differences to identify deep convection.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "mrms_merged_base_reflectivity_qc"
                        },
                        "multispectral_imagery": {
                            "product_title": "----------MULTISPECTRAL IMAGERY----------"
                        },
                        "geocolor": {
                            "product_title": "GeoColor (CIRA)",
                            "product_description": "GeoColor imagery provides as close an approximation to daytime True Color imagery as is possible from GOES-16, and thus allows for intuitive interpretation of meteorological and surface-based features. At night, instead of being dark like in other visible bands, an IR-based multispectral product is provided that differentiates between low liquid water clouds and higher ice clouds. A static city lights database derived from the VIIRS Day Night Band is provided as the nighttime background for geo-referencing. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_CIRA_Geocolor_20171019.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_CIRA_Geocolor_20171019.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": ""
                        },
                        "cira_geosst": {
                            "product_title": "GeoSST (CIRA)",
                            "product_description": "a blend of GeoColor and the ABI L2 Sea Surface Temperature product requested by NWS/OPC.",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "geosst"
                        },
                        "cira_proxy_visible": {
                            "product_title": "ProxyVis (CIRA)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "0.5 km",
                            "color_table_name": "lowlight4"
                        },
                        "cira_geoproxy": {
                            "product_title": "GeoProxy (CIRA)",
                            "product_description": "A blend of GeoColor and ProxyVis to improve low cloud detection at night over the ocean.",
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
                            "product_description": "More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DEBRA-Dust_20210217.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DEBRA-Dust_20210217.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "abi_debra"
                        },
                        "cira_geodebra": {
                            "product_title": "GeoDEBRA (CIRA)",
                            "product_description": "A blend of GeoColor and DEBRA that also highlights dust in yellow.",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "abi_debra"
                        },
                        "cira_cloud_snow_discriminator": {
                            "product_title": "Snow/Cloud (CIRA)",
                            "product_description": "More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/GOES_Cloud_Snow_Discriminator_Quick_Guide_20190814.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/GOES_Cloud_Snow_Discriminator_Quick_Guide_20190814.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "cira_cloud_snow_discriminator"
                        },
                        "cira_high_low_cloud_and_snow": {
                            "product_title": "Snow/Cloud-Layers (CIRA)",
                            "product_description": "More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/GOES_Cloud_Snow_Discriminator_Quick_Guide_20190814.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/GOES_Cloud_Snow_Discriminator_Quick_Guide_20190814.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "cira_high_low_cloud_and_snow"
                        },
                        "split_window_difference_10_3-12_3": {
                            "product_title": "Split Window Difference (10.3 &micro;m - 12.3 &micro;m)",
                            "product_description": "The Split Window Difference has a variety of meteorological applications, and is leveraged in several multispectral and derived products. The primary applications are related to the relative sensitivity of the 10.3 &micro;m channel to absorption by dust particles, and the relative sensitivity of the 12.3 &micro;m channel to absorption by water vapor. In this version, blowing dust will appear as magenta (negative values). In clear sky conditions with a positive lapse rate, colors progressing from blue to green to yellow to red (higher positive values) represent greater amounts of low-level moisture. Very thin cirrus clouds, including contrails, appear as red to white (high positive values). Volcanic ash will appear very similarly to dust.<br /><br />More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_SplitWindowDifference.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_SplitWindowDifference.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "split_window_difference_10_3-12_3"
                        },
                        "split_window_difference_dust": {
                            "product_title": "Split Window Difference Dust (10.3 &micro;m - 12.3 &micro;m)",
                            "product_description": "The Split Window Difference has a variety of meteorological applications, and is leveraged in several multispectral and derived products. The primary applications are related to the relative sensitivity of the 10.3 &micro;m channel to absorption by dust particles, and the relative sensitivity of the 12.3 &micro;m channel to absorption by water vapor. In this version, areas of likely blowing dust are highlighted as non-gray colors, while the rest of the scene is grayscale. Volcanic ash will appear very similarly to dust.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "split_window_difference_dust"
                        },
                        "cira_geodust": {
                            "product_title": "GeoDust (CIRA)",
                            "product_description": "A blend of GeoColor and the Split Window Difference product that highlights dust.",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "abi_debra"
                        },
                        "split_window_difference_grayscale": {
                            "product_title": "Split Window Difference Grayscale (10.3 &micro;m - 12.3 &micro;m)",
                            "product_description": "The Split Window Difference has a variety of meteorological applications, and is leveraged in several multispectral and derived products. The primary applications are related to the relative sensitivity of the 10.3 &micro;m channel to absorption by dust particles, and the relative sensitivity of the 12.3 &micro;m channel to absorption by water vapor. In this version, blowing dust will appear as a relatively dark gray to black (negative values). In clear sky conditions with a positive lapse rate, progressively lighter shades of gray (higher positive values) represent greater amounts of low-level moisture. Very thin cirrus clouds, including contrails, appear as white (high positive values). Volcanic ash will appear very similarly to dust.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "split_window_difference_grayscale"
                        },
                        "cira_geosnow": {
                            "product_title": "GeoSnow (CIRA) ",
                            "product_description": "GeoSnow combines a snow mask derived from the Snow/Cloud-Layers product with GeoColor to track snow at night. In this product, snow at night appears cyan, in contrast to low clouds (light blue) and high clouds (grayscale). During the day, this product is identical to GeoColor.",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": ""
                        },
                        "cira_geofire": {
                            "product_title": "GeoFire (CIRA)",
                            "product_description": "This product is a blend of GeoColor with the Fire Temperature RGB to highlight fires and other hot spots. Active fires and other pixels with significant hot spots will appear with the coloration of the Fire Temperature RGB, while surrounding pixels appear as in GeoColor. This product uses the GeoProxy algorithm at night to improve low cloud detection over water surfaces.",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": ""
                        },
                        "multispectral_rgb_composites": {
                            "product_title": "----------MULTISPECTRAL RGB COMPOSITES----------"
                        },
                        "natural_color": {
                            "product_title": "Day Land Cloud (EUMETSAT)",
                            "product_description": "The Day Land Cloud RGB is the same as the Natural Color RGB by EUMETSAT, and is useful for discriminating between high ice clouds and low water clouds. High ice clouds, snow, and sea ice appear cyan while low water clouds appear dull grey or white. This imagery can also be used to assess vegetation and detect land surface changes. In AWIPS, referred to as 'Day Land Cloud'. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_daylandcloudRGB_final.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_daylandcloudRGB_final.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": ""
                        },
                        "rgb_air_mass": {
                            "product_title": "Airmass (EUMETSAT)",
                            "product_description": "The Air Mass RGB is used to diagnose the environment surrounding synoptic systems. Cyclogenesis can be inferred by the identification of warm, dry, ozone-rich descending stratospheric air associated with jet streams and potential vorticity anomalies. This RGB can distinguish between polar and tropical air masses, especially along upper-level frontal boundaries and identify high-, mid-, and low-level clouds. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_AirMassRGB_final.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_AirMassRGB_final.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "rgb_air_mass"
                        },
                        "jma_day_cloud_phase_distinction_rgb": {
                            "product_title": "Day Cloud Phase Distinction (JMA)",
                            "product_description": "This RGB is used to evaluate the phase of cooling cloud tops to monitor convective initiation, storm growth, and decay. It can also be used to identify snow on the ground. The Day Cloud Phase Distinction RGB takes advantage of cloud reflectance differences between the visible and near infrared channels and temperature variances between land and clouds in the infrared to provide increased contrast between background surfaces and phases of clouds (i.e. water vs. ice). More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/Day_Cloud_Phase_Distinction.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/Day_Cloud_Phase_Distinction.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "jma_day_cloud_phase_distinction_rgb"
                        },
                        "day_cloud_phase_microphysics_rgb": {
                            "product_title": "Day Cloud Phase Microphysics (EUMETSAT)",
                            "product_description": "The Day Cloud Phase Microphysics RGB (also known simply as Cloud Phase RGB) is useful for determining cloud phase and cloud particle size during the daytime. Ice clouds will appear blue, with lighter blue indicating small ice particles and darker blue indicating large ice particles. Liquid clouds will vary from cream-colored to pink to purple depending on droplet size, with cream-colored clouds having small liquid droplets and purple indicating very large droplet sizes. The background land surface will appear yellow to brown based on vegetation. Snow and ice-cover will appear dark blue. Depending on instrument resolution and fire intensity, fires may appear and will show up as bright green or lime green.  More info: https://eumetrain.org/sites/default/files/2023-01/CloudPhaseRGB.pdf ",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": ""
                        },
                        "eumetsat_nighttime_microphysics": {
                            "product_title": "Nighttime Microphysics (EUMETSAT)",
                            "product_description": "More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_NtMicroRGB_Final_20191206.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_NtMicroRGB_Final_20191206.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "eumetsat_nighttime_microphysics"
                        },
                        "day_snow_fog": {
                            "product_title": "Day Snow/Fog (EUMETSAT/NASA SPoRT)",
                            "product_description": "Differentiating between snow and clouds in satellite imagery can be challenging due to their similar characteristics and the high reflectivity of both at visible wavelengths.  The Day Snow/Fog RGB combines channels that bring out the distinguishing characteristics of snow (red-orange), ice clouds (shades of pink), and water clouds / fog (shades of yellow). More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DaySnowFogRGB_final_v2.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DaySnowFogRGB_final_v2.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "day_snow_fog"
                        },
                        "awips_dust": {
                            "product_title": "Dust (EUMETSAT)",
                            "product_description": "Dust can be difficult to see in VIS and IR imagery because it is optically thin and can appear similar to certain cloud types. The Dust RGB is able to contrast airborne dust from clouds, as well as land or ocean surfaces, given sufficient thickness/density. Dust appears pink/magenta during the day and can vary in color at night based on height. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/Dust_RGB_Quick_Guide.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/Dust_RGB_Quick_Guide.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "eumetsat_dust"
                        },
                        "cvd_dust_rgb": {
                            "product_title": "CVD Dust RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "dust_fire_rgb": {
                            "product_title": "Dust-Fire RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "fire_temperature": {
                            "product_title": "Fire Temperature (CIRA)",
                            "product_description": "The Fire Temperature RGB can be used to identify where the most intense fires are occurring and differentiate these from “cooler” fires. Fires need to be more intense in order to be detected by the 2.2 and 1.6 &micro;m bands. Small/”cool” fires will only show up at 3.9 &micro;m and appear red while increases in fire intensity cause greater contributions of the other channels resulting in white very intense fires. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/Fire_Temperature_RGB.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/Fire_Temperature_RGB.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "fire_temperature"
                        },
                        "cira_natural_fire_color": {
                            "product_title": "Day Fire (CIRA)",
                            "product_description": "The Day Fire RGB is similar to the original Natural Color RGB by EUMETSAT except the 1.6 &micro;m band used in the red component is replaced with the 2.2 &micro;m band. This change highlights the fire hotspots in red, but also limits the use of the RGB for differentiating water vs. ice clouds (both appear cyan, except for very small particles). In AWIPS, referred to as 'Day Land Cloud Fire'. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_DayLandCloudFireRGB_final.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_DayLandCloudFireRGB_final.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "cira_natural_fire_color"
                        },
                        "eumetsat_ash": {
                            "product_title": "Ash (EUMETSAT)",
                            "product_description": "The Ash RGB can be used to detect and monitor volcanic ash and sulfur dioxide gas. These emissions can be hazardous for public health and aviation activities. The detection of ash plumes (pink/magenta/red) is largely due to the opposite absorption characteristics of ash and ice clouds between the 12.3 and 10.3 &micro;m bands in the red component of the RGB recipe. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/GOES_Ash_RGB.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/GOES_Ash_RGB.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "eumetsat_ash"
                        },
                        "jma_so2": {
                            "product_title": "Volcanic Emissions (SO<sub>2</sub>) RGB (JMA)",
                            "product_description": "Sulfur dioxide (SO<sub>2</sub>) is a gas commonly released during volcanic eruptions. In high concentrations it is toxic to humans and has considerable environmental effects, including volcanic smog and acid rain. The SO<sub>2</sub> RGB can be used to detect and monitor large sulfur dioxide emissions from both volcanoes and industrial facilities.  It can also be used to detect volcanic ash and dust. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/Quick_Guide_SO2_RGB.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/Quick_Guide_SO2_RGB.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "jma_so2"
                        },
                        "eumetsat_tropical_airmass_rgb": {
                            "product_title": "Overshooting Tops RGB (EUMETSAT)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "eumetsat_severe_storms_rgb": {
                            "product_title": "Severe Storms RGB (EUMETSAT)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "ngfs_microphysics": {
                            "product_title": "NGFS Microphysics RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "blowing_snow_rgb": {
                            "product_title": "Blowing Snow RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 1,
                            "resolution": "2 km",
                            "color_table_name": "blowingsnow"
                        },
                        "sea_spray_rgb": {
                            "product_title": "Sea Spray RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 1,
                            "resolution": "2 km",
                            "color_table_name": "seaspray"
                        },
                        "cloud_products": {
                            "product_title": "----------CLOUD PRODUCTS - CLAVR-x----------"
                        },
                        "cloud_top_height_cira_clavr-x": {
                            "product_title": "Cloud-Top Height (NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA. See User Quick Guide for more information: <a href=' http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_BaselineCloudTopHeight.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_BaselineCloudTopHeight.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "cloud_top_height_cira_clavr-x"
                        },
                        "cloud_geometric_thickness_cira_clavr-x": {
                            "product_title": "Cloud Geometric Thickness (CIRA/NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "cloud_geometric_thickness_cira_clavr-x"
                        },
                        "cloud_layers_cira_clavr-x": {
                            "product_title": "Cloud Layers (CIRA/NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.The Cloud Layers are derived from the cloud top information using the predefined flight level thresholds, currently below 10 kft (about 3 km) for the Low layer and above 24 kft (about 7.3 km) for the High layer. The product has been improved to the vertically-extended layers such as H+M (high to mid-levels) or H+M+L (deep cloud) using a cloud geometric thickness/base height retrieval. See User Quick Guide for more information: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2023/08/QuickGuide_GOES_ABI_CCL_cira_31Aug2023.pdf' target='_blank'>https://rammb2.cira.colostate.edu/wp-content/uploads/2023/08/QuickGuide_GOES_ABI_CCL_cira_31Aug2023.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "cloud_layers_cira_clavr-x"
                        },
                        "cloud_optical_thickness_cira_clavr-x": {
                            "product_title": "Cloud Optical Depth (NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "cloud_optical_thickness_cira_clavr-x_and_cloud_effective_radius_cira_clavr-x"
                        },
                        "cloud_effective_radius_cira_clavr-x": {
                            "product_title": "Cloud-Top Effective Particle Size (NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "cloud_optical_thickness_cira_clavr-x_and_cloud_effective_radius_cira_clavr-x"
                        },
                        "cloud_phase_cira_clavr-x": {
                            "product_title": "Cloud Phase (CIRA/NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.Cloud Top Phase using IR bands (<a href='https://www.star.nesdis.noaa.gov/jpss/documents/ATBD/ATBD_EPS_Cloud_CldType_v2.0.pdf' target='_blank'>https://www.star.nesdis.noaa.gov/jpss/documents/ATBD/ATBD_EPS_Cloud_CldType_v2.0.pdf</a>). LTMP represents 'Supercooled Liquid water topped Mixed Phase' from CIRA's daytime sub-cloud phase detection based on differential reflectance ratios between 1.6 &micro;m and 2.2 &micro;m for liquid and ice (Miller et al. 2014 JGR; Noh et al. 2019 JGR).",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "cloud_phase_cira_clavr-x"
                        },
                        "cloud_mask_cira_clavr-x": {
                            "product_title": "Cloud Mask (NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.The cloud mask algorithm is based on 'A Naive Bayesian Cloud-Detection Scheme' by Andrew K. Heidinger (2012, J. Applied Meteorology and Climatology, <a href='https://doi.org/10.1175/JAMC-D-11-02.1' target='_blank' target='_blank'>https://doi.org/10.1175/JAMC-D-11-02.1</a>).",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "cloud_mask_cira_clavr-x"
                        },
                        "geostationary_lightning_mapper": {
                            "product_title": "----------GEOSTATIONARY LIGHTNING MAPPER----------"
                        },
                        "cira_glm_l2_group_energy": {
                            "product_title": "Group Energy Density (CIRA)",
                            "product_description": "Accumulation of GLM Level-2 'Group' energy over ABI's scan duration (1-min for meso, 5-min for conus, 10-min for full-disk), inverse-distance weighted over a given area for each centroid point and normalized to have [pJ/min] for all sectors. See User Quick Guide for more information: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/GLM_Quick_Guide_Detection_Methods_June_2018.pdf' target='_blank' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/GLM_Quick_Guide_Detection_Methods_June_2018.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "cira_glm_l2_group_energy",
                            "starting_opacity": 1
                        },
                        "cira_glm_l2_group_counts": {
                            "product_title": "Group Flash Count Density (CIRA)",
                            "product_description": "Accumulated counts of GLM Level-2 'Group' area over ABI's scan duration (1-min for meso, 5-min for conus, 10-min for full-disk). See User Quick Guide for more information: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/GLM_Quick_Guide_Detection_Methods_June_2018.pdf' target='_blank' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/GLM_Quick_Guide_Detection_Methods_June_2018.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "cira_glm_l2_group_counts",
                            "starting_opacity": 1
                        },
                        "microwave_products": {
                            "product_title": "----------MICROWAVE PRODUCTS----------"
                        },
                        "cira_blended_tpw": {
                            "product_title": "Blended TPW (CIRA)",
                            "product_description": "Blended TPW is a retrieval of the total precipitable water (TPW) in the column derived from a combination of microwave data from polar-orbiting satellites, infrared data from geostationary satellites, and ground-based GPS sensors. See User Quick Guide for more information: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/Blended_TPW_Quick_Guide_20180727-1.pdf' target='_blank' target='_blank'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/Blended_TPW_Quick_Guide_20180727-1.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "cira_blended_tpw"
                        },
                        "cira_advected_layered_precipitable_water_surface-850hPa": {
                            "product_title": "Advected Layered Precipitable Water [Surface-850 hPa] (CIRA)",
                            "product_description": "CIRA's Advected Layered Precipitable Water product is a retrieval of atmospheric water vapor in four layers of the atmosphere derived from five polar-orbiting satellites. A Quick Guide for the product is available here: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf</a> ",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "ALPW"
                        },
                        "cira_advected_layered_precipitable_water_850-700hPa": {
                            "product_title": "Advected Layered Precipitable Water [850 - 700 hPa] (CIRA)",
                            "product_description": "CIRA's Advected Layered Precipitable Water product is a retrieval of atmospheric water vapor in four layers of the atmosphere derived from five polar-orbiting satellites. A Quick Guide for the product is available here: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf</a> ",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "ALPW"
                        },
                        "cira_advected_layered_precipitable_water_700-500hPa": {
                            "product_title": "Advected Layered Precipitable Water [700 - 500 hPa] (CIRA)",
                            "product_description": "CIRA's Advected Layered Precipitable Water product is a retrieval of atmospheric water vapor in four layers of the atmosphere derived from five polar-orbiting satellites. A Quick Guide for the product is available here: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf</a> ",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "ALPW"
                        },
                        "cira_advected_layered_precipitable_water_500-300hPa": {
                            "product_title": "Advected Layered Precipitable Water [500 - 300 hPa] (CIRA)",
                            "product_description": "CIRA's Advected Layered Precipitable Water product is a retrieval of atmospheric water vapor in four layers of the atmosphere derived from five polar-orbiting satellites. A Quick Guide for the product is available here: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf</a> ",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "ALPW"
                        },
                        "cira_layer_vapor_transport_surface-850hPa": {
                            "product_title": "Layer Vapor Transport [Surface-850 hPa] (CIRA)",
                            "product_description": "Layer Vapor Transport (LVT) is a measure of the transport of water vapor through the atmosphere in four layers, based on the Advected Layer Precipitable Water product (ALPW) and model-based wind speeds.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "LVT"
                        },
                        "cira_layer_vapor_transport_850-700hPa": {
                            "product_title": "Layer Vapor Transport [850-700 hPa] (CIRA)",
                            "product_description": "Layer Vapor Transport (LVT) is a measure of the transport of water vapor through the atmosphere in four layers, based on the Advected Layer Precipitable Water product (ALPW) and model-based wind speeds.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "LVT"
                        },
                        "cira_layer_vapor_transport_700-500hPa": {
                            "product_title": "Layer Vapor Transport [700-500 hPa] (CIRA)",
                            "product_description": "Layer Vapor Transport (LVT) is a measure of the transport of water vapor through the atmosphere in four layers, based on the Advected Layer Precipitable Water product (ALPW) and model-based wind speeds.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "LVT"
                        },
                        "cira_layer_vapor_transport_500-300hPa": {
                            "product_title": "Layer Vapor Transport [500-300 hPa] (CIRA)",
                            "product_description": "Layer Vapor Transport (LVT) is a measure of the transport of water vapor through the atmosphere in four layers, based on the Advected Layer Precipitable Water product (ALPW) and model-based wind speeds.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "LVT"
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
                        "products_under_development": {
                            "product_title": "----------PRODUCTS UNDER DEVELOPMENT----------"
                        },
                        "cira_octane_speed_sandwich": {
                            "product_title": "OCTANE Speed Sandwich (CIRA)",
                            "product_description": "The OptiCal flow Toolkit for Atmospheric and Earth Sciences (OCTANE) Speed Sandwich is an RGB which combines cloud-top speeds computed from a variational optical flow algorithm (color shading, color bar; m/s) tuned by comparison to ground-truth wind speed datasets with the textures (brightness) from the 0.64 &micro;m (3.9 &micro;m) imagery during the day (night). The transition to infrared occurs when the solar zenith angle is > 80&deg;. This RGB is useful for determining vertical wind shear in a scene and approximating feature motion characteristics such as speed and direction. When observing convection initiation, it is useful to pair this RGB with the Day-Cloud Phase Distinction RGB, as the speed sandwich will highlight vertical growth from slow boundary layer motions into strong jet streams with increasingly hotter colors, and help highlight sheared vs non-sheared storms. The Speed Sandwich is most accurate when there are large regions of sharp textures in the visible (IR) imagery during the day (night). Use caution when determining wind speeds within multi-layer scene flows, as the accuracy may degrade while the product attempts to return the motion from the layer with the most prominent texture. The product is also sensitive to image navigation and registration jitters. As optical flow requires two satellite images of the same scene to function, the Speed Sandwich will return all stationary motion in the first frame after a mesosector is moved.",
                            "zoom_level_adjust": 0,
                            "resolution": "0.5 km",
                            "color_table_name": "cira_octane_speed_sandwich"
                        },
                        "cira_octane_direction_sandwich": {
                            "product_title": "OCTANE Direction Sandwich (CIRA)",
                            "product_description": "The Optical flow Code for Tracking, Atmospheric motion vector, and Nowcasting Experiments (OCTANE) Direction Sandwich is a product which combines cloud-top motion directions computed from a variational optical flow algorithm (color shading, color bar;  ° ) tuned by comparison to ground-truth wind speed datasets with the textures (brightness) from the 0.64 μm (10.3 μm) imagery during the day (night).  The transition to infrared occurs when the solar zenith angle is > 80°.  This product is useful for determining vertical wind shear in a scene and approximating feature motion characteristics such as speed and direction.  When observing convection initiation, it is useful to pair this product with the Day-Cloud Phase Distinction RGB, as the Direction Sandwich will highlight vertical growth from into layers with turning motions, and help highlight sheared vs non-sheared storms.  The Direction Sandwich is most accurate when there are large regions of sharp textures in the visible (IR) imagery during the day (night).  Use caution when determining wind directions within multi-layer scene flows, as the accuracy may degrade while the product attempts to return the motion from the layer with the most prominent texture.  The product is also sensitive to image navigation and registration jitters.  As optical flow requires two satellite images of the same scene to function, the Direction Sandwich will return all stationary motion in the first frame after a mesosector is moved.  Note, motions slower than 2.5 m/s are masked from the direction sandwich, as flow direction can become highly variable at slow wind speeds.",
                            "zoom_level_adjust": 0,
                            "resolution": "0.5 km",
                            "color_table_name": "cira_octane_dire_sandwich"
                        },
                        "cira_octane_speed_sandwich_barbs": {
                            "product_title": "OCTANE Speed Sandwich Barbs (CIRA)",
                            "product_description": "The Optical flow Code for Tracking, Atmospheric motion vector, and Nowcasting Experiments (OCTANE) Barbs are estimated motions (in knots) from a variational optical flow retrieval algorithm designed to quantify cloud-drifts within 0.64 &micro;m (3.9 &micro;m) imagery sequences during the day (night) and tuned by comparison to ground-truth wind speed datasets with the textures (brightness). The transition to infrared occurs when the solar zenith angle is > 80&deg;. Barbs are colored by brightness temperature, making them useful for determining vertical wind profile characteristics in a scene and approximating feature motion characteristics such as speed and direction. The barbs are most accurate when tracking large regions of sharp textures in the visible (IR) imagery during the day (night). Use caution when determining wind speeds within multi-layer scene flows, as the representativeness may degrade while the product attempts to return the motion from the layer with the most prominent texture. The product is also sensitive to image navigation and registration jitters. As optical flow requires two satellite images of the same scene to function, the barbs will return all stationary motion in the first frame after a mesosector is moved. Note that the barbs are only a subset of the retrieved optical flow motions, which increase in density with SLIDER zoom level. Fully dense motions (every image pixel) must be viewed with alternative OCTANE RGBs such as the Speed Sandwich.",
                            "zoom_level_adjust": 0,
                            "resolution": "0.5 km",
                            "color_table_name": "cira_octane_speed_sandwich_barbs"
                        },
                        "cira_octane_ctcd_sandwich": {
                            "product_title": "OCTANE Cloud-top Cooling and Divergence Sandwich (CIRA)",
                            "product_description": "The Optical flow Code for Tracking, Atmospheric motion vector, and Nowcasting Experiments (OCTANE) Cloud-Top Cooling and Divergence (CTCD) Sandwich is a product which combines retrievals of 10.3 &micro;m cooling (hotter colors) and horizontal divergence (colder colors) computed from a variational optical flow algorithm (&deg;C 5 min&#8315;&sup1; and s&#8315;&sup1;) with the textures (brightness) from the 0.64 &micro;m (10.3 &micro;m) imagery during the day (night). Cyan shading is used to denote where 10.3 &micro;m The transition to infrared occurs when the solar zenith angle is &gt; 80&deg;. This product is useful for for identifying early signals of convection initiation in cloud-top cooling and for observing mature deep convection updraft characteristics in divergence. Convection developing in stronger instability will generally have larger cloud-top cooling signatures, and stronger (more severe) updrafts will have larger cloud-top divergence. Use caution when interpreting in multi-layer scenes and flows, where thin cirrus can cause strong cloud-top cooling signatures over lower cumulus, and multi-layer flows may appear horizontally divergent. As optical flow and cloud-top cooling retrieval requires two satellite images of the same scene to function, the product will return only imagery texture in the frame where a mesosector is moved.",
                            "zoom_level_adjust": 0,
                            "resolution": "0.5 km",
                            "color_table_name": "cira_octane_ctcd_sandwich"
                        }
                    }
                },
                "himawari": {
                    "satellite_title": "Himawari-9 (140.7E)",
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
                                "decimal_places": 1,
                                "scale_bar_min_zoom": 3
                            },
                            "navigation": {
                                "up": {
                                    "satellite": "jpss",
                                    "sector": "northern_hemisphere"
                                },
                                "right": {
                                    "satellite": "goes-18",
                                    "sector": "full_disk"
                                },
                                "left": {
                                    "satellite": "gk2a",
                                    "sector": "full_disk"
                                },
                                "down": {
                                    "satellite": "jpss",
                                    "sector": "southern_hemisphere"
                                }
                            },
                            "missing_products": [
                                "cira_geodust"
                            ],
                            "missing_maps": [
                                "counties",
                                "county_labels",
                                "nws_county_warning_areas",
                                "nasa_svs_center",
                                "nasa_svs_duration",
                                "nasa_svs_ppath",
                                "nasa_svs_ppath01",
                                "nasa_svs_umbra_lo",
                                "nasa_svs_upath_lo"
                            ]
                        },
                        "japan": {
                            "sector_title": "Japan",
                            "max_zoom_level": 3,
                            "tile_size": 750,
                            "default_product": "band_13",
                            "defaults": {
                                "minutes_between_images": 2.5
                            },
                            "missing_products": [
                                "cloud_products",
                                "cloud_geometric_thickness_cira_clavr-x",
                                "cloud_layers_cira_clavr-x",
                                "cloud_top_height_cira_clavr-x",
                                "cloud_optical_thickness_cira_clavr-x",
                                "cloud_effective_radius_cira_clavr-x",
                                "cloud_phase_cira_clavr-x",
                                "cloud_mask_cira_clavr-x",
                                "visible_albedo_cira",
                                "cira_proxy_visible",
                                "cira_single_channel_proxyvis",
                                "products_under_development",
                                "cira_proxy_visible_experimental",
                                "cira_ocean_dynamic_depth_averaged_temperature",
                                "cira_ncoda_sea_surface_temperature",
                                "day_night_band",
                                "cira_atmosphere_rgb",
                                "microwave_products",
                                "cira_blended_tpw",
                                "cira_advected_layered_precipitable_water_surface-850hPa",
                                "cira_advected_layered_precipitable_water_850-700hPa",
                                "cira_advected_layered_precipitable_water_700-500hPa",
                                "cira_advected_layered_precipitable_water_500-300hPa",
                                "cira_geoproxy",
                                "cira_geodebra",
                                "cira_geosst",
                                "cira_geodust",
                                "level_2_products",
                                "acspo_sst",
                                "spm_37color",
                                "spm_89pct",
                                "cira_geofire",
                                "acspo_sst",
                                "cira_layer_vapor_transport_surface-850hPa",
                                "cira_layer_vapor_transport_850-700hPa",
                                "cira_layer_vapor_transport_700-500hPa",
                                "cira_layer_vapor_transport_500-300hPa"
                            ],
                            "missing_maps": [
                                "city_lights",
                                "counties",
                                "county_labels",
                                "nws_county_warning_areas",
                                "mesoscale_boxes",
                                "nasa_svs_center",
                                "nasa_svs_duration",
                                "nasa_svs_ppath",
                                "nasa_svs_ppath01",
                                "nasa_svs_umbra_lo",
                                "nasa_svs_upath_lo"
                            ]
                        },
                        "mesoscale_01": {
                            "sector_title": "Mesoscale",
                            "max_zoom_level": 2,
                            "tile_size": 500,
                            "default_product": "band_13",
                            "defaults": {
                                "minutes_between_images": 2.5
                            },
                            "missing_products": [
                                "cloud_products",
                                "cloud_geometric_thickness_cira_clavr-x",
                                "cloud_layers_cira_clavr-x",
                                "cloud_top_height_cira_clavr-x",
                                "cloud_optical_thickness_cira_clavr-x",
                                "cloud_effective_radius_cira_clavr-x",
                                "cloud_phase_cira_clavr-x",
                                "cloud_mask_cira_clavr-x",
                                "visible_albedo_cira",
                                "cira_proxy_visible",
                                "cira_single_channel_proxyvis",
                                "products_under_development",
                                "cira_proxy_visible_experimental",
                                "cira_ocean_dynamic_depth_averaged_temperature",
                                "cira_ncoda_sea_surface_temperature",
                                "day_night_band",
                                "cira_atmosphere_rgb",
                                "microwave_products",
                                "cira_blended_tpw",
                                "cira_advected_layered_precipitable_water_surface-850hPa",
                                "cira_advected_layered_precipitable_water_850-700hPa",
                                "cira_advected_layered_precipitable_water_700-500hPa",
                                "cira_advected_layered_precipitable_water_500-300hPa",
                                "cira_geoproxy",
                                "cira_geodebra",
                                "cira_geosst",
                                "cira_geodust",
                                "level_2_products",
                                "acspo_sst",
                                "spm_37color",
                                "spm_89pct",
                                "cira_geofire",
                                "acspo_sst",
                                "cira_layer_vapor_transport_surface-850hPa",
                                "cira_layer_vapor_transport_850-700hPa",
                                "cira_layer_vapor_transport_700-500hPa",
                                "cira_layer_vapor_transport_500-300hPa"
                            ],
                            "missing_maps": [
                                "city_lights",
                                "counties",
                                "county_labels",
                                "nws_county_warning_areas",
                                "mesoscale_boxes",
                                "nasa_svs_center",
                                "nasa_svs_duration",
                                "nasa_svs_ppath",
                                "nasa_svs_ppath01",
                                "nasa_svs_umbra_lo",
                                "nasa_svs_upath_lo"
                            ]
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
                        "level_2_products": {
                            "product_title": "----------LEVEL 2 PRODUCTS----------"
                        },
                        "acspo_sst": {
                            "product_title": "ACSPO SST (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "geosst"
                        },
                        "multispectral_imagery": {
                            "product_title": "----------MULTISPECTRAL IMAGERY----------"
                        },
                        "geocolor": {
                            "product_title": "GeoColor (CIRA)",
                            "product_description": "GeoColor imagery provides as close an approximation to daytime True Color imagery as is possible from GOES-16, and thus allows for intuitive interpretation of meteorological and surface-based features. At night, instead of being dark like in other visible bands, an IR-based multispectral product is provided that differentiates between low liquid water clouds and higher ice clouds. A static city lights database derived from the VIIRS Day Night Band is provided as the nighttime background for geo-referencing. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_CIRA_Geocolor_20171019.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_CIRA_Geocolor_20171019.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": ""
                        },
                        "cira_geosst": {
                            "product_title": "GeoSST (CIRA)",
                            "product_description": "a blend of GeoColor and the ABI L2 Sea Surface Temperature product requested by NWS/OPC.",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "geosst"
                        },
                        "cira_proxy_visible": {
                            "product_title": "ProxyVis (CIRA)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "0.5 km",
                            "color_table_name": "lowlight4"
                        },
                        "cira_geoproxy": {
                            "product_title": "GeoProxy (CIRA)",
                            "product_description": "A blend of GeoColor and ProxyVis to improve low cloud detection at night over the ocean.",
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
                            "product_description": "More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DEBRA-Dust_20210217.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DEBRA-Dust_20210217.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "abi_debra"
                        },
                        "cira_geodebra": {
                            "product_title": "GeoDEBRA (CIRA)",
                            "product_description": "A blend of GeoColor and DEBRA that also highlights dust in yellow.",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "abi_debra"
                        },
                        "cira_cloud_snow_discriminator": {
                            "product_title": "Snow/Cloud (CIRA)",
                            "product_description": "More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/GOES_Cloud_Snow_Discriminator_Quick_Guide_20190814.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/GOES_Cloud_Snow_Discriminator_Quick_Guide_20190814.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "cira_cloud_snow_discriminator"
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
                            "product_description": "The Split Window Difference has a variety of meteorological applications, and is leveraged in several multispectral and derived products. The primary applications are related to the relative sensitivity of the 10.3 &micro;m channel to absorption by dust particles, and the relative sensitivity of the 12.3 &micro;m channel to absorption by water vapor. In this version, blowing dust will appear as magenta (negative values). In clear sky conditions with a positive lapse rate, colors progressing from blue to green to yellow to red (higher positive values) represent greater amounts of low-level moisture. Very thin cirrus clouds, including contrails, appear as red to white (high positive values). Volcanic ash will appear very similarly to dust.<br /><br />More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_SplitWindowDifference.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_SplitWindowDifference.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "split_window_difference_10_3-12_3"
                        },
                        "split_window_difference_dust": {
                            "product_title": "Split Window Difference Dust (10.3 &micro;m - 12.3 &micro;m)",
                            "product_description": "The Split Window Difference has a variety of meteorological applications, and is leveraged in several multispectral and derived products. The primary applications are related to the relative sensitivity of the 10.3 &micro;m channel to absorption by dust particles, and the relative sensitivity of the 12.3 &micro;m channel to absorption by water vapor. In this version, areas of likely blowing dust are highlighted as non-gray colors, while the rest of the scene is grayscale. Volcanic ash will appear very similarly to dust.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "split_window_difference_dust"
                        },
                        "cira_geodust": {
                            "product_title": "GeoDust (CIRA)",
                            "product_description": "A blend of GeoColor and the Split Window Difference product that highlights dust.",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "abi_debra"
                        },
                        "split_window_difference_grayscale": {
                            "product_title": "Split Window Difference Grayscale (10.3 &micro;m - 12.3 &micro;m)",
                            "product_description": "The Split Window Difference has a variety of meteorological applications, and is leveraged in several multispectral and derived products. The primary applications are related to the relative sensitivity of the 10.3 &micro;m channel to absorption by dust particles, and the relative sensitivity of the 12.3 &micro;m channel to absorption by water vapor. In this version, blowing dust will appear as a relatively dark gray to black (negative values). In clear sky conditions with a positive lapse rate, progressively lighter shades of gray (higher positive values) represent greater amounts of low-level moisture. Very thin cirrus clouds, including contrails, appear as white (high positive values). Volcanic ash will appear very similarly to dust.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "split_window_difference_grayscale"
                        },
                        "cira_geofire": {
                            "product_title": "GeoFire (CIRA)",
                            "product_description": "This product is a blend of GeoColor with the Fire Temperature RGB to highlight fires and other hot spots. Active fires and other pixels with significant hot spots will appear with the coloration of the Fire Temperature RGB, while surrounding pixels appear as in GeoColor. This product uses the GeoProxy algorithm at night to improve low cloud detection over water surfaces.",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": ""
                        },
                        "multispectral_rgb_composites": {
                            "product_title": "----------MULTISPECTRAL RGB COMPOSITES----------"
                        },
                        "natural_color": {
                            "product_title": "Day Land Cloud (EUMETSAT)",
                            "product_description": "The Day Land Cloud RGB is the same as the Natural Color RGB by EUMETSAT, and is useful for discriminating between high ice clouds and low water clouds. High ice clouds, snow, and sea ice appear cyan while low water clouds appear dull grey or white. This imagery can also be used to assess vegetation and detect land surface changes. In AWIPS, referred to as 'Day Land Cloud'. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_daylandcloudRGB_final.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_daylandcloudRGB_final.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": ""
                        },
                        "rgb_air_mass": {
                            "product_title": "Airmass (EUMETSAT)",
                            "product_description": "The Air Mass RGB is used to diagnose the environment surrounding synoptic systems. Cyclogenesis can be inferred by the identification of warm, dry, ozone-rich descending stratospheric air associated with jet streams and potential vorticity anomalies. This RGB can distinguish between polar and tropical air masses, especially along upper-level frontal boundaries and identify high-, mid-, and low-level clouds. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_AirMassRGB_final.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_AirMassRGB_final.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "rgb_air_mass"
                        },
                        "jma_day_cloud_phase_distinction_rgb": {
                            "product_title": "Day Cloud Phase Distinction (JMA)",
                            "product_description": "This RGB is used to evaluate the phase of cooling cloud tops to monitor convective initiation, storm growth, and decay. It can also be used to identify snow on the ground. The Day Cloud Phase Distinction RGB takes advantage of cloud reflectance differences between the visible and near infrared channels and temperature variances between land and clouds in the infrared to provide increased contrast between background surfaces and phases of clouds (i.e. water vs. ice). More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/Day_Cloud_Phase_Distinction.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/Day_Cloud_Phase_Distinction.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "jma_day_cloud_phase_distinction_rgb"
                        },
                        "day_cloud_phase_microphysics_rgb": {
                            "product_title": "Day Cloud Phase Microphysics (EUMETSAT)",
                            "product_description": "The Day Cloud Phase Microphysics RGB (also known simply as Cloud Phase RGB) is useful for determining cloud phase and cloud particle size during the daytime. Ice clouds will appear blue, with lighter blue indicating small ice particles and darker blue indicating large ice particles. Liquid clouds will vary from cream-colored to pink to purple depending on droplet size, with cream-colored clouds having small liquid droplets and purple indicating very large droplet sizes. The background land surface will appear yellow to brown based on vegetation. Snow and ice-cover will appear dark blue. Depending on instrument resolution and fire intensity, fires may appear and will show up as bright green or lime green.  More info: https://eumetrain.org/sites/default/files/2023-01/CloudPhaseRGB.pdf ",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "eumetsat_dust": {
                            "product_title": "Dust (EUMETSAT)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "eumetsat_dust"
                        },
                        "cvd_dust_rgb": {
                            "product_title": "CVD Dust RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "dust_fire_rgb": {
                            "product_title": "Dust-Fire RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "fire_temperature": {
                            "product_title": "Fire Temperature (CIRA)",
                            "product_description": "The Fire Temperature RGB can be used to identify where the most intense fires are occurring and differentiate these from “cooler” fires. Fires need to be more intense in order to be detected by the 2.2 and 1.6 &micro;m bands. Small/”cool” fires will only show up at 3.9 &micro;m and appear red while increases in fire intensity cause greater contributions of the other channels resulting in white very intense fires.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "fire_temperature"
                        },
                        "cira_natural_fire_color": {
                            "product_title": "Day Fire (CIRA)",
                            "product_description": "The Day Fire RGB is similar to the original Natural Color RGB by EUMETSAT except the 1.6 &micro;m band used in the red component is replaced with the 2.2 &micro;m band. This change highlights the fire hotspots in red, but also limits the use of the RGB for differentiating water vs. ice clouds (both appear cyan, except for very small particles). In AWIPS, referred to as 'Day Land Cloud Fire'.",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "cira_natural_fire_color"
                        },
                        "eumetsat_nighttime_microphysics": {
                            "product_title": "Nighttime Microphysics (EUMETSAT)",
                            "product_description": "More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_NtMicroRGB_Final_20191206.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_NtMicroRGB_Final_20191206.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "eumetsat_nighttime_microphysics"
                        },
                        "day_snow_fog": {
                            "product_title": "Day Snow/Fog (EUMETSAT/NASA SPoRT)",
                            "product_description": "Differentiating between snow and clouds in satellite imagery can be challenging due to their similar characteristics and the high reflectivity of both at visible wavelengths.  The Day Snow/Fog RGB combines channels that bring out the distinguishing characteristics of snow (red-orange), ice clouds (shades of pink), and water clouds / fog (shades of yellow). More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DaySnowFogRGB_final_v2.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DaySnowFogRGB_final_v2.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "day_snow_fog"
                        },
                        "eumetsat_ash": {
                            "product_title": "Ash (EUMETSAT)",
                            "product_description": "The Ash RGB can be used to detect and monitor volcanic ash and sulfur dioxide gas. These emissions can be hazardous for public health and aviation activities. The detection of ash plumes (pink/magenta/red) is largely due to the opposite absorption characteristics of ash and ice clouds between the 12.3 and 10.3 &micro;m bands in the red component of the RGB recipe.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "eumetsat_ash"
                        },
                        "jma_so2": {
                            "product_title": "Volcanic Emissions (SO<sub>2</sub>) RGB (JMA)",
                            "product_description": "Sulfur dioxide (SO<sub>2</sub>) is a gas commonly released during volcanic eruptions. In high concentrations it is toxic to humans and has considerable environmental effects, including volcanic smog and acid rain. The SO<sub>2</sub> RGB can be used to detect and monitor large sulfur dioxide emissions from both volcanoes and industrial facilities.  It can also be used to detect volcanic ash and dust.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "jma_so2"
                        },
                        "eumetsat_tropical_airmass_rgb": {
                            "product_title": "Overshooting Tops RGB (EUMETSAT)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "eumetsat_severe_storms_rgb": {
                            "product_title": "Severe Storms RGB (EUMETSAT)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "ngfs_microphysics": {
                            "product_title": "NGFS Microphysics RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "blowing_snow_rgb": {
                            "product_title": "Blowing Snow RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 1,
                            "resolution": "2 km",
                            "color_table_name": "blowingsnow"
                        },
                        "sea_spray_rgb": {
                            "product_title": "Sea Spray RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 1,
                            "resolution": "2 km",
                            "color_table_name": "seaspray"
                        },
                        "cira_atmosphere_rgb": {
                            "product_title": "Atmosphere RGB (CIRA)",
                            "product_description": "",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": ""
                        },
                        "cloud_products": {
                            "product_title": "----------CLOUD PRODUCTS - CLAVR-x----------"
                        },
                        "cloud_top_height_cira_clavr-x": {
                            "product_title": "Cloud-Top Height (NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA. See User Quick Guide for more information: <a href=' http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_BaselineCloudTopHeight.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_BaselineCloudTopHeight.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "cloud_top_height_cira_clavr-x"
                        },
                        "cloud_geometric_thickness_cira_clavr-x": {
                            "product_title": "Cloud Geometric Thickness (CIRA/NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "cloud_geometric_thickness_cira_clavr-x"
                        },
                        "cloud_layers_cira_clavr-x": {
                            "product_title": "Cloud Layers (CIRA/NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.The Cloud Layers are derived from the cloud top information using the predefined flight level thresholds, currently below 10 kft (about 3 km) for the Low layer and above 24 kft (about 7.3 km) for the High layer. The product has been improved to the vertically-extended layers such as H+M (high to mid-levels) or H+M+L (deep cloud) using a cloud geometric thickness/base height retrieval. See User Quick Guide for more information: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2023/08/QuickGuide_GOES_ABI_CCL_cira_31Aug2023.pdf' target='_blank'>https://rammb2.cira.colostate.edu/wp-content/uploads/2023/08/QuickGuide_GOES_ABI_CCL_cira_31Aug2023.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "cloud_layers_cira_clavr-x"
                        },
                        "cloud_optical_thickness_cira_clavr-x": {
                            "product_title": "Cloud Optical Depth (NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "cloud_optical_thickness_cira_clavr-x_and_cloud_effective_radius_cira_clavr-x"
                        },
                        "cloud_effective_radius_cira_clavr-x": {
                            "product_title": "Cloud-Top Effective Particle Size (NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "cloud_optical_thickness_cira_clavr-x_and_cloud_effective_radius_cira_clavr-x"
                        },
                        "cloud_phase_cira_clavr-x": {
                            "product_title": "Cloud Phase (CIRA/NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.Cloud Top Phase using IR bands (<a href='https://www.star.nesdis.noaa.gov/jpss/documents/ATBD/ATBD_EPS_Cloud_CldType_v2.0.pdf' target='_blank'>https://www.star.nesdis.noaa.gov/jpss/documents/ATBD/ATBD_EPS_Cloud_CldType_v2.0.pdf</a>). LTMP represents 'Supercooled Liquid water topped Mixed Phase' from CIRA's daytime sub-cloud phase detection based on differential reflectance ratios between 1.6 &micro;m and 2.2 &micro;m for liquid and ice (Miller et al. 2014 JGR; Noh et al. 2019 JGR).",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "cloud_phase_cira_clavr-x"
                        },
                        "cloud_mask_cira_clavr-x": {
                            "product_title": "Cloud Mask (NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.The cloud mask algorithm is based on 'A Naive Bayesian Cloud-Detection Scheme' by Andrew K. Heidinger (2012, J. Applied Meteorology and Climatology, <a href='https://doi.org/10.1175/JAMC-D-11-02.1' target='_blank' target='_blank'>https://doi.org/10.1175/JAMC-D-11-02.1</a>).",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "cloud_mask_cira_clavr-x"
                        },
                        "microwave_products": {
                            "product_title": "----------MICROWAVE PRODUCTS----------"
                        },
                        "cira_blended_tpw": {
                            "product_title": "Blended TPW (CIRA)",
                            "product_description": "Blended TPW is a retrieval of the total precipitable water (TPW) in the column derived from a combination of microwave data from polar-orbiting satellites, infrared data from geostationary satellites, and ground-based GPS sensors. See User Quick Guide for more information: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/Blended_TPW_Quick_Guide_20180727-1.pdf' target='_blank' target='_blank'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/Blended_TPW_Quick_Guide_20180727-1.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "cira_blended_tpw"
                        },
                        "cira_advected_layered_precipitable_water_surface-850hPa": {
                            "product_title": "Advected Layered Precipitable Water [Surface-850 hPa] (CIRA)",
                            "product_description": "CIRA's Advected Layered Precipitable Water product is a retrieval of atmospheric water vapor in four layers of the atmosphere derived from five polar-orbiting satellites. A Quick Guide for the product is available here: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf</a> ",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "ALPW"
                        },
                        "cira_advected_layered_precipitable_water_850-700hPa": {
                            "product_title": "Advected Layered Precipitable Water [850 - 700 hPa] (CIRA)",
                            "product_description": "CIRA's Advected Layered Precipitable Water product is a retrieval of atmospheric water vapor in four layers of the atmosphere derived from five polar-orbiting satellites. A Quick Guide for the product is available here: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf</a> ",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "ALPW"
                        },
                        "cira_advected_layered_precipitable_water_700-500hPa": {
                            "product_title": "Advected Layered Precipitable Water [700 - 500 hPa] (CIRA)",
                            "product_description": "CIRA's Advected Layered Precipitable Water product is a retrieval of atmospheric water vapor in four layers of the atmosphere derived from five polar-orbiting satellites. A Quick Guide for the product is available here: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf</a> ",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "ALPW"
                        },
                        "cira_advected_layered_precipitable_water_500-300hPa": {
                            "product_title": "Advected Layered Precipitable Water [500 - 300 hPa] (CIRA)",
                            "product_description": "CIRA's Advected Layered Precipitable Water product is a retrieval of atmospheric water vapor in four layers of the atmosphere derived from five polar-orbiting satellites. A Quick Guide for the product is available here: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf</a> ",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "ALPW"
                        },
                        "cira_layer_vapor_transport_surface-850hPa": {
                            "product_title": "Layer Vapor Transport [Surface-850 hPa] (CIRA)",
                            "product_description": "Layer Vapor Transport (LVT) is a measure of the transport of water vapor through the atmosphere in four layers, based on the Advected Layer Precipitable Water product (ALPW) and model-based wind speeds.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "LVT"
                        },
                        "cira_layer_vapor_transport_850-700hPa": {
                            "product_title": "Layer Vapor Transport [850-700 hPa] (CIRA)",
                            "product_description": "Layer Vapor Transport (LVT) is a measure of the transport of water vapor through the atmosphere in four layers, based on the Advected Layer Precipitable Water product (ALPW) and model-based wind speeds.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "LVT"
                        },
                        "cira_layer_vapor_transport_700-500hPa": {
                            "product_title": "Layer Vapor Transport [700-500 hPa] (CIRA)",
                            "product_description": "Layer Vapor Transport (LVT) is a measure of the transport of water vapor through the atmosphere in four layers, based on the Advected Layer Precipitable Water product (ALPW) and model-based wind speeds.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "LVT"
                        },
                        "cira_layer_vapor_transport_500-300hPa": {
                            "product_title": "Layer Vapor Transport [500-300 hPa] (CIRA)",
                            "product_description": "Layer Vapor Transport (LVT) is a measure of the transport of water vapor through the atmosphere in four layers, based on the Advected Layer Precipitable Water product (ALPW) and model-based wind speeds.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "LVT"
                        }
                    }
                },
                "gk2a": {
                    "satellite_title": "GEO-KOMPSAT-2A (128E)",
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
                                "lon0": 128.0,
                                "sat_alt": 42171.7,
                                "max_rad_x": 0.150618,
                                "max_rad_y": 0.150485,
                                "disk_radius_x_z0": 337,
                                "disk_radius_y_z0": 336,
                                "decimal_places": 1,
                                "scale_bar_min_zoom": 3
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
                                    "satellite": "meteosat-9",
                                    "sector": "full_disk"
                                },
                                "down": {
                                    "satellite": "jpss",
                                    "sector": "southern_hemisphere"
                                }
                            },
                            "missing_products": [
                                "cira_geodust"
                            ],
                            "missing_maps": [
                                "counties",
                                "county_labels",
                                "nws_county_warning_areas",
                                "mesoscale_boxes",
                                "nasa_svs_center",
                                "nasa_svs_duration",
                                "nasa_svs_ppath",
                                "nasa_svs_ppath01",
                                "nasa_svs_umbra_lo",
                                "nasa_svs_upath_lo"
                            ]
                        },
                        "ela": {
                            "sector_title": "Extended Local Area",
                            "max_zoom_level": 3,
                            "tile_size": 975,
                            "default_product": "geocolor",
                            "defaults": {
                                "minutes_between_images": 2
                            },
                            "missing_products": [
                                "cloud_products",
                                "microwave_products",
                                "cira_blended_tpw",
                                "cira_advected_layered_precipitable_water_surface-850hPa",
                                "cira_advected_layered_precipitable_water_850-700hPa",
                                "cira_advected_layered_precipitable_water_700-500hPa",
                                "cira_advected_layered_precipitable_water_500-300hPa",
                                "products_under_development",
                                "cira_layer_vapor_transport_surface-850hPa",
                                "cira_layer_vapor_transport_850-700hPa",
                                "cira_layer_vapor_transport_700-500hPa",
                                "cira_layer_vapor_transport_500-300hPa"
                            ],
                            "missing_maps": [
                                "airports",
                                "city_lights",
                                "cities",
                                "counties",
                                "country_labels",
                                "county_labels",
                                "mesoscale_boxes",
                                "nws_county_warning_areas",
                                "state_labels"
                            ]
                        },
                        "korea": {
                            "sector_title": "Korea",
                            "max_zoom_level": 2,
                            "tile_size": 500,
                            "default_product": "geocolor",
                            "defaults": {
                                "minutes_between_images": 2
                            },
                            "missing_products": [
                                "cloud_products",
                                "microwave_products",
                                "cira_blended_tpw",
                                "cira_advected_layered_precipitable_water_surface-850hPa",
                                "cira_advected_layered_precipitable_water_850-700hPa",
                                "cira_advected_layered_precipitable_water_700-500hPa",
                                "cira_advected_layered_precipitable_water_500-300hPa",
                                "products_under_development",
                                "cira_geodust",
                                "cira_geoproxy",
                                "cira_layer_vapor_transport_surface-850hPa",
                                "cira_layer_vapor_transport_850-700hPa",
                                "cira_layer_vapor_transport_700-500hPa",
                                "cira_layer_vapor_transport_500-300hPa"
                            ],
                            "missing_maps": [
                                "city_lights",
                                "counties",
                                "county_labels",
                                "nws_county_warning_areas",
                                "mesoscale_boxes",
                                "nasa_svs_center",
                                "nasa_svs_duration",
                                "nasa_svs_ppath",
                                "nasa_svs_ppath01",
                                "nasa_svs_umbra_lo",
                                "nasa_svs_upath_lo"
                            ]
                        }
                    },
                    "products": {
                        "individual_ami_bands": {
                            "product_title": "----------INDIVIDUAL AMI BANDS----------"
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
                            "product_title": "Band 5: 1.38 &micro;m (&quot;Cirrus&quot;)",
                            "product_description": "Cirrus cloud detection (daytime only). More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band04.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band04.pdf",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "lowlight3"
                        },
                        "band_06": {
                            "product_title": "Band 6: 1.6 &micro;m (&quot;Snow/Ice&quot;)",
                            "product_description": "Snow/cloud discrimination (daytime only)",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "lowlight3"
                        },
                        "band_07": {
                            "product_title": "Band 7: 3.8 &micro;m (&quot;Shortwave Window&quot;)",
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
                            "product_description": "GeoColor imagery provides as close an approximation to daytime True Color imagery as is possible from GOES-16, and thus allows for intuitive interpretation of meteorological and surface-based features. At night, instead of being dark like in other visible bands, an IR-based multispectral product is provided that differentiates between low liquid water clouds and higher ice clouds. A static city lights database derived from the VIIRS Day Night Band is provided as the nighttime background for geo-referencing. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_CIRA_Geocolor_20171019.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_CIRA_Geocolor_20171019.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": ""
                        },
                        "cira_geoproxy": {
                            "product_title": "GeoProxy (CIRA)",
                            "product_description": "A blend of GeoColor and ProxyVis to improve low cloud detection at night over the ocean.",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": ""
                        },
                        "split_window_difference_10_3-12_3": {
                            "product_title": "Split Window Difference (10.3 &micro;m - 12.3 &micro;m)",
                            "product_description": "The Split Window Difference has a variety of meteorological applications, and is leveraged in several multispectral and derived products. The primary applications are related to the relative sensitivity of the 10.3 &micro;m channel to absorption by dust particles, and the relative sensitivity of the 12.3 &micro;m channel to absorption by water vapor. In this version, blowing dust will appear as magenta (negative values). In clear sky conditions with a positive lapse rate, colors progressing from blue to green to yellow to red (higher positive values) represent greater amounts of low-level moisture. Very thin cirrus clouds, including contrails, appear as red to white (high positive values). Volcanic ash will appear very similarly to dust.<br /><br />More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_SplitWindowDifference.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_SplitWindowDifference.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "split_window_difference_10_3-12_3"
                        },
                        "split_window_difference_dust": {
                            "product_title": "Split Window Difference Dust (10.3 &micro;m - 12.3 &micro;m)",
                            "product_description": "The Split Window Difference has a variety of meteorological applications, and is leveraged in several multispectral and derived products. The primary applications are related to the relative sensitivity of the 10.3 &micro;m channel to absorption by dust particles, and the relative sensitivity of the 12.3 &micro;m channel to absorption by water vapor. In this version, areas of likely blowing dust are highlighted as non-gray colors, while the rest of the scene is grayscale. Volcanic ash will appear very similarly to dust.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "split_window_difference_dust"
                        },
                        "cira_geodust": {
                            "product_title": "GeoDust (CIRA)",
                            "product_description": "A blend of GeoColor and the Split Window Difference product that highlights dust.",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "abi_debra"
                        },
                        "split_window_difference_grayscale": {
                            "product_title": "Split Window Difference Grayscale (10.3 &micro;m - 12.3 &micro;m)",
                            "product_description": "The Split Window Difference has a variety of meteorological applications, and is leveraged in several multispectral and derived products. The primary applications are related to the relative sensitivity of the 10.3 &micro;m channel to absorption by dust particles, and the relative sensitivity of the 12.3 &micro;m channel to absorption by water vapor. In this version, blowing dust will appear as a relatively dark gray to black (negative values). In clear sky conditions with a positive lapse rate, progressively lighter shades of gray (higher positive values) represent greater amounts of low-level moisture. Very thin cirrus clouds, including contrails, appear as white (high positive values). Volcanic ash will appear very similarly to dust.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "split_window_difference_grayscale"
                        },
                        "shortwave_albedo_cira": {
                            "product_title": "Shortwave Albedo (CIRA)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "svgair_albedo"
                        },
                        "multispectral_rgb_composites": {
                            "product_title": "----------MULTISPECTRAL RGB COMPOSITES----------"
                        },
                        "natural_color": {
                            "product_title": "Day Land Cloud (EUMETSAT)",
                            "product_description": "The Day Land Cloud RGB is the same as the Natural Color RGB by EUMETSAT, and is useful for discriminating between high ice clouds and low water clouds. High ice clouds, snow, and sea ice appear cyan while low water clouds appear dull grey or white. This imagery can also be used to assess vegetation and detect land surface changes. In AWIPS, referred to as 'Day Land Cloud'. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_daylandcloudRGB_final.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_daylandcloudRGB_final.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": ""
                        },
                        "rgb_air_mass": {
                            "product_title": "Airmass (EUMETSAT)",
                            "product_description": "The Air Mass RGB is used to diagnose the environment surrounding synoptic systems. Cyclogenesis can be inferred by the identification of warm, dry, ozone-rich descending stratospheric air associated with jet streams and potential vorticity anomalies. This RGB can distinguish between polar and tropical air masses, especially along upper-level frontal boundaries and identify high-, mid-, and low-level clouds. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_AirMassRGB_final.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_AirMassRGB_final.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "rgb_air_mass"
                        },
                        "jma_day_cloud_phase_distinction_rgb": {
                            "product_title": "Day Cloud Phase Distinction (JMA)",
                            "product_description": "This RGB is used to evaluate the phase of cooling cloud tops to monitor convective initiation, storm growth, and decay. It can also be used to identify snow on the ground. The Day Cloud Phase Distinction RGB takes advantage of cloud reflectance differences between the visible and near infrared channels and temperature variances between land and clouds in the infrared to provide increased contrast between background surfaces and phases of clouds (i.e. water vs. ice). More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/Day_Cloud_Phase_Distinction.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/Day_Cloud_Phase_Distinction.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "jma_day_cloud_phase_distinction_rgb"
                        },
                        "eumetsat_nighttime_microphysics": {
                            "product_title": "Nighttime Microphysics (EUMETSAT)",
                            "product_description": "More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_NtMicroRGB_Final_20191206.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_NtMicroRGB_Final_20191206.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "eumetsat_nighttime_microphysics"
                        },
                        "day_snow_fog": {
                            "product_title": "Day Snow/Fog (EUMETSAT/NASA SPoRT)",
                            "product_description": "Differentiating between snow and clouds in satellite imagery can be challenging due to their similar characteristics and the high reflectivity of both at visible wavelengths.  The Day Snow/Fog RGB combines channels that bring out the distinguishing characteristics of snow (red-orange), ice clouds (shades of pink), and water clouds / fog (shades of yellow). More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DaySnowFogRGB_final_v2.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DaySnowFogRGB_final_v2.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "day_snow_fog"
                        },
                        "awips_dust": {
                            "product_title": "Dust (EUMETSAT)",
                            "product_description": "Dust can be difficult to see in VIS and IR imagery because it is optically thin and can appear similar to certain cloud types. The Dust RGB is able to contrast airborne dust from clouds, as well as land or ocean surfaces, given sufficient thickness/density. Dust appears pink/magenta during the day and can vary in color at night based on height.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "eumetsat_dust"
                        },
                        "cvd_dust_rgb": {
                            "product_title": "CVD Dust RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "dust_fire_rgb": {
                            "product_title": "Dust-Fire RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "cira_natural_fire_color": {
                            "product_title": "Day Fire (CIRA)",
                            "product_description": "The Day Fire RGB is similar to the original Natural Color RGB by EUMETSAT except the 1.6 &micro;m band used in the red component is replaced with the 2.2 &micro;m band. This change highlights the fire hotspots in red, but also limits the use of the RGB for differentiating water vs. ice clouds (both appear cyan, except for very small particles). In AWIPS, referred to as 'Day Land Cloud Fire'.",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "cira_natural_fire_color"
                        },
                        "eumetsat_ash": {
                            "product_title": "Ash (EUMETSAT)",
                            "product_description": "The Ash RGB can be used to detect and monitor volcanic ash and sulfur dioxide gas. These emissions can be hazardous for public health and aviation activities. The detection of ash plumes (pink/magenta/red) is largely due to the opposite absorption characteristics of ash and ice clouds between the 12.3 and 10.3 &micro;m bands in the red component of the RGB recipe.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "eumetsat_ash"
                        },
                        "jma_so2": {
                            "product_title": "Volcanic Emissions (SO<sub>2</sub>) RGB (JMA)",
                            "product_description": "Sulfur dioxide (SO<sub>2</sub>) is a gas commonly released during volcanic eruptions. In high concentrations it is toxic to humans and has considerable environmental effects, including volcanic smog and acid rain. The SO<sub>2</sub> RGB can be used to detect and monitor large sulfur dioxide emissions from both volcanoes and industrial facilities.  It can also be used to detect volcanic ash and dust.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "jma_so2"
                        },
                        "eumetsat_tropical_airmass_rgb": {
                            "product_title": "Overshooting Tops RGB (EUMETSAT)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "eumetsat_severe_storms_rgb": {
                            "product_title": "Severe Storms RGB (EUMETSAT)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "ngfs_microphysics": {
                            "product_title": "NGFS Microphysics RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "blowing_snow_rgb": {
                            "product_title": "Blowing Snow RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 1,
                            "resolution": "2 km",
                            "color_table_name": "blowingsnow"
                        },
                        "sea_spray_rgb": {
                            "product_title": "Sea Spray RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 1,
                            "resolution": "2 km",
                            "color_table_name": "seaspray"
                        },
                        "microwave_products": {
                            "product_title": "----------MICROWAVE PRODUCTS----------"
                        },
                        "cira_blended_tpw": {
                            "product_title": "Blended TPW (CIRA)",
                            "product_description": "Blended TPW is a retrieval of the total precipitable water (TPW) in the column derived from a combination of microwave data from polar-orbiting satellites, infrared data from geostationary satellites, and ground-based GPS sensors. See User Quick Guide for more information: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/Blended_TPW_Quick_Guide_20180727-1.pdf' target='_blank' target='_blank'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/Blended_TPW_Quick_Guide_20180727-1.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "cira_blended_tpw"
                        },
                        "cira_advected_layered_precipitable_water_surface-850hPa": {
                            "product_title": "Advected Layered Precipitable Water [Surface-850 hPa] (CIRA)",
                            "product_description": "CIRA's Advected Layered Precipitable Water product is a retrieval of atmospheric water vapor in four layers of the atmosphere derived from five polar-orbiting satellites. A Quick Guide for the product is available here: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf</a> ",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "ALPW"
                        },
                        "cira_advected_layered_precipitable_water_850-700hPa": {
                            "product_title": "Advected Layered Precipitable Water [850 - 700 hPa] (CIRA)",
                            "product_description": "CIRA's Advected Layered Precipitable Water product is a retrieval of atmospheric water vapor in four layers of the atmosphere derived from five polar-orbiting satellites. A Quick Guide for the product is available here: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf</a> ",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "ALPW"
                        },
                        "cira_advected_layered_precipitable_water_700-500hPa": {
                            "product_title": "Advected Layered Precipitable Water [700 - 500 hPa] (CIRA)",
                            "product_description": "CIRA's Advected Layered Precipitable Water product is a retrieval of atmospheric water vapor in four layers of the atmosphere derived from five polar-orbiting satellites. A Quick Guide for the product is available here: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf</a> ",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "ALPW"
                        },
                        "cira_advected_layered_precipitable_water_500-300hPa": {
                            "product_title": "Advected Layered Precipitable Water [500 - 300 hPa] (CIRA)",
                            "product_description": "CIRA's Advected Layered Precipitable Water product is a retrieval of atmospheric water vapor in four layers of the atmosphere derived from five polar-orbiting satellites. A Quick Guide for the product is available here: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf</a> ",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "ALPW"
                        },
                        "cira_layer_vapor_transport_surface-850hPa": {
                            "product_title": "Layer Vapor Transport [Surface-850 hPa] (CIRA)",
                            "product_description": "Layer Vapor Transport (LVT) is a measure of the transport of water vapor through the atmosphere in four layers, based on the Advected Layer Precipitable Water product (ALPW) and model-based wind speeds.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "LVT"
                        },
                        "cira_layer_vapor_transport_850-700hPa": {
                            "product_title": "Layer Vapor Transport [850-700 hPa] (CIRA)",
                            "product_description": "Layer Vapor Transport (LVT) is a measure of the transport of water vapor through the atmosphere in four layers, based on the Advected Layer Precipitable Water product (ALPW) and model-based wind speeds.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "LVT"
                        },
                        "cira_layer_vapor_transport_700-500hPa": {
                            "product_title": "Layer Vapor Transport [700-500 hPa] (CIRA)",
                            "product_description": "Layer Vapor Transport (LVT) is a measure of the transport of water vapor through the atmosphere in four layers, based on the Advected Layer Precipitable Water product (ALPW) and model-based wind speeds.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "LVT"
                        },
                        "cira_layer_vapor_transport_500-300hPa": {
                            "product_title": "Layer Vapor Transport [500-300 hPa] (CIRA)",
                            "product_description": "Layer Vapor Transport (LVT) is a measure of the transport of water vapor through the atmosphere in four layers, based on the Advected Layer Precipitable Water product (ALPW) and model-based wind speeds.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "LVT"
                        }
                    }
                },
                "meteosat-9": {
                    "satellite_title": "Meteosat-9 (45.5E)",
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
                                "lon0": 45.5,
                                "sat_alt": 42171.2,
                                "max_rad_x": 0.150591,
                                "max_rad_y": 0.150290,
                                "disk_radius_x_z0": 225,
                                "disk_radius_y_z0": 224,
                                "decimal_places": 1,
                                "scale_bar_min_zoom": 3
                            },
                            "navigation": {
                                "up": {
                                    "satellite": "jpss",
                                    "sector": "northern_hemisphere"
                                },
                                "right": {
                                    "satellite": "gk2a",
                                    "sector": "full_disk"
                                },
                                "left": {
                                    "satellite": "meteosat-0deg",
                                    "sector": "full_disk"
                                },
                                "down": {
                                    "satellite": "jpss",
                                    "sector": "southern_hemisphere"
                                }
                            },
                            "missing_products": [
                                "day_snow_fog",
                                "fire_temperature"
                            ],
                            "missing_maps": [
                                "counties",
                                "county_labels",
                                "nws_county_warning_areas",
                                "mesoscale_boxes",
                                "nasa_svs_center",
                                "nasa_svs_duration",
                                "nasa_svs_ppath",
                                "nasa_svs_ppath01",
                                "nasa_svs_umbra_lo",
                                "nasa_svs_upath_lo"
                            ]
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
                            "color_table_name": "lowlight3"
                        },
                        "band_02": {
                            "product_title": "Band 2: 0.81 &micro;m (EUMETSAT, Hourly)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "lowlight3"
                        },
                        "band_03": {
                            "product_title": "Band 3: 1.64 &micro;m (EUMETSAT, Hourly)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "lowlight3"
                        },
                        "band_04": {
                            "product_title": "Band 4: 3.90 &micro;m (EUMETSAT, Hourly)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "svgair2"
                        },
                        "band_05": {
                            "product_title": "Band 5: 6.25 &micro;m (EUMETSAT, Hourly)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "svgawvx"
                        },
                        "band_06": {
                            "product_title": "Band 6: 7.35 &micro;m (EUMETSAT, Hourly)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "svgawvx"
                        },
                        "band_07": {
                            "product_title": "Band 7: 8.70 &micro;m (EUMETSAT, Hourly)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "ircimss2"
                        },
                        "band_08": {
                            "product_title": "Band 8: 9.66 &micro;m (EUMETSAT, Hourly)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "ircimss2"
                        },
                        "band_09": {
                            "product_title": "Band 9: 10.80 &micro;m (EUMETSAT, Hourly)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "zehr4a"
                        },
                        "band_10": {
                            "product_title": "Band 10: 12.00 &micro;m (EUMETSAT, Hourly)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "svgair"
                        },
                        "band_11": {
                            "product_title": "Band 11: 13.4 &micro;m (EUMETSAT, Hourly)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "ircimss2"
                        },
                        "multispectral_imagery": {
                            "product_title": "----------MULTISPECTRAL IMAGERY----------"
                        },
                        "geocolor": {
                            "product_title": "GeoColor (CIRA)",
                            "product_description": "GeoColor imagery provides as close an approximation to daytime True Color imagery as is possible from GOES-16, and thus allows for intuitive interpretation of meteorological and surface-based features. At night, instead of being dark like in other visible bands, an IR-based multispectral product is provided that differentiates between low liquid water clouds and higher ice clouds. A static city lights database derived from the VIIRS Day Night Band is provided as the nighttime background for geo-referencing. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_CIRA_Geocolor_20171019.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_CIRA_Geocolor_20171019.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": "1 km",
                            "color_table_name": ""
                        },
                        "cira_proxy_visible": {
                            "product_title": "ProxyVis (CIRA)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "1 km",
                            "color_table_name": "lowlight4"
                        },
                        "cira_single_channel_proxyvis": {
                            "product_title": "Single-Channel ProxyVis",
                            "product_description": "https://rammb2.cira.colostate.edu/research/goes-r-research/proxyvis/",
                            "zoom_level_adjust": 0,
                            "resolution": "1 km",
                            "color_table_name": "lowlight4"
                        },
                        "cira_debra_dust": {
                            "product_title": "Dust - DEBRA (CIRA)",
                            "product_description": "More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DEBRA-Dust_20210217.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DEBRA-Dust_20210217.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "abi_debra"
                        },
                        "split_window_difference_10_3-12_3": {
                            "product_title": "Split Window Difference (10.8 &micro;m - 12.0 &micro;m)",
                            "product_description": "The Split Window Difference has a variety of meteorological applications, and is leveraged in several multispectral and derived products. The primary applications are related to the relative sensitivity of the 10.8 &micro;m channel to absorption by dust particles, and the relative sensitivity of the 12.0 &micro;m channel to absorption by water vapor. In this version, blowing dust will appear as magenta (negative values). In clear sky conditions with a positive lapse rate, colors progressing from blue to green to yellow to red (higher positive values) represent greater amounts of low-level moisture. Very thin cirrus clouds, including contrails, appear as red to white (high positive values). Volcanic ash will appear very similarly to dust.<br /><br />More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_SplitWindowDifference.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_SplitWindowDifference.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "split_window_difference_10_3-12_3"
                        },
                        "split_window_difference_dust": {
                            "product_title": "Split Window Difference Dust (10.8 &micro;m - 12.0 &micro;m)",
                            "product_description": "The Split Window Difference has a variety of meteorological applications, and is leveraged in several multispectral and derived products. The primary applications are related to the relative sensitivity of the 10.8 &micro;m channel to absorption by dust particles, and the relative sensitivity of the 12.0 &micro;m channel to absorption by water vapor. In this version, areas of likely blowing dust are highlighted as non-gray colors, while the rest of the scene is grayscale. Volcanic ash will appear very similarly to dust.",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "split_window_difference_dust"
                        },
                        "split_window_difference_grayscale": {
                            "product_title": "Split Window Difference Grayscale (10.8 &micro;m - 12.0 &micro;m)",
                            "product_description": "The Split Window Difference has a variety of meteorological applications, and is leveraged in several multispectral and derived products. The primary applications are related to the relative sensitivity of the 10.8 &micro;m channel to absorption by dust particles, and the relative sensitivity of the 12.0 &micro;m channel to absorption by water vapor. In this version, blowing dust will appear as a relatively dark gray to black (negative values). In clear sky conditions with a positive lapse rate, progressively lighter shades of gray (higher positive values) represent greater amounts of low-level moisture. Very thin cirrus clouds, including contrails, appear as white (high positive values). Volcanic ash will appear very similarly to dust.",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "split_window_difference_grayscale"
                        },
                        "multispectral_rgb_composites": {
                            "product_title": "----------MULTISPECTRAL RGB COMPOSITES----------"
                        },
                        "natural_color": {
                            "product_title": "Day Land Cloud (EUMETSAT)",
                            "product_description": "The Day Land Cloud RGB is the same as the Natural Color RGB by EUMETSAT, and is useful for discriminating between high ice clouds and low water clouds. High ice clouds, snow, and sea ice appear cyan while low water clouds appear dull grey or white. This imagery can also be used to assess vegetation and detect land surface changes. In AWIPS, referred to as 'Day Land Cloud'. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_daylandcloudRGB_final.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_daylandcloudRGB_final.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": "1 km",
                            "color_table_name": ""
                        },
                        "rgb_air_mass": {
                            "product_title": "Airmass (EUMETSAT)",
                            "product_description": "The Air Mass RGB is used to diagnose the environment surrounding synoptic systems. Cyclogenesis can be inferred by the identification of warm, dry, ozone-rich descending stratospheric air associated with jet streams and potential vorticity anomalies. This RGB can distinguish between polar and tropical air masses, especially along upper-level frontal boundaries and identify high-, mid-, and low-level clouds. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_AirMassRGB_final.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_AirMassRGB_final.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "rgb_air_mass"
                        },
                        "jma_day_cloud_phase_distinction_rgb": {
                            "product_title": "Day Cloud Phase Distinction (JMA)",
                            "product_description": "This RGB is used to evaluate the phase of cooling cloud tops to monitor convective initiation, storm growth, and decay. It can also be used to identify snow on the ground. The Day Cloud Phase Distinction RGB takes advantage of cloud reflectance differences between the visible and near infrared channels and temperature variances between land and clouds in the infrared to provide increased contrast between background surfaces and phases of clouds (i.e. water vs. ice). More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/Day_Cloud_Phase_Distinction.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/Day_Cloud_Phase_Distinction.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": "1 km",
                            "color_table_name": "jma_day_cloud_phase_distinction_rgb"
                        },
                        "eumetsat_nighttime_microphysics": {
                            "product_title": "Nighttime Microphysics (EUMETSAT)",
                            "product_description": "More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_NtMicroRGB_Final_20191206.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_NtMicroRGB_Final_20191206.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "eumetsat_nighttime_microphysics"
                        },
                        "day_snow_fog": {
                            "product_title": "Day Snow/Fog (EUMETSAT)",
                            "product_description": "Differentiating between snow and clouds in satellite imagery can be challenging due to their similar characteristics and the high reflectivity of both at visible wavelengths.  The Day Snow/Fog RGB combines channels that bring out the distinguishing characteristics of snow (red-orange), ice clouds (shades of pink), and water clouds / fog (shades of yellow). More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DaySnowFogRGB_final_v2.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DaySnowFogRGB_final_v2.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": "1 km",
                            "color_table_name": "day_snow_fog"
                        },
                        "awips_dust": {
                            "product_title": "Dust (EUMETSAT)",
                            "product_description": "Dust can be difficult to see in VIS and IR imagery because it is optically thin and can appear similar to certain cloud types. The Dust RGB is able to contrast airborne dust from clouds, as well as land or ocean surfaces, given sufficient thickness/density. Dust appears pink/magenta during the day and can vary in color at night based on height. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/Dust_RGB_Quick_Guide.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/Dust_RGB_Quick_Guide.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "eumetsat_dust"
                        },
                        "cvd_dust_rgb": {
                            "product_title": "CVD Dust RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "dust_fire_rgb": {
                            "product_title": "Dust-Fire RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "fire_temperature": {
                            "product_title": "Fire Temperature (CIRA)",
                            "product_description": "The Fire Temperature RGB can be used to identify where the most intense fires are occurring and differentiate these from “cooler” fires. Fires need to be more intense in order to be detected by the 2.2 and 1.6 &micro;m bands. Small/”cool” fires will only show up at 3.9 &micro;m and appear red while increases in fire intensity cause greater contributions of the other channels resulting in white very intense fires. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/Fire_Temperature_RGB.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/Fire_Temperature_RGB.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "fire_temperature"
                        },
                        "cira_natural_fire_color": {
                            "product_title": "Day Fire (CIRA)",
                            "product_description": "The Day Fire RGB is similar to the original Natural Color RGB by EUMETSAT except the 1.6 &micro;m band used in the red component is replaced with the 2.2 &micro;m band. This change highlights the fire hotspots in red, but also limits the use of the RGB for differentiating water vs. ice clouds (both appear cyan, except for very small particles). In AWIPS, referred to as 'Day Land Cloud Fire'. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_DayLandCloudFireRGB_final.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_DayLandCloudFireRGB_final.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": "1 km",
                            "color_table_name": "cira_natural_fire_color"
                        },
                        "eumetsat_ash": {
                            "product_title": "Ash (EUMETSAT)",
                            "product_description": "The Ash RGB can be used to detect and monitor volcanic ash and sulfur dioxide gas. These emissions can be hazardous for public health and aviation activities. The detection of ash plumes (pink/magenta/red) is largely due to the opposite absorption characteristics of ash and ice clouds between the 12.3 and 10.3 &micro;m bands in the red component of the RGB recipe. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/GOES_Ash_RGB.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/GOES_Ash_RGB.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "eumetsat_ash"
                        },
                        "eumetsat_tropical_airmass_rgb": {
                            "product_title": "Overshooting Tops RGB (EUMETSAT)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "eumetsat_severe_storms_rgb": {
                            "product_title": "Severe Storms RGB (EUMETSAT)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "ngfs_microphysics": {
                            "product_title": "NGFS Microphysics RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "blowing_snow_rgb": {
                            "product_title": "Blowing Snow RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "blowingsnow"
                        },
                        "sea_spray_rgb": {
                            "product_title": "Sea Spray RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "seaspray"
                        },
                        "cloud_products": {
                            "product_title": "----------CLOUD PRODUCTS - CLAVR-x----------"
                        },
                        "cloud_top_height_cira_clavr-x": {
                            "product_title": "Cloud-Top Height (NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA. See User Quick Guide for more information: <a href=' http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_BaselineCloudTopHeight.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_BaselineCloudTopHeight.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "cloud_top_height_cira_clavr-x"
                        },
                        "cloud_geometric_thickness_cira_clavr-x": {
                            "product_title": "Cloud Geometric Thickness (CIRA/NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "cloud_geometric_thickness_cira_clavr-x"
                        },
                        "cloud_layers_cira_clavr-x": {
                            "product_title": "Cloud Layers (CIRA/NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.The Cloud Layers are derived from the cloud top information using the predefined flight level thresholds, currently below 10 kft (about 3 km) for the Low layer and above 24 kft (about 7.3 km) for the High layer. The product has been improved to the vertically-extended layers such as H+M (high to mid-levels) or H+M+L (deep cloud) using a cloud geometric thickness/base height retrieval. See User Quick Guide for more information: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2023/08/QuickGuide_GOES_ABI_CCL_cira_31Aug2023.pdf' target='_blank'>https://rammb2.cira.colostate.edu/wp-content/uploads/2023/08/QuickGuide_GOES_ABI_CCL_cira_31Aug2023.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "cloud_layers_cira_clavr-x"
                        },
                        "cloud_optical_thickness_cira_clavr-x": {
                            "product_title": "Cloud Optical Depth (NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "cloud_optical_thickness_cira_clavr-x_and_cloud_effective_radius_cira_clavr-x"
                        },
                        "cloud_effective_radius_cira_clavr-x": {
                            "product_title": "Cloud-Top Effective Particle Size (NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "cloud_optical_thickness_cira_clavr-x_and_cloud_effective_radius_cira_clavr-x"
                        },
                        "cloud_phase_cira_clavr-x": {
                            "product_title": "Cloud Phase (CIRA/NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.Cloud Top Phase using IR bands (<a href='https://www.star.nesdis.noaa.gov/jpss/documents/ATBD/ATBD_EPS_Cloud_CldType_v2.0.pdf' target='_blank'>https://www.star.nesdis.noaa.gov/jpss/documents/ATBD/ATBD_EPS_Cloud_CldType_v2.0.pdf</a>). LTMP represents 'Supercooled Liquid water topped Mixed Phase' from CIRA's daytime sub-cloud phase detection based on differential reflectance ratios between 1.6 &micro;m and 2.2 &micro;m for liquid and ice (Miller et al. 2014 JGR; Noh et al. 2019 JGR).",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "cloud_phase_cira_clavr-x"
                        },
                        "cloud_mask_cira_clavr-x": {
                            "product_title": "Cloud Mask (NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.The cloud mask algorithm is based on 'A Naive Bayesian Cloud-Detection Scheme' by Andrew K. Heidinger (2012, J. Applied Meteorology and Climatology, <a href='https://doi.org/10.1175/JAMC-D-11-02.1' target='_blank' target='_blank'>https://doi.org/10.1175/JAMC-D-11-02.1</a>).",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "cloud_mask_cira_clavr-x"
                        },
                        "microwave_products": {
                            "product_title": "----------MICROWAVE PRODUCTS----------"
                        },
                        "cira_blended_tpw": {
                            "product_title": "Blended TPW (CIRA)",
                            "product_description": "Blended TPW is a retrieval of the total precipitable water (TPW) in the column derived from a combination of microwave data from polar-orbiting satellites, infrared data from geostationary satellites, and ground-based GPS sensors. See User Quick Guide for more information: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/Blended_TPW_Quick_Guide_20180727-1.pdf' target='_blank' target='_blank'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/Blended_TPW_Quick_Guide_20180727-1.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "cira_blended_tpw"
                        },
                        "cira_advected_layered_precipitable_water_surface-850hPa": {
                            "product_title": "Advected Layered Precipitable Water [Surface-850 hPa] (CIRA)",
                            "product_description": "CIRA's Advected Layered Precipitable Water product is a retrieval of atmospheric water vapor in four layers of the atmosphere derived from five polar-orbiting satellites. A Quick Guide for the product is available here: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf</a> ",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "ALPW"
                        },
                        "cira_advected_layered_precipitable_water_850-700hPa": {
                            "product_title": "Advected Layered Precipitable Water [850 - 700 hPa] (CIRA)",
                            "product_description": "CIRA's Advected Layered Precipitable Water product is a retrieval of atmospheric water vapor in four layers of the atmosphere derived from five polar-orbiting satellites. A Quick Guide for the product is available here: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf</a> ",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "ALPW"
                        },
                        "cira_advected_layered_precipitable_water_700-500hPa": {
                            "product_title": "Advected Layered Precipitable Water [700 - 500 hPa] (CIRA)",
                            "product_description": "CIRA's Advected Layered Precipitable Water product is a retrieval of atmospheric water vapor in four layers of the atmosphere derived from five polar-orbiting satellites. A Quick Guide for the product is available here: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf</a> ",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "ALPW"
                        },
                        "cira_advected_layered_precipitable_water_500-300hPa": {
                            "product_title": "Advected Layered Precipitable Water [500 - 300 hPa] (CIRA)",
                            "product_description": "CIRA's Advected Layered Precipitable Water product is a retrieval of atmospheric water vapor in four layers of the atmosphere derived from five polar-orbiting satellites. A Quick Guide for the product is available here: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf</a> ",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "ALPW"
                        },
                        "cira_layer_vapor_transport_surface-850hPa": {
                            "product_title": "Layer Vapor Transport [Surface-850 hPa] (CIRA)",
                            "product_description": "Layer Vapor Transport (LVT) is a measure of the transport of water vapor through the atmosphere in four layers, based on the Advected Layer Precipitable Water product (ALPW) and model-based wind speeds.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "LVT"
                        },
                        "cira_layer_vapor_transport_850-700hPa": {
                            "product_title": "Layer Vapor Transport [850-700 hPa] (CIRA)",
                            "product_description": "Layer Vapor Transport (LVT) is a measure of the transport of water vapor through the atmosphere in four layers, based on the Advected Layer Precipitable Water product (ALPW) and model-based wind speeds.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "LVT"
                        },
                        "cira_layer_vapor_transport_700-500hPa": {
                            "product_title": "Layer Vapor Transport [700-500 hPa] (CIRA)",
                            "product_description": "Layer Vapor Transport (LVT) is a measure of the transport of water vapor through the atmosphere in four layers, based on the Advected Layer Precipitable Water product (ALPW) and model-based wind speeds.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "LVT"
                        },
                        "cira_layer_vapor_transport_500-300hPa": {
                            "product_title": "Layer Vapor Transport [500-300 hPa] (CIRA)",
                            "product_description": "Layer Vapor Transport (LVT) is a measure of the transport of water vapor through the atmosphere in four layers, based on the Advected Layer Precipitable Water product (ALPW) and model-based wind speeds.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "LVT"
                        },
                        "products_under_development": {
                            "product_title": "----------PRODUCTS UNDER DEVELOPMENT----------"
                        },
                        "cira_proxy_visible_experimental": {
                            "product_title": "ProxyVis Experimental (CIRA)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "1 km",
                            "color_table_name": "lowlight4"
                        }
                    }
                },
                "meteosat-0deg": {
                    "satellite_title": "Meteosat-10 (0.0)",
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
                                "decimal_places": 1,
                                "scale_bar_min_zoom": 3
                            },
                            "navigation": {
                                "up": {
                                    "satellite": "jpss",
                                    "sector": "northern_hemisphere"
                                },
                                "right": {
                                    "satellite": "meteosat-9",
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
                            "missing_products": [
                                "day_snow_fog",
                                "fire_temperature"
                            ],
                            "missing_maps": [
                                "counties",
                                "county_labels",
                                "nws_county_warning_areas",
                                "mesoscale_boxes",
                                "nasa_svs_center",
                                "nasa_svs_duration",
                                "nasa_svs_ppath",
                                "nasa_svs_ppath01",
                                "nasa_svs_umbra_lo",
                                "nasa_svs_upath_lo"
                            ]
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
                            "color_table_name": "lowlight3"
                        },
                        "band_02": {
                            "product_title": "Band 2: 0.81 &micro;m (EUMETSAT, Hourly)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "lowlight3"
                        },
                        "band_03": {
                            "product_title": "Band 3: 1.64 &micro;m (EUMETSAT, Hourly)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "lowlight3"
                        },
                        "band_04": {
                            "product_title": "Band 4: 3.90 &micro;m (EUMETSAT, Hourly)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "svgair2"
                        },
                        "band_05": {
                            "product_title": "Band 5: 6.25 &micro;m (EUMETSAT, Hourly)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "svgawvx"
                        },
                        "band_06": {
                            "product_title": "Band 6: 7.35 &micro;m (EUMETSAT, Hourly)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "svgawvx"
                        },
                        "band_07": {
                            "product_title": "Band 7: 8.70 &micro;m (EUMETSAT, Hourly)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "ircimss2"
                        },
                        "band_08": {
                            "product_title": "Band 8: 9.66 &micro;m (EUMETSAT, Hourly)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "ircimss2"
                        },
                        "band_09": {
                            "product_title": "Band 9: 10.80 &micro;m (EUMETSAT, Hourly)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "zehr4a"
                        },
                        "band_10": {
                            "product_title": "Band 10: 12.00 &micro;m (EUMETSAT, Hourly)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "svgair"
                        },
                        "band_11": {
                            "product_title": "Band 11: 13.4 &micro;m (EUMETSAT, Hourly)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "ircimss2"
                        },
                        "multispectral_imagery": {
                            "product_title": "----------MULTISPECTRAL IMAGERY----------"
                        },
                        "geocolor": {
                            "product_title": "GeoColor (CIRA)",
                            "product_description": "GeoColor imagery provides as close an approximation to daytime True Color imagery as is possible from GOES-16, and thus allows for intuitive interpretation of meteorological and surface-based features. At night, instead of being dark like in other visible bands, an IR-based multispectral product is provided that differentiates between low liquid water clouds and higher ice clouds. A static city lights database derived from the VIIRS Day Night Band is provided as the nighttime background for geo-referencing. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_CIRA_Geocolor_20171019.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_CIRA_Geocolor_20171019.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": "1 km",
                            "color_table_name": ""
                        },
                        "cira_proxy_visible": {
                            "product_title": "ProxyVis (CIRA)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "1 km",
                            "color_table_name": "lowlight4"
                        },
                        "cira_single_channel_proxyvis": {
                            "product_title": "Single-Channel ProxyVis",
                            "product_description": "https://rammb2.cira.colostate.edu/research/goes-r-research/proxyvis/",
                            "zoom_level_adjust": 0,
                            "resolution": "1 km",
                            "color_table_name": "lowlight4"
                        },
                        "cira_debra_dust": {
                            "product_title": "Dust - DEBRA (CIRA)",
                            "product_description": "More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DEBRA-Dust_20210217.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DEBRA-Dust_20210217.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "abi_debra"
                        },
                        "split_window_difference_10_3-12_3": {
                            "product_title": "Split Window Difference (10.8 &micro;m - 12.0 &micro;m)",
                            "product_description": "The Split Window Difference has a variety of meteorological applications, and is leveraged in several multispectral and derived products. The primary applications are related to the relative sensitivity of the 10.8 &micro;m channel to absorption by dust particles, and the relative sensitivity of the 12.0 &micro;m channel to absorption by water vapor. In this version, blowing dust will appear as magenta (negative values). In clear sky conditions with a positive lapse rate, colors progressing from blue to green to yellow to red (higher positive values) represent greater amounts of low-level moisture. Very thin cirrus clouds, including contrails, appear as red to white (high positive values). Volcanic ash will appear very similarly to dust.<br /><br />More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_SplitWindowDifference.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_SplitWindowDifference.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "split_window_difference_10_3-12_3"
                        },
                        "split_window_difference_dust": {
                            "product_title": "Split Window Difference Dust (10.8 &micro;m - 12.0 &micro;m)",
                            "product_description": "The Split Window Difference has a variety of meteorological applications, and is leveraged in several multispectral and derived products. The primary applications are related to the relative sensitivity of the 10.8 &micro;m channel to absorption by dust particles, and the relative sensitivity of the 12.0 &micro;m channel to absorption by water vapor. In this version, areas of likely blowing dust are highlighted as non-gray colors, while the rest of the scene is grayscale. Volcanic ash will appear very similarly to dust.",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "split_window_difference_dust"
                        },
                        "split_window_difference_grayscale": {
                            "product_title": "Split Window Difference Grayscale (10.8 &micro;m - 12.0 &micro;m)",
                            "product_description": "The Split Window Difference has a variety of meteorological applications, and is leveraged in several multispectral and derived products. The primary applications are related to the relative sensitivity of the 10.8 &micro;m channel to absorption by dust particles, and the relative sensitivity of the 12.0 &micro;m channel to absorption by water vapor. In this version, blowing dust will appear as a relatively dark gray to black (negative values). In clear sky conditions with a positive lapse rate, progressively lighter shades of gray (higher positive values) represent greater amounts of low-level moisture. Very thin cirrus clouds, including contrails, appear as white (high positive values). Volcanic ash will appear very similarly to dust.",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "split_window_difference_grayscale"
                        },
                        "multispectral_rgb_composites": {
                            "product_title": "----------MULTISPECTRAL RGB COMPOSITES----------"
                        },
                        "natural_color": {
                            "product_title": "Day Land Cloud (EUMETSAT)",
                            "product_description": "The Day Land Cloud RGB is the same as the Natural Color RGB by EUMETSAT, and is useful for discriminating between high ice clouds and low water clouds. High ice clouds, snow, and sea ice appear cyan while low water clouds appear dull grey or white. This imagery can also be used to assess vegetation and detect land surface changes. In AWIPS, referred to as 'Day Land Cloud'. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_daylandcloudRGB_final.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_daylandcloudRGB_final.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": "1 km",
                            "color_table_name": ""
                        },
                        "rgb_air_mass": {
                            "product_title": "Airmass (EUMETSAT)",
                            "product_description": "The Air Mass RGB is used to diagnose the environment surrounding synoptic systems. Cyclogenesis can be inferred by the identification of warm, dry, ozone-rich descending stratospheric air associated with jet streams and potential vorticity anomalies. This RGB can distinguish between polar and tropical air masses, especially along upper-level frontal boundaries and identify high-, mid-, and low-level clouds. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_AirMassRGB_final.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_AirMassRGB_final.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "rgb_air_mass"
                        },
                        "jma_day_cloud_phase_distinction_rgb": {
                            "product_title": "Day Cloud Phase Distinction (JMA)",
                            "product_description": "This RGB is used to evaluate the phase of cooling cloud tops to monitor convective initiation, storm growth, and decay. It can also be used to identify snow on the ground. The Day Cloud Phase Distinction RGB takes advantage of cloud reflectance differences between the visible and near infrared channels and temperature variances between land and clouds in the infrared to provide increased contrast between background surfaces and phases of clouds (i.e. water vs. ice). More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/Day_Cloud_Phase_Distinction.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/Day_Cloud_Phase_Distinction.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": "1 km",
                            "color_table_name": "jma_day_cloud_phase_distinction_rgb"
                        },
                        "eumetsat_nighttime_microphysics": {
                            "product_title": "Nighttime Microphysics (EUMETSAT)",
                            "product_description": "More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_NtMicroRGB_Final_20191206.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_NtMicroRGB_Final_20191206.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "eumetsat_nighttime_microphysics"
                        },
                        "day_snow_fog": {
                            "product_title": "Day Snow/Fog (EUMETSAT)",
                            "product_description": "Differentiating between snow and clouds in satellite imagery can be challenging due to their similar characteristics and the high reflectivity of both at visible wavelengths.  The Day Snow/Fog RGB combines channels that bring out the distinguishing characteristics of snow (red-orange), ice clouds (shades of pink), and water clouds / fog (shades of yellow). More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DaySnowFogRGB_final_v2.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DaySnowFogRGB_final_v2.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": "1 km",
                            "color_table_name": "day_snow_fog"
                        },
                        "awips_dust": {
                            "product_title": "Dust (EUMETSAT)",
                            "product_description": "Dust can be difficult to see in VIS and IR imagery because it is optically thin and can appear similar to certain cloud types. The Dust RGB is able to contrast airborne dust from clouds, as well as land or ocean surfaces, given sufficient thickness/density. Dust appears pink/magenta during the day and can vary in color at night based on height. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/Dust_RGB_Quick_Guide.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/Dust_RGB_Quick_Guide.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "eumetsat_dust"
                        },
                        "cvd_dust_rgb": {
                            "product_title": "CVD Dust RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "dust_fire_rgb": {
                            "product_title": "Dust-Fire RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "fire_temperature": {
                            "product_title": "Fire Temperature (CIRA)",
                            "product_description": "The Fire Temperature RGB can be used to identify where the most intense fires are occurring and differentiate these from “cooler” fires. Fires need to be more intense in order to be detected by the 2.2 and 1.6 &micro;m bands. Small/”cool” fires will only show up at 3.9 &micro;m and appear red while increases in fire intensity cause greater contributions of the other channels resulting in white very intense fires. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/Fire_Temperature_RGB.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/Fire_Temperature_RGB.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "fire_temperature"
                        },
                        "cira_natural_fire_color": {
                            "product_title": "Day Fire (CIRA)",
                            "product_description": "The Day Fire RGB is similar to the original Natural Color RGB by EUMETSAT except the 1.6 &micro;m band used in the red component is replaced with the 2.2 &micro;m band. This change highlights the fire hotspots in red, but also limits the use of the RGB for differentiating water vs. ice clouds (both appear cyan, except for very small particles). In AWIPS, referred to as 'Day Land Cloud Fire'. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_DayLandCloudFireRGB_final.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_DayLandCloudFireRGB_final.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": "1 km",
                            "color_table_name": "cira_natural_fire_color"
                        },
                        "eumetsat_ash": {
                            "product_title": "Ash (EUMETSAT)",
                            "product_description": "The Ash RGB can be used to detect and monitor volcanic ash and sulfur dioxide gas. These emissions can be hazardous for public health and aviation activities. The detection of ash plumes (pink/magenta/red) is largely due to the opposite absorption characteristics of ash and ice clouds between the 12.3 and 10.3 &micro;m bands in the red component of the RGB recipe. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/GOES_Ash_RGB.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/GOES_Ash_RGB.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "eumetsat_ash"
                        },
                        "eumetsat_tropical_airmass_rgb": {
                            "product_title": "Overshooting Tops RGB (EUMETSAT)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "eumetsat_severe_storms_rgb": {
                            "product_title": "Severe Storms RGB (EUMETSAT)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "ngfs_microphysics": {
                            "product_title": "NGFS Microphysics RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "blowing_snow_rgb": {
                            "product_title": "Blowing Snow RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "blowingsnow"
                        },
                        "sea_spray_rgb": {
                            "product_title": "Sea Spray RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "seaspray"
                        },
                        "cloud_products": {
                            "product_title": "----------CLOUD PRODUCTS - CLAVR-x----------"
                        },
                        "cloud_top_height_cira_clavr-x": {
                            "product_title": "Cloud-Top Height (NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA. See User Quick Guide for more information: <a href=' http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_BaselineCloudTopHeight.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_BaselineCloudTopHeight.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "cloud_top_height_cira_clavr-x"
                        },
                        "cloud_geometric_thickness_cira_clavr-x": {
                            "product_title": "Cloud Geometric Thickness (CIRA/NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "cloud_geometric_thickness_cira_clavr-x"
                        },
                        "cloud_layers_cira_clavr-x": {
                            "product_title": "Cloud Layers (CIRA/NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.The Cloud Layers are derived from the cloud top information using the predefined flight level thresholds, currently below 10 kft (about 3 km) for the Low layer and above 24 kft (about 7.3 km) for the High layer. The product has been improved to the vertically-extended layers such as H+M (high to mid-levels) or H+M+L (deep cloud) using a cloud geometric thickness/base height retrieval. See User Quick Guide for more information: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2023/08/QuickGuide_GOES_ABI_CCL_cira_31Aug2023.pdf' target='_blank'>https://rammb2.cira.colostate.edu/wp-content/uploads/2023/08/QuickGuide_GOES_ABI_CCL_cira_31Aug2023.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "cloud_layers_cira_clavr-x"
                        },
                        "cloud_optical_thickness_cira_clavr-x": {
                            "product_title": "Cloud Optical Depth (NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "cloud_optical_thickness_cira_clavr-x_and_cloud_effective_radius_cira_clavr-x"
                        },
                        "cloud_effective_radius_cira_clavr-x": {
                            "product_title": "Cloud-Top Effective Particle Size (NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "cloud_optical_thickness_cira_clavr-x_and_cloud_effective_radius_cira_clavr-x"
                        },
                        "cloud_phase_cira_clavr-x": {
                            "product_title": "Cloud Phase (CIRA/NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.Cloud Top Phase using IR bands (<a href='https://www.star.nesdis.noaa.gov/jpss/documents/ATBD/ATBD_EPS_Cloud_CldType_v2.0.pdf' target='_blank'>https://www.star.nesdis.noaa.gov/jpss/documents/ATBD/ATBD_EPS_Cloud_CldType_v2.0.pdf</a>). LTMP represents 'Supercooled Liquid water topped Mixed Phase' from CIRA's daytime sub-cloud phase detection based on differential reflectance ratios between 1.6 &micro;m and 2.2 &micro;m for liquid and ice (Miller et al. 2014 JGR; Noh et al. 2019 JGR).",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "cloud_phase_cira_clavr-x"
                        },
                        "cloud_mask_cira_clavr-x": {
                            "product_title": "Cloud Mask (NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.The cloud mask algorithm is based on 'A Naive Bayesian Cloud-Detection Scheme' by Andrew K. Heidinger (2012, J. Applied Meteorology and Climatology, <a href='https://doi.org/10.1175/JAMC-D-11-02.1' target='_blank' target='_blank'>https://doi.org/10.1175/JAMC-D-11-02.1</a>).",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "cloud_mask_cira_clavr-x"
                        },
                        "microwave_products": {
                            "product_title": "----------MICROWAVE PRODUCTS----------"
                        },
                        "cira_blended_tpw": {
                            "product_title": "Blended TPW (CIRA)",
                            "product_description": "Blended TPW is a retrieval of the total precipitable water (TPW) in the column derived from a combination of microwave data from polar-orbiting satellites, infrared data from geostationary satellites, and ground-based GPS sensors. See User Quick Guide for more information: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/Blended_TPW_Quick_Guide_20180727-1.pdf' target='_blank' target='_blank'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/Blended_TPW_Quick_Guide_20180727-1.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "cira_blended_tpw"
                        },
                        "cira_advected_layered_precipitable_water_surface-850hPa": {
                            "product_title": "Advected Layered Precipitable Water [Surface-850 hPa] (CIRA)",
                            "product_description": "CIRA's Advected Layered Precipitable Water product is a retrieval of atmospheric water vapor in four layers of the atmosphere derived from five polar-orbiting satellites. A Quick Guide for the product is available here: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf</a> ",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "ALPW"
                        },
                        "cira_advected_layered_precipitable_water_850-700hPa": {
                            "product_title": "Advected Layered Precipitable Water [850 - 700 hPa] (CIRA)",
                            "product_description": "CIRA's Advected Layered Precipitable Water product is a retrieval of atmospheric water vapor in four layers of the atmosphere derived from five polar-orbiting satellites. A Quick Guide for the product is available here: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf</a> ",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "ALPW"
                        },
                        "cira_advected_layered_precipitable_water_700-500hPa": {
                            "product_title": "Advected Layered Precipitable Water [700 - 500 hPa] (CIRA)",
                            "product_description": "CIRA's Advected Layered Precipitable Water product is a retrieval of atmospheric water vapor in four layers of the atmosphere derived from five polar-orbiting satellites. A Quick Guide for the product is available here: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf</a> ",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "ALPW"
                        },
                        "cira_advected_layered_precipitable_water_500-300hPa": {
                            "product_title": "Advected Layered Precipitable Water [500 - 300 hPa] (CIRA)",
                            "product_description": "CIRA's Advected Layered Precipitable Water product is a retrieval of atmospheric water vapor in four layers of the atmosphere derived from five polar-orbiting satellites. A Quick Guide for the product is available here: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf</a> ",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": "ALPW"
                        },
                        "cira_layer_vapor_transport_surface-850hPa": {
                            "product_title": "Layer Vapor Transport [Surface-850 hPa] (CIRA)",
                            "product_description": "Layer Vapor Transport (LVT) is a measure of the transport of water vapor through the atmosphere in four layers, based on the Advected Layer Precipitable Water product (ALPW) and model-based wind speeds.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "LVT"
                        },
                        "cira_layer_vapor_transport_850-700hPa": {
                            "product_title": "Layer Vapor Transport [850-700 hPa] (CIRA)",
                            "product_description": "Layer Vapor Transport (LVT) is a measure of the transport of water vapor through the atmosphere in four layers, based on the Advected Layer Precipitable Water product (ALPW) and model-based wind speeds.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "LVT"
                        },
                        "cira_layer_vapor_transport_700-500hPa": {
                            "product_title": "Layer Vapor Transport [700-500 hPa] (CIRA)",
                            "product_description": "Layer Vapor Transport (LVT) is a measure of the transport of water vapor through the atmosphere in four layers, based on the Advected Layer Precipitable Water product (ALPW) and model-based wind speeds.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "LVT"
                        },
                        "cira_layer_vapor_transport_500-300hPa": {
                            "product_title": "Layer Vapor Transport [500-300 hPa] (CIRA)",
                            "product_description": "Layer Vapor Transport (LVT) is a measure of the transport of water vapor through the atmosphere in four layers, based on the Advected Layer Precipitable Water product (ALPW) and model-based wind speeds.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "LVT"
                        },
                        "products_under_development": {
                            "product_title": "----------PRODUCTS UNDER DEVELOPMENT----------"
                        },
                        "cira_proxy_visible_experimental": {
                            "product_title": "ProxyVis Experimental (CIRA)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "1 km",
                            "color_table_name": "lowlight4"
                        }
                    }
                },
                "meteosat-12": {
                    "satellite_title": "Meteosat-12 (0.0)",
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
                        "starting_opacity": 0.5,
                        "max_zoom_level": 5
                    },
                    "sectors": {
                        "full_disk": {
                            "sector_title": "Full Disk",
                            "max_zoom_level": 5,
                            "tile_size": 696,
                            "default_product": "geocolor",
                            "defaults": {
                                "starting_opacity": 0.5,
                                "minutes_between_images": 10
                            },
                            "lat_lon_query": {
                                "lon0": -0.0840,
                                "sat_alt": 42171.2,
                                "max_rad_x": 0.150583,
                                "max_rad_y": 0.150548,
                                "disk_radius_x_z0": 225,
                                "disk_radius_y_z0": 224,
                                "decimal_places": 1,
                                "scale_bar_min_zoom": 3
                            },
                            "navigation": {
                                "up": {
                                    "satellite": "jpss",
                                    "sector": "northern_hemisphere"
                                },
                                "right": {
                                    "satellite": "meteosat-0deg",
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
                            "missing_products": [
                            ],
                            "missing_maps": [
                                "counties",
                                "county_labels",
                                "nws_county_warning_areas"
                            ]
                        }
                    },
                    "products": {
                        "individual_fci_bands": {
                            "product_title": "----------INDIVIDUAL FCI BANDS----------"
                        },
                        "band_01": {
                            "product_title": "Band 1: 0.44 &micro;m (&quot;Blue&quot;)",
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
                            "zoom_level_adjust": 1,
                            "resolution": "0.5 km",
                            "color_table_name": "lowlight3"
                        },
                        "band_03_hires": {
                            "product_title": "Band 3 Hi-Res: 0.64 &micro;m (&quot;Red&quot;)",
                            "product_description": "Primary visible band for monitoring clouds (daytime only)",
                            "zoom_level_adjust": 0,
                            "resolution": "0.5 km",
                            "color_table_name": "lowlight3"
                        },
                        "band_04": {
                            "product_title": "Band 4: 0.865 &micro;m (&quot;Veggie&quot;)",
                            "product_description": "Aerosol detection and estimation of vegetation health (daytime only)",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "lowlight3"
                        },
                        "band_05": {
                            "product_title": "Band 5: 0.914 &micro;m (&quot;Low Level Water Vapor&quot;)",
                            "product_description": "Aerosol detection and estimation of vegetation health (daytime only). More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band03.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band03.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "lowlight4"
                        },
                        "band_06": {
                            "product_title": "Band 6: 1.38 &micro;m (&quot;Cirrus&quot;)",
                            "product_description": "Cirrus cloud detection (daytime only). More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band04.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Band04.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "cirrusband"
                        },
                        "band_07": {
                            "product_title": "Band 7: 1.61 &micro;m (&quot;Snow/Ice&quot;)",
                            "product_description": "Snow/cloud discrimination (daytime only)",
                            "zoom_level_adjust": 1,
                            "resolution": "2 km",
                            "color_table_name": "lowlight3"
                        },
                        "band_08": {
                            "product_title": "Band 8: 2.25 &micro;m (&quot;Cloud Particle Size&quot;)",
                            "product_description": "Aerosol and cloud particle size estimation, vegetation, cloud properties/screening, hot-spot detection, moisture determination, snow detection, and fire detection (daytime only)",
                            "zoom_level_adjust": 1,
                            "resolution": "2 km",
                            "color_table_name": "lowlight3"
                        },
                        "band_08_hires": {
                            "product_title": "Band 8 Hi-Res: 2.25 &micro;m (&quot;Cloud Particle Size&quot;)",
                            "product_description": "Aerosol and cloud particle size estimation, vegetation, cloud properties/screening, hot-spot detection, moisture determination, snow detection, and fire detection (daytime only)",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "lowlight3"
                        },
                        "band_09": {
                            "product_title": "Band 9: 3.8 &micro;m (&quot;Shortwave Window&quot;)",
                            "product_description": "Fire detection, fog/stratus v/s ice cloud detection, and particle size estimation",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "svgair2"
                        },
                        "band_09_hires": {
                            "product_title": "Band 9 Hi-Res: 3.8 &micro;m (&quot;Shortwave Window&quot;)",
                            "product_description": "Fire detection, fog/stratus v/s ice cloud detection, and particle size estimation",
                            "zoom_level_adjust": 1,
                            "resolution": "2 km",
                            "color_table_name": "svgair2"
                        },
                        "band_10": {
                            "product_title": "Band 10: 6.3 &micro;m (&quot;Upper-Level Tropospheric Water Vapor&quot;)",
                            "product_description": "Water vapor detection and tracking in the upper-level troposphere",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "svgawvx"
                        },
                        "band_11": {
                            "product_title": "Band 11: 7.35 &micro;m (&quot;Lower-level Water Vapor&quot;)",
                            "product_description": "Water vapor detection and tracking in the mid- to lower-level troposphere and upper-level sulfur dioxide (SO2) detection",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "svgawvx"
                        },
                        "band_12": {
                            "product_title": "Band 12: 8.7 &micro;m (&quot;Cloud-Top Phase&quot;)",
                            "product_description": "Detection of volcanic dust clouds containing sulfuric acid aerosols and estimation of cloud phase",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "ircimss2"
                        },
                        "band_13": {
                            "product_title": "Band 13: 9.66 &micro;m (&quot;Ozone&quot;)",
                            "product_description": "Atmospheric total column ozone and upper-level dynamics",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "ircimss2"
                        },
                        "band_14": {
                            "product_title": "Band 14: 10.5 &micro;m (&quot;Clean&quot; IR Longwave Window)",
                            "product_description": "Cloud detection day and night (has very little water vapor absorption)",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "ircimss2"
                        },
                        "band_14_hires": {
                            "product_title": "Band 14 Hi-Res: 10.5 &micro;m (&quot;Clean&quot; IR Longwave Window)",
                            "product_description": "Cloud detection day and night (has very little water vapor absorption)",
                            "zoom_level_adjust": 1,
                            "resolution": "2 km",
                            "color_table_name": "ircimss2"
                        },
                        "band_15": {
                            "product_title": "Band 15: 12.3 &micro;m (&quot;Dirty&quot; Longwave Window)",
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
                            "product_description": "GeoColor imagery provides as close an approximation to daytime True Color imagery as is possible from GOES-16, and thus allows for intuitive interpretation of meteorological and surface-based features. At night, instead of being dark like in other visible bands, an IR-based multispectral product is provided that differentiates between low liquid water clouds and higher ice clouds. A static city lights database derived from the VIIRS Day Night Band is provided as the nighttime background for geo-referencing. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_CIRA_Geocolor_20171019.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_CIRA_Geocolor_20171019.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": ""
                        },
                        "cira_proxy_visible": {
                            "product_title": "ProxyVis (CIRA)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "1 km",
                            "color_table_name": ""
                        },
                        "cira_single_channel_proxyvis": {
                            "product_title": "Single-Channel ProxyVis",
                            "product_description": "https://rammb2.cira.colostate.edu/research/goes-r-research/proxyvis/",
                            "zoom_level_adjust": 0,
                            "resolution": "0.5 km",
                            "color_table_name": "lowlight4"
                        },
                        "cira_geoproxy": {
                            "product_title": "GeoProxy (CIRA)",
                            "product_description": "A blend of GeoColor and ProxyVis to improve low cloud detection at night over the ocean.",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": ""
                        },
                        "shortwave_albedo_cira": {
                            "product_title": "Shortwave Albedo (CIRA)",
                            "product_description": "",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "svgair_albedo"
                        },
                        "cira_debra_dust": {
                            "product_title": "Dust - DEBRA (CIRA)",
                            "product_description": "More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DEBRA-Dust_20210217.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DEBRA-Dust_20210217.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": "3 km",
                            "color_table_name": ""
                        },
                        "cira_cloud_snow_discriminator": {
                            "product_title": "Snow/Cloud (CIRA)",
                            "product_description": "More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/GOES_Cloud_Snow_Discriminator_Quick_Guide_20190814.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/GOES_Cloud_Snow_Discriminator_Quick_Guide_20190814.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "cira_cloud_snow_discriminator"
                        },
                        "cira_high_low_cloud_and_snow": {
                            "product_title": "Snow/Cloud-Layers (CIRA)",
                            "product_description": "More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/GOES_Cloud_Snow_Discriminator_Quick_Guide_20190814.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/GOES_Cloud_Snow_Discriminator_Quick_Guide_20190814.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "cira_high_low_cloud_and_snow"
                        },
                        "split_window_difference_10_3-12_3": {
                            "product_title": "Split Window Difference (10.8 &micro;m - 12.0 &micro;m)",
                            "product_description": "The Split Window Difference has a variety of meteorological applications, and is leveraged in several multispectral and derived products. The primary applications are related to the relative sensitivity of the 10.8 &micro;m channel to absorption by dust particles, and the relative sensitivity of the 12.0 &micro;m channel to absorption by water vapor. In this version, blowing dust will appear as magenta (negative values). In clear sky conditions with a positive lapse rate, colors progressing from blue to green to yellow to red (higher positive values) represent greater amounts of low-level moisture. Very thin cirrus clouds, including contrails, appear as red to white (high positive values). Volcanic ash will appear very similarly to dust.<br /><br />More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_SplitWindowDifference.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_SplitWindowDifference.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "split_window_difference_10_3-12_3"
                        },
                        "split_window_difference_dust": {
                            "product_title": "Split Window Difference Dust (10.8 &micro;m - 12.0 &micro;m)",
                            "product_description": "The Split Window Difference has a variety of meteorological applications, and is leveraged in several multispectral and derived products. The primary applications are related to the relative sensitivity of the 10.8 &micro;m channel to absorption by dust particles, and the relative sensitivity of the 12.0 &micro;m channel to absorption by water vapor. In this version, areas of likely blowing dust are highlighted as non-gray colors, while the rest of the scene is grayscale. Volcanic ash will appear very similarly to dust.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "split_window_difference_dust"
                        },
                        "cira_geodust": {
                            "product_title": "GeoDust (CIRA)",
                            "product_description": "A blend of GeoColor and the Split Window Difference product that highlights dust.",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "abi_debra"
                        },
                        "split_window_difference_grayscale": {
                            "product_title": "Split Window Difference Grayscale (10.8 &micro;m - 12.0 &micro;m)",
                            "product_description": "The Split Window Difference has a variety of meteorological applications, and is leveraged in several multispectral and derived products. The primary applications are related to the relative sensitivity of the 10.8 &micro;m channel to absorption by dust particles, and the relative sensitivity of the 12.0 &micro;m channel to absorption by water vapor. In this version, blowing dust will appear as a relatively dark gray to black (negative values). In clear sky conditions with a positive lapse rate, progressively lighter shades of gray (higher positive values) represent greater amounts of low-level moisture. Very thin cirrus clouds, including contrails, appear as white (high positive values). Volcanic ash will appear very similarly to dust.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "split_window_difference_grayscale"
                        },
                        "cira_geofire": {
                            "product_title": "GeoFire (CIRA)",
                            "product_description": "This product is a blend of GeoColor with the Fire Temperature RGB to highlight fires and other hot spots. Active fires and other pixels with significant hot spots will appear with the coloration of the Fire Temperature RGB, while surrounding pixels appear as in GeoColor. This product uses the GeoProxy algorithm at night to improve low cloud detection over water surfaces.",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": ""
                        },
                        "wvt": {
                            "product_title": "Water Vapor Transmittance (WVT)",
                            "product_description": "This product is designed to highlight low level water vapor that is detected by the 0.91 um band. Water Vapor Transmittance (WVT) is the ratio of reflectance values between the 0.91 um and 0.86 um bands.  In general, the more water vapor that is present, the lower the WVT, and the darker this product will appear. Caution must be used over water as radiometric noise has an exaggerated impact on WVT over poorly reflective surfaces. At night, only radiometric noise is visible.",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "lowlight3"
                        },
                        "multispectral_rgb_composites": {
                            "product_title": "----------MULTISPECTRAL RGB COMPOSITES----------"
                        },
                        "natural_color": {
                            "product_title": "Day Land Cloud (EUMETSAT)",
                            "product_description": "The Day Land Cloud RGB is the same as the Natural Color RGB by EUMETSAT, and is useful for discriminating between high ice clouds and low water clouds. High ice clouds, snow, and sea ice appear cyan while low water clouds appear dull grey or white. This imagery can also be used to assess vegetation and detect land surface changes. In AWIPS, referred to as 'Day Land Cloud'. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_daylandcloudRGB_final.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_daylandcloudRGB_final.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": ""
                        },
                        "rgb_air_mass": {
                            "product_title": "Airmass (EUMETSAT)",
                            "product_description": "The Air Mass RGB is used to diagnose the environment surrounding synoptic systems. Cyclogenesis can be inferred by the identification of warm, dry, ozone-rich descending stratospheric air associated with jet streams and potential vorticity anomalies. This RGB can distinguish between polar and tropical air masses, especially along upper-level frontal boundaries and identify high-, mid-, and low-level clouds. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_AirMassRGB_final.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_AirMassRGB_final.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "rgb_air_mass"
                        },
                        "jma_day_cloud_phase_distinction_rgb": {
                            "product_title": "Day Cloud Phase Distinction (JMA)",
                            "product_description": "This RGB is used to evaluate the phase of cooling cloud tops to monitor convective initiation, storm growth, and decay. It can also be used to identify snow on the ground. The Day Cloud Phase Distinction RGB takes advantage of cloud reflectance differences between the visible and near infrared channels and temperature variances between land and clouds in the infrared to provide increased contrast between background surfaces and phases of clouds (i.e. water vs. ice). More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/Day_Cloud_Phase_Distinction.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/Day_Cloud_Phase_Distinction.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "jma_day_cloud_phase_distinction_rgb"
                        },
                        "day_cloud_phase_microphysics_rgb": {
                            "product_title": "Day Cloud Phase Microphysics (EUMETSAT)",
                            "product_description": "The Day Cloud Phase Microphysics RGB (also known simply as Cloud Phase RGB) is useful for determining cloud phase and cloud particle size during the daytime. Ice clouds will appear blue, with lighter blue indicating small ice particles and darker blue indicating large ice particles. Liquid clouds will vary from cream-colored to pink to purple depending on droplet size, with cream-colored clouds having small liquid droplets and purple indicating very large droplet sizes. The background land surface will appear yellow to brown based on vegetation. Snow and ice-cover will appear dark blue. Depending on instrument resolution and fire intensity, fires may appear and will show up as bright green or lime green.  More info: https://eumetrain.org/sites/default/files/2023-01/CloudPhaseRGB.pdf ",
                            "zoom_level_adjust": 0,
                            "resolution": "0.5 km",
                            "color_table_name": ""
                        },
                        "day_cloud_type_rgb": {
                            "product_title": "Day Cloud Type RGB (NOAA)",
                            "product_description": "This a variation of the Day Cloud Phase Distinction RGB that utilizes the 1.38 um Cirrus Band in place of the longwave IR as the red component. As a result of this change, it is more sensitive to thin cirrus clouds, and it is not sensitive to temperature. https://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_Day_Cloud_Type_RGB.pdf" ,
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "jma_day_cloud_phase_distinction_rgb"
                        },
                        "eumetsat_nighttime_microphysics": {
                            "product_title": "Nighttime Microphysics (EUMETSAT)",
                            "product_description": "More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_NtMicroRGB_Final_20191206.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_NtMicroRGB_Final_20191206.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "eumetsat_nighttime_microphysics"
                        },
                        "day_snow_fog": {
                            "product_title": "Day Snow/Fog (EUMETSAT)",
                            "product_description": "Differentiating between snow and clouds in satellite imagery can be challenging due to their similar characteristics and the high reflectivity of both at visible wavelengths.  The Day Snow/Fog RGB combines channels that bring out the distinguishing characteristics of snow (red-orange), ice clouds (shades of pink), and water clouds / fog (shades of yellow). More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DaySnowFogRGB_final_v2.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DaySnowFogRGB_final_v2.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "day_snow_fog"
                        },
                        "awips_dust": {
                            "product_title": "Dust (EUMETSAT)",
                            "product_description": "Dust can be difficult to see in VIS and IR imagery because it is optically thin and can appear similar to certain cloud types. The Dust RGB is able to contrast airborne dust from clouds, as well as land or ocean surfaces, given sufficient thickness/density. Dust appears pink/magenta during the day and can vary in color at night based on height. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/Dust_RGB_Quick_Guide.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/Dust_RGB_Quick_Guide.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "eumetsat_dust"
                        },
                        "fire_temperature": {
                            "product_title": "Fire Temperature (CIRA)",
                            "product_description": "The Fire Temperature RGB can be used to identify where the most intense fires are occurring and differentiate these from “cooler” fires. Fires need to be more intense in order to be detected by the 2.2 and 1.6 &micro;m bands. Small/”cool” fires will only show up at 3.9 &micro;m and appear red while increases in fire intensity cause greater contributions of the other channels resulting in white very intense fires. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/Fire_Temperature_RGB.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/Fire_Temperature_RGB.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": "2 km",
                            "color_table_name": "fire_temperature"
                        },
                        "cira_natural_fire_color": {
                            "product_title": "Day Fire (CIRA)",
                            "product_description": "The Day Fire RGB is similar to the original Natural Color RGB by EUMETSAT except the 1.6 &micro;m band used in the red component is replaced with the 2.2 &micro;m band. This change highlights the fire hotspots in red, but also limits the use of the RGB for differentiating water vs. ice clouds (both appear cyan, except for very small particles). In AWIPS, referred to as 'Day Land Cloud Fire'. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_DayLandCloudFireRGB_final.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_DayLandCloudFireRGB_final.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": "cira_natural_fire_color"
                        },
                        "eumetsat_ash": {
                            "product_title": "Ash (EUMETSAT)",
                            "product_description": "The Ash RGB can be used to detect and monitor volcanic ash and sulfur dioxide gas. These emissions can be hazardous for public health and aviation activities. The detection of ash plumes (pink/magenta/red) is largely due to the opposite absorption characteristics of ash and ice clouds between the 12.3 and 10.3 &micro;m bands in the red component of the RGB recipe. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/GOES_Ash_RGB.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/GOES_Ash_RGB.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "eumetsat_ash"
                        },
                        "eumetsat_tropical_airmass_rgb": {
                            "product_title": "Overshooting Tops RGB (EUMETSAT)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "eumetsat_severe_storms_rgb": {
                            "product_title": "Severe Storms RGB (EUMETSAT)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "ngfs_microphysics": {
                            "product_title": "NGFS Microphysics RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "cvd_dust_rgb": {
                            "product_title": "CVD Dust RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "dust_fire_rgb": {
                            "product_title": "Dust-Fire RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "blowing_snow_rgb": {
                            "product_title": "Blowing Snow RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "sea_spray_rgb": {
                            "product_title": "Sea Spray RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "cloud_products": {
                            "product_title": "----------CLOUD PRODUCTS - CLAVR-x----------"
                        },
                        "cloud_top_height_cira_clavr-x": {
                            "product_title": "Cloud-Top Height (NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA. See User Quick Guide for more information: <a href=' http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_BaselineCloudTopHeight.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_BaselineCloudTopHeight.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "cloud_top_height_cira_clavr-x"
                        },
                        "cloud_geometric_thickness_cira_clavr-x": {
                            "product_title": "Cloud Geometric Thickness (CIRA/NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "cloud_geometric_thickness_cira_clavr-x"
                        },
                        "cloud_layers_cira_clavr-x": {
                            "product_title": "Cloud Layers (CIRA/NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.The Cloud Layers are derived from the cloud top information using the predefined flight level thresholds, currently below 10 kft (about 3 km) for the Low layer and above 24 kft (about 7.3 km) for the High layer. The product has been improved to the vertically-extended layers such as H+M (high to mid-levels) or H+M+L (deep cloud) using a cloud geometric thickness/base height retrieval. See User Quick Guide for more information: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2023/08/QuickGuide_GOES_ABI_CCL_cira_31Aug2023.pdf' target='_blank'>https://rammb2.cira.colostate.edu/wp-content/uploads/2023/08/QuickGuide_GOES_ABI_CCL_cira_31Aug2023.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "cloud_layers_cira_clavr-x"
                        },
                        "cloud_optical_thickness_cira_clavr-x": {
                            "product_title": "Cloud Optical Depth (NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "cloud_optical_thickness_cira_clavr-x_and_cloud_effective_radius_cira_clavr-x"
                        },
                        "cloud_effective_radius_cira_clavr-x": {
                            "product_title": "Cloud-Top Effective Particle Size (NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "cloud_optical_thickness_cira_clavr-x_and_cloud_effective_radius_cira_clavr-x"
                        },
                        "cloud_phase_cira_clavr-x": {
                            "product_title": "Cloud Phase (NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.Cloud Top Phase using IR bands (<a href='https://www.star.nesdis.noaa.gov/jpss/documents/ATBD/ATBD_EPS_Cloud_CldType_v2.0.pdf' target='_blank'>https://www.star.nesdis.noaa.gov/jpss/documents/ATBD/ATBD_EPS_Cloud_CldType_v2.0.pdf</a>). LTMP represents 'Supercooled Liquid water topped Mixed Phase' from CIRA's daytime sub-cloud phase detection based on differential reflectance ratios between 1.6 &micro;m and 2.2 &micro;m for liquid and ice (Miller et al. 2014 JGR; Noh et al. 2019 JGR).",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "cloud_phase_cira_clavr-x"
                        },
                        "cloud_mask_cira_clavr-x": {
                            "product_title": "Cloud Mask (NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.The cloud mask algorithm is based on 'A Naive Bayesian Cloud-Detection Scheme' by Andrew K. Heidinger (2012, J. Applied Meteorology and Climatology, <a href='https://doi.org/10.1175/JAMC-D-11-02.1' target='_blank' target='_blank'>https://doi.org/10.1175/JAMC-D-11-02.1</a>).",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "cloud_mask_cira_clavr-x"
                        },
                        "microwave_products": {
                            "product_title": "----------MICROWAVE PRODUCTS----------"
                        },
                        "cira_blended_tpw": {
                            "product_title": "Blended TPW (CIRA)",
                            "product_description": "Blended TPW is a retrieval of the total precipitable water (TPW) in the column derived from a combination of microwave data from polar-orbiting satellites, infrared data from geostationary satellites, and ground-based GPS sensors. See User Quick Guide for more information: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/Blended_TPW_Quick_Guide_20180727-1.pdf' target='_blank' target='_blank'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/Blended_TPW_Quick_Guide_20180727-1.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "cira_blended_tpw"
                        },"cira_advected_layered_precipitable_water_surface-850hPa": {
                            "product_title": "Advected Layered Precipitable Water [Surface-850 hPa] (CIRA)",
                            "product_description": "CIRA's Advected Layered Precipitable Water product is a retrieval of atmospheric water vapor in four layers of the atmosphere derived from five polar-orbiting satellites. A Quick Guide for the product is available here: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf</a> ",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "ALPW"
                        },
                        "cira_advected_layered_precipitable_water_850-700hPa": {
                            "product_title": "Advected Layered Precipitable Water [850 - 700 hPa] (CIRA)",
                            "product_description": "CIRA's Advected Layered Precipitable Water product is a retrieval of atmospheric water vapor in four layers of the atmosphere derived from five polar-orbiting satellites. A Quick Guide for the product is available here: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf</a> ",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "ALPW"
                        },
                        "cira_advected_layered_precipitable_water_700-500hPa": {
                            "product_title": "Advected Layered Precipitable Water [700 - 500 hPa] (CIRA)",
                            "product_description": "CIRA's Advected Layered Precipitable Water product is a retrieval of atmospheric water vapor in four layers of the atmosphere derived from five polar-orbiting satellites. A Quick Guide for the product is available here: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf</a> ",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "ALPW"
                        },
                        "cira_advected_layered_precipitable_water_500-300hPa": {
                            "product_title": "Advected Layered Precipitable Water [500 - 300 hPa] (CIRA)",
                            "product_description": "CIRA's Advected Layered Precipitable Water product is a retrieval of atmospheric water vapor in four layers of the atmosphere derived from five polar-orbiting satellites. A Quick Guide for the product is available here: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf</a> ",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "ALPW"
                        },
                        "cira_layer_vapor_transport_surface-850hPa": {
                            "product_title": "Layer Vapor Transport [Surface-850 hPa] (CIRA)",
                            "product_description": "Layer Vapor Transport (LVT) is a measure of the transport of water vapor through the atmosphere in four layers, based on the Advected Layer Precipitable Water product (ALPW) and model-based wind speeds.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "LVT"
                        },
                        "cira_layer_vapor_transport_850-700hPa": {
                            "product_title": "Layer Vapor Transport [850-700 hPa] (CIRA)",
                            "product_description": "Layer Vapor Transport (LVT) is a measure of the transport of water vapor through the atmosphere in four layers, based on the Advected Layer Precipitable Water product (ALPW) and model-based wind speeds.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "LVT"
                        },
                        "cira_layer_vapor_transport_700-500hPa": {
                            "product_title": "Layer Vapor Transport [700-500 hPa] (CIRA)",
                            "product_description": "Layer Vapor Transport (LVT) is a measure of the transport of water vapor through the atmosphere in four layers, based on the Advected Layer Precipitable Water product (ALPW) and model-based wind speeds.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "LVT"
                        },
                        "cira_layer_vapor_transport_500-300hPa": {
                            "product_title": "Layer Vapor Transport [500-300 hPa] (CIRA)",
                            "product_description": "Layer Vapor Transport (LVT) is a measure of the transport of water vapor through the atmosphere in four layers, based on the Advected Layer Precipitable Water product (ALPW) and model-based wind speeds.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "LVT"
                        },
                        "products_under_development": {
                            "product_title": "----------PRODUCTS UNDER DEVELOPMENT----------"
                        },
                        "cira_proxy_visible_experimental": {
                            "product_title": "ProxyVis Experimental (CIRA)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "1 km",
                            "color_table_name": ""
                        },
                        "day_land_cloud_moisture": {
                            "product_title": "Day Land Cloud Moisture (CIRA)",
                            "product_description": "This product is a variation of the Day Land Cloud RGB, where each component of the Day Land Cloud RGB is weighted by the Water Vapor Transmittance (WVT). For an atmosphere with no moisture in the viewing path, this RGB would appear identical to the Day Land Cloud RGB. As the amount of low-level water vapor increases, the Day Land Cloud Moisture RGB becomes darker. This product does not provide information at night.",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": ""
                        },
                        "dlc_wvt": {
                            "product_title": "DLC-WVT",
                            "product_description": "DLC-WVT is a variation of the Day Land Cloud RGB where the green component has been replaced by the Water Vapor Transmittance (WVT). In this product, the presence of low level water vapor detected by the 0.91 um band suppresses the green component, turning the imagery magenta. Drier areas have higher WVT, and more green. As with WVT, caution must be used over water as radiometric noise has an exaggerated impact on WVT over poorly reflective surfaces. At night, only radiometric noise is visible.",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": ""
                        },
                        "wvt_inverted": {
                            "product_title": "WVT Inverted",
                            "product_description": "This product is designed to highlight low level water vapor that is detected by the 0.91 um band. Water Vapor Transmittance (WVT) is the ratio of reflectance values between the 0.91 um and 0.86 um bands.  In general, the more water vapor that is present, the lower the WVT, and the darker this product will appear. Caution must be used over water as radiometric noise has an exaggerated impact on WVT over poorly reflective surfaces. At night, only radiometric noise is visible.",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": ""
                        },
                        "wvt_tropical": {
                            "product_title": "WVT Tropical",
                            "product_description": "This product is designed to highlight low level water vapor that is detected by the 0.91 um band. Water Vapor Transmittance (WVT) is the ratio of reflectance values between the 0.91 um and 0.86 um bands.  In general, the more water vapor that is present, the lower the WVT, and the darker this product will appear. Caution must be used over water as radiometric noise has an exaggerated impact on WVT over poorly reflective surfaces. At night, only radiometric noise is visible.",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
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
                    "default_sector": "conus",
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
                                    "satellite": "meteosat-9",
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
                                    "satellite": "goes-18",
                                    "sector": "full_disk"
                                }
                            },
                            "missing_products": [
                                "individual_abi_bands",
                                "band_01",
                                "band_02",
                                "band_03",
                                "band_04",
                                "band_05",
                                "band_06",
                                "band_07",
                                "band_08",
                                "band_09",
                                "band_10",
                                "band_11",
                                "band_12",
                                "band_13",
                                "band_14",
                                "band_15",
                                "band_16",
                                "split_window_difference_10_3-12_3",
                                "abi_multispectral_imagery",
                                "abi_cira_geocolor",
                                "abi_cira_debra_dust",
                                "abi_cira_high_low_cloud_and_snow",
                                "abi_split_window_difference_10_7-12_0",
                                "abi_split_window_difference_dust",
                                "abi_split_window_difference_grayscale",
                                "abi_multispectral_rgb_composites",
                                "abi_natural_color",
                                "natural_color",
                                "abi_jma_day_cloud_phase_distinction_rgb",
                                "abi_eumetsat_nighttime_microphysics",
                                "abi_day_snow_fog",
                                "abi_eumetsat_dust",
                                "abi_fire_temperature",
                                "abi_cira_natural_fire_color",
                                "abi_eumetsat_ash",
                                "abi_jma_so2",
                                "abi_rgb_air_mass",
                                "abi_cira_snowmelt",
                                "abi_meteofrance_snow",
                                "abi_cloud_products",
                                "abi_cloud_top_height_cira_clavr-x",
                                "abi_cloud_geometric_thickness_cira_clavr-x",
                                "abi_cloud_optical_thickness_cira_clavr-x",
                                "abi_cloud_effective_radius_cira_clavr-x",
                                "abi_cloud_top_altitude_cira_clavr-x",
                                "abi_cloud_base_altitude_cira_clavr-x",
                                "abi_cloud_phase_cira_clavr-x",
                                "abi_flight_level_based_cloud_layers_rgb_cira_clavr-x",
                                "abi_split_window_difference_10_3-12_3",
                                "abi_eumetsat_severe_storms_rgb",
                                "abi_ngfs_microphysics",
                                "abi_cvd_dust_rgb",
                                "abi_dust_fire_rgb",
                                "abi_blowing_snow_rgb",
                                "abi_sea_spray_rgb",
                                "cira_hires_fire_temperature",
                                "abi_day_cloud_phase_microphysics_rgb"
                            ],
                            "missing_maps": [
                                "airports",
                                "cities",
                                "city_lights",
                                "country_labels",
                                "county_labels",
                                "mesoscale_boxes",
                                "states",
                                "state_labels",
                                "nasa_svs_center",
                                "nasa_svs_duration",
                                "nasa_svs_ppath",
                                "nasa_svs_ppath01",
                                "nasa_svs_umbra_lo",
                                "nasa_svs_upath_lo"
                            ],
                            "white_maps_only": false
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
                                    "satellite": "goes-18",
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
                                    "satellite": "meteosat-0deg",
                                    "sector": "full_disk"
                                }
                            },
                            "missing_products": [
                                "retrieval_products",
                                "cira_nucaps_cold_air_aloft",
                                "individual_abi_bands",
                                "band_01",
                                "band_02",
                                "band_03",
                                "band_04",
                                "band_05",
                                "band_06",
                                "band_07",
                                "band_08",
                                "band_09",
                                "band_10",
                                "band_11",
                                "band_12",
                                "band_13",
                                "band_14",
                                "band_15",
                                "band_16",
                                "split_window_difference_10_3-12_3",
                                "abi_multispectral_imagery",
                                "abi_cira_geocolor",
                                "abi_cira_debra_dust",
                                "abi_cira_high_low_cloud_and_snow",
                                "abi_split_window_difference_10_7-12_0",
                                "abi_split_window_difference_dust",
                                "abi_split_window_difference_grayscale",
                                "abi_multispectral_rgb_composites",
                                "abi_natural_color",
                                "natural_color",
                                "abi_jma_day_cloud_phase_distinction_rgb",
                                "abi_eumetsat_nighttime_microphysics",
                                "abi_day_snow_fog",
                                "abi_eumetsat_dust",
                                "abi_fire_temperature",
                                "abi_cira_natural_fire_color",
                                "abi_eumetsat_ash",
                                "abi_jma_so2",
                                "abi_rgb_air_mass",
                                "abi_cira_snowmelt",
                                "abi_meteofrance_snow",
                                "abi_cloud_products",
                                "abi_cloud_top_height_cira_clavr-x",
                                "abi_cloud_geometric_thickness_cira_clavr-x",
                                "abi_cloud_optical_thickness_cira_clavr-x",
                                "abi_cloud_effective_radius_cira_clavr-x",
                                "abi_cloud_top_altitude_cira_clavr-x",
                                "abi_cloud_base_altitude_cira_clavr-x",
                                "abi_cloud_phase_cira_clavr-x",
                                "abi_flight_level_based_cloud_layers_rgb_cira_clavr-x",
                                "abi_split_window_difference_10_3-12_3",
                                "abi_eumetsat_severe_storms_rgb",
                                "abi_ngfs_microphysics",
                                "abi_cvd_dust_rgb",
                                "abi_dust_fire_rgb",
                                "abi_blowing_snow_rgb",
                                "abi_sea_spray_rgb",
                                "cira_hires_fire_temperature",
                                "abi_day_cloud_phase_microphysics_rgb"
                            ],
                            "missing_maps": [
                                "airports",
                                "cities",
                                "city_lights",
                                "counties",
                                "county_labels",
                                "country_labels",
                                "nws_county_warning_areas",
                                "mesoscale_boxes",
                                "states",
                                "state_labels",
                                "nasa_svs_center",
                                "nasa_svs_duration",
                                "nasa_svs_ppath",
                                "nasa_svs_ppath01",
                                "nasa_svs_umbra_lo",
                                "nasa_svs_upath_lo"
                            ],
                            "white_maps_only": false
                        },
                        "conus": {
                            "sector_title": "CONUS",
                            "max_zoom_level": 5,
                            "tile_size": 500,
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
                                    "satellite": "goes-18",
                                    "sector": "full_disk"
                                }
                            },
                            "missing_products": [
                                "near_constant_contrast",
                                "meteofrance_snow",
                                "abi_cira_snowmelt",
                                "abi_meteofrance_snow",
                                "eumetsat_natural_color",
                                "cloud_products",
                                "cloud_top_height_cira_clavr-x",
                                "cloud_geometric_thickness_cira_clavr-x",
                                "cloud_optical_thickness_cira_clavr-x",
                                "cloud_effective_radius_cira_clavr-x",
                                "cloud_top_altitude_cira_clavr-x",
                                "cloud_base_altitude_cira_clavr-x",
                                "cloud_phase_cira_clavr-x",
                                "flight_level_based_cloud_layers_rgb_cira_clavr-x",
                                "split_window_difference_10_7-12_0",
                                "abi_cloud_products",
                                "abi_cloud_top_height_cira_clavr-x",
                                "abi_cloud_geometric_thickness_cira_clavr-x",
                                "abi_cloud_optical_thickness_cira_clavr-x",
                                "abi_cloud_effective_radius_cira_clavr-x",
                                "abi_cloud_top_altitude_cira_clavr-x",
                                "abi_cloud_base_altitude_cira_clavr-x",
                                "abi_cloud_phase_cira_clavr-x",
                                "abi_flight_level_based_cloud_layers_rgb_cira_clavr-x",
                                "abi_split_window_difference_10_7-12_0",
                                "retrieval_products",
                                "cira_nucaps_cold_air_aloft",
                                "cris_imagery",
                                "cris_6_2",
                                "cris_6_9",
                                "cris_7_3",
                                "cris_9_6",
                                "cris_10_3",
                                "cris_10_8",
                                "cris_11_2",
                                "cris_12_3",
                                "cris_13_3",
                                "cris_airmass",
                                "cris_so2_ash",
                                "atms_jpss_limb_882",
                                "atms_jpss_limb_18331pm30"
                            ],
                            "missing_maps": [
                                "city_lights",
                                "country_labels",
                                "county_labels",
                                "mesoscale_boxes",
                                "states",
                                "state_labels",
                                "nasa_svs_center",
                                "nasa_svs_duration",
                                "nasa_svs_ppath",
                                "nasa_svs_ppath01",
                                "nasa_svs_umbra_lo",
                                "nasa_svs_upath_lo"
                            ],
                            "white_maps_only": false
                        }
                    },
                    "products": {
                        "individual_viirs_bands": {
                            "product_title": "----------INDIVIDUAL VIIRS BANDS----------"
                        },
                        "day_night_band": {
                            "product_title": "Day/Night Band: 0.7 &micro;m (&quot;ERF-scaling&quot;)",
                            "product_description": "",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": "lowlight4"
                        },
                        "near_constant_contrast": {
                            "product_title": "Day/Night Band: 0.7 &micro;m (&quot;Near Constant Contrast&quot;)",
                            "product_description": "",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": "lowlight4"
                        },
                        "band_m01": {
                            "product_title": "Band M1: 0.412 &micro;m (&quot;Violet-Blue&quot;)",
                            "product_description": "",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": "lowlight4"
                        },
                        "band_m02": {
                            "product_title": "Band M2: 0.445 &micro;m (&quot;Deep Blue&quot;)",
                            "product_description": "",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": "lowlight4"
                        },
                        "band_m03": {
                            "product_title": "Band M3: 0.488 &micro;m (&quot;Blue&quot;)",
                            "product_description": "",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": "lowlight4"
                        },
                        "band_m04": {
                            "product_title": "Band M4: 0.555 &micro;m (&quot;Green&quot;)",
                            "product_description": "",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": "lowlight4"
                        },
                        "band_m05": {
                            "product_title": "Band M5: 0.672 &micro;m (&quot;Red&quot;)",
                            "product_description": "",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": "lowlight4"
                        },
                        "band_m06": {
                            "product_title": "Band M6: 0.746 &micro;m (&quot;Atmospheric Correction&quot;)",
                            "product_description": "",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": "lowlight4"
                        },
                        "band_m07": {
                            "product_title": "Band M7: 0.865 &micro;m (&quot;Veggie&quot;)",
                            "product_description": "",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": "lowlight4"
                        },
                        "band_m08": {
                            "product_title": "Band M8: 1.240 &micro;m (&quot;Cloud/Snow&quot;)",
                            "product_description": "",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": "lowlight4"
                        },
                        "band_m09": {
                            "product_title": "Band M9: 1.378 &micro;m (&quot;Cirrus&quot;)",
                            "product_description": "",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": "lowlight4"
                        },
                        "band_m10": {
                            "product_title": "Band M10: 1.61 &micro;m (&quot;Snow/Ice&quot;)",
                            "product_description": "",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": "lowlight4"
                        },
                        "band_m11": {
                            "product_title": "Band M11: 2.25 &micro;m (&quot;Cloud Particle Size&quot;)",
                            "product_description": "",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": "lowlight4"
                        },
                        "band_m12": {
                            "product_title": "Band M12: 3.7 &micro;m (&quot;Shortwave IR Window&quot;)",
                            "product_description": "",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": "svgair2"
                        },
                        "band_m13": {
                            "product_title": "Band M13: 4.05 &micro;m (&quot;Fire Detection&quot;)",
                            "product_description": "",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": "svgair2"
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
                            "color_table_name": "lowlight4"
                        },
                        "band_i02": {
                            "product_title": "Band I2: 0.865 &micro;m (&quot;Veggie&quot;)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": " km",
                            "color_table_name": "lowlight4"
                        },
                        "band_i03": {
                            "product_title": "Band I3: 1.61 &micro;m (&quot;Snow/Ice&quot;)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": " km",
                            "color_table_name": "lowlight4"
                        },
                        "band_i04": {
                            "product_title": "Band I4: 3.74 &micro;m (&quot;Shortwave IR Window&quot;)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": " km",
                            "color_table_name": "svgair2"
                        },
                        "band_i05": {
                            "product_title": "Band I5: 11.45 &micro;m (&quot;Longwave IR Window&quot;)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": " km",
                            "color_table_name": "ircimss2"
                        },
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
                            "product_title": "----------VIIRS Multispectral Imagery----------"
                        },
                        "cira_geocolor": {
                            "product_title": "GeoColor (CIRA)",
                            "product_description": "GeoColor imagery provides as close an approximation to daytime True Color imagery as is possible from GOES-16, and thus allows for intuitive interpretation of meteorological and surface-based features. At night, instead of being dark like in other visible bands, an IR-based multispectral product is provided that differentiates between low liquid water clouds and higher ice clouds. A static city lights database derived from the VIIRS Day Night Band is provided as the nighttime background for geo-referencing. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_CIRA_Geocolor_20171019.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_CIRA_Geocolor_20171019.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": ""
                        },
                        "cira_debra_dust": {
                            "product_title": "Dust - DEBRA (CIRA)",
                            "product_description": "More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DEBRA-Dust_20210217.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DEBRA-Dust_20210217.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": "",
                            "color_table_name": "abi_debra"
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
                            "product_description": "The Split Window Difference has a variety of meteorological applications, and is leveraged in several multispectral and derived products. The primary applications are related to the relative sensitivity of the 10.3 &micro;m channel to absorption by dust particles, and the relative sensitivity of the 12.3 &micro;m channel to absorption by water vapor. In this version, blowing dust will appear as magenta (negative values). In clear sky conditions with a positive lapse rate, colors progressing from blue to green to yellow to red (higher positive values) represent greater amounts of low-level moisture. Very thin cirrus clouds, including contrails, appear as red to white (high positive values). Volcanic ash will appear very similarly to dust.<br /><br />More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_SplitWindowDifference.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_SplitWindowDifference.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": "split_window_difference_10_3-12_3"
                        },
                        "split_window_difference_10_3-12_3": {
                            "product_title": "Split Window Difference (10.7 &micro;m - 12.0 &micro;m)",
                            "product_description": "The Split Window Difference has a variety of meteorological applications, and is leveraged in several multispectral and derived products. The primary applications are related to the relative sensitivity of the 10.3 &micro;m channel to absorption by dust particles, and the relative sensitivity of the 12.3 &micro;m channel to absorption by water vapor. In this version, blowing dust will appear as magenta (negative values). In clear sky conditions with a positive lapse rate, colors progressing from blue to green to yellow to red (higher positive values) represent greater amounts of low-level moisture. Very thin cirrus clouds, including contrails, appear as red to white (high positive values). Volcanic ash will appear very similarly to dust.<br /><br />More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_SplitWindowDifference.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_SplitWindowDifference.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "split_window_difference_10_3-12_3"
                        },
                        "split_window_difference_dust": {
                            "product_title": "Split Window Difference Dust (10.7 &micro;m - 12.0 &micro;m)",
                            "product_description": "The Split Window Difference has a variety of meteorological applications, and is leveraged in several multispectral and derived products. The primary applications are related to the relative sensitivity of the 10.3 &micro;m channel to absorption by dust particles, and the relative sensitivity of the 12.3 &micro;m channel to absorption by water vapor. In this version, areas of likely blowing dust are highlighted as non-gray colors, while the rest of the scene is grayscale. Volcanic ash will appear very similarly to dust.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "split_window_difference_dust"
                        },
                        "split_window_difference_grayscale": {
                            "product_title": "Split Window Difference Grayscale (10.7 &micro;m - 12.0 &micro;m)",
                            "product_description": "The Split Window Difference has a variety of meteorological applications, and is leveraged in several multispectral and derived products. The primary applications are related to the relative sensitivity of the 10.3 &micro;m channel to absorption by dust particles, and the relative sensitivity of the 12.3 &micro;m channel to absorption by water vapor. In this version, blowing dust will appear as a relatively dark gray to black (negative values). In clear sky conditions with a positive lapse rate, progressively lighter shades of gray (higher positive values) represent greater amounts of low-level moisture. Very thin cirrus clouds, including contrails, appear as white (high positive values). Volcanic ash will appear very similarly to dust.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "split_window_difference_grayscale"
                        },
                        "abi_multispectral_imagery": {
                            "product_title": "----------ABI MULTISPECTRAL IMAGERY----------"
                        },
                        "abi_cira_geocolor": {
                            "product_title": "ABI GeoColor (CIRA)",
                            "product_description": "GeoColor imagery provides as close an approximation to daytime True Color imagery as is possible from GOES-16, and thus allows for intuitive interpretation of meteorological and surface-based features. At night, instead of being dark like in other visible bands, an IR-based multispectral product is provided that differentiates between low liquid water clouds and higher ice clouds. A static city lights database derived from the VIIRS Day Night Band is provided as the nighttime background for geo-referencing. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_CIRA_Geocolor_20171019.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_CIRA_Geocolor_20171019.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": ""
                        },
                        "abi_cira_debra_dust": {
                            "product_title": "ABI Dust - DEBRA (CIRA)",
                            "product_description": "More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DEBRA-Dust_20210217.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DEBRA-Dust_20210217.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": "",
                            "color_table_name": "abi_debra"
                        },
                        "abi_cira_high_low_cloud_and_snow": {
                            "product_title": "ABI Snow/Cloud-Layers (CIRA)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "",
                            "color_table_name": "cira_high_low_cloud_and_snow"
                        },
                        "abi_split_window_difference_10_7-12_0": {
                            "product_title": "ABI Split Window Difference (10.7 &micro;m - 12.0 &micro;m)",
                            "product_description": "The Split Window Difference has a variety of meteorological applications, and is leveraged in several multispectral and derived products. The primary applications are related to the relative sensitivity of the 10.3 &micro;m channel to absorption by dust particles, and the relative sensitivity of the 12.3 &micro;m channel to absorption by water vapor. In this version, blowing dust will appear as magenta (negative values). In clear sky conditions with a positive lapse rate, colors progressing from blue to green to yellow to red (higher positive values) represent greater amounts of low-level moisture. Very thin cirrus clouds, including contrails, appear as red to white (high positive values). Volcanic ash will appear very similarly to dust.<br /><br />More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_SplitWindowDifference.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_SplitWindowDifference.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": ""
                        },
                        "abi_split_window_difference_10_3-12_3": {
                            "product_title": "ABI Split Window Difference (10.3 &micro;m - 12.3 &micro;m)",
                            "product_description": "The Split Window Difference has a variety of meteorological applications, and is leveraged in several multispectral and derived products. The primary applications are related to the relative sensitivity of the 10.3 &micro;m channel to absorption by dust particles, and the relative sensitivity of the 12.3 &micro;m channel to absorption by water vapor. In this version, blowing dust will appear as magenta (negative values). In clear sky conditions with a positive lapse rate, colors progressing from blue to green to yellow to red (higher positive values) represent greater amounts of low-level moisture. Very thin cirrus clouds, including contrails, appear as red to white (high positive values). Volcanic ash will appear very similarly to dust.<br /><br />More info: <a href='http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_SplitWindowDifference.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_SplitWindowDifference.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "split_window_difference_10_3-12_3"
                        },
                        "abi_split_window_difference_dust": {
                            "product_title": "ABI Split Window Difference Dust (10.3 &micro;m - 12.3 &micro;m)",
                            "product_description": "The Split Window Difference has a variety of meteorological applications, and is leveraged in several multispectral and derived products. The primary applications are related to the relative sensitivity of the 10.3 &micro;m channel to absorption by dust particles, and the relative sensitivity of the 12.3 &micro;m channel to absorption by water vapor. In this version, areas of likely blowing dust are highlighted as non-gray colors, while the rest of the scene is grayscale. Volcanic ash will appear very similarly to dust.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "split_window_difference_dust"
                        },
                        "abi_split_window_difference_grayscale": {
                            "product_title": "ABI Split Window Difference Grayscale (10.3 &micro;m - 12.3 &micro;m)",
                            "product_description": "The Split Window Difference has a variety of meteorological applications, and is leveraged in several multispectral and derived products. The primary applications are related to the relative sensitivity of the 10.3 &micro;m channel to absorption by dust particles, and the relative sensitivity of the 12.3 &micro;m channel to absorption by water vapor. In this version, blowing dust will appear as a relatively dark gray to black (negative values). In clear sky conditions with a positive lapse rate, progressively lighter shades of gray (higher positive values) represent greater amounts of low-level moisture. Very thin cirrus clouds, including contrails, appear as white (high positive values). Volcanic ash will appear very similarly to dust.",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "split_window_difference_grayscale"
                        },
                        "multispectral_rgb_composites": {
                            "product_title": "----------VIIRS Multispectral RGB Composites----------"
                        },
                        "eumetsat_natural_color": {
                            "product_title": "Day Land Cloud (EUMETSAT)",
                            "product_description": "In AWIPS, referred to as 'Day Land Cloud'. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_daylandcloudRGB_final.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_daylandcloudRGB_final.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": ""
                        },
                        "natural_color": {
                            "product_title": "Day Land Cloud (EUMETSAT)",
                            "product_description": "The Day Land Cloud RGB is the same as the Natural Color RGB by EUMETSAT, and is useful for discriminating between high ice clouds and low water clouds. High ice clouds, snow, and sea ice appear cyan while low water clouds appear dull grey or white. This imagery can also be used to assess vegetation and detect land surface changes. In AWIPS, referred to as 'Day Land Cloud'. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_daylandcloudRGB_final.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_daylandcloudRGB_final.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": ""
                        },
                        "jma_day_cloud_phase_distinction_rgb": {
                            "product_title": "Day Cloud Phase Distinction (JMA)",
                            "product_description": "This RGB is used to evaluate the phase of cooling cloud tops to monitor convective initiation, storm growth, and decay. It can also be used to identify snow on the ground. The Day Cloud Phase Distinction RGB takes advantage of cloud reflectance differences between the visible and near infrared channels and temperature variances between land and clouds in the infrared to provide increased contrast between background surfaces and phases of clouds (i.e. water vs. ice). More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/Day_Cloud_Phase_Distinction.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/Day_Cloud_Phase_Distinction.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": " km",
                            "color_table_name": "jma_day_cloud_phase_distinction_rgb"
                        },
                        "day_cloud_phase_microphysics_rgb": {
                            "product_title": "Day Cloud Phase Microphysics (EUMETSAT)",
                            "product_description": "The Day Cloud Phase Microphysics RGB (also known simply as Cloud Phase RGB) is useful for determining cloud phase and cloud particle size during the daytime. Ice clouds will appear blue, with lighter blue indicating small ice particles and darker blue indicating large ice particles. Liquid clouds will vary from cream-colored to pink to purple depending on droplet size, with cream-colored clouds having small liquid droplets and purple indicating very large droplet sizes. The background land surface will appear yellow to brown based on vegetation. Snow and ice-cover will appear dark blue. Depending on instrument resolution and fire intensity, fires may appear and will show up as bright green or lime green.  More info: https://eumetrain.org/sites/default/files/2023-01/CloudPhaseRGB.pdf ",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": ""
                        },
                        "eumetsat_nighttime_microphysics": {
                            "product_title": "Nighttime Microphysics (EUMETSAT)",
                            "product_description": "More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_NtMicroRGB_Final_20191206.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_NtMicroRGB_Final_20191206.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": "eumetsat_nighttime_microphysics"
                        },
                        "day_snow_fog": {
                            "product_title": "Day Snow/Fog (EUMETSAT/NASA SPoRT)",
                            "product_description": "Differentiating between snow and clouds in satellite imagery can be challenging due to their similar characteristics and the high reflectivity of both at visible wavelengths.  The Day Snow/Fog RGB combines channels that bring out the distinguishing characteristics of snow (red-orange), ice clouds (shades of pink), and water clouds / fog (shades of yellow). More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DaySnowFogRGB_final_v2.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DaySnowFogRGB_final_v2.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": " km",
                            "color_table_name": "day_snow_fog"
                        },
                        "eumetsat_dust": {
                            "product_title": "Dust (EUMETSAT)",
                            "product_description": "More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/Dust_RGB_Quick_Guide.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/Dust_RGB_Quick_Guide.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": "eumetsat_dust"
                        },
                        "cvd_dust_rgb": {
                            "product_title": "CVD Dust RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 1,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "dust_fire_rgb": {
                            "product_title": "Dust-Fire RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 1,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "fire_temperature": {
                            "product_title": "Fire Temperature (CIRA)",
                            "product_description": "The Fire Temperature RGB can be used to identify where the most intense fires are occurring and differentiate these from “cooler” fires. Fires need to be more intense in order to be detected by the 2.2 and 1.6 &micro;m bands. Small/”cool” fires will only show up at 3.9 &micro;m and appear red while increases in fire intensity cause greater contributions of the other channels resulting in white very intense fires. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/Fire_Temperature_RGB.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/Fire_Temperature_RGB.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": "fire_temperature"
                        },
                        "cira_hires_fire_temperature": {
                            "product_title": "Fire Temperature RGB [375 m resolution] (CIRA)",
                            "product_description": "This product uses a downscaling algorithm to produce VIIRS Band M11 (2.25 μm) at 375 m resolution, and combine it with VIIRS Bands I3 (1.61 μm) and I4 (3.74 μm) to generate the Fire Temperature RGB at 375 m resolution. More info: https://rammb.cira.colostate.edu/training/visit/quick_guides/Fire_Temperature_RGB.pdf",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "fire_temperature"
                        },
                        "cira_natural_fire_color": {
                            "product_title": "Day Fire (CIRA)",
                            "product_description": "The Day Fire RGB is similar to the original Natural Color RGB by EUMETSAT except the 1.6 &micro;m band used in the red component is replaced with the 2.2 &micro;m band. This change highlights the fire hotspots in red, but also limits the use of the RGB for differentiating water vs. ice clouds (both appear cyan, except for very small particles). In AWIPS, referred to as 'Day Land Cloud Fire'. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_DayLandCloudFireRGB_final.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_DayLandCloudFireRGB_final.pdf</a>",
                            "zoom_level_adjust": 0,
                            "resolution": " km",
                            "color_table_name": "cira_natural_fire_color"
                        },
                        "eumetsat_ash": {
                            "product_title": "Ash (EUMETSAT)",
                            "product_description": "The Ash RGB can be used to detect and monitor volcanic ash and sulfur dioxide gas. These emissions can be hazardous for public health and aviation activities. The detection of ash plumes (pink/magenta/red) is largely due to the opposite absorption characteristics of ash and ice clouds between the 12.3 and 10.3 &micro;m bands in the red component of the RGB recipe. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/GOES_Ash_RGB.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/GOES_Ash_RGB.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": "eumetsat_ash"
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
                        "ngfs_microphysics": {
                            "product_title": "NGFS Microphysics RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 1,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "blowing_snow_rgb": {
                            "product_title": "Blowing Snow RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "blowingsnow"
                        },
                        "sea_spray_rgb": {
                            "product_title": "Sea Spray RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 0,
                            "resolution": "2 km",
                            "color_table_name": "seaspray"
                        },
                        "abi_multispectral_rgb_composites": {
                            "product_title": "----------ABI MULTISPECTRAL RGB COMPOSITES----------"
                        },
                        "abi_natural_color": {
                            "product_title": "ABI Day Land Cloud (EUMETSAT)",
                            "product_description": "In AWIPS, referred to as 'Day Land Cloud'. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_daylandcloudRGB_final.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_daylandcloudRGB_final.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": ""
                        },
                        "abi_rgb_air_mass": {
                            "product_title": "ABI Airmass (EUMETSAT)",
                            "product_description": "The Air Mass RGB is used to diagnose the environment surrounding synoptic systems. Cyclogenesis can be inferred by the identification of warm, dry, ozone-rich descending stratospheric air associated with jet streams and potential vorticity anomalies. This RGB can distinguish between polar and tropical air masses, especially along upper-level frontal boundaries and identify high-, mid-, and low-level clouds. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_AirMassRGB_final.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_AirMassRGB_final.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "rgb_air_mass"
                        },
                        "abi_jma_day_cloud_phase_distinction_rgb": {
                            "product_title": "ABI Day Cloud Phase Distinction (JMA)",
                            "product_description": "This RGB is used to evaluate the phase of cooling cloud tops to monitor convective initiation, storm growth, and decay. It can also be used to identify snow on the ground. The Day Cloud Phase Distinction RGB takes advantage of cloud reflectance differences between the visible and near infrared channels and temperature variances between land and clouds in the infrared to provide increased contrast between background surfaces and phases of clouds (i.e. water vs. ice). More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/Day_Cloud_Phase_Distinction.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/Day_Cloud_Phase_Distinction.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": "jma_day_cloud_phase_distinction_rgb"
                        },
                        "abi_day_cloud_phase_microphysics_rgb": {
                            "product_title": "ABI Day Cloud Phase Microphysics (EUMETSAT)",
                            "product_description": "The Day Cloud Phase Microphysics RGB (also known simply as Cloud Phase RGB) is useful for determining cloud phase and cloud particle size during the daytime. Ice clouds will appear blue, with lighter blue indicating small ice particles and darker blue indicating large ice particles. Liquid clouds will vary from cream-colored to pink to purple depending on droplet size, with cream-colored clouds having small liquid droplets and purple indicating very large droplet sizes. The background land surface will appear yellow to brown based on vegetation. Snow and ice-cover will appear dark blue. Depending on instrument resolution and fire intensity, fires may appear and will show up as bright green or lime green.  More info: https://eumetrain.org/sites/default/files/2023-01/CloudPhaseRGB.pdf ",
                            "zoom_level_adjust": 1,
                            "resolution": "1 km",
                            "color_table_name": ""
                        },
                        "abi_eumetsat_nighttime_microphysics": {
                            "product_title": "ABI Nighttime Microphysics (EUMETSAT)",
                            "product_description": "More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_NtMicroRGB_Final_20191206.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_NtMicroRGB_Final_20191206.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": "eumetsat_nighttime_microphysics"
                        },
                        "abi_day_snow_fog": {
                            "product_title": "ABI Day Snow/Fog (EUMETSAT/NASA SPoRT)",
                            "product_description": "Differentiating between snow and clouds in satellite imagery can be challenging due to their similar characteristics and the high reflectivity of both at visible wavelengths.  The Day Snow/Fog RGB combines channels that bring out the distinguishing characteristics of snow (red-orange), ice clouds (shades of pink), and water clouds / fog (shades of yellow). More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DaySnowFogRGB_final_v2.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_DaySnowFogRGB_final_v2.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": "day_snow_fog"
                        },
                        "abi_eumetsat_dust": {
                            "product_title": "ABI Dust (EUMETSAT)",
                            "product_description": "More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/Dust_RGB_Quick_Guide.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/Dust_RGB_Quick_Guide.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": "eumetsat_dust"
                        },
                        "abi_cvd_dust_rgb": {
                            "product_title": "ABI CVD Dust RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "abi_dust_fire_rgb": {
                            "product_title": "ABI Dust-Fire RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "abi_fire_temperature": {
                            "product_title": "ABI Fire Temperature (CIRA)",
                            "product_description": "More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/Fire_Temperature_RGB.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/Fire_Temperature_RGB.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": ""
                        },
                        "abi_cira_natural_fire_color": {
                            "product_title": "ABI Day Fire (CIRA)",
                            "product_description": "The Day Fire RGB is similar to the original Natural Color RGB by EUMETSAT except the 1.6 &micro;m band used in the red component is replaced with the 2.2 &micro;m band. This change highlights the fire hotspots in red, but also limits the use of the RGB for differentiating water vs. ice clouds (both appear cyan, except for very small particles). In AWIPS, referred to as 'Day Land Cloud Fire'. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_DayLandCloudFireRGB_final.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/QuickGuide_GOESR_DayLandCloudFireRGB_final.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": "cira_natural_fire_color"
                        },
                        "abi_eumetsat_ash": {
                            "product_title": "ABI Ash (EUMETSAT)",
                            "product_description": "The Ash RGB can be used to detect and monitor volcanic ash and sulfur dioxide gas. These emissions can be hazardous for public health and aviation activities. The detection of ash plumes (pink/magenta/red) is largely due to the opposite absorption characteristics of ash and ice clouds between the 12.3 and 10.3 &micro;m bands in the red component of the RGB recipe. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/GOES_Ash_RGB.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/GOES_Ash_RGB.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": "eumetsat_ash"
                        },
                        "abi_cira_snowmelt": {
                            "product_title": "ABI Snowmelt RGB (CIRA)",
                            "product_description": "",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": ""
                        },
                        "abi_meteofrance_snow": {
                            "product_title": "ABI Snow RGB (MeteoFrance)",
                            "product_description": "",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": ""
                        },
                        "abi_jma_so2": {
                            "product_title": "ABI Volcanic Emissions (SO<sub>2</sub>) RGB (JMA)",
                            "product_description": "Sulfur dioxide (SO<sub>2</sub>) is a gas commonly released during volcanic eruptions. In high concentrations it is toxic to humans and has considerable environmental effects, including volcanic smog and acid rain. The SO<sub>2</sub> RGB can be used to detect and monitor large sulfur dioxide emissions from both volcanoes and industrial facilities.  It can also be used to detect volcanic ash and dust. More info: <a href='https://rammb.cira.colostate.edu/training/visit/quick_guides/Quick_Guide_SO2_RGB.pdf' target='_blank'>https://rammb.cira.colostate.edu/training/visit/quick_guides/Quick_Guide_SO2_RGB.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "jma_so2"
                        },
                        "abi_eumetsat_severe_storms_rgb": {
                            "product_title": "ABI Severe Storms RGB (EUMETSAT)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "abi_ngfs_microphysics": {
                            "product_title": "ABI NGFS Microphysics RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": ""
                        },
                        "abi_blowing_snow_rgb": {
                            "product_title": "ABI Blowing Snow RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "blowingsnow"
                        },
                        "abi_sea_spray_rgb": {
                            "product_title": "ABI Sea Spray RGB (NOAA)",
                            "product_description": "",
                            "zoom_level_adjust": 2,
                            "resolution": "2 km",
                            "color_table_name": "seaspray"
                        },
                        "cloud_products": {
                            "product_title": "----------CLOUD PRODUCTS - CLAVR-x----------"
                        },
                        "cloud_top_height_cira_clavr-x": {
                            "product_title": "Cloud-Top Height (NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA. See User Quick Guide for more information: <a href=' http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_BaselineCloudTopHeight.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_BaselineCloudTopHeight.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": "2 km",
                            "color_table_name": "cloud_top_height_cira_clavr-x"
                        },
                        "cloud_geometric_thickness_cira_clavr-x": {
                            "product_title": "Cloud Geometric Thickness (CIRA/NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.",
                            "zoom_level_adjust": 1,
                            "resolution": "2 km",
                            "color_table_name": "cloud_geometric_thickness_cira_clavr-x"
                        },
                        "cloud_optical_thickness_cira_clavr-x": {
                            "product_title": "Cloud Optical Depth (NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.",
                            "zoom_level_adjust": 1,
                            "resolution": "2 km",
                            "color_table_name": "cloud_optical_thickness_cira_clavr-x_and_cloud_effective_radius_cira_clavr-x"
                        },
                        "cloud_effective_radius_cira_clavr-x": {
                            "product_title": "Cloud-Top Effective Particle Size (NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.",
                            "zoom_level_adjust": 1,
                            "resolution": "2 km",
                            "color_table_name": "cloud_optical_thickness_cira_clavr-x_and_cloud_effective_radius_cira_clavr-x"
                        },
                        "cloud_top_altitude_cira_clavr-x": {
                            "product_title": "Cloud Top Altitude (NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": "cloud_top_altitude_cira_clavr-x_and_cloud_base_altitude_cira_clavr-x"
                        },
                        "cloud_base_altitude_cira_clavr-x": {
                            "product_title": "Cloud Base Altitude (CIRA/NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": "cloud_top_altitude_cira_clavr-x_and_cloud_base_altitude_cira_clavr-x"
                        },
                        "cloud_phase_cira_clavr-x": {
                            "product_title": "Cloud Phase (CIRA/NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.Cloud Top Phase using IR bands (<a href='https://www.star.nesdis.noaa.gov/jpss/documents/ATBD/ATBD_EPS_Cloud_CldType_v2.0.pdf' target='_blank'>https://www.star.nesdis.noaa.gov/jpss/documents/ATBD/ATBD_EPS_Cloud_CldType_v2.0.pdf</a>). LTMP represents 'Supercooled Liquid water topped Mixed Phase' from CIRA's daytime sub-cloud phase detection based on differential reflectance ratios between 1.6 &micro;m and 2.2 &micro;m for liquid and ice (Miller et al. 2014 JGR; Noh et al. 2019 JGR).",
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
                        "abi_cloud_products": {
                            "product_title": "----------ABI CLOUD PRODUCTS - CLAVR-x----------"
                        },
                        "abi_cloud_top_height_cira_clavr-x": {
                            "product_title": "ABI Cloud-Top Height (NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA. See User Quick Guide for more information: <a href=' http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_BaselineCloudTopHeight.pdf' target='_blank'>http://cimss.ssec.wisc.edu/goes/OCLOFactSheetPDFs/ABIQuickGuide_BaselineCloudTopHeight.pdf</a>",
                            "zoom_level_adjust": 1,
                            "resolution": "2 km",
                            "color_table_name": "cloud_top_height_cira_clavr-x"
                        },
                        "abi_cloud_geometric_thickness_cira_clavr-x": {
                            "product_title": "ABI Cloud Geometric Thickness (CIRA/NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.",
                            "zoom_level_adjust": 1,
                            "resolution": "2 km",
                            "color_table_name": "cloud_geometric_thickness_cira_clavr-x"
                        },
                        "abi_cloud_optical_thickness_cira_clavr-x": {
                            "product_title": "ABI Cloud Optical Depth (NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.",
                            "zoom_level_adjust": 1,
                            "resolution": "2 km",
                            "color_table_name": "cloud_optical_thickness_cira_clavr-x_and_cloud_effective_radius_cira_clavr-x"
                        },
                        "abi_cloud_effective_radius_cira_clavr-x": {
                            "product_title": "ABI Cloud-Top Effective Particle Size (NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.",
                            "zoom_level_adjust": 1,
                            "resolution": "2 km",
                            "color_table_name": "cloud_optical_thickness_cira_clavr-x_and_cloud_effective_radius_cira_clavr-x"
                        },
                        "abi_cloud_top_altitude_cira_clavr-x": {
                            "product_title": "ABI Cloud Top Altitude (NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": "cloud_top_altitude_cira_clavr-x_and_cloud_base_altitude_cira_clavr-x"
                        },
                        "abi_cloud_base_altitude_cira_clavr-x": {
                            "product_title": "ABI Cloud Base Altitude (CIRA/NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": "cloud_top_altitude_cira_clavr-x_and_cloud_base_altitude_cira_clavr-x"
                        },
                        "abi_cloud_phase_cira_clavr-x": {
                            "product_title": "ABI Cloud Phase (CIRA/NOAA)",
                            "product_description": "This product is produced from CLAVR-x run locally at CIRA.Cloud Top Phase using IR bands (<a href='https://www.star.nesdis.noaa.gov/jpss;/documents/ATBD/ATBD_EPS_Cloud_CldType_v2.0.pdf' target='_blank'>https://www.star.nesdis.noaa.gov/jpss/documents/ATBD/ATBD_EPS_Cloud_CldType_v2.0.pdf</a>). LTMP represents 'Supercooled Liquid water topped Mixed Phase' from CIRA's daytime sub-cloud phase detection based on differential reflectance ratios between 1.6 &micro;m and 2.2 &micro;m for liquid and ice (Miller et al. 2014 JGR; Noh et al. 2019 JGR).",
                            "zoom_level_adjust": 1,
                            "resolution": " km",
                            "color_table_name": "cloud_phase_cira_clavr-x"
                        },
                        "abi_flight_level_based_cloud_layers_rgb_cira_clavr-x": {
                            "product_title": "ABI Flight Level-Based Cloud Layers RGB (CIRA/NOAA)",
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
                        },
                        "cris_imagery": {
                            "product_title": "----------CrIS Imagery----------"
                        },
                        "cris_6_2": {
                            "product_title": "CrIS 6.2 &micro;m (ABI Band 8: &quot;Upper-Level Water Vapor&quot;)",
                            "product_description": "",
                            "zoom_level_adjust": 4,
                            "resolution": " km",
                            "color_table_name": "cris_7_3"
                        },
                        "cris_6_9": {
                            "product_title": "CrIS 6.9 &micro;m (ABI Band 9: &quot;Mid-Level Water Vapor&quot;)",
                            "product_description": "",
                            "zoom_level_adjust": 4,
                            "resolution": " km",
                            "color_table_name": "cris_7_3"
                        },
                        "cris_7_3": {
                            "product_title": "CrIS 7.3 &micro;m (ABI Band 10: &quot;Lower-Level Water Vapor&quot;)",
                            "product_description": "",
                            "zoom_level_adjust": 4,
                            "resolution": " km",
                            "color_table_name": "cris_7_3"
                        },
                        "cris_9_6": {
                            "product_title": "CrIS 9.6 &micro;m (ABI Band 12: &quot;Ozone&quot;)",
                            "product_description": "",
                            "zoom_level_adjust": 4,
                            "resolution": " km",
                            "color_table_name": "cris_13_3"
                        },
                        "cris_10_3": {
                            "product_title": "CrIS 10.3 &micro;m (ABI Band 13: &quot;Clean IR Longwave Window&quot;)",
                            "product_description": "",
                            "zoom_level_adjust": 4,
                            "resolution": " km",
                            "color_table_name": "cris_13_3"
                        },
                        "cris_10_8": {
                            "product_title": "CrIS 10.8 &micro;m (VIIRS Band M15: &quot;Clean IR Longwave Window&quot;)",
                            "product_description": "",
                            "zoom_level_adjust": 4,
                            "resolution": " km",
                            "color_table_name": "cris_10_8"
                        },
                        "cris_11_2": {
                            "product_title": "CrIS 11.2 &micro;m (ABI Band 14: &quot;IR Longwave Window&quot;)",
                            "product_description": "",
                            "zoom_level_adjust": 4,
                            "resolution": " km",
                            "color_table_name": "cris_13_3"
                        },
                        "cris_12_3": {
                            "product_title": "CrIS 12.3 &micro;m (ABI Band 15: &quot;Dirty Longwave Window&quot;)",
                            "product_description": "",
                            "zoom_level_adjust": 4,
                            "resolution": " km",
                            "color_table_name": "cris_13_3"
                        },
                        "cris_13_3": {
                            "product_title": "CrIS 13.3 &micro;m (ABI Band 16: &quot;CO2 Longwave Infrared&quot;)",
                            "product_description": "",
                            "zoom_level_adjust": 4,
                            "resolution": " km",
                            "color_table_name": "cris_13_3"
                        },
                        "cris_airmass": {
                            "product_title": "CrIS Airmass RGB (R: B8-B9, G: B12B13, B: -B8)",
                            "product_description": "",
                            "zoom_level_adjust": 4,
                            "resolution": " km",
                            "color_table_name": "cris_airmass"
                        },
                        "cris_so2_ash": {
                            "product_title": "CrIS SO2-Ash RGB (R: B9-B10, G: B15-B13, B: B13)",
                            "product_description": "",
                            "zoom_level_adjust": 4,
                            "resolution": " km",
                            "color_table_name": ""
                        },
                        "microwave_products": {
                            "product_title": "----------MICROWAVE PRODUCTS----------"
                        },
                        "cira_blended_tpw": {
                            "product_title": "Blended TPW (CIRA)",
                            "product_description": "Blended TPW is a retrieval of the total precipitable water (TPW) in the column derived from a combination of microwave data from polar-orbiting satellites, infrared data from geostationary satellites, and ground-based GPS sensors. See User Quick Guide for more information: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/Blended_TPW_Quick_Guide_20180727-1.pdf' target='_blank' target='_blank'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/Blended_TPW_Quick_Guide_20180727-1.pdf</a>",
                            "zoom_level_adjust": 2,
                            "resolution": "3 km",
                            "color_table_name": "cira_blended_tpw"
                        },
                        "cira_advected_layered_precipitable_water_surface-850hPa": {
                            "product_title": "Advected Layered Precipitable Water [Surface-850 hPa] (CIRA)",
                            "product_description": "CIRA's Advected Layered Precipitable Water product is a retrieval of atmospheric water vapor in four layers of the atmosphere derived from five polar-orbiting satellites. A Quick Guide for the product is available here: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf</a> ",
                            "zoom_level_adjust": 2,
                            "resolution": "1.5 km",
                            "color_table_name": "ALPW"
                        },
                        "cira_advected_layered_precipitable_water_850-700hPa": {
                            "product_title": "Advected Layered Precipitable Water [850 - 700 hPa] (CIRA)",
                            "product_description": "CIRA's Advected Layered Precipitable Water product is a retrieval of atmospheric water vapor in four layers of the atmosphere derived from five polar-orbiting satellites. A Quick Guide for the product is available here: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf</a> ",
                            "zoom_level_adjust": 2,
                            "resolution": "1.5 km",
                            "color_table_name": "ALPW"
                        },
                        "cira_advected_layered_precipitable_water_700-500hPa": {
                            "product_title": "Advected Layered Precipitable Water [700 - 500 hPa] (CIRA)",
                            "product_description": "CIRA's Advected Layered Precipitable Water product is a retrieval of atmospheric water vapor in four layers of the atmosphere derived from five polar-orbiting satellites. A Quick Guide for the product is available here: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf</a> ",
                            "zoom_level_adjust": 2,
                            "resolution": "1.5 km",
                            "color_table_name": "ALPW"
                        },
                        "cira_advected_layered_precipitable_water_500-300hPa": {
                            "product_title": "Advected Layered Precipitable Water [500 - 300 hPa] (CIRA)",
                            "product_description": "CIRA's Advected Layered Precipitable Water product is a retrieval of atmospheric water vapor in four layers of the atmosphere derived from five polar-orbiting satellites. A Quick Guide for the product is available here: <a href='https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf'>https://rammb2.cira.colostate.edu/wp-content/uploads/2020/01/QuickGuide_ALPW_20230725.pdf</a> ",
                            "zoom_level_adjust": 2,
                            "resolution": "1.5 km",
                            "color_table_name": "ALPW"
                        },
                        "cira_layer_vapor_transport_surface-850hPa": {
                            "product_title": "Layer Vapor Transport [Surface-850 hPa] (CIRA)",
                            "product_description": "Layer Vapor Transport (LVT) is a measure of the transport of water vapor through the atmosphere in four layers, based on the Advected Layer Precipitable Water product (ALPW) and model-based wind speeds.",
                            "zoom_level_adjust": 2,
                            "resolution": "1.5 km",
                            "color_table_name": "LVT"
                        },
                        "cira_layer_vapor_transport_850-700hPa": {
                            "product_title": "Layer Vapor Transport [850-700 hPa] (CIRA)",
                            "product_description": "Layer Vapor Transport (LVT) is a measure of the transport of water vapor through the atmosphere in four layers, based on the Advected Layer Precipitable Water product (ALPW) and model-based wind speeds.",
                            "zoom_level_adjust": 2,
                            "resolution": "1.5 km",
                            "color_table_name": "LVT"
                        },
                        "cira_layer_vapor_transport_700-500hPa": {
                            "product_title": "Layer Vapor Transport [700-500 hPa] (CIRA)",
                            "product_description": "Layer Vapor Transport (LVT) is a measure of the transport of water vapor through the atmosphere in four layers, based on the Advected Layer Precipitable Water product (ALPW) and model-based wind speeds.",
                            "zoom_level_adjust": 2,
                            "resolution": "1.5 km",
                            "color_table_name": "LVT"
                        },
                        "cira_layer_vapor_transport_500-300hPa": {
                            "product_title": "Layer Vapor Transport [500-300 hPa] (CIRA)",
                            "product_description": "Layer Vapor Transport (LVT) is a measure of the transport of water vapor through the atmosphere in four layers, based on the Advected Layer Precipitable Water product (ALPW) and model-based wind speeds.",
                            "zoom_level_adjust": 2,
                            "resolution": "1.5 km",
                            "color_table_name": "LVT"
                        }
                    }
                }
            }
        };
