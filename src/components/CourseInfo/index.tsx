import React, {useState} from 'react';
import {Count,Description,InfoItem,InfoWrapper } from './style'
import VisibilitySensor from 'react-visibility-sensor'

const CourseInfo: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <InfoWrapper>
         <VisibilitySensor 
        partialVisibility 
        onChange={(isVisible: boolean | ((prevState: boolean) => boolean)) => setIsVisible(isVisible)}
      >
      <InfoItem isVisible= {isVisible}> 
        <Count>Certificado de Conclusão</Count>
        <Description>Comprove sua especialização em polimento e vitrificação e destaque-se no mercado</Description>
      </InfoItem>
      </VisibilitySensor>
      <VisibilitySensor 
        partialVisibility 
        onChange={(isVisible: boolean | ((prevState: boolean) => boolean)) => setIsVisible(isVisible)}
      >
      <InfoItem>
        <Count>Material completo</Count>
        <Description>repleto de orientações detalhadas e dicas especializadas </Description>
      </InfoItem>
      </VisibilitySensor>
      <VisibilitySensor 
        partialVisibility 
        onChange={(isVisible: boolean | ((prevState: boolean) => boolean)) => setIsVisible(isVisible)}
      >
      <InfoItem>
        <Count>2 dias</Count>
        <Description>intensivos de aprendizado e prática direcionados para a excelência profissional no setor</Description>
      </InfoItem>
      </VisibilitySensor>
      <VisibilitySensor 
        partialVisibility 
        onChange={(isVisible: boolean | ((prevState: boolean) => boolean)) => setIsVisible(isVisible)}
      >
      <InfoItem>
        <Count>Uma chance única!</Count>
        <Description> Sorteio de uma experiência de uma semana trabalhando na Vassen</Description>
      </InfoItem>
      </VisibilitySensor>
    </InfoWrapper>
  );
}

export default CourseInfo;
