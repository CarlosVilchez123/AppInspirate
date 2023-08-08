import React from 'react'
import './styleWelcome.css'

const HalfScreenDiv = ({ text, alignLeft }) => {
  const divClass = alignLeft ? 'third-screen-div left-text' : 'third-screen-div right-text';
  
  return (
    <div className={divClass}>
      {text}
    </div>
  );
};

export const Welcome = () => {
  return (
          <div>
            <div className='third-screen-div'>
                  <div className="left-text">
                    <h1>Bienvenido a Inspirate UNI</h1>
                    <h2>¿Quiénes somos?</h2>
                    <p>Somos una Asociación Estudiantil formada en la Universidad Nacional de Ingeniería 
                      dedicada a la orientacion vocacional para jóvenes estudiantes de colegios y academias.</p>
                  </div>
                </div>
                <div className='third-screen-div'>
                <div className="right-text">
                  <h1>Misión</h1>
                  <h2>Asociación estudiantil formada</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eleifend viverra sapien ac suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras placerat diam mi, sed pharetra elit sollicitudin quis. Vestibulum sodales ligula sed nibh condimentum lobortis. Aenean scelerisque purus at tellus tristique, nec eleifend sem euismod. Pellentesque a massa nec diam fringilla egestas at in lorem. Integer tristique, nulla et cursus fringilla, mauris purus suscipit sapien, nec semper ex elit vitae est. Donec dictum eros ut elit vehicula, ac efficitur diam lobortis. Aliquam tempor accumsan felis, id molestie lorem aliquam in. Praesent convallis diam at nunc iaculis tincidunt. Sed dignissim libero libero, id consectetur est maximus eget. Fusce in accumsan urna. Sed viverra dapibus diam in ornare. Ut ac commodo lectus.</p>
                </div>
                </div>
                <div className='third-screen-div'>
                  <div className="left-text">
                    <h1>Visión</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eleifend viverra sapien ac suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras placerat diam mi, sed pharetra elit sollicitudin quis. Vestibulum sodales ligula sed nibh condimentum lobortis. Aenean scelerisque purus at tellus tristique, nec eleifend sem euismod. Pellentesque a massa nec diam fringilla egestas at in lorem. Integer tristique, nulla et cursus fringilla, mauris purus suscipit sapien, nec semper ex elit vitae est. Donec dictum eros ut elit vehicula, ac efficitur diam lobortis. Aliquam tempor accumsan felis, id molestie lorem aliquam in. Praesent convallis diam at nunc iaculis tincidunt. Sed dignissim libero libero, id consectetur est maximus eget. Fusce in accumsan urna. Sed viverra dapibus diam in ornare. Ut ac commodo lectus.</p>
                  </div>
                </div>
                <div className='third-screen-div'>
                  <div className="right-text">
                    <h1>¿Qué son las OVPGS?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eleifend viverra sapien ac suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras placerat diam mi, sed pharetra elit sollicitudin quis. Vestibulum sodales ligula sed nibh condimentum lobortis. Aenean scelerisque purus at tellus tristique, nec eleifend sem euismod. Pellentesque a massa nec diam fringilla egestas at in lorem. Integer tristique, nulla et cursus fringilla, mauris purus suscipit sapien, nec semper ex elit vitae est. Donec dictum eros ut elit vehicula, ac efficitur diam lobortis. Aliquam tempor accumsan felis, id molestie lorem aliquam in. Praesent convallis diam at nunc iaculis tincidunt. Sed dignissim libero libero, id consectetur est maximus eget. Fusce in accumsan urna. Sed viverra dapibus diam in ornare. Ut ac commodo lectus.</p>
                  </div>
                </div>
                <div className='third-screen-div'>
                  <div className="left-text">
                    <h1>¿Cómo puedo formar parte?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eleifend viverra sapien ac suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras placerat diam mi, sed pharetra elit sollicitudin quis. Vestibulum sodales ligula sed nibh condimentum lobortis. Aenean scelerisque purus at tellus tristique, nec eleifend sem euismod. Pellentesque a massa nec diam fringilla egestas at in lorem. Integer tristique, nulla et cursus fringilla, mauris purus suscipit sapien, nec semper ex elit vitae est. Donec dictum eros ut elit vehicula, ac efficitur diam lobortis. Aliquam tempor accumsan felis, id molestie lorem aliquam in. Praesent convallis diam at nunc iaculis tincidunt. Sed dignissim libero libero, id consectetur est maximus eget. Fusce in accumsan urna. Sed viverra dapibus diam in ornare. Ut ac commodo lectus.</p>
                  </div>
                </div>
                <div className='third-screen-div'>
                  <div className="right-image">
                    <h2>Nuestra mascota Cai</h2>
                    <img src ="https://i.pinimg.com/originals/dd/4a/1a/dd4a1ac7e20ea5b5d3ff3d8f3f1c323d.png" alt ="Mascota"></img>
                  </div>
                </div>
            </div>

)
}
