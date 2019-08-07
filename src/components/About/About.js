import React from 'react';
import styled from 'styled-components';

import colors from '../../utils/colors';
import fonts from '../../utils/fonts';

import img from '../../images/worker.png';

const AboutWrapper = styled.div`
    width: 100%;
    font-family: ${fonts.poppins};
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    @media (min-width: 900px) {
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(2, 1fr);
        min-height: calc(100vh - 76px);
        flex-direction: row;
        padding: 0;
    }
`

const SectionWrapper = styled.div`
    @media (min-width: 900px) {
        grid-column: 2/3;
        justify-self: flex-end;
        padding-top: 20px;
        padding-right: 25px;
        width: 80%;
        :last-of-type {
            grid-row: 2/3;
        }
    }
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
    padding: 30px 25px 10px 25px;
    margin: 0;
    @media (min-width: 900px) {
        justify-content: flex-end;
    }
`

const AboutP = styled.p`
    text-align: ${props => props.align};
    font-weight: 300;
    margin: 0 25px 30px 25px;
    @media (min-width: 900px) {
        text-align: left;
    }
`

const StyledImg = styled.img`
        width: 100%;
        height: auto;
        @media (min-width: 900px){
            grid-row: 1/3;
            grid-column: 1/2;
            width: 100%;
            height: 100%;
        }
    `

const About = () => {
    return (
        <AboutWrapper>
            <SectionWrapper>
                <AboutHeader id="about" align={"right"}>
                    <Rect /> Kim tak właściwie jesteśmy?
                </AboutHeader>
                <AboutP align={"right"}>
                    Banbud to młoda firma budowlana prężnie rozwijająca się na rynku. Posiadamy szereg maszyn, wykorzystywanych przez nas do szybkiej i rzetelnej pracy. Każdy z nas wykonuje swoje zadania pieczołowicie i konkretnie, dzięki czemu wybierając nas jako realizatorów twojego zlecenia z pewnością nie będziesz zawiedziony rezultatem.
                </AboutP>
            </SectionWrapper>
            <StyledImg src={img} alt="Planowanie" />
            <SectionWrapper>
                <AboutHeader align={"left"}>
                    <Rect /> Dlaczego właśnie my?
                </AboutHeader>
                <AboutP align={"left"}>
                    Ciężka i dokładna praca gwarantuję niesamowity efekt naszych wykonań. Każdy szczegół jest przez nas dokładnie dopieszczony, dzięki czemu nie ma mowy o niezadowoleniu. Skupienie, wiedza, doświadczenie. Te trzy cechy to klucz do sukcesu. Klucz, który wykorzystujemy od kilku lat i każdy nasz klient nie ma powodu do narzekania i skarg. Prosty i sprawdzony system płatności za usługi przez nas wykonywane, gwarantuje w pełni wykonaną pracę bez żadnych niedomówień czy nieścisłości. Jesteśmy firmą budowlaną dokładnie taką, jakiej potrzebujesz!
                </AboutP>
            </SectionWrapper>
        </AboutWrapper>
    )
}

export default About

