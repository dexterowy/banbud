import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';

import colors from '../../utils/colors'
import fonts from '../../utils/fonts'

import img from '../../images/logo.png';

const FooterWrapper = styled.div`
    background: ${colors.footer.bg};
    font-family: ${fonts.poppins};
    @media (min-width: 900px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, auto);
    }
`
const FooterLogoWrapper = styled.div`
    display: none;
    @media (min-width: 900px) {
        display: flex;
        grid-column: 1/2;
        grid-row: 1/2;
        justify-content: center;
        align-items: center;
    }
`

const FooterLogo = styled.img`
    @media (min-width: 900px) {
        width: 70%;
    }
`

const FooterLinks = styled.ul`
    list-style: none;
    padding: 30px 25px 5px;
    margin: 0;

    @media (min-width: 900px) {
        padding: 0;
        margin: 40px auto;
    }
`
const FooterLinksHeader = styled.li`
    /* display: none; */
    color: ${colors.white};
    font-size: 1.3em;
    font-weight: 300;
    padding: 0 0 20px 0;
    @media (min-width: 900px) {
        display: block;
        font-size: 1.3em;
        color: ${colors.white};
        font-weight: 300;
        padding: 0 0 20px 0;
    }
`

const FooterLink = styled(Link)`
    font-weight: 200;
    color: ${colors.white};
    border-bottom: 1px solid ${colors.footer.bars};
    padding: 3px 0;
    text-decoration: none;
    width: 100%;
    display: block;

    @media (min-width: 900px) {
        border: none;
        font-weight: 100;
        width: auto;
        transition: color 0.1s linear;
        :hover {
            cursor: pointer;
            color: ${colors.grey};
    }
    }
`

const Langs = styled.div`
    display: flex;
    padding: 20px 25px 70px;

    @media (min-width: 900px) {
        display: none;
    }
`

const Lang = styled.span`
    color: ${colors.white};
    font-size: 1.5em;
    font-weight: ${props => props.selected ? 400 : 300};
    margin-right: 15px;
`

const SocialMediaWrapper = styled.div`
    
    @media (min-width: 900px) {
        display: block;
        grid-column: 3/4;
        grid-row: 1/2;
        margin: 40px auto;
    }
`

const SocialMediaLinks = styled.ul`
    list-style: none;
    padding: 30px 25px 5px;
    margin: 0;
    @media (min-width: 900px) {
        /* margin: 60px auto; */
        width: auto;
        /* display: block; */
        height: 100%;
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
    }
`

const SocialMediaLink = styled.li`
    font-weight: 200;
    color: ${colors.white};
    /* border-bottom: 1px solid ${colors.footer.bars}; */
    padding: 3px 0;
    text-decoration: none;
    width: 100%;
    display: block;
    @media (min-width: 900px) {
        display: block;
    }
`

const ExternalLink = styled.a`
    font-weight: 200;
    color: ${colors.white};
    border-bottom: 1px solid ${colors.footer.bars};
    padding: 3px 0;
    text-decoration: none;
    width: 100%;
    display: block;

    

    @media (min-width: 900px) {
        border: none;
        font-weight: 100;
        width: auto;
        transition: color 0.1s linear;
        :hover {
            cursor: pointer;
            color: ${colors.grey};
    }
    }
`

const SocialMediaGoogle = styled.li`
    @media (min-width: 900px) {
        display: block;
        margin-top: auto;
    }
`

const Copys = styled.div`
    background: ${colors.footer.copy};
    padding: 16px 0;
    text-align: center;
    color: ${colors.white};
    font-weight: 200;
    @media (min-width: 900px) {
        grid-column: 1/4;
        grid-row: 2/3;
    }
`

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterLogoWrapper>
                <FooterLogo src={img} alt="Logo firmy Banbud" />
            </FooterLogoWrapper>
            <FooterLinks>
                <FooterLinksHeader>Nawigacja</FooterLinksHeader>
                <li><FooterLink to="/#start">Start</FooterLink></li>
                <li><FooterLink to="/#about">O nas</FooterLink></li>
                <li><FooterLink to="/#projects">Realizacje</FooterLink></li>
                <li><FooterLink to="/#contact">Kontakt</FooterLink></li>
            </FooterLinks>
            
            <SocialMediaWrapper>
                <SocialMediaLinks>
                    <FooterLinksHeader>Social Media</FooterLinksHeader>
                    <SocialMediaLink><ExternalLink href="https://www.facebook.com/BanBud-1074866902531515/" target="__blank">Facebook</ExternalLink></SocialMediaLink>
                    <SocialMediaLink><ExternalLink href="https:/wa.me/48693226902" target="__blank">WhatsApp</ExternalLink></SocialMediaLink>
                    <SocialMediaGoogle><ExternalLink href="https://g.page/banbud/review" target="__blank" >Oceń nas w Google</ExternalLink></SocialMediaGoogle>
                </SocialMediaLinks>
            </SocialMediaWrapper>

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
