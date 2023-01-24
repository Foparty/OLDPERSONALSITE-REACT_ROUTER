import React from 'react';
import { Imagen } from '../Components';
import { parabg } from '../assets';
import './Paralax.css';

const Paralax = () => {
  return (
    <section className="paralax-container">
      <Imagen src={parabg} alt="computer things" />
      {/* <h3 className="paralax-foreground">Texto o boton que va por encima</h3> */}
    </section>
  );
};

export default Paralax;
