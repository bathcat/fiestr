import { Planet } from './planets-service';

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

export const planetsReducer = (
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
