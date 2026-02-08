import React from 'react';

function ProjectCard({project}){
    return(
        <div className="card">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="tech-stack">{project.tech}</div>
            <button>View Code</button>
        </div>
    )
}

export default ProjectCard;