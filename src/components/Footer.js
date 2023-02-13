import React from 'react';
import { FooterStyle } from '../Style';
import { FiGithub, FiFacebook, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer = ({mode}) => {
  return (
    <FooterStyle mode={mode}>
        <div>
            <h2>Victoria Olumide</h2>
            <h3>Frontend Developer and Data Analyst.</h3>
        </div>
        <ul className='first-ul'>
            <li>Services</li>
            <li>My Works</li>
            <li>Contact</li>
        </ul>
        <ul>
            <li><FiGithub className='hero-icons'/></li>
            <li><FiFacebook className='hero-icons'/></li>
            <li><FiLinkedin className='hero-icons'/></li>
            <li><FiTwitter className='hero-icons'/></li>
        </ul>
        <p>© Vickode. All right reserved</p>
    </FooterStyle>
  )
}

export default Footer