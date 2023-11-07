import { createContext, useContext, useReducer } from 'react';
import { Planet, getPlanets } from './planets-service';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@components/ui/card';
import { Badge } from '@components/ui/badge';
import { planetsReducer } from './planets-reducer';

const PlanetsDispatchContext = createContext(null);

interface PlanetDescriptionProps {
  planet: Planet;
}

export const PlanetDescription = ({ planet }: PlanetDescriptionProps) => {
  const dispatch = useContext(PlanetsDispatchContext);

  return (
    <input
      type="text"
      id={planet.id}
      value={planet.name}
      onChange={e => {
        dispatch({
          actionType: 'updatePlanetDescription',
          planetID: planet.id,
          newDescription: e.target.value,
        });
      }}
    />
  );
};

interface SatelliteProps {
  id: string;
  planetId: string;
  name: string;
}

export const Satellite = (props: SatelliteProps) => {
  const dispatch = useContext(PlanetsDispatchContext);
  return (
    <Badge
      id={props.id}
      onClick={e => {
        e.preventDefault();
        dispatch({
          actionType: 'destroySatellite',
          planetID: props.planetId,
          satelliteID: props.id,
        });
      }}
      variant="destructive"
      className="m-1 cursor-pointer"
    >
      {props.name}
    </Badge>
  );
};

export const Planets = () => {
  const [planets, dispatch] = useReducer(planetsReducer, getPlanets());

  return (
    <>
      <PlanetsDispatchContext.Provider value={dispatch}>
        {planets.map(planet => (
          <Card key={planet.id}>
            <CardTitle>{planet.name}</CardTitle>
            <CardDescription>
              <PlanetDescription planet={planet} />
            </CardDescription>
            <CardContent>
              <h3>Satellites:</h3>
              {planet.satellites.map(satellite => (
                <Satellite
                  key={satellite.id}
                  id={satellite.id}
                  planetId={planet.id}
                  name={satellite.name}
                />
              ))}
            </CardContent>
          </Card>
        ))}
      </PlanetsDispatchContext.Provider>
    </>
  );
};
