import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: #f2f2f2;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: ${props => props.theme.colors.background};
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