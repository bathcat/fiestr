export interface Planet {
  id: string;
  name: string;
  description: string;
  satellites: Array<{ id: string; name: string }>;
}

export const getPlanets = (): Array<Planet> => [
  { id: '001', name: 'Venus', description: 'Very hot.', satellites: [] },
  {
    id: '002',
    name: 'Earth',
    description: 'Pretty nice.',
    satellites: [{ id: 'es0', name: 'Moon' }],
  },
];
