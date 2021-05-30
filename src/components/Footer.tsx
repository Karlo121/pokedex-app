import React from 'react';
import { StyledFooter } from '../styles/Footer.style';

interface NavBarProps {}

const Footer: React.FC<NavBarProps> = ({}) => {
  return (
    <StyledFooter>
      <h1>Karlo Balon</h1>
      <p>0135252562</p>
      <p>Tehničko Veleučilište Zagreb</p>
      <p>2021</p>
    </StyledFooter>
  );
};

export default Footer;
