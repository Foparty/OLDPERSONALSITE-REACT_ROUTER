import React from 'react';
import './Home.css';
import { Knowntech, Landing } from '../Components';
import Paralax from './Paralax';
import { Workpreview } from './';

const Home = () => {
  return (
    <>
      <Landing />
      <Knowntech />
      <Paralax />
      <Workpreview />
      {/*
      <section className="paralax-container">
        <img src="./img/paralax1.jpg" className="paralax-background" alt="" />
        <h3 className="paralax-foreground">Texto o boton que va por encima</h3>
      </section>
      <section className="columnpoints text-center">
        <h2 className="title-text underline hidden">powerfull inside</h2>
        <div className="columnpoints-grid hidden">
          <div className="grid-item hidden">
            <i className="fa-brands fa-bootstrap"></i>
            <div className="grid-text-container">
              <h3 className="grid-title">bootstrap 5</h3>
              <p className="grid-text">
                Build responsive, mobile-first projects on the web with the world's most popular
                front-end component library.
              </p>
            </div>
          </div>
          <div className="grid-item hidden">
            <i className="fa-brands fa-mdb"></i>
            <div className="grid-text-container">
              <h3 className="grid-title">responsive CSS helper classNamees</h3>
              <p className="grid-text">
                Toggle styles on any element, across any breakpoint according to Bootstrap grid
                system, using Sparrow's CSS helper classNamees.
              </p>
            </div>
          </div>
          <div className="grid-item hidden">
            <i className="fa-brands fa-bots"></i>
            <div className="grid-text-container">
              <h3 className="grid-title">32 sets of elements</h3>
              <p className="grid-text">
                Elegantly redesigned popular plugins including touch sliders, typed text, parallax,
                video background and more.
              </p>
            </div>
          </div>
          <div className="grid-item hidden">
            <i className="fa-solid fa-person-booth"></i>
            <div className="grid-text-container">
              <h3 className="grid-title">buttery smooth animation 5</h3>
              <p className="grid-text">
                Crazy fast, responsive, efficient and freakishly robust GSAP; giving you the new
                standard for HTML5 and javascript animation.
              </p>
            </div>
          </div>
          <div className="grid-item hidden">
            <i className="fa-solid fa-book-open"></i>
            <div className="grid-text-container">
              <h3 className="grid-title">modular & multipurpose</h3>
              <p className="grid-text">
                Create rich UI and style with sparrow's array of ready-made modular sections -
                carefully designed for wide range of purposes.
              </p>
            </div>
          </div>
          <div className="grid-item hidden">
            <i className="fa-solid fa-swatchbook"></i>
            <div className="grid-text-container">
              <h3 className="grid-title">familiar markup</h3>
              <p className="grid-text">
                Based on the Bootstrap 4 code base, sparrow's code is instantly familiar, easy to
                understand and a straightforward to extend.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Home;
