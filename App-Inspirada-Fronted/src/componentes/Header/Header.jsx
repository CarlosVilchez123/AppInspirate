import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './styleHeader.css'

export const Header = () => {

    return (
      <Container className="mt-4 mb-4">
        <Navbar className = "header-nav ml-5 mr-5" collapseOnSelect expand="lg" bg="light">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="px-3" href="#unete">Intranet Inspirada</Nav.Link>
            </Nav>
            <Navbar.Brand className="mx-auto" href="#home">
              <img className="logo" src='https://drive.google.com/uc?export=view?&id=1vJATMpE1U7YDkzA5bRBG0f8hwkktUrQB' alt="Logo"/>
            </Navbar.Brand>
        </Navbar.Collapse>
      </Navbar>
      <Container>
      </Container>
    </Container>
      );
}