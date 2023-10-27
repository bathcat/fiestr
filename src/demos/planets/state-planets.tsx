import { useState } from "react";
import { getPlanets } from "./planets-service";


export const Planets = () => {
  const [planets, setPlanets] = useState(getPlanets());
  return (
    <>
      {planets.map(planet => (
        <div>
          <h2>{planet.name}</h2>
          <input
            type="text"
            value={planet.description}
          />
          <h3>Satellites:</h3>
          {planet.satellites.map(satellite => (
            <button
              key={satellite.id}
              onClick={e => alert('nuking!')}
            >
              Destroy {satellite.name}
            </button>
          ))}
        </div>
      ))}
    </>
  );
};
