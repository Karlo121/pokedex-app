import React from "react";
import PokedexData from "../data/pokedex.json";
import {
  StyledBox,
  PokedexWrapper,
  TypeWrapper,
  StatWrapper,
  StatHeader,
  StatColumn,
  StyledSearch,
  OuterWrapper,
  SearchWrapper,
  SearchHeader,
} from "../styles/Pokedex.style";
import { Type } from "../utils/TypeDefiner";
import { useState } from "react";

export const Pokedex = ({}) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <OuterWrapper>
      <SearchWrapper>
        <SearchHeader color={"#ff5959"}>Search</SearchHeader>
        <StyledSearch
          type="text"
          placeholder="search by type or name"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        ></StyledSearch>
      </SearchWrapper>

      <PokedexWrapper>
        {PokedexData.filter((pokemon) => {
          if (searchTerm === "") {
            return pokemon;
          } else if (
            pokemon.name.english
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          ) {
            return pokemon;
          } else if (
            pokemon.type.join().toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return pokemon;
          }
        }).map((pokemon) => {
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
                <StatWrapper>
                  <StatColumn>
                    <StatHeader color={"#ff5959"}>H</StatHeader>
                    <p>{pokemon.base.HP}</p>
                  </StatColumn>
                  <StatColumn>
                    <StatHeader color={"#f5ac78"}>A</StatHeader>
                    <p>{pokemon.base.Attack}</p>
                  </StatColumn>
                  <StatColumn>
                    <StatHeader color={"#fae078"}>D</StatHeader>
                    <p>{pokemon.base.Defense}</p>
                  </StatColumn>
                  <StatColumn>
                    <StatHeader color={"#9db7f5"}>sA</StatHeader>
                    <p>{pokemon.base["Sp. Attack"]}</p>
                  </StatColumn>
                  <StatColumn>
                    <StatHeader color={"#a7db8d"}>sD</StatHeader>
                    <p>{pokemon.base["Sp. Defense"]}</p>
                  </StatColumn>
                  <StatColumn>
                    <StatHeader color={"#fa92b1"}>S</StatHeader>
                    <p>{pokemon.base.Speed}</p>
                  </StatColumn>
                </StatWrapper>
              </a>
            </StyledBox>
          );
        })}
      </PokedexWrapper>
    </OuterWrapper>
  );
};

export default Pokedex;
