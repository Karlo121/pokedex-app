import React from "react";
import PokedexData from "../data/pokedex.json";

interface PokedexProps {}

export const Pokedex: React.FC<PokedexProps> = ({}) => {
  return (
    <div>
      {PokedexData.map((pokemon) => {
        return (
          <div key={pokemon.id}>
            <h1>{pokemon.name.english}</h1>
            <p>
              {pokemon.type[0]} {pokemon.type[1]}
            </p>
            <img src={`../images/${pokemon.id}.png`} alt="pokemon "></img>
          </div>
        );
      })}
    </div>
  );
};

export default Pokedex;
