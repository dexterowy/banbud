import React from 'react'

import colors from '../../utils/colors';


const MenuIcon = (props) => {

    const color = props.navbar || props.menu ? colors.black : colors.white;
    
    const hamburger = (
        < svg xmlns = "http://www.w3.org/2000/svg"
        width = "36.222"
        height = "29.839"
        viewBox = "0 0 36.222 29.839"
        onClick={props.openMenuHandler}> 
            <g transform = "translate(-323 -57)"> 
                <rect width = "36.222"
                height = "7.46"
                transform = "translate(323 57)"
                fill = {color} /> 
                < rect width = "36.222"
                height = "7.46"
                transform = "translate(323 68.189)"
                fill = {color} /> 
                <rect width = "36.222"
                height = "7.46"
                transform = "translate(323 79.379)"
                fill = {color} />
            </g>
        </svg >
    );

    const close = (
        <svg xmlns = "http://www.w3.org/2000/svg"
            onClick = {props.closeMenuHandler}
            width = "36.888"
            height = "31.077"
            viewBox = "0 0 30.888 31.077"> 
            <g transform = "translate(-325.667 -56.475)"> 
                <rect width = "36.222"
                    height = "7.46"
                    transform = "translate(325.667 82.088) rotate(-45)" /> 
                <rect width = "36.222"
                    height = "7.46"
                    transform = "translate(330.942 56.665) rotate(45)" /> 
            </g>
        </svg>
    )

    return (
        <>
            { props.menu ? close : hamburger}
        </>
    )
}

export default MenuIcon
