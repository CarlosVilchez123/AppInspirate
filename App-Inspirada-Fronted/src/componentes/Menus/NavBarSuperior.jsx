import React, {  useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './styleNavBarSuperior.css'

export const NavBarSuperior = () => {

  const [activeKey, setActiveKey] = useState('home');

  return (
    <Container>
      <Nav fill variant="tabs" activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
        <Nav.Item>
          <Nav.Link className={activeKey === 'home' ? 'active-tab' : ''} eventKey="home" href="/home">Inicio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={activeKey === 'ovpgs' ? 'active-tab' : ''} eventKey="ovpgs" href='/ovpgs'>OVPGS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="igirl" disabled>IGirl</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="openday" disabled>Open Day</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};