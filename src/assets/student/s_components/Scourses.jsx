import React, { useState } from 'react';
import '../s-css/Scourses.css';
import Scoursecard from './Scoursecard';

import Sfooter from './Sfooter';

const Scourses = () => {
  const [activeTab, setActiveTab] = useState('exploreCourses');
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [allCourses] = useState([
    { id: 1, name: 'Course 1' },
    { id: 2, name: 'Course 2' },
    { id: 3, name: 'Course 3' },
    { id: 4, name: 'Course 4' },
    
    // Add more courses as needed
  ]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleEnrollCourse = (course) => {
    setEnrolledCourses([...enrolledCourses, course]);
  };

  return (
    <>
    <div className="courses-container">

      <div className="courses-navbar">
        <div
          className={`explore-courses ${activeTab === 'exploreCourses' ? 'active' : ''}`}
          onClick={() => handleTabChange('exploreCourses')}
        >
          <span>Explore Courses</span>
        </div>
        <div
          className={`enrolled-courses ${activeTab === 'enrolledCourses' ? 'active' : ''}`}
          onClick={() => handleTabChange('enrolledCourses')}
        >
          
          <span>My Courses</span>
        </div>
      </div>
      <div className="courses-content">
        <div className="explore-courses-list">
          {activeTab === 'exploreCourses' &&
            allCourses.map((course) => (
              <Scoursecard
                key={course.id}
                course={course}
                onEnroll={handleEnrollCourse}
              />
            ))}
        </div>

        <div className="enrolled-courses-list">
          {activeTab === 'enrolledCourses' &&
            enrolledCourses.map((course) => <Scoursecard key={course.id} course={course} />)}
        </div>
      </div>

    </div>
    <Sfooter/> 
    </>


  );
};

export default Scourses;