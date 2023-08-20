import React from 'react';
import { HeroContainer, HeroTitle, HeroSubtitle, CTAButton } from './style';

const HeroSection: React.FC = () => {
    return (
        <HeroContainer>
            <HeroTitle>Transforme Seu Carro</HeroTitle>
            <HeroSubtitle>Tratamentos estéticos de ponta para dar ao seu veículo a aparência que ele merece.</HeroSubtitle>
            <CTAButton>Agende Agora</CTAButton>
        </HeroContainer>
    );
}

export default HeroSection;
