import React from 'react';
import './styles/Project.css';

const projects = [
  { name: 'Project One', description: 'Project One Description', link: '#' },
  { name: 'Project Two', description: 'Project Two Description', link: '#' },
  { name: 'Project Three', description: 'Project Three Description', link: '#' },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.name} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View More</a>
          </div>
        ))}
      </div>
    </section>
  );
}
