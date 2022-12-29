import React from 'react';
import './Imagen.css';

const Imagen = ({ src, alt }) => {
  return <img src={src} alt={alt} className="image-auto paralax-background" />;
};

export default Imagen;
