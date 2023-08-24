import { Container, Row, Col } from "./components/Layout/Grid";

import { GlobalStyles, lightTheme } from "./styles/GlobalStyles";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutUsSection from "./components/AboutUs";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyles />
        <Container>
          <Row>
            <Col xs={12} md={6} xl={10}>
              <Header />
            </Col>
            <Col xs={12} md={12} xl={10}>
              <HeroSection />
            </Col>
          </Row>
         <Row>
          <Col xs={12} md={12} xl={12}>
          
          <AboutUsSection/>
          
          </Col>
         </Row>

         <Row>
          <Col xs={12} md={12} xl={12}>
          
          <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, officia facere voluptas repudiandae soluta ducimus minus deleniti minima molestias adipisci optio consectetur fugit consequuntur cum dolorum in modi voluptatum aperiam!</h1>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, commodi. Maxime numquam quisquam laboriosam corporis blanditiis dolorem modi repellat laudantium, placeat veniam distinctio voluptatibus amet esse quos doloremque facilis delectus?</h2>
          
          </Col>
         </Row>
         <Row>
          <Col xs={12} md={12} xl={12}>
          
          <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, officia facere voluptas repudiandae soluta ducimus minus deleniti minima molestias adipisci optio consectetur fugit consequuntur cum dolorum in modi voluptatum aperiam!</h1>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, commodi. Maxime numquam quisquam laboriosam corporis blanditiis dolorem modi repellat laudantium, placeat veniam distinctio voluptatibus amet esse quos doloremque facilis delectus?</h2>
          
          </Col>
         </Row>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
