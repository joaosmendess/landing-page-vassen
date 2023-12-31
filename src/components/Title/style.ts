
import styled from "styled-components"

export const Title = styled.h1 `
font-size: 3rem;
    margin: 1rem; // ajuste conforme necessário
    background: linear-gradient(45deg, #F2A81D, #FF8C00); // Começa com o amarelo e transita para um laranja harmonioso
    color: transparent; // torna a cor do texto transparente para que o gradiente apareça
    background-clip: text; // aplica a imagem de fundo como cor do texto
    -webkit-background-clip: text; 
    text-shadow: 
        -1px -1px 0 #F2A81D,  
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000; 
  
    
`


export const TitleDiv = styled.div `
background: none;
margin-top: 30px;

`