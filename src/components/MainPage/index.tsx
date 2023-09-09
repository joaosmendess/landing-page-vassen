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
          title: 'Introdução ao Processo de Preparação',
          description: 'Preparação (lavagem, descontaminação, isolamentos e cuidados)',
      },
      {
          title: 'Entendendo os Tipos de Pintura',
          description: 'Tipos de pintura (novo, antigo, repintura)',
      },
      {
          title: 'Identificação de Defeitos Comuns',
          description: 'Identificar defeitos (swirls, holograma, marca de lixa, chuva ácida, manchas e arranhões)',
      },
      {
          title: 'Diferenças entre Máquinas de Polir',
          description: 'Tipos de máquinas e diferenças (roto livre e forçada, rotativa)',
      },
      {
          title: 'Classificação dos Compostos de Polimento',
          description: 'Tipos de composto (corte, refino lustro)',
      },
      {
          title: 'Escolhendo a Boina Certa',
          description: 'Tipos de boinas (corte, refino lustro)',
      },
      {
          title: 'Etapas Fundamentais do Polimento',
          description: 'Etapas do polimento (corte, refino lustro)',
      },
      {
          title: 'Técnicas de Inspeção Pós-Polimento',
          description: 'Limpeza inspeção da peça polida (iluminação e álcool)',
      },
      {
          title: 'Ajustando a Agressividade do Polimento',
          description: 'Dosagem de agressividade (pressão x composto x boina x velocidade x tipo de máquina)',
      },
      {
          title: 'Configurando seu Equipamento',
          description: 'Setup',
      },
      {
          title: 'Técnicas de Lixamento',
          description: 'Lixamento',
      },
      {
          title: 'Finalização e Limpeza Pós-Polimento',
          description: 'Limpeza pós-polimento',
      },
      {
          title: 'Estratégias de Precificação',
          description: 'Precificação',
      }
            ],
    },
    {
      day: 'Dia 2 - Técnicas Avançadas de Polimento',
      content: [
        {
          title: 'Introdução à Vitrificação e Revestimento Cerâmico',
          description: 'Vitrificação/ Revestimento cerâmico',
      },
      {
          title: 'Definição e Propriedades',
          description: 'O que é? Composição, ação e duração',
      },
      {
          title: 'Variedade de Produtos',
          description: 'Tipos de produtos',
      },
      {
          title: 'Comparação de Métodos',
          description: 'Vitrificação /Sílica vítreas x Revestimento cerâmico',
      },
      {
          title: 'Aplicação e Precauções',
          description: 'Aplicação e cuidados (área, remoção e microfibra)',
      },
      {
          title: 'Resolvendo Manchas de Aplicação',
          description: 'Mancha de aplicação (como resolver)',
      },
      {
          title: 'Entendendo o Tempo de Cura',
          description: 'Tempo de cura (diferenças de cada um deles)',
      },
      {
          title: 'Orientações e Recomendações ao Cliente',
          description: 'Cuidados pós e avisos ao cliente',
      },
      {
          title: 'Oferecendo Garantia ao Cliente',
          description: 'Garantia (marca de chuva, riscos, manutenção e perda de repelência)',
      },
      {
          title: 'Estratégias de Precificação',
          description: 'Precificação',
      },
        
      ],
      
    },
    
  ];
  
  const MainPage: React.FC = () => {
    return (
      <Container  id="main-page">
        <ModuleContainer >
        <Module title='COMO FUNCIONA?'/>

        </ModuleContainer>
     
        {/* ... outras seções da página ... */}
        <CourseModules modules={modules} />
      </Container>
    );
  };
  
  export default MainPage;