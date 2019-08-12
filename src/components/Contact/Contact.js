

import React from 'react'
import styled from 'styled-components'

import colors from '../../utils/colors'
import fonts from '../../utils/fonts'

// import mapa from '../../images/mapa-placeholder.png'

const ContactWrapper = styled.div`
    margin: 10px 25px;
    @media (min-width: 900px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto auto auto;
        grid-gap: 20px;
    }
`

const ContactForm = styled.form`
    @media (min-width: 900px) {
        grid-column: 2/3;
        grid-row: 2/3;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(5, auto);
        grid-gap: 10px;
    }
`

const ContactHeader = styled.h2`
    font-family: ${fonts.poppins};
    font-weight: 500;
    padding: 26px 0;
    margin: 0;
    @media (min-width: 900px) {
        grid-column: 1/3;
        grid-row: 1/2;
        text-align: center;
    }
`

const ContactText = styled.p`
    font-family: ${fonts.poppins};
    font-weight: 500;
    @media (min-width: 900px) {
        grid-column: 1/2;
        grid-row: 1/2;
        font-size: 1.1em;
        margin-bottom: -10px;
    }
`

const ContactInput = styled.input`
    width: 100%;
    border: none;
    font-family: ${fonts.poppins};
    background: ${colors.input.bg};
    
    font-size: 0.9em;
    padding: 10px;
    margin: 5px 0;
    font-weight: 300;
    outline: none;

    ::placeholder {
        color: ${colors.input.font};
        font-weight: 200;

    }

    @media (min-width: 900px) {
        margin: 0;
        grid-row: ${props => {
            if (props.id === "name" || props.id === "email")
            return "2/3";
            else if (props.id === "subject")
            return "3/4";
        }};
        grid-column: ${props => {
            if (props.id === "name")
            return "1/2";
            else if (props.id === "email")
            return "2/3";
            else if (props.id === "subject")
            return "1/3";
        }}
    }
`

const ContactTextArea = styled.textarea`
    width: 100%;
    border: none;
    font-family: ${fonts.poppins};
    background: ${colors.input.bg};
    color: ${colors.input.font};
    font-size: 0.9em;
    padding: 10px;
    margin: 5px 0;
    font-weight: 200;
    @media (min-width: 900px) {
        grid-row: 4/5;
        grid-column: 1/3;
        margin: 0;
    }
`

const ContactButton = styled.input`
    padding: 10px 60px;
    background: ${colors.red};
    color: ${colors.white};
    border: none;
    font-size: 0.9em;
    appearance: none;

    @media (min-width: 900px) {
        width: 100%;
        grid-column: 2/3;
        grid-row: 5/6;
    }
`

const Rect = styled.div `
    width: 6px;
    height: 1.17em;
    background: ${colors.red};
    display: inline-block;
    margin: 4px;
    @media (min-width: 900px) {
        display: none;
    }
`

const Map = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
    width: 100%;
    @media (min-width: 900px) {
        grid-column: 1/2;
        grid-row: 2/3;
        height: 100%;
        margin: 0;
    }
`

const ContactInfoWrapper = styled.div`
    @media (min-width: 900px) {
        grid-column: 1/2;
        grid-row: 3/4;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
        padding: 20px 0;
    }
`

const ContactInfo = styled.p`
    font-family: ${fonts.poppins};
    font-weight: 400;
    font-size: 1.1em;
    margin: 5px;

`

const ContactAdresses = styled.div`
    margin: 30px 0;
    @media (min-width: 900px) {

        grid-column: 2/3;
        margin: 0;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
    }
`

const ContactAdress = styled.div `
    font-family: ${fonts.poppins};
    font-weight: 400;
    font-size: 1.1em;
    margin: 5px;
    display: flex;
    align-items: center;
    @media (min-width: 900px) {
        align-items: flex-end;
        justify-content: flex-end;
        margin: 0;
        margin-bottom: 5px;
    }
`



const Contact = () => {
    return (
        <ContactWrapper id="contact">
            <ContactHeader>
                Kontakt
            </ContactHeader>
            <ContactForm>
                <ContactText>Przejdźmy do konkretów, <br />wypełnij formularz i zapytaj o szczegóły!</ContactText>
                <ContactInput id="name" placeholder="Imię i nazwisko" type="text" />
                <ContactInput id="email" placeholder="Adres e-mail" type="text" />
                <ContactInput id="subject" placeholder="Temat" type="text" />
                <ContactTextArea id="msg" placeholder="Wiecej informacji..." type="textarea" rows="6"/>
                <ContactButton id="submit" type="submit" value="Wyślij" />
            </ContactForm>
            <Map>
                <iframe
                width="600"
                height="450"
                frameBorder="0" style={{border:0, width: "100%"}}
                title="map"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAn9QYnYGVhgUNMRfuXfKiONHODIejWx1w
                    &q=banbud+orzech" allowFullScreen>
                </iframe>
            </Map>
            <ContactInfoWrapper>
                <div>

                <ContactInfo>
                    BanBud Wojciech Banaś
                </ContactInfo>
                <ContactInfo>
                    Orzech, ul. Nakielska 15
                </ContactInfo>
                <ContactInfo>
                    42-622 Świerklaniec
                </ContactInfo>
                <ContactInfo>
                    NIP: 645 - 22 - 67 - 259
                </ContactInfo>
                <ContactInfo>
                    REGON: 362721696
                </ContactInfo>
                </div>
                <ContactAdresses>
                    <ContactAdress>
                        <Rect />
                        Tel: 505 072 546
                    </ContactAdress>
                    <ContactAdress>
                        <Rect />
                        E-Mail: biuro@ban-bud.pl
                    </ContactAdress>
                </ContactAdresses>
            </ContactInfoWrapper>
        </ContactWrapper>
    )
}

export default Contact
