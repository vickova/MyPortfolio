import React from 'react';
import Vicky from '../images/vicky-rm-bg.png';
import { FiGithub, FiLinkedin, FiTwitter, FiDownload } from 'react-icons/fi';
import styled from 'styled-components';
import Cv from '../images/cv/Victoria Olumide.pdf'

const Hero = ({mode}) => {
  return (
    <HeroStyle id='home' mode={mode}>
      <div className='images'>
            <FiGithub className='hero-icons'/>
            <FiLinkedin className='hero-icons'/>
            <FiTwitter className='hero-icons'/>

        </div>
        <div className='heros'>
        <div className='herotext'>
            <h2>Hello, I'm Victoria Olumide</h2>
            <h3>A Daring Frontend Developer and Data Analyst</h3>
            <p>I optimize user experience by implementing visual elements that users see and interact with within a web application</p>
            <button><a href={Cv} target='_blank'><span>Download CV</span><FiDownload/></a></button>
        </div>
        <div className='profile'>
          <img src={Vicky} alt="Victoria Olumide"/>
        </div>
        </div>
    </HeroStyle>
  )
}

const HeroStyle = styled.div`
margin: 0 8rem;
  display:flex;
  gap:2rem;
  .heros{
    display:flex;
    justify-content:center;
    gap:2rem;
    margin: 0 4rem;
  }
  .hero-icons{
    color:#ed9ca9;
    width:25px;
    height:25px;
  }
  .herotext{
    width:50%;
    
  }
  .images{
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    height:100%;
    gap:4rem;
    position:fixed;
    left:100px;
    img{
      stroke-width:10;
    }
  }
  button{
    background-color: #ed9ca9;
    padding:1rem;
    font-size:1.5rem;
    font-weight:500;
    color:rgb(255, 255, 255);
    margin:2rem 0;
    border-radius:30px 0 30px 0;
    a{
    display:flex;
    align-items:center;
    gap:1rem;
    }
  }
  h2{
    font-size:4rem;
    line-height:4rem;
    color: ${({ mode }) => mode ? '##494848': '#FBFBFB'};
  }
  h3{
    font-size:2rem;
    color: ${({ mode }) => mode ? '##494848': '#FBFBFB'};
  }
  p{
    font-size:1.5rem;
    margin:1rem 0;
    color: ${({ mode }) => mode ? '##494848': '#FBFBFB'};
  }
  .profile{
    width:300px;
    height:300px;
    background-color: #ed9ca9;
    border-radius:50%;
    position:relative;
    img{
    position:absolute;
    bottom:-20px;
    border-radius:50%;
    border:2px solid #ed9ca9;
    border-style:dashed;
    background-blend-mode:difference;
    }
  }
  @media screen and (max-width:680px){
      display:block;
      margin:0;
      p{
        font-size:1.2rem;
      }
      button{
        font-size:1.2rem;
        padding:.8rem 1rem;
      }
      .profile{
        margin-left:50px;
        width:250px;
        height:250px;
      }
      .heros{
        margin:0;
        display:flex;
        flex-direction:column-reverse;
        padding:0;
      }
      .herotext{
        width:100%;
        h3{
          background-color:#ed9ca9;
        }
      }
      .images{
        position:absolute;
        left:25px;
        justify-content:center;
        gap:2rem;
        height: 40vh;
        img{
          width:25px;
          height:25px;
        }
      }
    }
`
export default Hero;