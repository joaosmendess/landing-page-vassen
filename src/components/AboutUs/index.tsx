import React from "react";
import {
  AboutUsContainer,
  AboutUsDescription,
  AboutUsHeader,
  AboutUsImage,
  AboutUsText,
} from "./style";

const AboutUsSection: React.FC = () => (
  <AboutUsContainer>
    <AboutUsImage
      src="/assets/images/FUNCIONARIO-VASSEN (1).jpg"
      alt="Sobre nós"
    />
    <AboutUsText>
      <AboutUsHeader>Sobre Nós</AboutUsHeader>
      <AboutUsDescription>
        A Vassen Car Care foi fundada em 2018 com o objetivo de nos dedicar a
        proporcionar aos nossos clientes o melhor em estética automotiva. Nossa
        paixão por carros e compromisso com a excelência nos tornou uma escolha
        confiável em Maceió AL. Ao longo dos anos, nos estabelecemos como uma
        referência no mercado de estética automotiva, trazendo sempre inovações
        e o mais alto padrão de qualidade em nossos serviços.
      </AboutUsDescription>
    </AboutUsText>
  </AboutUsContainer>
);

export default AboutUsSection;
