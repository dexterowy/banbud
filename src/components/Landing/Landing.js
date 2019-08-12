import React from 'react'
import styled from 'styled-components'

import colors from '../../utils/colors'
import bgImageMobile from '../../images/landing.png'
// import bgImageDesktop from '../../images/landing-desktop.png'

import fonts from '../../utils/fonts';

// import Div100vh from 'react-div-100vh';
import More from './More'

const LandingWrapper = styled.div`
    /* height: ${window.innerHeight} */
    height: 100vh;
    width: 100%;
    background: url(${bgImageMobile}) center center no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`


const LandingHeader = styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 2.3em;
    color: ${colors.white};
    font-family: ${fonts.poppins};
    text-shadow: 2px 2px 3px ${colors.black};
    font-weight: 500;
    line-height: 1.2em;
`


const Landing = () => (
    <LandingWrapper id="start">
            {/* <Div100vh> */}
            <div></div>
            <LandingHeader>
                    <span style={{fontWeight: 600}}>BUDUJ</span> <br />
                    razem z nami
            </LandingHeader>
            <More />
        {/* </Div100vh> */}
    </LandingWrapper>
    );

export default Landing;