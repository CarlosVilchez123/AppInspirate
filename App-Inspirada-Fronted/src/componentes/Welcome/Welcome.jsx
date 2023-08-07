import React from 'react'
import './Welcome.css'
export const Welcome = ({title, subtitle, description}) => {
  return (
    <>
        <div className='half-screen-div'>
            <div className="text-component">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <p>{description}</p>
            </div>
        </div>
        
    </>
  )
}
