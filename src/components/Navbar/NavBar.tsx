import React from 'react';
import { NavBarWrapper } from './NavBar.style';
import { StyledLink } from '../Home/Home.style';

const NavBar = () => {
  return (
    <NavBarWrapper>
      <StyledLink to='/pokedex-app' style={{ color: 'white' }}>
        <h1>Pokédex</h1>
      </StyledLink>
    </NavBarWrapper>
  );
};

export default NavBar;
