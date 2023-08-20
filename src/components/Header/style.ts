// components/Header.styles.ts

import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
 
  position: fixed;
  
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000; // para garantir que fique acima de outros elementos
    background: none;
  
`;
