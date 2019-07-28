import React from 'react';
import styled from 'styled-components';

import MenuIcon from './Icons/MenuIcon';
import logo from '../images/logo.png';
import colors from '../utils/colors';

const NavWrapper = styled.div`
    width: 100%;
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 76px;
`

const NavBar = styled.div`
    padding: 20px 25px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    background: ${props => props.navbar || props.menu ? colors.white : "none"};
    transition: background 0.2s linear;
    border-bottom: 1px solid ${props => props.navbar || props.menu ? colors.grey : "none"};
`

const Logo = styled.img `
    opacity: ${props => props.navbar || props.menu ? 1 : 0};
    transition: opacity 0.05s linear;
    @media screen and (min-width: 600px) {
        visibility: visible;
    }
`

const Navigation = (props) => (
    <NavWrapper>
        <NavBar navbar={props.navbar} menu={props.menu}>
            <Logo navbar={props.navbar} menu={props.menu} src={logo} alt="Banbud" />
        <MenuIcon navbar={props.navbar} menu={props.menu} 
        openMenuHandler={props.openMenuHandler} closeMenuHandler={props.closeMenuHandler}/>
        </NavBar>
    </NavWrapper>
)

export default Navigation;

