import React from 'react';
import { useParams } from 'react-router-dom';
import { getProjectById } from '@/content/projects';

function Project() {
  const params = useParams();
  const project = getProjectById(parseInt(params.projectId, 10));

  return (
    <div>
      <h3>{project.name}</h3>
      <div>{project.year}</div>
      <ul>
        {project.stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <a href={project.source} target="_blank" rel="noopener noreferrer">
        Source
      </a>
      <a href={project.deploy} target="_blank" rel="noopener noreferrer">
        Deploy
      </a>
      <p>{project.description}</p>
    </div>
  );
}

export default Project;
