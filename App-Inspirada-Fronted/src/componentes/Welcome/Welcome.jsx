import React from 'react'
import './styleWelcome.css'
import { Card, Row, Col, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LeftContainer = styled(motion.div)`
  position: absolute;
  left: 0;
`;

const RightContainer = styled(motion.div)`
  position: absolute;
  right: 0;
`;

export const Welcome = () => {
  return (
    <Container>
      <div style={{ position: 'relative', height: '20vh' }}>
      <LeftContainer
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Card className="mb-2" bg="light" style={{ width: '40rem' }}>
        <Card.Body>
          <Card.Title>Bienvenido a Inspirate UNI</Card.Title>
          <Card.Subtitle>
            ¿Quiénes somos?
          </Card.Subtitle>
          <Card.Text>
            Somos una Asociación Estudiantil formada en la Universidad Nacional de Ingeniería 
            dedicada a la orientacion vocacional para jóvenes estudiantes de colegios y academias.
          </Card.Text>
        </Card.Body>
      </Card>
    </LeftContainer>
    </div>

    <div style={{ position: 'relative', height: '20vh' }}>
    <RightContainer
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 100, opacity: 0 }}
    transition={{ duration: 1 }}
    >
    <Card className="mb-2" bg="light" style={{ width: '40rem' }}>
    <Card.Body>
      <Card.Title>Misión</Card.Title>
      <Card.Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eleifend viverra sapien ac suscipit. Class aptent taciti 
      sociosqu ad litora torquent per conubia nostra, per inceptos.
      </Card.Text>
    </Card.Body>
    </Card>
    </RightContainer>
    </div>
  </Container>
)
};
