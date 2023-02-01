import React from 'react';
import WorkProject from '../Components/WorkProject';
import './Workpreview.css';
import { gabriel } from '../assets';

const Workpreview = () => {
  return (
    <section className="work section">
      <h2>work</h2>
      {/* <p>
        in progress...<span className="emoji">👷‍♂️⚠️</span>
      </p> */}
      <WorkProject
        url="https://gabrielitoweb.netlify.app/"
        img={gabriel}
        title="Gabriel Asdrúbal | Fotografía y Arquitectura"
        description="Interesting React project in witch I had to overcome problems with grid layout, and help
          me come up with interesting concepts for it and future projects. As well as fixing text
          resize for better responsive sites."
      />
    </section>
  );
};

export default Workpreview;
