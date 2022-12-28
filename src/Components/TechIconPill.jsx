import React from 'react';

const TechIconPill = ({ classes, faicon, icoclasses, widthpercentage, progressbg }) => {
  return (
    <li className={classes}>
      <div className={progressbg + ' progressbar'} style={{ width: widthpercentage + '%' }}>
        <p>{widthpercentage}%</p>
      </div>
      <i className={icoclasses + ' ' + faicon + ' ' + 'fa-2x'}></i>
    </li>
  );
};

export default TechIconPill;
