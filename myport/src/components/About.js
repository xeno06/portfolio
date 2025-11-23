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
            I’m Vince Quijano, a Software Developer specializing in React, JavaScript, and modern web UI/UX design.
          </p>
          <ul>
            <li>HTML, CSS, JavaScript, Photoshop</li>
            <li>React & Redux</li>
            <li>Responsive Design</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
