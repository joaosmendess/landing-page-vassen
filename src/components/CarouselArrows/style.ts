import styled from 'styled-components';
import { lightTheme } from '../../styles/GlobalStyles';

export const Arrow = styled.div`
     display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    // Um pouco transparente
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        color: ${lightTheme.colors.primary}; // Amarelo do seu tema
        
    }

    & > * {  // Estilizando o ícone diretamente
        font-size: 20px;
    }
`;

export const NextArrowStyled = styled(Arrow)`
    right: 10px;
`;

export const PrevArrowStyled = styled(Arrow)`
    left: 10px;
`;
