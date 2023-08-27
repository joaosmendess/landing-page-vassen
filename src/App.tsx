import { Container, Row, Col } from "./components/Layout/Grid";

import { GlobalStyles, lightTheme } from "./styles/GlobalStyles";
import HeroSection from "./components/HeroSection";
import AboutUsSection from "./components/AboutUs";
import { ThemeProvider } from "styled-components";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CourseInfo from "./components/CourseInfo";
import MainPage from "./components/MainPage";
import Module from "./components/Title";

library.add(faBars);


function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyles />
        <Container>
          <Row>
            <Col xs={12} md={6} xl={10}>
              
            </Col>
            <Col xs={12} md={12} xl={11}>
              <HeroSection />
              
            </Col>
          </Row>
         <Row>
          <Col xs={12} md={12} xl={14}>
          
          <CourseInfo/>
          </Col>
         </Row>

         <Row>
          <Col xs={12} md={12} xl={12}>
          
          <AboutUsSection/>

          
          </Col>
         </Row>
         <Row>
          <Col xs={12} md={12} xl={14}>
          <Module/>
        <MainPage/>
          
          </Col>
         </Row>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
