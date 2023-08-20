import styled from 'styled-components';

export const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer; 
    transition: 0.2s ease-in-out;
    background-color: transparent;

    &:hover {
        transform: scale(1.1);
    }

    svg {
        stroke-width: 0.5px;
        
        background-color: transparent;

    
    }

`;
