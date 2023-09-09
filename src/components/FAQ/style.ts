import styled from 'styled-components';

export const FAQContainer = styled.div`
    padding: 2rem;
    background: none;
    border-radius: 5px;
    margin: 2rem auto;  // isso centralizará o contêiner na página
    max-width: 800px;
    width: 100%;  // ocupar toda a largura disponível
    box-sizing: border-box; 
   // para considerar padding no cálculo da largura

    @media (max-width: 820px) {
        padding: 1rem;
    }
`;

export const QuestionBox = styled.div`
    background-color: rgba(62, 58, 74, 0.2); 
    padding: 1rem;
    border-radius: 5px;
    margin-bottom: 1rem;
    border: 2px solid rgb(62, 58, 74);

    @media (max-width: 820px) {
        padding: 0.8rem;
    }
`;

export const Question = styled.h4`
    color: #f8f8f8;
    font-weight: bold;
    margin-bottom: 10px;
    font-family: Poppins, "Segoe UI", Verdana, Arial, sans-serif;
    border-bottom: 2px solid #F2A81D;
    padding-bottom: 10px;
`;

export const Answer = styled.p`
    color: #f8f8f8;
    margin-bottom: 10px;
    font-family: Poppins, "Segoe UI", Verdana, Arial, sans-serif;
`;

export const MapEmbed = styled.iframe`
    border: none;
    width: 100%;
    height: 300px;
    margin-top: 20px;
    border-radius: 5px;

    @media (max-width: 820px) {
        height: 250px;
    }
`;
