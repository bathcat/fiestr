import { useReducer, useState } from 'react';
import { Planet, getPlanets } from './planets-service';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@components/ui/card';
import { Badge } from '@components/ui/badge';

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

const planetsReducer = (
  planets: Array<Planet>,
  action: Action,
): Array<Planet> => {
  if (action.actionType === 'updatePlanetDescription') {
    return planets.map(p => {
      if (p.id === action.planetID) {
        return { ...p, description: action.newDescription };
      }
      return p;
    });
  }

  if (action.actionType === 'destroySatellite') {
    return planets.map(p => {
      if (p.id === action.planetID) {
        p.satellites = p.satellites.filter(s => s.id !== action.satelliteID);
        return { ...p };
      }
      return p;
    });
  }

  throw new Error("Something's wrong....");
};

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
