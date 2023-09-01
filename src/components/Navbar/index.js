import React from 'react';
import './navbar.css';
import { Bars, Nav, NavLink, NavIcon, Logo } from './NavbarElements'
const navLogo = "https://ik.imagekit.io/vndn6dm18/bg.png?updatedAt=1693576451367"


const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
            <img id='logo' src={navLogo} alt="logo" />
            <NavIcon onClick={toggle}>
                <Bars />
            </NavIcon>

        </Nav>
    </>
  )
}

export default Navbar
