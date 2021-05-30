import PokedexData from '../data/pokedex.json';
import {
  PokedexWrapper,
  StyledSearch,
  OuterWrapper,
  SearchWrapper,
  SearchHeader,
} from '../styles/Pokedex.style';
import { useState } from 'react';
import Pokemon from '../components/Pokemon';

export const Pokedex = ({}) => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <OuterWrapper>
      <SearchWrapper>
        <SearchHeader color={'#ff5959'}>Search</SearchHeader>
        <StyledSearch
          type='text'
          placeholder='search by type or name'
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        ></StyledSearch>
      </SearchWrapper>

      <PokedexWrapper>
        {PokedexData.filter((pokemon) => {
          if (searchTerm === '') {
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
          return <Pokemon pokemon={pokemon} />;
        })}
      </PokedexWrapper>
    </OuterWrapper>
  );
};

export default Pokedex;
