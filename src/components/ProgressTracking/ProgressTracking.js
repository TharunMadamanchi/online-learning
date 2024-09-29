import React from 'react';
import './ProgressTracking.css';

const ProgressTracking = ({ progress }) => {
  return (
    <div className="progress-tracking-container">
      <h3>Course Progress</h3>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <p>{progress}% Complete</p>
    </div>
  );
};

export default ProgressTracking;
