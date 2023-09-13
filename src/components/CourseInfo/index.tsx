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
        <Description>Comprove sua especialização, destaque-se no mercado com certificado RevestPro com carga horária de 25 horas</Description>
      </InfoItem>
      </VisibilitySensor>
      <VisibilitySensor 
        partialVisibility 
        onChange={(isVisible: boolean | ((prevState: boolean) => boolean)) => setIsVisible(isVisible)}
      >
      <InfoItem>
        <Count>Material completo</Count>
        <Description> Apostila detalhada e kit surpresa brinde para os alunos </Description>
      </InfoItem>
      </VisibilitySensor>
      <VisibilitySensor 
        partialVisibility 
        onChange={(isVisible: boolean | ((prevState: boolean) => boolean)) => setIsVisible(isVisible)}
      >
      <InfoItem>
        <Count>3 dias</Count>
        <Description>Intensivos de imersão, aprendizado e prática direcionados para a excelência profissional no setor</Description>
      </InfoItem>
      </VisibilitySensor>
      <VisibilitySensor 
        partialVisibility 
        onChange={(isVisible: boolean | ((prevState: boolean) => boolean)) => setIsVisible(isVisible)}
      >
      <InfoItem>
        <Count>Uma chance única!</Count>
        <Description> Curso presencial em Maceió, Alagoas. <br></br> Nos dias 10, 11, 12  de Novembro (sexta, sábado e domingo)</Description>
      </InfoItem>
      </VisibilitySensor>
    </InfoWrapper>
  );
}

export default CourseInfo;
