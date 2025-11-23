import React from 'react';
import Picture from './Picture';
import '../styles/About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <Picture />
        <div className="about-info">
          <h2>About Me</h2>
          <p>
            Hi! I'm Your Name, a passionate developer with experience in React, JavaScript and web UI/UX design.
          </p>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React & Redux</li>
            <li>Responsive Design</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
