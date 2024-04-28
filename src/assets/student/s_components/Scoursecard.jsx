import React from 'react';
import '../s-css/Scoursecard.css';

const Scoursecard = ({ course, onEnroll }) => {
  const handleEnroll = () => {
    if (onEnroll) {
      onEnroll(course);
    }
  };

  return (
    <div className="course-card">
      <div className="top-section">
        {/* Add any content or image for the top section */}
      </div>
      <div className="bottom-section">
        <span className="title">{course.name}</span>
        <div className="row row1">
          <div className="item">
            <span className="big-text">Course</span>
            <span className="regular-text">Big big</span>
          </div>
          <div className="item">
            <span className="big-text">Course</span>
            <span className="regular-text">Big big</span>
          </div>
          <div className="item">
            <span className="big-text">Course</span>
            <span className="regular-text">Big big</span>
          </div>
        </div>
        {onEnroll && (
          <button className="enroll-button" onClick={handleEnroll}>
            Enroll
          </button>
        )}
      </div>
    </div>
  );
};

export default Scoursecard;