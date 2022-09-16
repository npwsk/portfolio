import React from 'react';
import { useTranslation } from 'react-i18next';
import { getProjectById } from '@/constants';
import { NavLink, useParams } from 'react-router-dom';
import Wrapper from '@/components/ui/Wrapper';

const Project = () => {
  const params = useParams();
  const project = getProjectById(params.projectId);
  const { t } = useTranslation('translation', { keyPrefix: 'projects' });

  return (
    <Wrapper>
      <NavLink to="/projects">{t('toProjects')}</NavLink>
      <h2>{t(`${project.id}.name`)}</h2>
      <div>{project.year}</div>
      <ul>
        {project.stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <a href={project.source} target="_blank" rel="noopener noreferrer">
        {t(`source`)}
      </a>
      {/* <a href={project.deploy} target="_blank" rel="noopener noreferrer">
        {t(`deploy`)}
      </a> */}
      <p>{t(`${project.id}.description`)}</p>
    </Wrapper>
  );
};

export default Project;
