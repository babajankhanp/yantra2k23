import React from 'react'
import './FooterElements';
import { FaEnvelope, FaInstagram,  FaYoutube,FaWhatsapp } from 'react-icons/fa'
import { FooterContainer, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, Copyrights } from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <SocialMedia>
                <SocialLogo to='/'>Contact Us</SocialLogo>
                <SocialIcons>
                    <SocialIconLink href='/' target='_blank' aria-label="Facebook" rel="noopener noreferrer" >
                        <FaEnvelope />
                    </SocialIconLink>
                    <SocialIconLink href='https://www.instagram.com/yantra2k22/' target='_blank' aria-label="Instagram" rel="noopener noreferrer" >
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href='https://youtube.com/channel/UC6lO9dLtrumz35dENb6v0kw' target='_blank' aria-label="Youtube" rel="noopener noreferrer" >
                        <FaYoutube />
                    </SocialIconLink>
                    <SocialIconLink href='/' target='_blank' aria-label="whatsapp" rel="noopener noreferrer" >
                        <FaWhatsapp />
                    </SocialIconLink>
                </SocialIcons>
            </SocialMedia>
            <hr />
    

            <Copyrights>&#64; 2022 Copyright Yantra2k22.com All Rights Reserved</Copyrights>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer