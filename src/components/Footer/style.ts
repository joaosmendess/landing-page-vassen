import styled from 'styled-components';

export const StyledFooter = styled.footer`
    background-color: rgba(62, 58, 74, 0.2); 
    color: #f8f8f8;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 600px) {
        flex-direction: column;
        gap: 1rem;
    }
`;

export const DevInfo = styled.p`
    margin: 0;

    span {
        font-weight: bold;
    }
`;

export const SocialLink = styled.a`
    margin-left: 1rem;
    color: #f8f8f8;
    text-decoration: none;
    transition: color 0.3s;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
        margin-right: 0.5rem;  // Espaçamento entre o ícone e o texto
    }

    &:hover {
        color: #F2A81D;
    }

    &:first-child {
        margin-left: 0;
    }
`;
