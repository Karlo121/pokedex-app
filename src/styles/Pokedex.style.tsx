import styled from "styled-components";

export const StyledBox = styled.div`
  border-radius: 10px;
  border: 1px solid black;
  flex-grow: 1;
  max-width: 350px;
  padding: 10px;
  margin: 5px 10px 10px 5px;
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

export const PokedexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
