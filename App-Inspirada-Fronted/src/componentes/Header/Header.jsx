import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './styleHeader.css'

export const Header = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" >
        <Navbar.Brand className="brand-center" href="#home">
          <img className="logo" src='https://drive.google.com/uc?export=view?&id=1vJATMpE1U7YDkzA5bRBG0f8hwkktUrQB' alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#login">Iniciar sesión</Nav.Link>
            <Nav.Link href="#login">Únete</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      );
}


