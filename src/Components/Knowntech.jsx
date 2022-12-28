import React from 'react';
import './Knowntech.css';
import { TechIconPill, TechIconPillSvg } from './';

const Knowntech = () => {
  return (
    <section className="section knowntech">
      <div className="container">
        <div className="tech-container-flex">
          <ul className="tech-grid">
            <TechIconPill
              classes="icon-pill span-2 rounded-top-left"
              icoclasses="icon-ico"
              faicon="fa-brands fa-html5"
              widthpercentage={95}
              progressbg="bg-html"
            />
            <TechIconPill
              classes="icon-pill span-2"
              icoclasses="icon-ico"
              faicon="fa-brands fa-css3-alt"
              widthpercentage={75}
              progressbg="bg-css"
            />
            <TechIconPill
              classes="icon-pill span-2 rounded-top-right"
              icoclasses="icon-ico"
              faicon="fa-brands fa-square-js"
              widthpercentage={45}
              progressbg="bg-js"
            />
            <TechIconPill
              classes="icon-pill span-3"
              icoclasses="icon-ico"
              faicon="fa-brands fa-sass"
              widthpercentage={65}
              progressbg="bg-sass"
            />
            <TechIconPill
              classes="icon-pill span-3"
              icoclasses="icon-ico"
              faicon="fa-brands fa-react"
              widthpercentage={30}
              progressbg="bg-react"
            />
            <TechIconPill
              classes="icon-pill span-2"
              icoclasses="icon-ico"
              faicon="fa-brands fa-bootstrap"
              widthpercentage={80}
              progressbg="bg-bootstrap"
            />
            <TechIconPillSvg
              classes="icon-pill span-2"
              icoclasses="icon-ico"
              widthpercentage={70}
              progressbg="bg-tailwind"
            />
          </ul>
          <div className="content-tech">hola</div>
        </div>
      </div>
    </section>
  );
};

export default Knowntech;
