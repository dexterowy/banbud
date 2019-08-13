import React from 'react';
import styled from 'styled-components';

import colors from '../../utils/colors';
import fonts from '../../utils/fonts';



const ProjectsWrapper = styled.div`
    width: 100%;
    background: ${colors.red};
    color: ${colors.white};
    font-family: ${fonts.poppins};
    padding: 25px;
    @media (min-width: 900px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
const ProjectsContent = styled.div`
    @media (min-width: 900px) {
        width: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`

const ProjectsHeader = styled.h2`
    font-weight: 400;
    margin-top: 0;
    @media (min-width: 900px) {
        text-align: center;
        font-size: 2em;
        margin: 10px 0;
}
`

const ProjectsText = styled.p`
    font-weight: 300;
`

const GalleryButton = styled.a`
    background: ${colors.white};
    border: none;
    display: inline-block;
    text-decoration: none;
    color: ${colors.black};
    font-weight: 400px;
    padding: 8px 20px;
    font-size: 1.1em;
    box-shadow: 0px 1px 5px ${colors.footer.bg};
    margin: 10px 0;
    /* margin-right: auto; */
    @media (min-width: 900px) {
        margin: 20px;
    }
`

const Projects = () => {
    return (
        <ProjectsWrapper id="projects">
            <ProjectsContent>
                <ProjectsHeader>
                    Realizacje
                </ProjectsHeader>
                <ProjectsText>
                    W historii naszej firmy wykonaliśmy wiele projektów personalizowanych, spełniających oczekiwania naszych klientów. Każda realizacja została udokumentowana w postaci fotografii.<br /><br />
    Kliknij w poniższy przycisk aby przenieść się do galerii, w której znajdziesz pomoc w podjęciu swojej decyzji. Mamy nadzieję, że spodoba ci się nasza praca.
                </ProjectsText>
                <GalleryButton href="https://www.facebook.com/pg/BanBud-1074866902531515/photos/?ref=page_internal" target="__blank">Przejdź do galerii</GalleryButton>
            </ProjectsContent>
        </ProjectsWrapper>
    )
}

export default Projects
