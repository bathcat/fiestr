import { createContext, useReducer } from 'react';
import { getPlanets } from './planets-service';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@components/ui/card';
import { Badge } from '@components/ui/badge';
import { planetsReducer } from './planets-reducer';

interface PlanetDescriptionProps{
  value:string;
  onChange:(value:string)=>void;
}

export const PlanetDescription = (props:PlanetDescriptionProps) => {
  return (
    <input
      type="text"
      value={props.value}
      onChange={e => props.onChange(e.target.value)}
    />
  );
};

interface SatelliteProps{
  key:string;
  name:string;
  onClick:()=>void;
}

export const Satellite = (props:SatelliteProps)=>{
  return (
    <Badge
      key={props.key}
      onClick={() => props.onClick()}
      variant="destructive"
      className="m-1 cursor-pointer"
    >
      {props.name}
    </Badge>
  );

}

export const Planets = () => {
  const [planets, dispatch] = useReducer(planetsReducer, getPlanets());

  return (
    <>
      {planets.map(planet => (
        <Card key={planet.id}>
          <CardTitle>{planet.name}</CardTitle>
          <CardDescription>
            <PlanetDescription
              value={planet.description}
              onChange={newDescription =>
                dispatch({
                  actionType: 'updatePlanetDescription',
                  planetID: planet.id,
                  newDescription: newDescription,
                })
              }
            />
          </CardDescription>
          <CardContent>
            <h3>Satellites:</h3>
            {planet.satellites.map(satellite => (
              <Satellite
                key={satellite.id}
                name={satellite.name}
                onClick={() => {
                  dispatch({
                    actionType: 'destroySatellite',
                    planetID: planet.id,
                    satelliteID: satellite.id,
                  });
                }}
              />
            ))}
          </CardContent>
        </Card>
      ))}
    </>
  );
};
