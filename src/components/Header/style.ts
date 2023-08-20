// components/Header.styles.ts

import styled from 'styled-components';
import { lightTheme } from '../../styles/GlobalStyles';

interface IStyledHeaderProps {
  scrolled: boolean;
}

export const StyledHeader = styled.header<IStyledHeaderProps> `
  display: flex;
  justify-content: space-between;
  align-items: center;
 
  position: fixed;
  
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000; // para garantir que fique acima de outros elementos
    background: ${({scrolled,}) => scrolled ? lightTheme.colors.background : 'transparent'};
  
`;
