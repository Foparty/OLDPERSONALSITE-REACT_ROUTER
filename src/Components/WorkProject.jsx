import React from 'react';
import './WorkProject.css';
import { gabriel } from '../assets';

const WorkProject = () => {
  return (
    <article className="project">
      <a
        href="https://gabrielitoweb.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="project-card"
      >
        <img className="project-avatar" src={gabriel} alt="" />
      </a>
      <aside className="project-info">
        <a href="https://gabrielitoweb.netlify.app/" target="_blank" rel="noreferrer">
          <h3 className="project-title">Gabriel Asdrúbal | Fotografía y Arquitectura</h3>
        </a>
        <h4>Project Description:</h4>
        <p>
          Interesting React project in witch I had to overcome problems with grid layout, and help
          me come up with interesting concepts for it and future projects. As well as fixing text
          resize for better responsive sites.
        </p>
      </aside>
    </article>
  );
};

export default WorkProject;
