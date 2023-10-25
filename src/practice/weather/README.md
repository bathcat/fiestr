# Lab: Weather

## Summary

Due to overwhelming customer demand, you are building a component to get the latest weather forecast. Use web services to get the data.

## Requirements

1.  Get the current latitude and longitude via the geoplugin service here: [www.geoplugin.net/json.gp](http://www.geoplugin.net/json.gp)

2.  Using the current latitude and longitude, get the associated grid location from weather.gov like this:
    [api.weather.gov/points/39,-105](https://api.weather.gov/points/39,-105)

    In the example--

    - **Latitude**: 39
    - **Longitude**: -105

3.  Using the grid location, get the current forecast from weather.gov like this:
    [api.weather.gov/gridpoints/BOU/63,72/forecast](https://api.weather.gov/gridpoints/BOU/63,72/forecast)

    In the example--

    - **Office**: BOU
    - **Grid X**: 63
    - **Grid Y**: 72

## Stretch Goals

- Factor non-display logic into services and custom hooks
- Write tests
- Beautify

---

## Options

The main point of this exercise is getting used to **useState** and **useEffect**, not the actual logic of fetching the weather. So you may want to begin with **\_shared/weather-service.ts**.
