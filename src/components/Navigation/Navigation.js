import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import MenuIcon from '../Icons/MenuIcon';
import logo from '../../images/logo.png';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';


const NavWrapper = styled.div`
    width: 100%;
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 76px;
    /* background: ${props => props.navbar || props.menu ? colors.white : "none"};
    transition: background 0.4s linear; */
`

const NavBar = styled.div`
    padding: 20px 25px;
    height: 100%;
    display: flex;
    position: relative;
    background: ${props => props.navbar || props.menu ? colors.white : "transparent"};

    z-index: 100;
    justify-content: space-between;
    transform: translateY(0);
    -webkit-transform: translateY(0);
    transition: background 0.2s linear;
    -webkit-transition: background 0.2s linear;
    border-bottom: 1px solid ${props => props.navbar || props.menu ? colors.grey : "none"};
`

const Logo = styled.img `
    opacity: ${props => props.navbar || props.menu ? 1 : 0};
    transition: opacity 0.2s linear;
    -webkit-transition: opacity 0.2s linear;
    @media screen and (min-width: 600px) {
        visibility: visible;
    }
`

const Menu = styled.div `
    width: 100%;
    height: 300px;
    position: static;
    z-index: -1;
    background: ${colors.white};
    /* visibility: ${props => props.menu ? "visible" : "hidden"}; */
    transform: ${props => props.menu ? "translateY(0)" : "translateY(-700px)"};
    -webkit-transform: ${props => props.menu ? "translateY(0)" : "translateY(-700px)"};
    transition: transform 0.4s linear;
    -webkit-transition: transform 0.4s linear;
`

const NavLink = styled(Link)`
    color: ${colors.black};
    font-family: ${fonts.poppins};
    text-decoration: none;
    font-size: 1.4em;
    font-weight: 400;
    margin: 5px;
`


const NavLinks = styled.ul`
    margin: 0;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
   
`

const Navigation = (props) => (
    <NavWrapper navbar={props.navbar} menu={props.menu}>
        <NavBar navbar={props.navbar} menu={props.menu}>
            <Logo navbar={props.navbar} menu={props.menu} src={logo} alt="Banbud" />
            <MenuIcon navbar={props.navbar} menu={props.menu} 
            openMenuHandler={props.openMenuHandler} closeMenuHandler={props.closeMenuHandler}/>
        </NavBar>
        <Menu menu={props.menu}>
            <NavLinks>
                <NavLink onClick={props.closeMenuHandler} to="/#start">Start</NavLink>
                <NavLink onClick={props.closeMenuHandler} to="/#about">O nas</NavLink>
                <NavLink onClick={props.closeMenuHandler} to="/#projects">Realizacje</NavLink>
                <NavLink onClick={props.closeMenuHandler} to="/#contact">Kontakt</NavLink>
            </NavLinks>
        </Menu>
    </NavWrapper>
)

export default Navigation;

