import styled from 'styled-components';
import { lightTheme } from '../../styles/GlobalStyles';
import Slider from "react-slick";

export const AboutUsContainer = styled.section`
    padding: 100px 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        padding: 60px 5%;  // Ajustando o padding
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
        margin-bottom: 30px; 
    }
    
    @media (max-width: 992px) {
        max-width: 100%; 
        margin-bottom: 30px; 
    }
`;

export const AboutUsCarousel = styled(Slider)`
    max-width: 47%;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s;

    & .slick-slide img {
        border-radius: 5px;
    }

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 768px), (max-width: 992px) {
        max-width: 100%;
        margin-bottom: 30px;
    }
`;

// Estilos para as setas, caso queira customizar
export const Arrow = styled.div`
    color: black;
    z-index: 1;
    cursor: pointer;
    // Adicione mais estilos conforme necessário
`;

export const AboutUsText = styled.div`
   max-width: 53%;
    padding-left: 11%; 

    @media (max-width: 768px) {
        padding-left: 0;
        max-width: 100%;
        margin: 20px 0;  // Espaço acima e abaixo do texto
    }
    @media (max-width: 992px) {
        padding-left: 0;
        max-width: 100%;
        margin: 20px 0; 
    }
`;

export const AboutUsHeader = styled.h2`
    font-size: 2.8rem;
    margin-bottom: 25px;  // Ligeiro ajuste no espaçamento
    color: ${lightTheme.colors.text};
    font-weight: 600;
`;

export const AboutUsDescription = styled.p`
    font-size: 1.2rem;
    line-height: 1.7;
    color: #555;
    text-align: justify;
    text-justify: inter-word;
    margin-bottom: 20px;  // Espaçamento no final para separar do próximo elemento
`;
