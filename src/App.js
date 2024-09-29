import React from 'react';
import CourseList from './components/CourseList/CourseList';
import CourseDetails from './components/CourseDetails/CourseDetails';
import Enroll from './components/Enroll/Enroll';
import ProgressTracking from './components/ProgressTracking/ProgressTracking';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <CourseList />
      {/* Render other components like CourseDetails, Enroll, ProgressTracking */}
    </div>
  );
}

export default App;
