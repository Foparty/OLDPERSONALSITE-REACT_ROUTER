import React from 'react';

const SocialLogo = ({ href, faicon, target, rel }) => {
  return (
    <li>
      <a href={href} target={target} rel={rel}>
        <i className={faicon}></i>
      </a>
    </li>
  );
};

export default SocialLogo;
