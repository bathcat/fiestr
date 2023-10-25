/**
 * Generates an emoji based on a short text description of the weather
 * (like) from NOAA, for example.
 */
export const toEmoji = (rawWeather: string) => {
  const weather = rawWeather.toLowerCase();
  if (weather.includes('snow')) {
    return '🌨️';
  }
  if (weather.includes('rain')) {
    return '🌧️';
  }
  if (weather.includes('partial')) {
    return '⛅';
  }
  if (weather.includes('sun')) {
    return '☀️';
  }
  if (weather.includes('cloud')) {
    return '☁️';
  }
  return '🐐';
};
