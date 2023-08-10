import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './styleNavBarSuperior.css'

export const NavBarSuperior = () => {
  return (
    <Container>
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Inicio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/ovpgs" href='/ovpgs'>OVPGS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>IGIrl</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>Open Day</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};