import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1140px;
  margin: 0  ;
  padding: 0 ;
 
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 ;
`;

interface ColProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export const Col = styled.div<ColProps>`
  padding: 0 ;
  flex: ${(props) => (props.xs ? `0 0 ${props.xs * 8.33}%` : '0 0 100%')};
  max-width: ${(props) => (props.xs ? `${props.xs * 8.33}%` : '100%')};

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    flex: ${(props) => (props.sm ? `0 0 ${props.sm * 8.33}%` : '0 0 100%')};
    max-width: ${(props) => (props.sm ? `${props.sm * 8.33}%` : '100%')};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex: ${(props) => (props.md ? `0 0 ${props.md * 8.33}%` : '0 0 100%')};
    max-width: ${(props) => (props.md ? `${props.md * 8.33}%` : '100%')};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    flex: ${(props) => (props.lg ? `0 0 ${props.lg * 8.33}%` : '0 0 100%')};
    max-width: ${(props) => (props.lg ? `${props.lg * 8.33}%` : '100%')};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
  
    
    flex: ${(props) => (props.xl ? `0 0 ${props.xl * 8.33}%` : '0 0 100%')};
    max-width: ${(props) => (props.xl ? `${props.xl * 8.33}%` : '100%')};
  }
`;
