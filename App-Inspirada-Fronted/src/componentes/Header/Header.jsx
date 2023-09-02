import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './styleHeader.css'

export const Header = () => {

    return (
        <Navbar >
          <Navbar.Collapse >
            <Nav className="mr-auto">
              <Nav.Link className="px-3" href="#unete">Intranet Inspirada</Nav.Link>
            </Nav>
            <Navbar.Brand className="mx-auto" href="#home">
              <img className="logo" src='https://drive.google.com/uc?export=view?&id=1vJATMpE1U7YDkzA5bRBG0f8hwkktUrQB' alt="Logo"/>
            </Navbar.Brand>
          </Navbar.Collapse>
        </Navbar>
    );
}
