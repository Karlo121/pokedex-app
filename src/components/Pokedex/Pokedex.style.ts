import styled from 'styled-components';

export const PokedexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const OuterWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;
