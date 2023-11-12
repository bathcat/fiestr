import { expect, test } from 'vitest';
import { planetsReducer } from './planets-reducer';
import { Planet } from './planets-service';

test('DestroySatelliteAction should change affected planet', () => {
  const original: Array<Planet> = [
    { id: '001', name: 'Venus', description: 'Very hot.', satellites: [] },
    {
      id: '002',
      name: 'Earth',
      description: 'Pretty nice.',
      satellites: [{ id: 'es0', name: 'Moon' }],
    },
  ];

  const updated = planetsReducer(original, {
    actionType: 'destroySatellite',
    planetID: '002',
    satelliteID: 'es0',
  });

  expect(Object.is(original[1], updated[1])).toBeFalsy();
});
