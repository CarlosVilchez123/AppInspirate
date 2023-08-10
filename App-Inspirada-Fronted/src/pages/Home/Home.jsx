import React from 'react';

import { ImagesCarousel } from '../../componentes/Carrusel/ImagesCarousel'
import { Welcome } from '../../componentes/Welcome/Welcome'
import { NavBarSuperior} from '../../componentes/Menus/NavBarSuperior'
import images from '../../componentes/Carrusel/Images';
export const Home = () => {
  return (
    <div className="home">
      <NavBarSuperior/>
      <ImagesCarousel images={images} />
      <Welcome/>
    </div>
  );
}