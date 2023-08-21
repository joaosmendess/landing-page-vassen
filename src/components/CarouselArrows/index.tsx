// components/CarouselArrows.tsx
import React from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { NextArrowStyled, PrevArrowStyled } from './style';

interface ArrowProps {
    direction: "next" | "prev";
    onClick?: () => void;
}

const CarouselArrow: React.FC<ArrowProps> = ({ direction, onClick }) => {
    if (direction === "next") {
        return (
            <NextArrowStyled onClick={onClick}>
                <FaArrowRight />
            </NextArrowStyled>
        );
    }
    return (
        <PrevArrowStyled onClick={onClick}>
            <FaArrowLeft />
        </PrevArrowStyled>
    );
}

export default CarouselArrow;
