import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import colors from '../../utils/colors'
import fonts from '../../utils/fonts'

const MoreWrapper = styled.div`
    background: ${colors.red};
    width: 85%;
    text-align: center;
    font-family: ${fonts.poppins};
    @media (min-width: 900px) {
        padding: 0 80px;
        width: auto;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    width: 100%;
    height: 100%;
    display: block;
    color: ${colors.white};
    padding: 10px;
    margin: 0;
    font-weight: 400;
    width: 100%;
    font-size: 1.2em;
`
const More = () => {
    return (
        <MoreWrapper>
            <StyledLink to="/#about">Dlaczego my?</StyledLink>
        </MoreWrapper>
    )
}

export default More
