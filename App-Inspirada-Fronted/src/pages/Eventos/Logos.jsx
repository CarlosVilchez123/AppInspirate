import React from 'react'
import './Logos.css'
import { Nav } from 'react-bootstrap'
import { LineAxis } from '@mui/icons-material'
import { Link } from 'react-router-dom'

export const Logos = ({src, descripcion}) => {
  return (
    <>
   
      <div className="logos">
        <Link to={'/home/inicio'}>
          <img src={src} alt={descripcion} />
          <div className="description">{descripcion}</div>
        </Link>
          
      </div>
    
    </>
  )
}
