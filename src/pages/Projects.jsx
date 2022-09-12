import React from 'react';
import { getProjects } from '@/content';
import { NavLink, Outlet } from 'react-router-dom';

const Projects = () => {
  const projects = getProjects();

  return (
    <>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <NavLink
              to={`/projects/${project.id}`}
              key={`${project.id}_link`}
              style={({ isActive }) => ({ color: isActive ? 'lightblue' : 'lightgray' })}
            >
              {project.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default Projects;
