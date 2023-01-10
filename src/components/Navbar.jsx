import React from 'react';
import Burger from './Burger';
import LightMode from '../images/darkmode.svg';
import DarkMode from '../images/lightmode.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({mode, setMode, menu, setMenu}) => {

  console.log(mode)
  return (
    <NavStyle $mode={mode} menu={menu}>
        <h2>Vic<span>Kode</span></h2>
        <Burger menu={menu} setMenu={setMenu}/>
        <ul>
            <li><a href='#home'><span>1.</span> Home</a></li>
            <li><a href='#skills'><span>2.</span> Skills</a></li>
            <li><a href='#qualifications'><span>3.</span> Qualification</a></li>
            <li><a href='#myworks'><span>4.</span> My Works</a></li>
            <li><a href='#testimonials'><span>5.</span> Testimonials</a></li>
            <li><a href='#contact'><span>6.</span> Contact</a></li>
            <div onClick={()=> setMode(!mode)}>
                <img src={mode? LightMode: DarkMode} alt="lightmode" className='w-[30px] h-[30px]' />
            </div>
        </ul>
    </NavStyle>
  )
}

const NavStyle = styled.div`
  position:fixed;
  display:flex;
  justify-content:space-between;
  top:0;
  width:100%;
  right:0;
  padding:2rem 5rem;
  background-color:${({ mode }) => mode ?'rgba(0,0,0, 0.7)':'#FBFBFB'};
  z-index:99;
  h2{
    font-size:2rem;
    font-weight:600;
    span{
    }
  }
  ul{
    display:flex;
    justify-content:space-between;
    transition: all 2s linear;
    transform: ${({ menu }) => menu ? 'translateX(20px)' : 'translateX(-100px)'};
    li{
      margin:0 1rem;
      font-size:1.2rem;
      font-weight:600;
      color: #494848;
      transition:.3s;
      span{
        font-weight:600;
      }
    }
  }
  @media screen and (max-width:680px){
    padding:2rem;
      ul{
  display:${({menu})=>menu?'block':'none'};
  position:fixed;
  background-color:#fff;
  width:50%;
  height:fit-content;
  top:0;
  left:0;
  padding:1rem;
  z-index:2;
  transition: all 2s linear;
    transform: ${({ menu }) => menu ? 'translateX(0)' : 'translateX(-100px)'};
}
    }
`

export default Navbar