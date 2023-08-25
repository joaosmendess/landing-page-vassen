import styled from 'styled-components';
interface StyledMenuProps {
  menuOpen: boolean;
}
export const StyledMenu = styled.ul<StyledMenuProps>`
  display: ${({ menuOpen }) => (menuOpen ? 'flex' : 'none')};
  
  flex-direction: column;
  gap: 10px;
  list-style-type: none;
  background: #111827;
  padding: 10px;
  position: absolute;
  top: 100px;  // Ajuste conforme a altura do seu header
  right: 0;
  width: 200px;  // Ajuste conforme sua necessidade
  z-index: 999;  // Garanta que apareça acima de outros elementos
  border-radius: 0 0 5px 5px;
  

  @media (min-width: 768px) { // Por exemplo, para telas maiores que 768px
    display: flex;
    flex-direction: row;
    background: none;
    position: static;
    width: auto;
    border-radius: 0;
  }
`;



export const MenuItem = styled.li`
  cursor: pointer;
  color:#F2A81D;  // Cor de texto padrão do tema

&:hover {
  color: #f2f2f2;  // Cor primária do tema quando o mouse está sobre o item
}
  font-weight: bold;
  background: none;
`;