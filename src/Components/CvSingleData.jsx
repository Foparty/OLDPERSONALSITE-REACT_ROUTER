import React from 'react';

const CvSingleData = ({ date, data }) => {
  return (
    <li>
      <div className="date date-container">
        <p>{date}</p>
      </div>
      <div className="data data-container">
        <p>{data}</p>
      </div>
    </li>
  );
};

export default CvSingleData;
