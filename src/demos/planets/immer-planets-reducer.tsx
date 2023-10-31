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

export const immerPlanetsReducer = (planets: Array<Planet>, action: Action) => {
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
