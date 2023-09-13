import React from 'react';
import { HeroContainer, HeroTitle, HeroSubtitle, TitleContainer, LogoContainer, SubTitle,StyledLogoRevest} from './style';
import Logo from '../Logo';
import { StyledButton } from '../Button/style';

import LogoRevest from '../../../public/assets/images/RevestPro - LOGO 002.webp';
// Ajuste o caminho do arquivo conforme necessário



const HeroSection: React.FC = () => {
    return (
        <HeroContainer>
            <LogoContainer>
            <Logo/>

</LogoContainer>
            <TitleContainer>
            <HeroTitle>TORNE-SE UM <span> ESPECIALISTA EM POLIMENTO E VITRIFICAÇÃO !</span> </HeroTitle>
            <HeroSubtitle>Curso completo e detalhado sobre polimento e vitrificação.</HeroSubtitle>
            </TitleContainer>
           <StyledButton as="a" href="#course-origin"  >Garantir minha vaga!</StyledButton>
            <SubTitle>Aproveite, as vagas são limitadas!</SubTitle>
            <StyledLogoRevest src={LogoRevest} alt="Logo RevestPro" />
        </HeroContainer>
    );
}

export default HeroSection;
