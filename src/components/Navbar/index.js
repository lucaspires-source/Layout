import React from 'react'

import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLogo,
  BrandLink
} from './styles'
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo>
            <BrandLink to='/'>Healty Food</BrandLink>
        </NavLogo>
        <NavMenu>
          <NavLink>
            <a href="/">Healthy Recipes</a>
          </NavLink>
          <NavLink >
            <a href="/">Blog</a>
          </NavLink>
          <NavLink >
            <a href="/">Join</a>
          </NavLink>
          <NavBtn>
          <NavBtnLink to='/register'>Register</NavBtnLink>
        </NavBtn>
    </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;