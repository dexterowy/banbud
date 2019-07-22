import React from 'react'
import styled from 'styled-components'

import colors from '../../utils/colors'
import fonts from '../../utils/fonts'

import mapa from '../../images/mapa-placeholder.png'

const ContactWrapper = styled.div`
    margin: 10px 25px;
`

const ContactForm = styled.form`

`

const ContactHeader = styled.h2`
    font-family: ${fonts.poppins};
    font-weight: 500;
    margin: 26px 0;
`

const ContactText = styled.p`
    font-family: ${fonts.poppins};
    font-weight: 500;
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
`

const ContactButton = styled.input`
    padding: 10px 60px;
    background: ${colors.red};
    color: ${colors.white};
    border: none;
    font-size: 0.9em;
`

const Rect = styled.div `
    width: 6px;
    height: 1.17em;
    background: ${colors.red};
    display: inline-block;
    margin: 4px;
`

const Map = styled.img`
    margin-top: 50px;
    margin-bottom: 50px;
    width: 100%;
`

const ContactInfo = styled.p`
    font-family: ${fonts.poppins};
    font-weight: 400;
    font-size: 1.1em;
    margin: 5px;

`

const ContactAdresses = styled.div`
    margin: 30px 0;
    
`

const ContactAdress = styled.p `
    font-family: ${fonts.poppins};
    font-weight: 400;
    font-size: 1.1em;
    margin: 5px;
    display: flex;
    align-items: center;

`



const Contact = () => {
    return (
        <ContactWrapper>
            <ContactHeader>
                Kontakt
            </ContactHeader>
            <ContactForm>
                <ContactText>
                    Przejdźmy do konkretów, <br />wypełnij formularz i zapytaj o szczegóły!
                </ContactText>
                <ContactInput placeholder="Imię i nazwisko" type="text" />
                <ContactInput placeholder="Adres e-mail" type="text" />
                <ContactInput placeholder="Temat" type="text" />
                <ContactTextArea placeholder="Wiecej informacji..." type="textarea" rows="6"/>
                <ContactButton type="submit" value="Wyślij" />
            </ContactForm>
            <Map src={mapa} />
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
        </ContactWrapper>
    )
}

export default Contact
