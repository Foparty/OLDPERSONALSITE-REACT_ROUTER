import React from 'react';
import { Link } from 'react-router-dom';
import { ico } from '../assets';
import { Navlink } from './';
import './Navbar.css';

const Navbar = () => {
  const darkMode = function () {
    document.body.classList.toggle('dark');
  };
  return (
    <header className="section">
      <div className="container navbar">
        <Link to="/">
          <img className="nav-ico" src={ico} alt="" />
        </Link>
        <nav>
          <ul className="main-nav">
            <Navlink to="/" link="Home" />
            <Navlink to="/cv" link="CV" />
            <Navlink to="/fem" link="Fem" />
            <Navlink to="/blog" link="Blog" />
            <li className="nav-link">
              <button onClick={darkMode} className="toggle">
                <i className="fa-solid fa-toggle-on"></i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
