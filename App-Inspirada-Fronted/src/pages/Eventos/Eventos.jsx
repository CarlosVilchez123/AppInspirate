import React from 'react'
import './Eventos.css'
import { eventosData } from './EventosData'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Eventos = () => {  

  const TabContent = styled(motion.div)`
  width: 100%;
`;

  return (
    <TabContent
      initial={{ opacity: '0%' }}
      animate={{ opacity: '100%'}}
      transition={{ duration: '1.0' }}>
        <h1>¿Que actividades esperar de nostros?</h1>
        <p>Como organizacion estudiantil dedicada a las orientaciones vocacionales... (mucho texto)</p>
        <div className="eventos">
        {eventosData.map((item) => (
            <Link to={`/home/${encodeURIComponent(item.id)}`}>
            <h2>{item.titulo}</h2>
              <div key={eventosData.id} className="card-content">
                <div className="card-content-inner">
                  <div className="front">
                    <img src={item.portada} alt={item.titulo} />
                  </div>
                  <div className="back">
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            </Link>
        ))}
      </div>
    </TabContent>

  )
}
