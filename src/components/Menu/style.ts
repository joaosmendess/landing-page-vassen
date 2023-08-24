import styled from 'styled-components';

export const StyledMenu = styled.ul`
  display: flex;
  gap: 10px;
  list-style-type: none;
  background: none;
  padding:0  10px;
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