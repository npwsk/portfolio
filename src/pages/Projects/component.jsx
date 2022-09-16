import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Wrapper from '@/components/ui/Wrapper';
import ProjectCard from '@/components/ProjectCard';
import { getProjects } from '@/constants';
import styles from './styles.module.scss';

const Projects = () => {
  const projects = getProjects();

  return (
    <Wrapper>
      <ul className={styles.cardsGrid}>
        {projects.map((project) => (
          <li className={styles.gridCell} key={`${project.id}_li`}>
            <NavLink
              className={styles.link}
              to={`/projects/${project.id}`}
              key={`${project.id}_link`}
            >
              <ProjectCard key={`${project.id}_card`} projectId={project.id} />
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </Wrapper>
  );
};

export default Projects;
