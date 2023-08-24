import React from 'react';
import { HeroContainer, HeroTitle, HeroSubtitle, TitleContainer, LogoContainer,CTAButton } from './style';
import Logo from '../Logo';

const HeroSection: React.FC = () => {
    return (
        <HeroContainer>
            <TitleContainer>
            <HeroTitle>VASSEN CAR CARE</HeroTitle>
            <HeroSubtitle>WORKSHOP DE POLIMENTO & VITRIFICAÇÃO</HeroSubtitle>
            </TitleContainer>
            <LogoContainer>
            <Logo/>

            </LogoContainer>
            <CTAButton>Agende Agora!</CTAButton>
        </HeroContainer>
    );
}

export default HeroSection;
