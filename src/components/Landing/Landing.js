import React from 'react'
import styled from 'styled-components'

import colors from '../../utils/colors'
import bgImage from '../../images/landing.png'
import fonts from '../../utils/fonts';

import More from './More'

const LandingWrapper = styled.div`
    min-height: -webkit-fill-available;
    height: 100vh;
    width: 100%;
    background: url(${bgImage}) center no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const Developing = styled.h1`
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
    <LandingWrapper>
        <div></div>
        <Developing>
                <span style={{fontWeight: 600}}>BUDUJ</span> <br />
                razem z nami
        </Developing>
        <More />
    </LandingWrapper>
    );

export default Landing;