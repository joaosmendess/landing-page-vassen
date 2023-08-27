import styled from 'styled-components';


export const HeroContainer = styled.div`
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 20%), url('/assets/images/CARRO.webp');
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: center;
    text-align: center;
  border: none;
  
    width: 100vw;
    margin: 0; 
    
    // Certifique-se de que não há margens indesejadas
`;

export const TitleContainer= styled.div `
  background: none;


  &::before, &::after { 
    content: '';
    display: block;
    margin: 20px auto;
    max-width: 20%;

    border-bottom: 10px solid #F2A81D;
  }

  &::before {
    border-top: 10px solid #F2A81D;
    border-bottom: none;
    width:200px;
  
  }

  @media (max-width: 768px) {
      
    &::before, &::after { 
    
   
    max-width: 50%;

  }

  &::before {
    
    width:50%;
  
  }
        

    }
`;

export const LogoContainer = styled.div `

display: flex;
justify-content: center;
background: none;
`

export const HeroTitle = styled.h1`
     color: white;
     font-family: Poppins, "Segoe UI", Verdana, Arial, sans-serif;
     background: none;
    font-weight: bold;
    font-size: 48px;
    letter-spacing: -0.05em;
    font-weight: 700;

    >span {
      display: block;
    background: linear-gradient(45deg, #F2A81D, #FF8C00); // Começa com o amarelo e transita para um laranja harmonioso
    color: transparent; // torna a cor do texto transparente para que o gradiente apareça
    background-clip: text; // aplica a imagem de fundo como cor do texto
    -webkit-background-clip: text; // necessário para garantir compatibilidade com navegadores baseados em WebKit
  }
  @media (max-width: 768px) {
      font-size: 20px;
      overflow-wrap: break-word;

        

    }
    
    
`;

export const HeroSubtitle = styled.h2`
    color: #f8f8fa;  // Branco, ajuste conforme a imagem de fundo
    background:none;
    font-family: Poppins, "Segoe UI", Verdana, Arial, sans-serif;
    opacity: 0.6;
    font-size: 1.125rem;
    font-weight: normal;    
    @media (max-width: 768px) {
      font-size: 13px;
      overflow-wrap: break-word;
      

  // Ajuste conforme a necessidade


        

    }
    @media (  min-width: 768px) {
        font-size: 2rem;
        word-wrap: break-word;

    }


    margin-bottom: 40px;
`;

export const CTAButton = styled.button`
  padding: 12px 25px;
  color: #091013;
  background: linear-gradient(45deg, #F8CF2C, #FF8C00); // Gradiente do amarelo para o laranja
  border: none;
  border-radius: 25px; 
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); 
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s; 
  outline: none; 
  letter-spacing: 1px; 
  font-family: Poppins, "Segoe UI", Verdana, Arial, sans-serif;
  font-size: 1.125rem;
  font-weight: 600; 
  margin-top: 20px;

  &:hover {
      background: linear-gradient(45deg, #FF8C00, #F8CF2C); // Inverte o gradiente quando pairado
      transform: translateY(-2px); 
  }

  &:active {
      transform: translateY(1px); 
  }
`;

export const SubTitle = styled.small `
 color: #f8f8fa; 
 background: none;
 font-size: 1rem;
 opacity: 0.6;
 font-family: Poppins, "Segoe UI", Verdana, Arial, sans-serif;
margin-top: 10px;
font-weight: 600;    


`