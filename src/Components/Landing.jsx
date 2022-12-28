import React from 'react';
import { Link } from 'react-router-dom';
import { hero3 } from '../assets';
import './Landing.css';

const Landing = () => {
  return (
    <section className="landing section">
      <div className="container">
        <div className="content-container">
          <p className="pill">frontend mercenary</p>
          <div className="title-text">
            <h1>Hey 👋 it's</h1>
            <p className="gradient-text-1">Alfonso</p>
          </div>
          <p className="hero-description">
            Ready to transform your <span className="gradient-text-2">ideas</span> into real world
            projects
          </p>
          <div className="social">
            <p>don't wait more</p>
            <p className="gradient-text-3">contact me:</p>
            <ul className="social-nav">
              <li>
                <a href="mailto:alfonsomartingarcia@gmail.com?subject=Got a Job for you&body=Hello Alfonso! let's talk about my project!:">
                  <i className="fa-solid fa-envelope fa-2x"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=+34690300025&text=Hello Alfonso! Got a job to talk to you about!"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-whatsapp fa-2x"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/foindev" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-twitter fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="image-container slider">
          <div className="slider-items">
            <img src={hero3} alt="" className="slider-item" />
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
