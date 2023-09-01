import React from 'react';
import './navbar.css';
import { Bars, Nav, NavLink, NavIcon, Logo } from './NavbarElements'


const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
            
            
            <img id='logo' src={require("../../images/logo.png")} alt="logo" />


            <NavIcon onClick={toggle}>
                <Bars />
            </NavIcon>

        </Nav>
    </>
  )
}

export default Navbar
