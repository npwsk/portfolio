import React from 'react';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Wrapper from '@/components/ui/Wrapper';
import ProjectCard from '@/components/ProjectCard';
import { getProjects } from '@/utils/content';
import styles from './styles.module.scss';

const Projects = () => {
  const projects = getProjects();
  const { t } = useTranslation('translation', { keyPrefix: 'projects' });

  return (
    <Wrapper>
      <ul className={styles.cardsGrid}>
        {projects.map((project) => (
          <li className={styles.gridCell} key={`${project.id}_li`}>
            <ProjectCard
              {...project}
              key={project.id}
              title={t(`${project.id}.name`)}
              description={t(`${project.id}.description`)}
            />
          </li>
        ))}
      </ul>
      <Outlet />
    </Wrapper>
  );
};

export default Projects;
