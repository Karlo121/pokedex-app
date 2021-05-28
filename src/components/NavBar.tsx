import React from "react";
import { NavBarWrapper } from "../styles/NavBar.style";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <NavBarWrapper>
      <h1>Pokedex</h1>
    </NavBarWrapper>
  );
};

export default NavBar;
