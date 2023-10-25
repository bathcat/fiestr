import { useEffect, useState } from 'react';
import { WeatherModel } from '../_shared/types';
import { WeatherService } from '../_shared/weather-service';

export function useWeather() {
  const [weather, setWeather] = useState<WeatherModel | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function getWeather() {
      const service = new WeatherService();
      const weather = await service.getWeather();
      if (cancelled) {
        return;
      }
      setWeather(weather);
    }

    getWeather();
    () => (cancelled = true);
  }, []);

  return weather;
}
