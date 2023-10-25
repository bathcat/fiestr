import { useEffect, useState } from 'react';
import { Position as PositionInfo } from '../_shared/types';
import { WeatherService } from '../_shared/weather-service';

export const Position = () => {
  const [position, setPosition] = useState<PositionInfo | null>(null);
  useEffect(() => {
    let cancelled = false;
    async function getPosition() {
      const service = new WeatherService();
      const position = await service.getPosition();
      if (cancelled) {
        return;
      }
      setPosition(position);
    }

    getPosition();
    () => (cancelled = true);
  }, []);

  return (
    <div>
      <h1>Latitude: {position?.latitude}</h1>
      <h1>Longitude: {position?.longitude}</h1>
    </div>
  );
};
