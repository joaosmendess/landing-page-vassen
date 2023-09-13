import styled from 'styled-components';

export const StyledLogo = styled.img`
    max-width: 300px;  /* Tamanho fixo, mas você pode ajustar conforme necessário */
    /* Espaço em torno do logo */
  display: flex;
  transition: transform 0.3s ease;  /* Transição suave para efeitos de hover */

  &:hover {
    transform: scale(1.05);  /* Efeito de zoom quando passa o mouse por cima */

  };
  cursor: pointer;
  background: none;
  
`;