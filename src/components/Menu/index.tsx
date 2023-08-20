import React from 'react';
import { StyledMenu, MenuItem } from './style';
import ThemeToggler from '../ThemeToggler';

const Menu: React.FC = () => {
  return (
    <StyledMenu>
      <MenuItem>Home</MenuItem>
      <MenuItem>Sobre Nós</MenuItem>
      <MenuItem>Serviços</MenuItem>
      <MenuItem>Galeria</MenuItem>
      <MenuItem>Contato</MenuItem>
      <ThemeToggler checked= {false} onChange={() => ("ola")} />
      {/* Adicione mais itens conforme necessário */}
    </StyledMenu>
  );
}

export default Menu;