import React from 'react';
import './Cv.css';
import { avatar } from '../assets';
import { SocialLogo, CvSingleData } from '../Components';
import { cvWork, cvStudies } from '../assets/cddata.js';

const Cv = () => {
  return (
    <section className="cv">
      <aside className="cv-info">
        <img className="cv-avatar" src={avatar} alt="Alfonso Martín García cv profile photo" />
        <h1 className="cv-title">Alfonso Martín</h1>
        <ul className="cv-nav">
          <SocialLogo
            href="mailto:alfonsomartingarcia@gmail.com?subject=Got a Job for you&body=Hello Alfonso! let's talk about my project!:"
            faicon="fa-solid fa-envelope fa-2x"
            title="alfonsomg.dev@gmail.com"
          />
          <SocialLogo
            href="https://api.whatsapp.com/send?phone=+34690300025&text=Hello Alfonso! Got a job to talk to you about!"
            faicon="fa-solid fa-phone fa-2x"
            target="_blank"
            rel="noreferrer"
            title="+34 690300025"
          />
          <SocialLogo href="/" faicon="fa-brands fa-chrome fa-2x" title="alfonsomartingarcia.com" />
        </ul>
        <p>Frontend web developer with more than 3 years of experience creating web content.</p>
        <p>Thriving on generating and bringing ideas to life.</p>
        <p>Languages:</p>
        <ul className="language">
          <li>Spanish: mother tongue</li>
          <li>English: advanced</li>
        </ul>
      </aside>
      <main className="cv-data">
        <h2>Work experience</h2>
        <section className="work-container">
          <ul className="cv-work">
            {cvWork.map((el) => (
              <CvSingleData date={el.date} data={el.data} key={el.data} />
            ))}
          </ul>
        </section>
        <h2>Studies</h2>
        <section className="studies-container">
          <ul className="cv-studies">
            {cvStudies.map((el, i) => (
              <CvSingleData date={el.date} data={el.data} key={el.data} />
            ))}
          </ul>
        </section>
      </main>
    </section>
  );
};

export default Cv;
