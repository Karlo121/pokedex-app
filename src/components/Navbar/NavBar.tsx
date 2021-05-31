import React from 'react';
import { NavBarWrapper } from './NavBar.style';
import { StyledLink } from '../Home/Home.style';

const NavBar = () => {
  return (
    <NavBarWrapper>
      <StyledLink to='/home' style={{ color: 'white' }}>
        <h1>Pokedex</h1>
      </StyledLink>
    </NavBarWrapper>
  );
};

export default NavBar;
