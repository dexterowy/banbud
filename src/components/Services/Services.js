import React from 'react';
import styled from 'styled-components';
import './Services.css';
import { Carousel } from 'react-responsive-carousel';

import colors from '../../utils/colors'
import fonts from '../../utils/fonts'

import pedzel from '../../images/svg/pedzel.svg'
import betoniarka from '../../images/svg/betoniarka.svg'
import lopata from '../../images/svg/lopata.svg'
import walek from '../../images/svg/walek.svg'
import waserwoga from '../../images/svg/waserwoga.svg'
import pila from '../../images/svg/pila.svg'

const ServicesWrapper = styled.div`
    background: ${colors.white};
    font-family: ${fonts.poppins};
`
const Slide = styled.div`
    min-height: 400px;
    background: ${colors.white};
    box-shadow: 0 2px 2px rgba(0,0,0,0.16);
    margin: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const SlideHeader = styled.h4`
    font-weight: 400;
    font-size: 1.2em;
    margin: 5px;
    text-align: center;

`

const ImageWrapper = styled.div`
    margin: 15px 0;
`

const SlideText = styled.p `
    font-weight: 200;
    text-align: left;
    padding: 0 25px;
`


const Services = () => {
    return (
        <ServicesWrapper>
            <Carousel interval={8000} showThumbs={false} autoPlay infiniteLoop showStatus={false} showArrows={false}>
                <Slide>
                    <ImageWrapper>
                        <img src={pedzel} alt="pędzel" style={{height: "70px"}} />
                        <SlideHeader>Malowanie</SlideHeader>
                    </ImageWrapper>
                    <ImageWrapper>
                        <img src={pila} alt="piła" style={{height: "40px"}} /> 
                        <SlideHeader>Remonty <br /> łazienek</SlideHeader>
                    </ImageWrapper>
                </Slide>

                <Slide>
                    <ImageWrapper>
                        <img src={walek} alt="Wałek do malowania" style={{height: "70px"}} />
                        <SlideHeader>Usługi <br /> wykończeniowe</SlideHeader>
                        <SlideText>
                            Nasza szeroka oferta usług wykończeniowych świadczy najwyższy poziom jakości dla naszych klientów. Wszystko wykonujemy dokładnie i rzetelnie, aby w stu procentach zapewnić zadowolenie.
                        </SlideText>
                    </ImageWrapper>
                </Slide>
                
                <Slide>
                    <ImageWrapper>
                        <img src={lopata} alt="łopata" style={{height: "70px"}} />
                        <SlideHeader>Malowanie</SlideHeader>
                    </ImageWrapper>
                    <ImageWrapper>
                        <img src={waserwoga} alt="poziomica" style={{height: "30px"}} /> 
                        <SlideHeader>Remonty <br /> łazienek</SlideHeader>
                    </ImageWrapper>
                </Slide>

                <Slide>
                    <ImageWrapper>
                        <img src={betoniarka} alt="betoniarka" style={{height: "70px"}} />
                        <SlideHeader>Budowa <br /> domu</SlideHeader>
                        <SlideText>
                            Nasza szeroka oferta usług wykończeniowych świadczy najwyższy poziom jakości dla naszych klientów. Wszystko wykonujemy dokładnie i rzetelnie, aby w stu procentach zapewnić zadowolenie.
                        </SlideText>
                    </ImageWrapper>
                </Slide>
            </Carousel>
        </ServicesWrapper>
    )
}

export default Services
