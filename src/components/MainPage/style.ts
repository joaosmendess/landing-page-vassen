import styled from "styled-components";


export const Container = styled.div `

display: flex;
    flex-direction: column; // Adicionado para organizar os elementos em uma coluna
    align-items: center;
    justify-content: center; // Isto vai centralizar seu título verticalmente

    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 20%), url('/assets/images/JOAO-VITRIFICANDO-.webp');
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100vw;
    margin: 0;
    @media (max-width: 768px) {
        height: 140vh;

        

    } 
   

`


export const ModuleContainer = styled.div `

background: none;
`
