
import { Container, Row, Col } from "./components/Layout/Grid";



import { GlobalStyles, lightTheme } from "./styles/GlobalStyles";
import HeroSection from "./components/HeroSection";
import AboutUsSection from "./components/AboutUs";
import { ThemeProvider } from "styled-components";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CourseInfo from "./components/CourseInfo";
import MainPage from "./components/MainPage";

import CourseOrigin from "./components/CourseOrigin";

import SpecialOffer from "./components/SpecialOffer";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

library.add(faBars);


function App() 



{
  
  const faqData = [
    {
      question: "Em que data acontecerá o curso?",
      answer: "Nos dias 10, 11 e 12 de Novembro de 2023.",
    }, 
    {
      question: " Onde o curso irá acontecer?",
      answer: "O curso acontecerá em nossa principal loja.",
      mapURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.61999016233!2d-35.719742125058254!3d-9.627950890459257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7014588e9d45a0d%3A0xfb683f885919d5c7!2sVassen%20Car%20Care!5e0!3m2!1spt-BR!2sbr!4v1694226410807!5m2!1spt-BR!2sbr"  
    },
  {
    question: "É necessário algum pré-requisito ou conhecimento prévio para participar do curso?",
    answer: "Não, não é necessário ter qualquer conhecimento prévio para começar. O curso é projetado para acomodar tanto iniciantes quanto aqueles com experiência.",
  },
  {
    question: "Preciso levar algum material para o curso?",
    answer: "Não, você não precisa se preocupar em levar materiais. Tudo o que você precisará será fornecido no local.",
  }
    // ... outras perguntas e respostas ...
  ];
  


  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyles />
        <Container>
          <Row>
            
            <Col xs={12} md={12} xl={11}>
              <HeroSection />
              
            </Col>
          </Row>
         <Row>
          <Col xs={12} md={12} xl={20}>
          
          <CourseInfo/>
          </Col>
         </Row>

         <Row>
          <Col xs={12} md={12} xl={20}>
          
          <AboutUsSection/>

          
          </Col>
         </Row>

         <Row>
          <Col xs={12} md={12} xl={14}>
         <CourseOrigin />
          </Col>
         </Row>

         <Row>
         <Col xs={12} md={12} xl={14}>
         
        <MainPage />
          
          
          </Col>

         </Row>

         <Row>
          <Col xs={12} md={12} xl={20}>
          <SpecialOffer originalPrice={1000} newPrice={862.6} installments={10} />
        
  
        </Col>
         </Row>
         <Row>
         <Col xs={12} md={12} xl={20}>
<FAQ data={faqData} />
          </Col>
         </Row>

         <Row>
         <Col xs={12} md={12} xl={20}>
<Footer/>
          </Col>
         </Row>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
