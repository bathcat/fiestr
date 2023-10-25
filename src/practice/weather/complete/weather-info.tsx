import { GridLocation } from './grid-location';
import { Position } from './position';
import { Weather } from './weather';

export const WeatherInfo = () => (
  <div>
    <Position />
    <br />
    <GridLocation />
    <br />
    <Weather />
  </div>
);
