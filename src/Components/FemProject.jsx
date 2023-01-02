import React from 'react';
import './FemProject.css';

const FemProject = ({ name, img, repo, live, femurl }) => {
  return (
    <div className="femcard">
      <div className="femcard__imgcontainer">
        <a href={femurl} target="_blank" rel="noreferrer">
          <img className="femcard__image" src={img} alt="" />
        </a>
      </div>
      <div className="femcard__datacontainer">
        <h4 className="femcard__title">{name}</h4>
        <div className="data__buttons">
          <a className="femcard__git" href={repo} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github fa-2x"></i>
          </a>
          <a className="femcard__site" href={live} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-chrome fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FemProject;
