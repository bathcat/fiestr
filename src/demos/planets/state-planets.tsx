import { useState } from 'react';
import { getPlanets, Satellite } from './planets-service';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@components/ui/card';
import { Button } from '@components/ui/button/button';
import { Badge } from '@components/ui/badge';
import { platform } from 'os';

export const Planets = () => {
  const [planets, setPlanets] = useState(getPlanets());

  const removeSatellite = (planetId: string, satelliteId: string) =>
    setPlanets(
      planets.map(p => {
        if (p.id === planetId) {
          p.satellites = p.satellites.filter(s => s.id !== satelliteId);
          return { ...p };
        }
        return p;
      }),
    );

  const changePlanetDescription = (planetID: string, description: string) =>
    setPlanets(
      planets.map(p => {
        if (p.id === planetID) {
          return { ...p, description };
        }
        return p;
      }),
    );

  return (
    <>
      {planets.map(planet => (
        <Card key={planet.id}>
          <CardTitle>{planet.name}</CardTitle>
          <CardDescription>
            <input
              type="text"
              value={planet.description}
              onChange={e => changePlanetDescription(planet.id, e.target.value)}
            />
          </CardDescription>
          <CardContent>
            <h3>Satellites:</h3>
            {planet.satellites.map(satellite => (
              <Badge
                key={satellite.id}
                onClick={event => {
                  event.preventDefault();
                  removeSatellite(planet.id, satellite.id);
                }}
                variant="destructive"
                className="m-1 cursor-pointer"
              >
                {satellite.name}
              </Badge>
            ))}
          </CardContent>
        </Card>
      ))}
    </>
  );
};
