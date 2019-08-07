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
    background: ${props => props.navbar || props.menu ? colors.white : "none"};
    transition: all 0.4s linear;
    border-bottom: ${props => props.navbar && !props.menu ? "1px solid " + colors.grey : "none"};

    @media screen and (min-width: 900px) {
        display: flex;
        height: 76px;
        justify-content: space-between;
    }
`

const NavBar = styled.div`
    padding: 20px 25px;
    height: 76px;
    margin: 0;
    display: flex;
    position: relative;
    /* background: ${props => props.navbar || props.menu ? colors.white : "transparent"}; */
    z-index: 100;
    justify-content: space-between;
    transition: background 0.2s linear;
    @media (min-width: 900px) {
        padding: 0
    }
`

const Logo = styled.img `
    opacity: ${props => props.navbar || props.menu ? 1 : 0};
    transition: opacity 0.2s linear;
    height: 100%;
    width: auto;
    @media (min-width: 900px) {
        padding: 20px 25px;
        
    }
`

const Menu = styled.div `
    width: 100%;
    height: ${props => props.menu ? "250px" : 0};
    position: relative;
    background: ${colors.white};
    transition: height 0.2s ease-in-out;
    overflow: hidden;
    @media screen and (min-width: 900px) {
        height: 100%;
        width: 75%;
        position: static;
        background: none;
    }
`

const NavLink = styled(Link)`
    font-family: ${fonts.poppins};
    text-decoration: none;
    color: inherit;
    font-size: 1.4em;
    font-weight: 400;
    padding: 5px 5px;
    width: 100%;
    text-align: right;
    @media screen and (min-width: 900px) {
        width: auto;
        font-weight: 300;
        font-size: 1em;
        margin: 0px 20px;
        padding: 5px;
        transition: color, text-shadow 0.2s ease-in-out;
    }
`


const NavLinks = styled.ul`
    margin: 0;
    list-style: none;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */
    /* align-items: flex-end; */
    opacity: ${props => props.links ? "1" : "0"};
    transition: opacity 0.3s ease-in-out;
    overflow: hidden;
    color: ${colors.black};

    @media screen and (min-width: 900px) {
        /* display: flex; */
        opacity: 1;
        height: 100%;
        text-shadow:  ${props => props.navbar ? "none" : `0px 1px 1px ${colors.black}`};
        color: ${props => props.navbar ? colors.black : colors.white};
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        padding: 0 25px;
        /* text-align: right; */
    }
`

const Navigation = (props) => (
    <NavWrapper navbar={props.navbar} menu={props.menu}>
        <NavBar navbar={props.navbar} menu={props.menu}>
            {/* <Link to="/#start"> */}
                <Logo navbar={props.navbar} menu={props.menu} src={logo} alt="Banbud" />
            {/* </Link> */}
            <MenuIcon navbar={props.navbar} menu={props.menu} 
            openMenuHandler={props.openMenuHandler} closeMenuHandler={props.closeMenuHandler}/>
        </NavBar>
        <Menu menu={props.menu}>
            <NavLinks navbar={props.navbar} menu={props.menu} links={props.links}>
                <NavLink onClick={props.closeMenuHandler} to="/#start">Start</NavLink>
                <NavLink onClick={props.closeMenuHandler} to="/#about">O nas</NavLink>
                <NavLink onClick={props.closeMenuHandler} to="/#projects">Realizacje</NavLink>
                <NavLink onClick={props.closeMenuHandler} to="/#contact">Kontakt</NavLink>
            </NavLinks>
        </Menu>
    </NavWrapper>
)

export default Navigation;

