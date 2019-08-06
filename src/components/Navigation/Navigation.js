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
`

const NavBar = styled.div`
    padding: 20px 25px;
    height: 76px;
    margin: 0;
    display: flex;
    position: relative;
    background: ${props => props.navbar || props.menu ? colors.white : "transparent"};
    z-index: 100;
    justify-content: space-between;
    transition: background 0.2s linear;
`

const Logo = styled.img `
    opacity: ${props => props.navbar || props.menu ? 1 : 0};
    transition: opacity 0.2s linear;
    @media screen and (min-width: 600px) {
        visibility: visible;
    }
`

const Menu = styled.div `
    width: 100%;
    height: ${props => props.menu ? "250px" : 0};
    position: relative;
    background: ${colors.white};
    transition: height 0.2s ease-in-out;
    overflow: hidden;
`

const NavLink = styled(Link)`
    color: ${colors.black};
    font-family: ${fonts.poppins};
    text-decoration: none;
    font-size: 1.4em;
    font-weight: 400;
    padding: 5px 5px;
    width: 100%;
    text-align: right;
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
            <NavLinks menu={props.menu} links={props.links}>
                <NavLink onClick={props.closeMenuHandler} to="/#start">Start</NavLink>
                <NavLink onClick={props.closeMenuHandler} to="/#about">O nas</NavLink>
                <NavLink onClick={props.closeMenuHandler} to="/#projects">Realizacje</NavLink>
                <NavLink onClick={props.closeMenuHandler} to="/#contact">Kontakt</NavLink>
            </NavLinks>
        </Menu>
    </NavWrapper>
)

export default Navigation;

