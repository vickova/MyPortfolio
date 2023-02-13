import React from 'react';
import { StyledBurger } from '../Style';
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

export default Burger