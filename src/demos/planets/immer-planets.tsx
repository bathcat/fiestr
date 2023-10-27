import { Planet, getPlanets } from './planets-service';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@components/ui/card';
import { Badge } from '@components/ui/badge';
import { useImmerReducer } from 'use-immer';

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

export const planetsReducer = (planets: Array<Planet>, action: Action) => {
  if (action.actionType === 'updatePlanetDescription') {
    for (const p of planets) {
      if (p.id === action.planetID) {
        p.description = action.newDescription;
        return;
      }
    }
  }

  if (action.actionType === 'destroySatellite') {
    for (const p of planets) {
      if (p.id === action.planetID) {
        p.satellites = p.satellites.filter(s => s.id !== action.satelliteID);
        return;
      }
    }
  }

  throw new Error('Something is very wrong. You must have passed a bogus action or a bad ID.');
};

export const Planets = () => {
  const [planets, dispatch] = useImmerReducer(planetsReducer, getPlanets());

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
