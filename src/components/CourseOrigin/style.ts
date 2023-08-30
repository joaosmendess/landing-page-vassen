import styled from "styled-components";

export const SectionContainer = styled.section`
    padding: 2rem 0;
    background-color: none; // Altere a cor de fundo conforme necessário
    text-align: center;
    
    
`;

export const Title = styled.h2`
    font-size: 2rem;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #F2A81D, #FF8C00); // Começa com o amarelo e transita para um laranja harmonioso
    color: transparent; // torna a cor do texto transparente para que o gradiente apareça
    background-clip: text; // aplica a imagem de fundo como cor do texto
    -webkit-background-clip: text; // necessário para garantir compatibilidade com navegadores baseados em WebKit
`;

export const Description = styled.p`
      font-size: 1.2rem;
    line-height: 1.7;
    color: #f8f8f8;
    line-height: 150%;
    font-family: Poppins, "Segoe UI", Verdana, Arial, sans-serif;
    text-align: justify;
    text-justify: inter-word;
    max-width: 800px;
    margin: 0 auto;

    >span {
        font-weight: bold;
  color: #F2A81D;
    }
`;