import React from 'react';
import Github from '../images/github.svg';
import Facebook from '../images/icon-facebook.svg';
import Twitter from '../images/icon-twitter.svg';
import LinkedIn from '../images/linkedin.svg';
import styled from 'styled-components';
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

const FooterStyle = styled.div`
    background-color: #ed9ca9;
    background-color: ${({ mode }) => mode ?'#ed9ca9': '#5f2b35'};
    display:flex;
    align-items:center;
    flex-wrap:wrap;
    justify-content:space-between;
    padding:2rem;
    margin-top:5rem;
    color:#fff;
    p{
        font-size:1rem;
    }
    h2, h3, p, li{
        color:#fff;
    }

.hero-icons{
    color:#fff;
    width:30px;
    height:30px;
  }
    h2{
        font-size: 2rem;
        font-weight: 600;
    }
    h3{
        font-size:1.2rem;
    }

    img{
        color:red;
        width:30px;
        height:30px;
    }
    ul{
        display:flex;
        gap:2rem;
        li{
            font-size:1.2rem;
            color: #ecebeb;
        }
    }
    @media screen and (min-width: 760px){
        height: 50vh;
    }
    @media screen and (max-width: 680px){
        display:block;
        h3{
            font-size:1rem;
        }
        p{
            font-size:.8rem;
        }
        .hero-icons{
            width:25px;
            height:25px;
        }
        ul{
            margin:1rem 0;
            li{
                font-size:1rem;
            }
        }
    }
`
export default Footer