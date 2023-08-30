import { createGlobalStyle } from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: #000;
    
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Segoe UI', Tahoma, 'Roboto',Geneva, Verdana, sans-serif;
        color: ${props => props.theme.colors.text};
    overflow-x: hidden;

    }
`;

export const lightTheme = {
  colors: {
      primary: "#F2A81D",
      secondary:  "#27383b",
      background: "#f4f4f4",
      text: "#243840",
      // ... outros
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  }
};

export const darkTheme = {
  colors: {
      primary: "#F2A81D",  // mantenha ou mude conforme necessário
      secondary: "#9ba7aa",  // por exemplo, uma versão mais clara
      background: "#0D0D0D",  // fundo escuro
      text: "#f4f4f4",  // texto claro
      // ... outros
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  }
};