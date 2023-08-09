import React from 'react';

import { ImagesCarousel } from '../../componentes/Carrusel/ImagesCarousel'
import { Welcome } from '../../componentes/Welcome/Welcome'
import { NavBarSuperior} from '../../componentes/Menus/NavBarSuperior'
import {motion} from 'framer-motion'
import images from '../../componentes/Carrusel/Images';
export const Home = () => {
  return (
    <div className="home">
      <h2 style={{marginLeft : '10px', marginTop: '3px'}}>¡Bienvenidos a Inspírate UNI!</h2>
      <NavBarSuperior/>
      <ImagesCarousel images={images} />
      <Welcome/>
    </div>
  );
}