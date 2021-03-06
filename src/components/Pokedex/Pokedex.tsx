import pokedexData from '../../data/pokedex.json';
import { PokedexWrapper, OuterWrapper } from './Pokedex.style';
import { useState } from 'react';
import Pokemon from './Pokemon/Pokemon';
import SearchBar from './SearchBar/SearchBar';
import { filterPokemon } from './Pokedex.helper';
import { CheckGeneration } from './Pokedex.helper';

const Pokedex = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const genPokemon = CheckGeneration(pokedexData);
  const pokemon = filterPokemon(genPokemon, searchTerm);

  const preparedPokemon = pokemon.map((pokemon, index) => (
    <Pokemon key={index} pokemon={pokemon} />
  ));

  return (
    <OuterWrapper>
      <SearchBar setSearchTerm={setSearchTerm} />
      <PokedexWrapper>{preparedPokemon}</PokedexWrapper>
    </OuterWrapper>
  );
};

export default Pokedex;
