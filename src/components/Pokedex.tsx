import React from "react";
import PokedexData from "../data/pokedex.json";
import { StyledBox, PokedexWrapper } from "../styles/Pokedex.style";

interface PokedexProps {}

export const Pokedex: React.FC<PokedexProps> = ({}) => {
  return (
    <PokedexWrapper>
      {PokedexData.map((pokemon) => {
        return (
          <StyledBox key={pokemon.id}>
            <a
              href={`https://bulbapedia.bulbagarden.net/wiki/${pokemon.name.english}_(Pokémon)`}
            >
              <h1>{pokemon.name.english}</h1>
              <p>
                {pokemon.type[0]} {pokemon.type[1]}
              </p>
              <img src={`../images/${pokemon.id}.png`} alt="pokemon "></img>
            </a>
          </StyledBox>
        );
      })}
    </PokedexWrapper>
  );
};

export default Pokedex;
