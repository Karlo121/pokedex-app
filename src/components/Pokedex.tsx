import React from "react";
import { isPropertySignature } from "typescript";
import PokedexData from "../data/pokedex.json";
import {
  StyledBox,
  PokedexWrapper,
  TypeBox,
  TypeWrapper,
} from "../styles/Pokedex.style";
import { Type } from "../utils/TypeDefiner";

export const Pokedex = ({}) => {
  return (
    <PokedexWrapper>
      {PokedexData.map((pokemon) => {
        return (
          <StyledBox key={pokemon.id}>
            <a
              href={`https://bulbapedia.bulbagarden.net/wiki/${pokemon.name.english}_(Pokémon)`}
            >
              <h1>{pokemon.name.english}</h1>
              <TypeWrapper>
                <Type type={`${pokemon.type[0]}`} />
                <Type type={`${pokemon.type[1]}`} />
              </TypeWrapper>
              <img src={`../images/${pokemon.id}.png`} alt="pokemon "></img>
            </a>
          </StyledBox>
        );
      })}
    </PokedexWrapper>
  );
};

export default Pokedex;
