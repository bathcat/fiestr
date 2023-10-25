import { Card, CardContent, CardTitle } from '@components/ui/card';
import { useGridLocation } from './use-grid-location';

export const GridLocation = () => {
  const gridLocation = useGridLocation();
  return (
    <Card>
      <CardTitle>Grid Location</CardTitle>
      <CardContent>
        <h1>X: {gridLocation?.x}</h1>
        <h1>Y: {gridLocation?.y}</h1>
        <h1>Office: {gridLocation?.office}</h1>
      </CardContent>
    </Card>
  );
};
