import { useEffect, useState } from 'react';
import { GridLocation as GridLocationInfo } from '../_shared/types';
import { WeatherService } from '../_shared/weather-service';

export function useGridLocation() {
  const [gridLocation, setGridLocation] = useState<GridLocationInfo | null>(
    null,
  );

  useEffect(() => {
    let cancelled = false;
    async function getGridLocation() {
      const service = new WeatherService();
      const location = await service.getGridLocation();
      if (cancelled) {
        return;
      }
      setGridLocation(location);
    }

    getGridLocation();
    () => (cancelled = true);
  }, []);

  return gridLocation;
}
