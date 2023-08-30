import React from 'react';
import CourseModules from './../CourseModules';
import CourseModule  from '../../types';
import { Container,ModuleContainer  } from './style';

import Module from './../Title';


const modules: CourseModule[] = [
    {
      day: 'Dia 1 - Introdução ao Polimento',
      content: [
        {
          title: 'Introdução',
          description: 'Entenda a importância e os fundamentos do polimento.',
        },
        {
          title: 'Ferramentas e Equipamentos',
          description: 'Conheça as principais ferramentas usadas no polimento.',
        },
        // ... outros tópicos do Dia 1
      ],
    },
    {
      day: 'Dia 2 - Técnicas Avançadas de Polimento',
      content: [
        {
          title: 'Técnicas Básicas',
          description: 'Aprenda as técnicas básicas para um polimento eficaz.',
        },
        {
          title: 'Preparação da Superfícies',
          description: 'Saiba como preparar a superfície para um acabamento perfeito.',
        },
        
      ],
      
    },
    {
      day: 'Dia 3 - Produtos e Segurança no Polimento', // Título do Dia 3
      content: [
        {
          title: 'Seleção de Produtos',
          description: 'Entenda como escolher os melhores produtos para polimento.',
        },
        {
          title: 'Segurança e Precauções',
          description: 'Aprenda as práticas de segurança essenciais ao polir.',
        },
        // ... outros tópicos do Dia 3
      ],
    },
  ];
  
  const MainPage: React.FC = () => {
    return (
      <Container  id="main-page">
        <ModuleContainer >
        <Module title='Como funciona?'/>

        </ModuleContainer>
     
        {/* ... outras seções da página ... */}
        <CourseModules modules={modules} />
      </Container>
    );
  };
  
  export default MainPage;