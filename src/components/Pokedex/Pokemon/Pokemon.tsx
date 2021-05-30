import { StyledBox, TypeWrapper } from './Pokemon.style';
import TypeTag from './TypeTag/TypeTag';
import StatTable from './StatTable/StatTable';

const Pokemon = ({ pokemon }) => {
  const { id, name, type, base } = pokemon;

  const preparedPokemonTypes = type.map((pokemonType, index) => (
    <TypeTag key={index} type={pokemonType} />
  ));

  return (
    <StyledBox key={id}>
      <a
        href={`https://bulbapedia.bulbagarden.net/wiki/${name.english}_(Pokémon)`}
      >
        <h1>{name.english}</h1>
        <TypeWrapper>{preparedPokemonTypes}</TypeWrapper>
        <img src={`../images/${id}.png`} alt='pokemon ' />
        <StatTable base={base} />
      </a>
    </StyledBox>
  );
};

export default Pokemon;
