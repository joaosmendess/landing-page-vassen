import React from 'react';
import { Container, Installment, NewPrice, CatchyText, BenefitsList, PriceDetails,StyledLi,StyledUl,WhatsappButton,StyledLogoVassen, StyledLogoRevest,LogoDiv } from './style';
import LogoRevest from '../../../public/assets/images/RevestPro - LOGO 002.webp';
import VassenLogo from '../../../public/assets/logo/vassendark.png';

interface Props {
  originalPrice: number;
  newPrice: number;
  installments: number;
}

const SpecialOffer: React.FC<Props> = ({  newPrice, installments }) => {
  function formatPrice(value: number): string {
    return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  

  const whatsappNumber = "5582991200205"; // Inclua o código do país (55 para Brasil).
  const initialMessage = encodeURIComponent("Olá! Quero me inscrever para o curso e garantir minha certificação RevestPro!");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${initialMessage}`;



  return (
    <Container>
      <BenefitsList>
        <CatchyText>OK, MAS... <span>QUANTO CUSTA TUDO ISSO?</span></CatchyText>
        <StyledUl>
          <StyledLi>Técnicas avançadas</StyledLi>
          <StyledLi>Brindes exclusivos</StyledLi>
          <StyledLi>Mão na massa! Passo a passo de como polir e vitrificar</StyledLi>
          <StyledLi>Conhecimento geral sobre estética</StyledLi>
        
          <StyledLi>Certificado de conclusão</StyledLi>
        </StyledUl>
      </BenefitsList>

      <PriceDetails>
        <Installment>GARANTA SUA VAGA POR APENAS <span>{installments}x de</span><strong>R${formatPrice(newPrice / installments)}</strong></Installment>
        <NewPrice> ou R$727,00 à vista</NewPrice>
       
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <WhatsappButton>Quero me inscrever agora!</WhatsappButton>
        </a>
        <LogoDiv>
        <StyledLogoVassen src={VassenLogo} alt="Logo Vassen" />
      
        <StyledLogoRevest src={LogoRevest} alt="Logo RevestPro" />
        </LogoDiv>
        
     
      </PriceDetails>
    </Container>
  );
};

export default SpecialOffer;
