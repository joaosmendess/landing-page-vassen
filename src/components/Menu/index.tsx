import React, {} from 'react';
import { StyledMenu, MenuItem } from './style';

interface MenuProps {
  menuOpen: boolean;
}
const Menu: React.FC<MenuProps> = ({ menuOpen }) => {
  return (
    <StyledMenu menuOpen={menuOpen}>
      <MenuItem>Home</MenuItem>
      <MenuItem>Sobre Nós</MenuItem>
      <MenuItem>Serviços</MenuItem>
      <MenuItem>Galeria</MenuItem>
      <MenuItem>Contato</MenuItem>
    </StyledMenu>
  );
}


export default Menu;