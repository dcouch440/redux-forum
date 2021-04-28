import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavLinks, Logo } from './styles';

const NavBar = () => {
  return(
    <Nav>
      <Logo>
        Dogs Corner
      </Logo>
      <NavLinks>
        <Link to="/">FORUM</Link>
        <Link to="/new">NEW POST</Link>
        <Link to="/234234234234">DOGS SECRET</Link>
      </NavLinks>
    </Nav>
  )
}

export default NavBar;

