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

`

const ProjectsHeader = styled.h2`
    font-weight: 400;
    margin-top: 0;
`

const ProjectsText = styled.p`
    font-weight: 300;
`

const GalleryButton = styled.button`
    background: ${colors.white};
    border: none;
    outline: none;
    font-weight: 400px;
    padding: 8px 20px;
    font-size: 1.1em;
    box-shadow: 0px 2px 10px ${colors.footer.bg};
`

const Projects = () => {
    return (
        <ProjectsWrapper>
            <ProjectsHeader>
                Realizacje
            </ProjectsHeader>
            <ProjectsText>
                W historii naszej firmy wykonaliśmy wiele projektów personalizowanych, spełniających oczekiwania naszych klientów. Każda realizacja została udokumentowana w postaci fotografii.<br /><br />
Kliknij w poniższy przycisk aby przenieść się do galerii, w której znajdziesz pomoc w podjęciu swojej decyzji. Mamy nadzieję, że spodoba ci się nasza praca.
            </ProjectsText>
            <GalleryButton>Przejdź do galerii</GalleryButton>
        </ProjectsWrapper>
    )
}

export default Projects
