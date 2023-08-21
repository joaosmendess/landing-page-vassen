import styled from 'styled-components';
import { lightTheme } from '../../styles/GlobalStyles';

export const AboutUsContainer = styled.section`
    padding: 100px 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
     // Uma cor de fundo leve para distinguir a seção

    @media (max-width: 768px) {
        flex-direction: column; 
    }
`;

export const AboutUsImage = styled.img`
    max-width: 47%;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s;
    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 768px) {
        max-width: 100%; 
        margin-bottom: 20px; // Espaço adicional entre a imagem e o texto no mobile
    }
`;

export const AboutUsText = styled.div`
   max-width: 53%;
    padding-left: 11%; 

    @media (max-width: 768px) {
        padding-left: 0;
        max-width: 100%; 
    }
`;

export const AboutUsHeader = styled.h2`
    font-size: 2.8rem;  // Tamanho maior para destaque
    margin-bottom: 20px;
    color: ${lightTheme.colors.text};  // Cor mais escura para destaque
    font-weight: 600;  // Mais negrito
`;

export const AboutUsDescription = styled.p`
    font-size: 1.2rem;  // Tamanho ligeiramente maior para legibilidade
    line-height: 1.7;   // Espaçamento de linha maior para legibilidade
    color: #555;
    text-align: justify;  // Justificar o texto
    text-justify: inter-word;
`;
