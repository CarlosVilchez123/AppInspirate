import React from 'react'

export const Logos = ({src, descripcion}) => {
  return (
    <>
    <div className="logo">
        <img src={src} alt={descripcion} />
        <div className="description">{descripcion}</div>
    </div>
    </>
  )
}
