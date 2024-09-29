import React, { useState } from 'react';
import './Enroll.css';

const Enroll = ({ course }) => {
  const [isEnrolled, setIsEnrolled] = useState(false);

  const handleEnroll = () => {
    // Call API to enroll
    setIsEnrolled(true);
  };

  return (
    <div className="enroll-container">
      <h3>{course.title}</h3>
      <button onClick={handleEnroll} disabled={isEnrolled}>
        {isEnrolled ? 'Enrolled' : 'Enroll Now'}
      </button>
    </div>
  );
};

export default Enroll;
