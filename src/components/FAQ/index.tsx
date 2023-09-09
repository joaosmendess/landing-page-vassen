// FAQ.tsx

import React from 'react';
import { FAQContainer, QuestionBox, Question, Answer, MapEmbed } from './style';
import Module from '../Title';

interface FAQProps {
  data: {
    question: string;
    answer: string;
    mapURL?: string;
  }[];
}

const FAQ: React.FC<FAQProps> = ({ data }) => {
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
    </FAQContainer>
  );
};

export default FAQ;
