// components/Header.tsx

import React from 'react';
import Logo from '../Logo';
import Menu from '../Menu';
import { StyledHeader } from './style';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      
      <Logo />
      <Menu />
    </StyledHeader>
  );
}

export default Header;
