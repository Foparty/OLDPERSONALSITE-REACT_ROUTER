import React from 'react';

const SocialLogo = ({ href, faicon, target, rel, title }) => {
  return (
    <li>
      <a href={href} target={target} rel={rel}>
        <i className={faicon}></i>
        <span>{title}</span>
      </a>
    </li>
  );
};

export default SocialLogo;
