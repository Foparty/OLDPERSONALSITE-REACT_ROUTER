import React from 'react';

const TechIconPill = ({ classes, faicon, icoclasses, widthpercentage, progressbg }) => {
  const widthpercentag = [
    { percentage: 25, name: 'low' },
    { percentage: 50, name: 'medium' },
    { percentage: 70, name: 'good' },
    { percentage: 90, name: 'very good' },
  ];
  return (
    <li className={classes}>
      <div
        className={progressbg + ' progressbar'}
        style={{ width: widthpercentag[widthpercentage].percentage + '%' }}
      >
        <p>{widthpercentag[widthpercentage].name}</p>
      </div>
      <i className={icoclasses + ' ' + faicon + ' ' + 'fa-2x'}></i>
    </li>
  );
};

export default TechIconPill;
