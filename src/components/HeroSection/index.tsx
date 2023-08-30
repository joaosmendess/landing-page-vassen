import React from 'react';
import { HeroContainer, HeroTitle, HeroSubtitle, TitleContainer, LogoContainer, SubTitle } from './style';
import Logo from '../Logo';
import { StyledButton } from '../Button/style';
// Ajuste o caminho do arquivo conforme necessário



const HeroSection: React.FC = () => {
    return (
        <HeroContainer>
            <LogoContainer>
            <Logo/>

</LogoContainer>
            <TitleContainer>
            <HeroTitle>TORNE-SE UM <span> ESPECIALISTA EM POLIMENTO E VITRIFICAÇÃO !</span> </HeroTitle>
            <HeroSubtitle>O melhor e mais completo curso sobre polimento e vitrificação do mercado.</HeroSubtitle>
            </TitleContainer>
           <StyledButton as="a" href="#course-origin"  >Garantir minha vaga!</StyledButton>
            <SubTitle>Aproveite, as vagas são limitadas!</SubTitle>
        </HeroContainer>
    );
}

export default HeroSection;
