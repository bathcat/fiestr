import { Card, CardContent, CardTitle } from '@components/ui/card';
import { useWeather } from './use-weather';

export const Weather = () => {
  const weather = useWeather();

  return (
    <Card>
      <CardTitle>Weather</CardTitle>
      <CardContent>
        <span>{weather?.icon}</span>
        {weather?.shortForecast} {weather?.temperature}
      </CardContent>
    </Card>
  );
};
