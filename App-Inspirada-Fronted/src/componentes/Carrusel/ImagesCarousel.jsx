import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styleImagesCarousel.css'

export const ImagesCarousel = ({images}) => {
  return (
    <Carousel className = "custom-carousel" showIndicators={false} autoPlay={true} interval={3000} infiniteLoop={true}>  
    {images.map((imageObj, index) => (
      <div key={index}>
        <img src={imageObj.url} alt={`Image ${index}`} />
        <div className="text-overlay">{imageObj.description} </div>
      </div>
    ))}
  </Carousel>
  )
}
