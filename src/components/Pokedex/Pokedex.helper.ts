import { useLocation } from 'react-router-dom';
import { generations } from './Pokedex.constants';

const namePredicate = (name: string, searchTerm: string): boolean => {
  return name.toLowerCase().includes(searchTerm);
};
const typesPredicate = (types: string[], searchTerm: string): boolean => {
  const lowerCaseTypes = types.map((type) => type.toLowerCase());

  const checkTypes = (type) => searchTerms.some((term) => type.includes(term));

  const searchTerms = searchTerm.split(' ').filter((term) => term !== '');
  const isMultipleTerms = searchTerms.length > 1;

  return isMultipleTerms
    ? lowerCaseTypes.every((type) => checkTypes(type))
    : lowerCaseTypes.some((type) => checkTypes(type));
};

export const filterPokemon = (pokedexData, searchTerm) =>
  pokedexData.filter(
    (pokemon) =>
      namePredicate(pokemon.name.english, searchTerm) ||
      typesPredicate(pokemon.type, searchTerm)
  );

export const getRangeFromGeneration = (generation) => {
  return generations[generation];
};

export function CheckGeneration(pokemon) {
  let location = useLocation();
  const range = getRangeFromGeneration(location.pathname);

  return pokemon.slice(range.from, range.to);
}
