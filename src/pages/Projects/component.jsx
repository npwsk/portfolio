import React from 'react';
import { getProjects } from '@/content';
import { NavLink, Outlet } from 'react-router-dom';
import Wrapper from '@/components/ui/Wrapper';

const Projects = () => {
  const projects = getProjects();

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Projects;
