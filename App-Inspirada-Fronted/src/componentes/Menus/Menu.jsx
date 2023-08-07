import React from 'react'
import './styleMenuUp.css'
export const Menu = () => {
  return (
    <>
        <div className='menu-container'>
            <nav>
                <ul className='menu-options'>
                    <li>  Iniciar Sesion </li>|
                    <li>  Unete</li>
                </ul>
            </nav>
            <img className='logo-iuni' src="https://drive.google.com/uc?export=view?&id=1vJATMpE1U7YDkzA5bRBG0f8hwkktUrQB" alt="" />

            <form className='navegador'>
                <input type="text" 
                        placeholder='Navegar'
                />
            </form>  
        </div>
    </>
  )
}
