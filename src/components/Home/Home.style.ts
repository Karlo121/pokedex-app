import styled, { keyframes } from 'styled-components';
import pokeball from '../../data/img/pokeball.png';
import { Link } from 'react-router-dom';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LinkHeader = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;

  h1 {
    text-decoration: none !important;
    color: white;
    font-size: 25px;
    margin-top: 40px;
    margin-left: 45px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledHeader = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: row;
  h1 {
    color: #fe3c00;
    font-size: 50px;
  }
`;

export const HomeLinkWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  margin: 6px;
`;

export const Circle = styled.div`
  float: left;
  width: 150px;
  height: 200px;
  margin: 20px;
  shape-outside: circle();
  clip-path: circle();
  background-image: url(${pokeball});
  background-size: cover;
  background-position: center center;
  :hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
    animation: ${rotate} 0.8s linear infinite;
  }
`;

export const OuterHomeWrap = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 30px;
  max-width: 850px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
