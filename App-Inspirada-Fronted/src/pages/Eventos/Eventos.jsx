import React from 'react'
import './Eventos.css'
import { eventosData } from './EventosData'
import { Link } from 'react-router-dom';

export const Eventos = () => {  
  return (
    <div className="eventos">
    {eventosData.map((item) => (
      <div key={eventosData.id} className="evento">
        <Link to={`/home/${encodeURIComponent(item.id)}`}>
        <h2>{item.titulo}</h2>
        <img src={item.portada} alt={item.titulo} />
        <p>{item.desc}</p>
        </Link>
      </div>
    ))}
  </div>

  )
}
