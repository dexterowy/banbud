import React from 'react'
import styled from 'styled-components'

import colors from '../utils/colors'
import bgImage from '../images/landing.png'
import fonts from '../utils/fonts';

const LandingWrapper = styled.div`
    height: 100vh;
    width: 100%;
    background: url(${bgImage}) center no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Developing = styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    color: ${colors.white};
    font-family: ${fonts.poppins};
`

const Landing = () => (
    <LandingWrapper>
        <Developing>
            Work in progress...
        </Developing>
    </LandingWrapper>
    );

export default Landing;