import React from 'react';
import { mac2, hero5, desk1 } from '../assets';
import './Landing.css';
import { SocialLogo } from './index';

const Landing = () => {
  return (
    <section className="landing section">
      <div className="container">
        <div className="content-container">
          <p className="pill">frontend mercenary</p>
          <div className="title-text">
            <h1>Hey 👋 it&apos;s</h1>
            <p className="gradient-text-1">Alfonso</p>
          </div>
          <p className="hero-description">
            Ready to transform your <span className="gradient-text-2">ideas</span> into real world
            projects
          </p>
          <div className="social">
            <p>don&apos;t wait more</p>
            <p className="gradient-text-3">contact me:</p>
            <ul className="social-nav">
              <SocialLogo
                href="mailto:alfonsomartingarcia@gmail.com?subject=Got a Job for you&body=Hello Alfonso! let's talk about my project!:"
                faicon="fa-solid fa-envelope fa-2x"
              />
              <SocialLogo
                href="https://api.whatsapp.com/send?phone=+34690300025&text=Hello Alfonso! Got a job to talk to you about!"
                faicon="fa-brands fa-whatsapp fa-2x"
                target="_blank"
                rel="noreferrer"
              />
              <SocialLogo
                href="https://twitter.com/foindev"
                faicon="fa-brands fa-twitter fa-2x"
                target="_blank"
                rel="noreferrer"
              />
            </ul>
          </div>
        </div>
        <div className="image-container slider">
          <div className="slider-items">
            <img src={hero5} alt="" className="slider-item" />
            {/* <img src={hero2} alt="" className="slider-item" />
            <img src={hero3} alt="" className="slider-item" /> */}
          </div>
          {/* <div className="slider-indicators">
            <span></span>
            <span></span>
            <span></span>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Landing;
