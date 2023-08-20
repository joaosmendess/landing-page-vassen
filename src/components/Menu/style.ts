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
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
  font-weight: bold;
  background: none;

`;