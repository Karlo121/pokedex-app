import styled from 'styled-components';

export const StatWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StatColumn = styled.h1`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  width: 100%;
`;

export const StatHeader = styled.h1`
  color: ${(props) => props.color};
  font-weight: 800;
  font-size: 18px;
  font-family: 'Arial';
`;
