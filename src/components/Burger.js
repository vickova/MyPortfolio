import React from 'react';
import styled from 'styled-components';

const Burger = ({menu, setMenu}) => {
  const MenuToggle = ()=>{
    setMenu(!menu);
  }
  return (
    <StyledBurger menu={menu} onClick={MenuToggle}>
        <div></div>
        <div></div>
        <div></div>
    </StyledBurger>
  )
}

const StyledBurger = styled.button`
    display: none;
    flex-direction: column; 
    justify-content: space-around; 
    width: 1.8rem; 
    height: 1.8rem;
    background: transparent; 
    border: none; 
    cursor: pointer; 
    padding: 0; 
    z-index: 10; 
    &:focus { outline: none; } 
    div { 
        width: 2rem; 
        height: 0.25rem;
        background: #121212; 
        border-radius: 10px; 
        transition: all 0.3s linear; 
        position: relative; 
        transform-origin: 1px; 
        :first-child { transform: ${({ menu }) => menu ? 'rotate(40deg)' : 'rotate(0)'}; } 
        :nth-child(2) { opacity: ${({ menu }) => menu ? '0' : '1'}; 
        transform: ${({ menu }) => menu ? 'translateX(20px)' : 'translateX(0)'}; } 
        :nth-child(3) { transform: ${({ menu }) => menu ? 'rotate(-40deg)' : 'rotate(0)'}; } }
        @media screen and (max-width:680px){
          width:1rem;
          div{
            width:1.5rem;
            height:0.2rem;
            :first-child { transform: ${({ menu }) => menu ? 'rotate(55deg)' : 'rotate(0)'}; } 
            :nth-child(2) { opacity: ${({ menu }) => menu ? '0' : '1'}; 
            transform: ${({ menu }) => menu ? 'translateX(20px)' : 'translateX(0)'}; } 
            :nth-child(3) { transform: ${({ menu }) => menu ? 'rotate(-55deg)' : 'rotate(0)'}; }
          }
        }
        @media screen and (max-width:680px){
          display:flex;
        }
`
export default Burger