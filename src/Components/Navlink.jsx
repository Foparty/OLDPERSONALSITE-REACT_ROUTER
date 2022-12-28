import React from 'react';
import { Link } from 'react-router-dom';

const Navlink = ({ to, link }) => {
  return (
    <li>
      <Link to={to} alt="">
        {link}
      </Link>
    </li>
  );
};

export default Navlink;
