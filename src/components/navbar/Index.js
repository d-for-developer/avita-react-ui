import React from 'react';
import logo from '../../assets/img/logo.png'; // Tell webpack this JS file uses this image


import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
  return (

    <div className="row">
      <div className="col-md-1">
    <img src={logo} alt="Logo" style={{width:120, marginLeft:50} } />
    </div>
    <div className="col-md-11">
    <Nav>

      <Bars />

      <NavMenu>
        <NavLink to='/home'>
          Home
        </NavLink>
        <NavLink to='/about'>
          About Us
        </NavLink>
        <NavLink to='/services'>
          Services
        </NavLink>
        <NavLink to='/products'>
          Products
        </NavLink>
        <NavLink to='/case-studies'>
          Case Studies
        </NavLink>
        <NavLink to='/contact-us'>
          Connects
        </NavLink>
        <NavLink to='/dashboard'>
          Dashboard
      </NavLink>

      </NavMenu>
      <NavBtn>
        <NavBtnLink to='/login'>Log In</NavBtnLink>
      </NavBtn>
    </Nav>
    </div>
    </div>
    
  );
};

export default Navbar;
