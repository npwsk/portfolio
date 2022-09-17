import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Wrapper from '@/components/ui/Wrapper';
import ProjectCard from '@/components/ProjectCard';
import { getProjects } from '@/constants';
import styles from './styles.module.scss';

const Projects = () => {
  const projects = getProjects();
  const { t } = useTranslation('translation', { keyPrefix: 'projects' });

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
              <ProjectCard
                key={`${project.id}_card`}
                id={project.id}
                title={t(`${project.id}.name`)}
                preview={project.preview}
                description={t(`${project.id}.description`)}
                stack={project.stack}
              />
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </Wrapper>
  );
};

export default Projects;
