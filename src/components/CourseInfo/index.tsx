import React from 'react';
import {Count,Description,InfoItem,InfoWrapper } from './style'

const CourseInfo: React.FC = () => {
  return (
    <InfoWrapper>
        
      <InfoItem>
        <Count>+300</Count>
        <Description>aulas (e contando) para ver e rever quando quiser</Description>
      </InfoItem>
      <InfoItem>
        <Count>+1.7k</Count>
        <Description>alunos matriculados e participando da comunidade</Description>
      </InfoItem>
      <InfoItem>
        <Count>7 dias</Count>
        <Description>de garantia incondicional para testar o curso</Description>
      </InfoItem>
      <InfoItem>
        <Count>Acesso vitalício</Count>
        <Description>para assistir sem pressa, no seu ritmo</Description>
      </InfoItem>
    </InfoWrapper>
  );
}

export default CourseInfo;
