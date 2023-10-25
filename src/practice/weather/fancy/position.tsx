import { Card, CardContent, CardTitle } from '@components/ui/card';
import { usePosition } from './use-position';

export const Position = () => {
  const position = usePosition();
  return (
    <Card>
      <CardTitle>Position</CardTitle>
      <CardContent>
        <h1>Latitude: {position?.latitude}</h1>
        <h1>Longitude: {position?.longitude}</h1>
      </CardContent>
    </Card>
  );
};
