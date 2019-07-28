import React from 'react';
import styled from 'styled-components';

import colors from '../../utils/colors';
import fonts from '../../utils/fonts';

import img from '../../images/worker.png';

const AboutWrapper = styled.div`
    width: 100%;
    font-family: ${fonts.poppins};
    display: flex;
    flex-direction: column;
    padding-top: 40px;
`
const Rect = styled.div`
    width: 6px;
    height: 1.17em;
    background: ${colors.red};
    display: inline-block;
    margin: 4px;
`

const AboutHeader = styled.h3`
    text-align: ${props => props.align};
    position: relative;
    padding: 0;
    display: flex;
    justify-content: ${props => props.align === "left" ? "flex-start" : "flex-end"};
    align-items: center;
    margin: 30px 25px 10px 25px;
`

const AboutP = styled.p`
    text-align: ${props => props.align};
    font-weight: 300;
    margin: 0 25px 30px 25px;
`

const About = () => {
    return (
        <AboutWrapper id="about">
            <AboutHeader align={"right"}>
                <Rect /> Kim tak właściwie jesteśmy?
            </AboutHeader>
            <AboutP align={"right"}>
                Banbud to młoda firma budowlana prężnie rozwijająca się na rynku. Posiadamy szereg maszyn, wykorzystywanych przez nas do szybkiej i rzetelnej pracy. Każdy z nas wykonuje swoje zadania pieczołowicie i konkretnie, dzięki czemu wybierając nas jako realizatorów twojego zlecenia z pewnością nie będziesz zawiedziony rezultatem.
            </AboutP>
            <img src={img} alt="Planowanie" />
            <AboutHeader align={"left"}>
                <Rect /> Dlaczego właśnie my?
            </AboutHeader>
            <AboutP align={"left"}>
                Ciężka i dokładna praca gwarantuję niesamowity efekt naszych wykonań. Każdy szczegół jest przez nas dokładnie dopieszczony, dzięki czemu nie ma mowy o niezadowoleniu. Skupienie, wiedza, doświadczenie. Te trzy cechy to klucz do sukcesu. Klucz, który wykorzystujemy od kilku lat i każdy nasz klient nie ma powodu do narzekania i skarg. Prosty i sprawdzony system płatności za usługi przez nas wykonywane, gwarantuje w pełni wykonaną pracę bez żadnych niedomówień czy nieścisłości. Jesteśmy firmą budowlaną dokładnie taką, jakiej potrzebujesz!
            </AboutP>
        </AboutWrapper>
    )
}

export default About

