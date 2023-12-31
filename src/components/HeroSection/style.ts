import styled ,{keyframes} from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;
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
  animation: ${slideIn} 0.7s forwards;

  &::before, &::after { 
    content: '';
    display: block;
    margin: 20px auto;
    max-width: 20%;

    border-bottom: 5px solid #F2A81D;
  }

  &::before {
    border-top: 5px solid #F2A81D;
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
    animation: ${slideIn} 0.8s forwards;

display: flex;
justify-content: center;
background: none;
margin-top:0px;

@media (max-width: 768px) {
      
     
      
     margin-top: 65px;
   
  
    }
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
      font-size: 18px;
      overflow-wrap: break-word;

        

    }

    @media (  min-width: 768px) {
        font-size: 2rem;
       

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
      font-size: 15px;
      overflow-wrap: break-word;
      

  // Ajuste conforme a necessidade


        

    }
    @media (  min-width: 768px) {
        font-size: 1.5rem;
        word-wrap: break-word;

    }


    margin-bottom: 40px;
`;



export const SubTitle = styled.small `
 color: #f8f8fa; 
 background: none;
 font-size: 1.2rem;
 opacity: 0.6;
 font-family: Poppins, "Segoe UI", Verdana, Arial, sans-serif;
margin-top: 10px;
font-weight: 600;    
animation: ${slideIn} 0.8s forwards;



`

export const StyledLogoRevest = styled.img`
     max-width: 130px; // Ajuste conforme necessário
    max-height: 130px; // Ajuste conforme necessário
    height: auto;
    margin-top: 40px;
    // adicione mais estilos conforme a necessidade
    transition: transform 0.3s ease;  /* Transição suave para efeitos de hover */

&:hover {
  transform: scale(1.05);  /* Efeito de zoom quando passa o mouse por cima */

};
cursor: pointer; 
animation: ${slideIn} 0.8s forwards;

`;