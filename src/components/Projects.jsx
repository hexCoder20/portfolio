import React from 'react';
import "./Projects.css";
import ProjectCard from './ProjectCard';

const Projects = ({projects}) => {
  return (
    <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
            {projects.map((project)=>(
                <ProjectCard key={project.id} project={project}></ProjectCard>
            ))}
        </div>
    </div>
  )
}

export default Projects