import styled from 'styled-components';

export const StyledBox = styled.div`
  border-radius: 10px;
  border: 2px solid #db4242;
  flex-grow: 1;
  max-width: 350px;
  padding: 5px;

  text-align: center;
  justify-content: space-evenly;
  :hover {
    color: white;
    background-color: #db4242;
  }

  a {
    text-decoration: none;
    color: black;
    :hover {
      color: white;
    }
  }
  img {
    width: 200px;
  }
  p {
    margin-bottom: 10px;
  }
`;

export const TypeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PokemonLink = styled.a`
  text-decoration: none;
  color: black;
  margin: 5px;
`;
