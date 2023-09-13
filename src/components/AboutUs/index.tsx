import React from "react";
import {
  AboutUsContainer,
  AboutUsDescription,
  AboutUsHeader,
  AboutUsText,
} from "./style";
import AboutUsCarousel from "../AboutUsCarrossel";

const AboutUsSection: React.FC = () => (
  <AboutUsContainer>
    <AboutUsCarousel />
    <AboutUsText>
      <AboutUsHeader>Sobre a Vassen</AboutUsHeader>
      <AboutUsDescription>
        Criada em Março de 2018, em formato Delivery, do alemão Wasser (água ou
        lavar), nasceu a Vassen. Buscando elevar o padrão dos serviços e
        atendimentos do setor automotivo. Sempre inovando com serviços
        inovadores e com excelência na cidade de Maceió. Iniciado apenas com
        lavagem a seco, hoje atua na estética automotiva com polimentos,
        higienizações, lavagem, envelopamento,PPF e cursos.
      </AboutUsDescription>
    </AboutUsText>
  </AboutUsContainer>
);

export default AboutUsSection;
