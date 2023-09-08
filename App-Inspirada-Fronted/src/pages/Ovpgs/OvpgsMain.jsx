import React from 'react'
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importa Link
import './OvpgsMain.css'
export const OvpgsMain = () => {
  return (
    <>
        <div className='container-presentacion-ovpgs'>
            <h1>¿Qué son las OVPGs?</h1>
            <p>Las Ovpgs son .... (mucho texto)</p>
        </div>

        <div>
    
        <Link to="/home/ovpgs-inscripcion" className="button-activity">
          <div> Inscribirse aqui</div>
        </Link>
      </div>
    </>
  )
}
