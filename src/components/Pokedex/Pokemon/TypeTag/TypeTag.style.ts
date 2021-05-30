import styled from 'styled-components';

export const TypeBox = styled.div<{ color?: string }>`
  color: white;
  background-color: ${(props) => props.color || 'none'};
  flex-grow: 1;
  padding: 2px;
  font-weight: 700;
  border-radius: 3px;
  margin: 5px;
  flex: 1 1 0px;
  max-width: 90px;
`;
