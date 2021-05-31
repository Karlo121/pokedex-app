import { PokemonLink, StyledBox, TypeWrapper } from './Pokemon.style';
import TypeTag from './TypeTag/TypeTag';
import StatTable from './StatTable/StatTable';

const Pokemon = ({ pokemon }) => {
  const { id, name, type, base } = pokemon;

  const preparedPokemonTypes = type.map((pokemonType, index) => (
    <TypeTag key={index} type={pokemonType} />
  ));

  return (
    <PokemonLink
      href={`https://bulbapedia.bulbagarden.net/wiki/${name.english}_(Pokémon)`}
    >
      <StyledBox key={id}>
        <h1>{name.english}</h1>
        <TypeWrapper>{preparedPokemonTypes}</TypeWrapper>
        <img src={`../images/${id}.png`} alt='pokemon ' />
        <StatTable base={base} />
      </StyledBox>
    </PokemonLink>
  );
};

export default Pokemon;
