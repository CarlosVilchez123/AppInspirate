import React from 'react';

import { ImagesCarousel } from '../../componentes/Carrusel/ImagesCarousel';
import { Welcome } from '../../componentes/Welcome/Welcome';
import { NavBarSuperior } from '../../componentes/Menus/NavBarSuperior/NavBarSuperior';

import images from '../../componentes/Carrusel/Images'

export const Home = () => {
  return (
    <div className="home">
      <h2>¡Bienvenidos a Inspírate UNI!</h2>
      <NavBarSuperior/>
      <ImagesCarousel images={images} />
      <Welcome/>
    </div>
  );
}