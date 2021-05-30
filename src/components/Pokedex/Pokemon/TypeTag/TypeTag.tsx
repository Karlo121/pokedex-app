import { getTagColorByType } from './TypeTag.helper';
import { TypeBox } from './TypeTag.style';

const TypeTag = ({ type }) => {
  return <TypeBox color={getTagColorByType(type)}>{type}</TypeBox>;
};

export default TypeTag;
