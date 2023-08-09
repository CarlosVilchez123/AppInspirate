import React from 'react'
import ReactDOM from 'react-dom/client'
//---------------------------------------------------------
import { Menu } from './componentes/Menus/Menu'

import images from './componentes/Carrusel/Images'
import { ImagesCarousel } from './componentes/Carrusel/ImagesCarousel'

import { MenuInferior } from './componentes/Menus/MenuInferior'
import { Welcome } from './componentes/Welcome/Welcome'

import { Footer } from './componentes/Footer/Footer'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
)
