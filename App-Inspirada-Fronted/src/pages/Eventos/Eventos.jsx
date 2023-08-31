import React from 'react'
import './Eventos.css'
import { Logos } from './Logos'
export const Eventos = () => {
  const logos = [
    {src:"https://drive.google.com/uc?export=view?&id=1CcAlzM5RGxmw8mjg9lckW-NiOntnYyL2", descripcion: "hola soy la descripcion"},
    {src:"https://drive.google.com/uc?export=view?&id=1CcAlzM5RGxmw8mjg9lckW-NiOntnYyL2", descripcion: "hola soy la descripcion"}
  ]

  return (
    <>
        <div className='container-main'>
            <h1>Más de nostros</h1>
            <p>Mucho texto aqui abajo</p>
        </div>

        <div className="gallery">
      {logos.map((logo, index) => (
        <Logos key={index} src={logo.src} descripcion={logo.descripcion} />
      ))}
    </div>
    </>
  )
}
