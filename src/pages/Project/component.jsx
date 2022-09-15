import React from 'react';
import { useTranslation } from 'react-i18next';
import { getProjectById } from '@/constants';
import { NavLink, useParams } from 'react-router-dom';
import Wrapper from '@/components/ui/Wrapper';

const Project = () => {
  const params = useParams();
  const project = getProjectById(parseInt(params.projectId, 10));
  const { t } = useTranslation('translation');
  return (
    <Wrapper>
      <NavLink to="/projects">{t('navigation.toProjects')}</NavLink>
      <h2>{t(`projects.${project.key}.name`)}</h2>
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
      <p>{t(`projects.${project.key}.description`)}</p>
    </Wrapper>
  );
};

export default Project;
