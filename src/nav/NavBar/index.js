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
        <Link to="/">Hello World</Link>
        <Link to="/">Hello World</Link>
        <Link to="/">Hello World</Link>
      </NavLinks>
    </Nav>
  )
}

export default NavBar;

