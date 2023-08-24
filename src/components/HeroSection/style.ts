import styled from 'styled-components';


export const HeroContainer = styled.div`
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 20%), url('/assets/images/CARRO.jpg');
    background-size: cover;
    background-position: center;
    height: 110vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 20px;
    width: 100vw;
    margin-top: 0; // Certifique-se de que não há margens indesejadas
`;
export const TitleContainer= styled.div `
  background: none;
  margin-top: 15px; // Certifique-se de que não há margens indesejadas

  &::before, &::after { 
    content: '';
    display: block;
    width: 200px;
    border-bottom: 10px solid #F2A81D;
    margin: 30px 400px;
  }

  &::before {
    border-top: 10px solid #F2A81D;
    border-bottom: none;
    width: 200px;
  
  }
`;

export const LogoContainer = styled.div `

margin-bottom: 35px;
background: none;
`

export const HeroTitle = styled.h2`
     color: white;
     font-family: 'Roboto', sans-serif;
     background: none;
    font-weight: bold;
    letter-spacing: 3px;
    
    
`;

export const HeroSubtitle = styled.h1`
    font-size: 3rem;
    color: #fff;  // Branco, ajuste conforme a imagem de fundo
    background:none;
    font-family: 'Roboto', sans-serif;
    color: #F2A81D;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
    
    @media (max-width: 768px) {
        font-size: 1rem;
        word-wrap: break-word;

    }
    @media (  min-width: 768px) {
        font-size: 2rem;
        word-wrap: break-word;

    }


font-weight: bold;
    margin-bottom: 45px;
`;

export const CTAButton = styled.button`
    font-size: 1.1rem;
    padding: 12px 25px;
    color: #fff;
    background-color: #F8CF2C;
    border: none;
    border-radius: 25px; // Arredondamento maior para um look moderno
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); // Adiciona uma sombra sutil
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s; // Adicionado transform para a transição
    margin-bottom: 10px;
    outline: none; // Remover contorno ao focar no botão
    letter-spacing: 1px; // Espaçamento entre as letras para uma aparência premium
    font-weight: bold; // Torná-lo um pouco mais ousado
     // Letras maiúsculas para destaque

    &:hover {
        background-color: #27383b;
        transform: translateY(-2px); // Move o botão um pouco para cima quando pairado
    }

    &:active {
        transform: translateY(1px); // Move o botão um pouco para baixo quando clicado
    }
`;

