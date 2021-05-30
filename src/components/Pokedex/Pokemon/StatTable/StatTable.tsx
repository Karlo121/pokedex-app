import { pokemonStats } from './StatTable.constants';
import { StatColumn, StatHeader, StatWrapper } from './StatTable.style';

const StatTable = ({ base }) => {
  const preparedColumns = pokemonStats.map((pokemonStat, index) => (
    <StatColumn key={index}>
      <StatHeader color={pokemonStat.color}>{pokemonStat.label}</StatHeader>
      <p>{base[pokemonStat.stat]}</p>
    </StatColumn>
  ));
  return <StatWrapper>{preparedColumns}</StatWrapper>;
};

export default StatTable;
