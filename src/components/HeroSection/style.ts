import styled from 'styled-components';

export const HeroContainer = styled.div`
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%), url('/assets/images/BMW-FOTO.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: baseline;
    text-align: center;
    padding: 0 20px;
    width: 100vw;
    margin: 0; // Certifique-se de que não há margens indesejadas
`;

export const HeroTitle = styled.h1`
     color: white;
     text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
     font-family: 'Roboto', sans-serif;
    background: none;
    
    // ... outros estilos para o texto.
`;

export const HeroSubtitle = styled.h2`
    font-size: 1.5rem;
    color: #fff;  // Branco, ajuste conforme a imagem de fundo
    background:none;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 35px;
`;

export const CTAButton = styled.button`
    font-size: 1rem;
    padding: 10px 20px;
    color: #fff;
    background-color: ${(props) => props.theme.colors.primary};  // Cor primária definida no seu tema
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-bottom: 10px;

    &:hover {
        background-color: ${(props) => props.theme.colors.secondary};  // Cor secundária definida no seu tema
    }
`;
