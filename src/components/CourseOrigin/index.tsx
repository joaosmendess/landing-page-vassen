
import React from "react";

import {Description,SectionContainer,Title} from './style'
import { StyledButton } from "../Button/style";

const CourseOrigin: React.FC = () => {
    return (
        <SectionContainer id="course-origin">
            <Title>A Jornada Por Trás deste Curso</Title>
            <Description>
            Este curso nasceu de incontáveis horas de tentativas, erros, pequenas vitórias e uma paixão crescente. Percebi que minha jornada não precisava ser um caminho solitário. Havia uma comunidade esperando para ser construída, um espaço onde poderíamos compartilhar, aprender e crescer juntos.

Cada lição aqui é uma parte da minha experiência, das noites estudando técnicas às conversas com outros entusiastas que compartilharam suas próprias dicas e truques. Eu queria criar algo mais do que apenas um curso; eu queria construir uma ponte, conectar pessoas e histórias.

Se você já se sentiu perdido ou apenas quer aprimorar suas habilidades, espero que este curso lhe ofereça tanto conhecimento quanto me ofereceu alegria ao criá-lo. <span>Pronto para dar o próximo passo comigo?</span> 
            </Description> <br /><br />
            <StyledButton as="a" href="#main-page"> Estou Pronto!</StyledButton>
        </SectionContainer>
    );
}

export default CourseOrigin;