/**
 * Response from Geoplugin API
 */
export interface GeopluginResponse {
  geoplugin_latitude: string;
  geoplugin_longitude: string;
}

/**
 * Position on Earth surface
 */
export interface Position {
  latitude: number;
  longitude: number;
}

/**
 * Response from NOAA API
 */
export interface GridLocationResponse {
  properties: { gridId: string; gridX: number; gridY: number };
}

/**
 * Grid location
 *
 * Represents a point on the NOAA grid that's normalized and easy to work with.
 */
export interface GridLocation {
  office: string;
  x: number;
  y: number;
}

/**
 * Weather period info
 *
 * Represents the weather-- or forecasted weather--
 * at a specific time.
 */
export interface WeatherPeriodInfo {
  temperature: number;
  temperatureUnit: string;
  temperatureTrend: string;
  shortForecast: string;
  detailedForecast: string;
}

/**
 * Forecast from NOAA API
 */
export interface Forecast {
  properties: { periods: Array<WeatherPeriodInfo> };
}

/**
 * Forecast with icon for friendly display.
 */
export type WeatherModel = WeatherPeriodInfo & { icon: string };
