import React from 'react';
import Burger from './Burger';
import { useLocation } from 'react-router-dom';
import { FiMoon } from 'react-icons/fi';
import { FaStarAndCrescent } from 'react-icons/fa';
import { NavStyle } from '../Style';



const Navbar = ({mode, setMode, menu, setMenu}) => {
const {pathname} = useLocation();

  return (
    <NavStyle $mode={mode} menu={menu}>
        <h2>Vic<span>Kode</span></h2>
        <Burger menu={menu} setMenu={setMenu}/>
        <ul>
            <li><a href='#home' style={{color:`${pathname === '/'? '#ed9ca9':''}`}} onClick={()=> setMenu(false)}> Home</a></li>
            <li><a href='#skills' style={{color:`${pathname === '/skills'? '#ed9ca9':''}`}} onClick={()=> setMenu(false)}> Skills</a></li>
            <li><a href='#qualifications' style={{color:`${pathname === '/#qualifications'? '#ed9ca9':''}`}} onClick={()=> setMenu(false)}> Qualification</a></li>
            <li><a href='#myworks' style={{color:`${pathname === '/#myworks'? '#ed9ca9':''}`}} onClick={()=> setMenu(false)}> My Works</a></li>
            <li><a href='#testimonials' style={{color:`${pathname === '/testimonials'? '#ed9ca9':''}`}} onClick={()=> setMenu(false)}> Testimonials</a></li>
            <li><a href='#contact' style={{color:`${pathname === '/#contact'? '#ed9ca9':''}`}} onClick={()=> setMenu(false)}> Contact</a></li>
            <div onClick={()=> setMode(!mode)} className='mode'>
              {mode?
              <FiMoon className='h-[30px] w-[28px] hover:text-[#ed9ca9] hover:cursor-pointer'/>:
                <FaStarAndCrescent className='h-[30px] w-[28px] hover:text-[#ed9ca9] hover:cursor-pointer text-[#ed9ca9]'/>
              }
            </div>
        </ul>
    </NavStyle>
  )
}

export default Navbar