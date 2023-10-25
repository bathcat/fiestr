import { useEffect, useState } from 'react';
import { WeatherModel } from '../_shared/types';
import { WeatherService } from '../_shared/weather-service';

export const Weather = () => {
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

  return (
    <div className="card">
      <div className="card-title">Weather</div>
      <span className="text-xl m-1">{weather?.icon}</span>
      {weather?.shortForecast} {weather?.temperature}
    </div>
  );
};
