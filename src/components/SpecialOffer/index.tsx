import React from 'react';
import { Container, Installment, NewPrice, CatchyText, BenefitsList, PriceDetails,StyledLi,StyledUl } from './style';
import BuyButton from '../BuyButton';

interface Props {
  originalPrice: number;
  newPrice: number;
  installments: number;
}

const SpecialOffer: React.FC<Props> = ({  newPrice, installments }) => {
  return (
    <Container>
      <BenefitsList>
        <CatchyText>OK, MAS... <span>QUANTO CUSTA TUDO ISSO?</span></CatchyText>
        <StyledUl >

<StyledLi >Acesso vitalício</StyledLi>
<StyledLi >Acesso vitalício</StyledLi >
<StyledLi >Acesso vitalício</StyledLi >
<StyledLi >Acesso vitalício</StyledLi >
<StyledLi >Acesso vitalício</StyledLi >
<StyledLi >Acesso vitalício</StyledLi>

        </StyledUl>
      </BenefitsList>

      <PriceDetails>
        
        <Installment>GARANTA SUA VAGA POR APENAS <span>
        {installments}x de</span> <strong>R${(newPrice / installments).toFixed(2)}
            </strong> </Installment>
        <NewPrice> ou R${newPrice} à vista</NewPrice>
        <BuyButton />
      </PriceDetails>
    </Container>
  );
};

export default SpecialOffer;
