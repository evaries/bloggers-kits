import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const NavComponent = () => {
  return (
    <div className="NavComponent">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/home">Be Blogger</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/home">home</Nav.Link>
            <Nav.Link href="/kits">kits</Nav.Link>
            <Nav.Link href="/about">about</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
};

export default NavComponent
