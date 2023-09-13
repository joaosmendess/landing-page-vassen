
import React from 'react';
import { FAQContainer, QuestionBox, Question, Answer, MapEmbed, SocialContainer, IconLink } from './style';
import Module from '../Title';
import { FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa';

interface FAQProps {
  data: {
    question: string;
    answer: string;
    mapURL?: string;
  }[];
}

const FAQ: React.FC<FAQProps> = ({ data }) => {

  const whatsappNumber = "5582991200205";
const initialMessage = encodeURIComponent("Olá! Eu gostaria de saber mais sobre seus serviços.");
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${initialMessage}`;

  return (
    <FAQContainer>
       <Module title='DÚVIDAS FREQUENTES'/>
      {data.map((item, index) => (
        <QuestionBox key={index}>
          <Question>{item.question}</Question>
          <Answer>{item.answer}</Answer>
          {item.mapURL && <MapEmbed src={item.mapURL} />} 
        </QuestionBox>
      ))}
        <SocialContainer>
  <IconLink href={whatsappLink} target="_blank" rel="noopener noreferrer">
    <FaWhatsapp size={32} color="#25D366" />
  </IconLink>
  <IconLink href="https://www.instagram.com/vassen_carcare/" target="_blank" rel="noopener noreferrer">
    <FaInstagram size={32} color="#E4405F" />
  </IconLink>
  <IconLink href="https://www.youtube.com/@vassencarcare5162" target="_blank" rel="noopener noreferrer">
    <FaYoutube size={32} color="#FF0000" />
  </IconLink>
</SocialContainer>

    </FAQContainer>
  );
};

export default FAQ;
