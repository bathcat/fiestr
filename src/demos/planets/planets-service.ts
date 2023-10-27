export interface Satellite{
  id:string;
  name:string;
}

export interface Planet {
  id: string;
  name: string;
  description: string;
  satellites: Array<Satellite>;
}

export const getPlanets = (): Array<Planet> => [
  { id: '001', name: 'Venus', description: 'Very hot.', satellites: [] },
  {
    id: '002',
    name: 'Earth',
    description: 'Pretty nice.',
    satellites: [{ id: 'es0', name: 'Moon' }],
  },
  {
    id: '003',
    name: 'Mars',
    description: 'Small, cold.',
    satellites: [
      { id: 'ms0', name: 'Phobos' },
      { id: 'ms1', name: 'Deimos' },
    ],
  },
  {
    id: '004',
    name: 'Jupiter',
    description: 'Big, fluffy.',
    satellites: [
      { id: 'js0', name: 'Io' },
      { id: 'js1', name: 'Europa' },
      { id: 'js2', name: 'Ganymede' },
      { id: 'js3', name: 'Callisto' },
    ],
  },
];
