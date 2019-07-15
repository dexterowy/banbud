import React from 'react'
import styled from 'styled-components'

import colors from '../../utils/colors'
import fonts from '../../utils/fonts'

const MoreWrapper = styled.div`
    background: ${colors.red};
    width: 85%;
    text-align: center;
    font-family: ${fonts.poppins};
`
const MoreText = styled.h2`
    color: ${colors.white};
    padding: 10px;
    margin: 0;
    font-weight: 400;
`
const More = () => {
    return (
        <MoreWrapper>
            <MoreText>Dlaczego my?</MoreText>
        </MoreWrapper>
    )
}

export default More
