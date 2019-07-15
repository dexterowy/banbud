import React from 'react'
import styled from 'styled-components';

import colors from '../../utils/colors'
import fonts from '../../utils/fonts'

const FooterWrapper = styled.div`
    background: ${colors.footer.bg};
    font-family: ${fonts.poppins};

`
const FooterLinks = styled.ul`
    list-style: none;
    padding: 30px 25px 5px;
    margin: 0;
`


const FooterLink = styled.li`
    font-weight: 200;
    color: ${colors.white};
    border-bottom: 1px solid ${colors.footer.bars};
    padding: 3px 0;
`

const Langs = styled.div`
    display: flex;
    padding: 0 25px 70px;
`

const Lang = styled.span`
    color: ${colors.white};
    font-size: 1.5em;
    font-weight: ${props => props.selected ? 400 : 300};
    margin-right: 15px;
`

const Copys = styled.div`
    background: ${colors.footer.copy};
    padding: 16px 0;
    text-align: center;
    color: ${colors.white};
    font-weight: 200;
`


const Footer = () => {
    return (
        <FooterWrapper>
            <FooterLinks>
                <FooterLink>Strona Główna</FooterLink>
                <FooterLink>O nas</FooterLink>
                <FooterLink>Realizacje</FooterLink>
                <FooterLink>Kontakt</FooterLink>
            </FooterLinks>
            <Langs>
                <Lang selected>PL</Lang>
                <Lang>EN</Lang>
                <Lang>DE</Lang>
            </Langs>
            <Copys>
                &copy;Hillock Studio 2019 | All Rights Reserved
            </Copys>
        </FooterWrapper>
        
    )
}

export default Footer
