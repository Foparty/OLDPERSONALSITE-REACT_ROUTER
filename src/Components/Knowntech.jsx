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
            <TechIconPill
              classes="icon-pill span-2"
              icoclasses="icon-ico"
              faicon="fa-brands fa-mdb"
              widthpercentage={80}
              progressbg="bg-mdb"
            />
            <TechIconPill
              classes="icon-pill span-3"
              icoclasses="icon-ico"
              faicon="fa-brands fa-github"
              widthpercentage={50}
              progressbg="bg-github"
            />
            <TechIconPill
              classes="icon-pill span-3"
              icoclasses="icon-ico"
              faicon="fa-brands fa-node-js"
              widthpercentage={20}
              progressbg="bg-node"
            />
            <TechIconPill
              classes="icon-pill span-6 rounded-bottom"
              icoclasses="icon-ico"
              faicon="fa-brands fa-npm"
              widthpercentage={80}
              progressbg="bg-npm"
            />
          </ul>
          <div className="content-tech">
            <h2 className="title">myStack( );</h2>
            <p className="code">
              Improving and adding new technologies to my Stack every day. Contact me and let me
              help you or you business take the next step!
            </p>
            <p className="code">Logic games and fixing bugs ❤️ = exercise for the brain 🧠</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowntech;
