import React, { Component } from 'react';
import styled from 'styled-components';

import colors from '../../utils/colors.js';


const Menu = styled.div `
    width: 100%;
    height: ${props => props.menu ? "300px" : 0};
    position: relative;
    background: ${colors.white};
    transition: height 0.3s ease-in-out;
    overflow: hidden;
`

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    render() {
        return (
            <Menu menu={props.menu}>
                <NavLinks>
                    <NavLink menu={props.menu} onClick={props.closeMenuHandler} to="/#start">Start</NavLink>
                    <NavLink menu={props.menu} onClick={props.closeMenuHandler} to="/#about">O nas</NavLink>
                    <NavLink menu={props.menu} onClick={props.closeMenuHandler} to="/#projects">Realizacje</NavLink>
                    <NavLink menu={props.menu} onClick={props.closeMenuHandler} to="/#contact">Kontakt</NavLink>
                </NavLinks>
            </Menu>
        )
    }
}
