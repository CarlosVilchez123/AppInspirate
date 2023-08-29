import React, {  useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './styleNavBarSuperior.css'


export const NavBarSuperior = () => {

  // Outlet -> Se utiliza para decirle al componente padre donde debe renderizar a sus componentes hijos.
  
  return (
    <Container>
      <Nav className="menu-nav" fill variant="tabs" defaultActiveKey="home">
        <Nav.Item>
          <Nav.Link as={Link} eventKey="home" to={"/home/inicio"}>Inicio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="ovpgs" to={"/home/ovpgs"}>OVPGS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="igirl" to={"/home/igirl"}>IGirl</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="openday" disabled>Open Day</Nav.Link>
        </Nav.Item>
      </Nav>
      <Outlet/>
    </Container>
  );
};