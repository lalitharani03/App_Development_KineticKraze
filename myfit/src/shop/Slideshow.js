

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

const Slideshow = ({ images = [] }) => {
  if (!images || images.length === 0) {
    return <p>No images available</p>;
  }

  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default Slideshow;