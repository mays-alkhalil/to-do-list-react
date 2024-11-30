import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h2>About Us</h2>
        <p>Your ultimate task management tool.</p>
      </div>
      <div className="about-content">
        <p>
          Our Todo List application is designed to help you organize your tasks, boost productivity, and manage your time effectively. 
          Built with the latest technologies like React, it ensures a smooth and intuitive user experience.
        </p>
        <p>
          Whether you’re managing personal goals or collaborating on a team project, our app provides the flexibility and features you need.
          Stay on top of your to-dos and achieve more every day!
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
