import styled from 'styled-components';

export const StyledBox = styled.div`
  border-radius: 10px;
  border: 1px solid black;
  flex-grow: 1;
  max-width: 350px;
  padding: 5px;
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
  border-radius: 3px;
  margin: 5px;
  flex: 1 1 0px;
  max-width: 90px;
`;

export const TypeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

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

export const StyledSearch = styled.input`
  width: 300px;
  display: table;
  margin: 0 auto;
  border: 2px solid #fe3c00;
  border-radius: 20px;
  margin-top: 10px;
  height: 40px;
  text-align: center;
`;

export const OuterWrapper = styled.div`
  width: 100%;
`;

export const SearchWrapper = styled.div`
  width: 400px;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const SearchHeader = styled.div`
  color: #fe3c00;
  font-size: 30px;
  font-weight: 600;
  margin: 0 auto;
  width: 300px;
  text-align: center;
`;
