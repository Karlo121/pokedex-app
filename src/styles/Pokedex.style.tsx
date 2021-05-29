import styled from "styled-components";

export const StyledBox = styled.div`
  border-radius: 10px;
  border: 1px solid black;
  flex-grow: 1;
  max-width: 350px;
  padding: 10px;
  margin: 10px 5px 5px 10px;
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

export const TypeBox = styled.div`
  color: white;
  background-color: ${(props) => props.color};
  flex-grow: 1;
  padding: 2px;
  font-weight: 700;
  border-radius: 2px;
  margin: 5px;
  flex: 1 1 0px;
  max-width: 90px;
`;

export const TypeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
