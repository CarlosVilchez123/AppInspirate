import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './styleNavBarSuperior.css'

export const NavBarSuperior = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="#inicio">Inicio</Nav.Link>
          <Nav.Link href="#ovgps">OVGPS</Nav.Link>
          <Nav.Link href="#igirl">IGirl</Nav.Link>
          <Nav.Link href="#openday">Open Day</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};