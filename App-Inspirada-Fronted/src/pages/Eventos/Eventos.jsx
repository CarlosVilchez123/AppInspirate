import React from 'react'
import './Eventos.css'
import { Logos } from './Logos'
import ejemplo from '../Eventos/ejemplo.png'
import './Eventos.css'
export const Eventos = () => {
  const logos = [
    {src:'https://drive.google.com/uc?export=view?&id=1CcAlzM5RGxmw8mjg9lckW-NiOntnYyL2', descripcion: "ovpgs"},
    {src:'https://drive.google.com/uc?export=view?&id=1CcAlzM5RGxmw8mjg9lckW-NiOntnYyL2', descripcion: "Ponencias"},
    {src:'https://drive.google.com/uc?export=view?&id=1CcAlzM5RGxmw8mjg9lckW-NiOntnYyL2', descripcion: "Visitas Guiadas"}
  ]

  return (

    <div className='container-container'>
      <div className='container-eventos'>
          <div className='container-main'>
              <h1>Más sobre nosotros</h1>
              <p>Mucho texto aqui abajo</p>
          </div>

          <div className="gallery">
            {logos.map((logo, index) => (
              <Logos key={index} src={logo.src} descripcion={logo.descripcion} />
            ))}
          </div>
      </div>
    </div>
  )
}
