import React from 'react';
import styled from 'styled-components';

import logo from '../images/logo.png';
import hamburger from '../images/svg/hamburger.svg';

const NavWrapper = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 25px;
    display: flex;
    justify-content: space-between;
`

const Logo = styled.img `
    visibility: hidden;
    @media screen and (min-width: 600px) {
        visibility: visible;
    }
`

const Navigation = () => (
    <NavWrapper>
        <Logo src={logo} alt="Banbud" />
        <img src={hamburger} alt=""/>
    </NavWrapper>
)

export default Navigation;

