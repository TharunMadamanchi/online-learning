import React, { useEffect, useState } from 'react';
import './CourseList.css';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses from API (you will integrate it later)
    setCourses([
      { id: 1, title: 'React Basics' },
      { id: 2, title: 'Advanced JavaScript' },
    ]);
  }, []);

  return (
    <div className="course-list-container">
      <h2>Available Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
