// components/Header.styles.ts

import styled from 'styled-components';


interface IStyledHeaderProps {
  scrolled: boolean;
  visible: boolean;
}

const shouldForwardProp = (prop: string) => !['scrolled', 'visible'].includes(prop);



export const StyledHeader = styled.header.withConfig({
  shouldForwardProp
})<IStyledHeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height: 100px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; 
  padding: 10px 3px;
  background: #111827;
  transition: top 0.3s ease-in-out;
will-change: top;

  top: ${({ visible }) => (visible ? "0" : "-100%")};
  box-shadow: ${({ scrolled }) => scrolled ? '0px 3px 10px rgba(0, 0, 0, 0.2)' : 'none'};
  backdrop-filter: ${({ scrolled }) => scrolled ? 'blur(5px)' : 'none'};
  border-bottom: #F2A81D 3px solid;
`;

export const MenuButton = styled.button`
   display: block;
   background-color: transparent; // Aqui, definimos como transparente
   border: none;
   cursor: pointer;
   color: #F2A81D; // Cor do ícone
   font-size: 24px; // Tamanho do ícone
   transition: color 0.3s; // Transição suave de cor
   padding: 10px;  // Espaço ao redor do ícone para torná-lo mais acessível ao toque
   &:hover {
    color: #f2f2f2;
  }
   margin-right: 15px;
   @media (min-width: 768px) {
     display: none;
   }
`;
