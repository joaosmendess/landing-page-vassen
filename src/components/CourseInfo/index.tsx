import React from 'react';
import {Count,Description,InfoItem,InfoWrapper } from './style'

const CourseInfo: React.FC = () => {
  return (
    <InfoWrapper>
        
      <InfoItem>
        <Count>Certificado de Conclusão</Count>
        <Description>Comprove sua especialização em polimento e vitrificação e destaque-se no mercado</Description>
      </InfoItem>
      <InfoItem>
        <Count>Material completo</Count>
        <Description>repleto de orientações detalhadas e dicas especializadas </Description>
      </InfoItem>
      <InfoItem>
        <Count>3 dias</Count>
        <Description>intensivos de aprendizado e prática direcionados para a excelência profissional no setor</Description>
      </InfoItem>
      <InfoItem>
        <Count>Uma chance única!</Count>
        <Description> Sorteio de uma experiência de uma semana trabalhando na Vassen</Description>
      </InfoItem>
    </InfoWrapper>
  );
}

export default CourseInfo;
