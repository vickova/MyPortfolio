import React from 'react';
import Vicky from '../images/myvick.png';
import LinkedIn from '../images/linkedin.svg';
import Twitter from '../images/twitter.svg';
import Github from '../images/github.svg';
import styled from 'styled-components';
import {FaTwitter} from 'react-icons/fa'

const Hero = () => {
  return (
    <HeroStyle id='home'>
      <div className='images'>
                <img src={LinkedIn} alt="" className='w-[35px] h-[35px]'/>
                <img src={Twitter} alt=""  className='w-[35px] h-[35px]'/>
                <img src={Github} alt="" className='w-[35px] h-[35px]'/>
        </div>
        <div className='heros'>
        <div className='herotext'>
            <h2>Hello, I'm Victoria Olumide</h2>
            <h3>A Daring Frontend Developer and Data Analyst</h3>
            <p>I optimize user experience by implementing visual elements that users see and interact with within a web application</p>
            <button>Download CV</button>
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
    background-color: #317773;
    padding:1rem;
    font-size:1.5rem;
    font-weight:500;
    color:rgb(255, 255, 255);
    margin:2rem 0;
    border-radius:10px;
  }
  h2{
    font-size:4rem;
    line-height:4rem;
  }
  h3{
    font-size:2rem;
  }
  p{
    font-size:1.5rem;
    margin:1rem 0;
  }
  .profile{
    width:35%;
    img{
    /* background-color:#317773; */
    /* border: 10px solid #317773; */
    /* border-style:dotted; */
    }
  }
`
export default Hero;