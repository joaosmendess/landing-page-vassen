import styled from 'styled-components';

export const CarouselWrapper = styled.div`
    max-width: 47%; 

    @media (max-width: 428px) {
        max-width: 70%;
    }

    @media (max-width: 768px) {
        max-width: 100%;
    }

    @media (max-width: 992px) {
        max-width: 100%;
    }
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 400px;

    @media (max-width: 428px) {
        height: 250px; // Ajuste a altura aqui conforme necessário para dispositivos pequenos
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: transform 0.3s;

        &:hover {
            transform: scale(1.05);
        }
    }
`;
