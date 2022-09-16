import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, Outlet } from 'react-router-dom';
import Wrapper from '@/components/ui/Wrapper';
import { getProjects } from '@/constants';

const Projects = () => {
  const projects = getProjects();
  const { t } = useTranslation('translation', { keyPrefix: 'projects' });

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
              {t(`${project.id}.name`)}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </Wrapper>
  );
};

export default Projects;
