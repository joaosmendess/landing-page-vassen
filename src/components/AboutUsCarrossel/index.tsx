import React from 'react';
import Slider from "react-slick";

import CarouselArrow from '../CarouselArrows';

import  { ImageWrapper, CarouselWrapper } from './style';

const AboutUsCarousel: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        nextArrow: <CarouselArrow direction="next" />,
    prevArrow: <CarouselArrow direction="prev" />,
    };

    return (
        <CarouselWrapper>
            <Slider {...settings}>
                <ImageWrapper>
                    <img src="/assets/images/FUNCIONARIO-VASSEN (1).jpg" alt="Funcionários da Vassen" />
                </ImageWrapper>
                <ImageWrapper>
                    <img src="/assets/images/DONO (1).jpg" alt="Funcionários da Vassen" />
                </ImageWrapper>
            </Slider>
        </CarouselWrapper>
    );
}

export default AboutUsCarousel;
