import React from 'react'
import ReactDOM from 'react-dom/client'
//---------------------------------------------------------
import { Menu } from './componentes/Menus/Menu'

import images from './componentes/Carrusel/Images'
import { ImagesCarousel } from './componentes/Carrusel/ImagesCarousel'

import { MenuInferior } from './componentes/Menus/MenuInferior'
import { Welcome } from './componentes/Welcome/Welcome'

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu />
    <MenuInferior />
    <ImagesCarousel images={images} />
    <Welcome 
      title="Bienvenido a Inspirate UNI"
      subtitle="¿Quines somos?"
      description="Somos una Asociacion estudiantil formada en la Universidad nacional de Ingenieria
                    dedicada a la orientacion vocacional en jovenes estudiantiles de colegio y academias"
    />
  </React.StrictMode>,
)
