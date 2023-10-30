import { useReducer } from 'react';
import { getPlanets } from './planets-service';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@components/ui/card';
import { Badge } from '@components/ui/badge';
import { planetsReducer } from './planets-reducer';

interface UpdatePlanetDescriptionAction {
  actionType: 'updatePlanetDescription';
  planetID: string;
  newDescription: string;
}

interface DestroySatelliteAction {
  actionType: 'destroySatellite';
  planetID: string;
  satelliteID: string;
}

type Action = UpdatePlanetDescriptionAction | DestroySatelliteAction;

export const Planets = () => {
  const [planets, dispatch] = useReducer(planetsReducer, getPlanets());

  return (
    <>
      {planets.map(planet => (
        <Card key={planet.id}>
          <CardTitle>{planet.name}</CardTitle>
          <CardDescription>
            <input
              type="text"
              value={planet.description}
              onChange={e =>
                dispatch({
                  actionType: 'updatePlanetDescription',
                  planetID: planet.id,
                  newDescription: e.target.value,
                })
              }
            />
          </CardDescription>
          <CardContent>
            <h3>Satellites:</h3>
            {planet.satellites.map(satellite => (
              <Badge
                key={satellite.id}
                onClick={event => {
                  event.preventDefault();
                  dispatch({
                    actionType: 'destroySatellite',
                    planetID: planet.id,
                    satelliteID: satellite.id,
                  });
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
