import React from 'react';
import { Container, Installment, NewPrice, CatchyText, BenefitsList, PriceDetails,StyledLi,StyledUl,WhatsappButton } from './style';

interface Props {
  originalPrice: number;
  newPrice: number;
  installments: number;
}

const SpecialOffer: React.FC<Props> = ({  newPrice, installments }) => {
  function formatPrice(value: number): string {
    return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  

  const whatsappNumber = "5582999259103"; // Inclua o código do país (55 para Brasil).
  const initialMessage = encodeURIComponent("Olá! Quero me inscrever para o evento.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${initialMessage}`;



  return (
    <Container>
      <BenefitsList>
        <CatchyText>OK, MAS... <span>QUANTO CUSTA TUDO ISSO?</span></CatchyText>
        <StyledUl>
          <StyledLi>Técnicas avançadas</StyledLi>
          <StyledLi>Brindes exclusivos</StyledLi>
          <StyledLi>Mão na massa! Guia prático de como polir</StyledLi>
          <StyledLi>Conhecimento geral sobre estética</StyledLi>
          <StyledLi>Sorteio de uma semana de semana de experiência na nosssa loja!</StyledLi>
          <StyledLi>Certificado de conclusão</StyledLi>
        </StyledUl>
      </BenefitsList>

      <PriceDetails>
        <Installment>GARANTA SUA VAGA POR APENAS <span>{installments}x de</span><strong>R${formatPrice(newPrice / installments)}</strong></Installment>
        <NewPrice> ou R${newPrice} à vista</NewPrice>
       
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <WhatsappButton>Quero me inscrever agora!</WhatsappButton>
        </a>
      </PriceDetails>
    </Container>
  );
};

export default SpecialOffer;
