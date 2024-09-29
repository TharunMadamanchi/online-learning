import React from 'react';
import './CourseDetails.css';

const CourseDetails = ({ course }) => {
  return (
    <div className="course-details-container">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
    </div>
  );
};

export default CourseDetails;
