import React from 'react';
import './WorkProject.css';

const WorkProject = ({ url, img, title, description }) => {
  return (
    <article className="project">
      <a href={url} target="_blank" rel="noreferrer" className="project-card">
        <img className="project-avatar" src={img} alt="" />
      </a>
      <aside className="project-info">
        <a href={url} target="_blank" rel="noreferrer">
          <h3 className="project-title">{title}</h3>
        </a>
        {/* <h4>Project Description:</h4> */}
        {/* <p>{description}</p> */}
      </aside>
    </article>
  );
};

export default WorkProject;
