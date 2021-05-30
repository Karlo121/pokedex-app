import React from 'react';
import { NavBarWrapper } from '../styles/NavBar.style';
import { Link } from 'react-router-dom';
import { StyledLink } from '../styles/Home.style';

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <NavBarWrapper>
      <StyledLink to='/' style={{ color: 'white' }}>
        <h1>Pokedex</h1>{' '}
      </StyledLink>
    </NavBarWrapper>
  );
};

export default NavBar;
