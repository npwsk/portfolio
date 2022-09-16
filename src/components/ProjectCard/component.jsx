import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { getProjectById } from '@/constants';
import styles from './styles.module.scss';
// import { ReactComponent as ArrowIcon } from '@/assets/icons/arrow-right.svg';

const ProjectCard = ({ projectId }) => {
  const project = getProjectById(projectId);
  const { t } = useTranslation('translation', { keyPrefix: 'projects' });

  return (
    <article className={styles.card}>
      <div className={styles.preview}>{project.preview}</div>

      <div className={styles.cardHeader}>
        <h3 className={styles.title}>{t(`${project.id}.name`)}</h3>
      </div>

      <div className={styles.cardBody}>
        <p className={styles.description}>{t(`${project.id}.description`)}</p>
      </div>

      <div className={styles.cardFooter}>
        <ul className={styles.skills}>
          {project.stack.map((item) => (
            <li
              className={styles.label}
              key={`${project.id}_${item.id}`}
              style={{ backgroundColor: item.color }}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* <span>{t(`toProject`)}</span> */}
        {/* <ArrowIcon className={styles.moreLinkIcon} /> */}
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
  projectId: PropTypes.string.isRequired,
};

export default ProjectCard;
