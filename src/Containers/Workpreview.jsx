import React from 'react';
import WorkProject from '../Components/WorkProject';
import './Workpreview.css';

const Workpreview = () => {
  return (
    <section className="work section">
      <h2>work</h2>
      {/* <p>
        in progress...<span className="emoji">👷‍♂️⚠️</span>
      </p> */}
      <WorkProject />
    </section>
  );
};

export default Workpreview;
