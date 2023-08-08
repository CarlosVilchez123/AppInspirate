import React from 'react'
import ReactDOM from 'react-dom/client'
//---------------------------------------------------------
import { Menu } from './componentes/Menus/Menu'

import images from './componentes/Carrusel/Images'
import { ImagesCarousel } from './componentes/Carrusel/ImagesCarousel'

import { MenuInferior } from './componentes/Menus/MenuInferior'
import { Welcome } from './componentes/Welcome/Welcome'
import { Footer } from './componentes/Footer/Footer'

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="app">
    <body>
      <Menu />
      <MenuInferior />
      <ImagesCarousel images={images} />
      <Welcome 
        title="Bienvenido a Inspirate UNI"
        subtitle="¿Quiénes somos?"
        description="Somos una Asociación Estudiantil formada en la Universidad Nacional de Ingeniería
                      dedicada a la orientacion vocacional para jóvenes estudiantes de colegios y academias."
      />
      </body>
    <Footer/>
  </div>
)
