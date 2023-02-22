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
              widthpercentage={3}
              progressbg="bg-html"
            />
            <TechIconPill
              classes="icon-pill span-2"
              icoclasses="icon-ico"
              faicon="fa-brands fa-css3-alt"
              widthpercentage={3}
              progressbg="bg-css"
            />
            <TechIconPill
              classes="icon-pill span-2 rounded-top-right"
              icoclasses="icon-ico"
              faicon="fa-brands fa-square-js"
              widthpercentage={1}
              progressbg="bg-js"
            />
            <TechIconPill
              classes="icon-pill span-3"
              icoclasses="icon-ico"
              faicon="fa-brands fa-sass"
              widthpercentage={2}
              progressbg="bg-sass"
            />
            <TechIconPill
              classes="icon-pill span-3"
              icoclasses="icon-ico"
              faicon="fa-brands fa-react"
              widthpercentage={1}
              progressbg="bg-react"
            />
            <TechIconPill
              classes="icon-pill span-2"
              icoclasses="icon-ico"
              faicon="fa-brands fa-bootstrap"
              widthpercentage={3}
              progressbg="bg-bootstrap"
            />
            <TechIconPillSvg
              classes="icon-pill span-2"
              icoclasses="icon-ico"
              widthpercentage={1}
              progressbg="bg-tailwind"
            />
            <TechIconPill
              classes="icon-pill span-2"
              icoclasses="icon-ico"
              faicon="fa-brands fa-mdb"
              widthpercentage={3}
              progressbg="bg-mdb"
            />
            <TechIconPill
              classes="icon-pill span-3"
              icoclasses="icon-ico"
              faicon="fa-brands fa-github"
              widthpercentage={2}
              progressbg="bg-github"
            />
            <TechIconPill
              classes="icon-pill span-3"
              icoclasses="icon-ico"
              faicon="fa-brands fa-node-js"
              widthpercentage={0}
              progressbg="bg-node"
            />
            <TechIconPill
              classes="icon-pill span-6 rounded-bottom"
              icoclasses="icon-ico"
              faicon="fa-brands fa-npm"
              widthpercentage={2}
              progressbg="bg-npm"
            />
          </ul>
          <div className="content-tech">
            <h2 className="title">myStack( );</h2>
            <p className="code">
              Passionate human, future father and husband, massage therapist, problem solver, and
              yeah... sometimes I code to make your projects come to life!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowntech;
