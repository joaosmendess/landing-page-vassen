// components/Header.styles.ts

import styled from 'styled-components';
import { lightTheme } from '../../styles/GlobalStyles';

interface IStyledHeaderProps {
  scrolled: boolean;
}

export const StyledHeader = styled.header<IStyledHeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; 
  padding: 10px 20px;
  background: ${({ scrolled }) => scrolled ? lightTheme.colors.background : 'transparent'};
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: ${({ scrolled }) => scrolled ? '0px 3px 10px rgba(0, 0, 0, 0.2)' : 'none'};
  backdrop-filter: ${({ scrolled }) => scrolled ? 'blur(5px)' : 'none'};
  

`;
