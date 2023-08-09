import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './styleHeader.css'

export const Header = () => {

    return (
      <Container className="mt-4 mb-4">
        <Navbar className = "ml-5 mr-5" collapseOnSelect expand="lg" bg="light">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="px-3" href="#login">Iniciar sesión</Nav.Link>
              <Nav.Link className="px-3" href="#login">Únete</Nav.Link>
            </Nav>
            <Navbar.Brand className="mx-auto" href="#home">
              <img className="logo" src='https://drive.google.com/uc?export=view?&id=1vJATMpE1U7YDkzA5bRBG0f8hwkktUrQB' alt="Logo" />
            </Navbar.Brand>
            <Form className="ml-auto">
              <Row className="align-items-center px-3">
                <Col xs="auto">
                  <FormControl type="text" placeholder="Buscar" />
                </Col>
                <Col xs="auto" >
                  <Button variant="outline-success">Buscar</Button>
                </Col>
              </Row>
            </Form>
        </Navbar.Collapse>
      </Navbar>
    </Container>
      );
}