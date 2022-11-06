import React from 'react';
import PropTypes from 'prop-types';
import Label from '@/components/ui/Label';
import { ReactComponent as CodeIcon } from '@/assets/icons/code.svg';
import styles from './styles.module.scss';

const ProjectCard = ({ id, title, preview, description, stack, sourceLink }) => (
  <article className={styles.card}>
    <div className={styles.preview}>
      <img src={preview} alt={title} className={styles.previewImg} />
    </div>

    <div className={styles.cardHeader}>
      <h3 className={styles.title}>{title}</h3>
    </div>

    <div className={styles.cardBody}>
      <ul className={styles.skills}>
        {stack.map((item) => (
          <li key={`${id}_${item.id}`}>
            <Label key={`${id}_${item.id}_label`} name={item.name} color={item.color} />
          </li>
        ))}
      </ul>
      <p className={styles.description}>{description}</p>
    </div>

    <div className={styles.cardFooter}>
      <a
        className={styles.sourceLink}
        href={sourceLink}
        target="_blank"
        rel="noopener noreferrer"
        title="Github"
      >
        Github
        <CodeIcon className={styles.sourceLinkIcon} />
      </a>
    </div>
  </article>
);

ProjectCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  preview: PropTypes.elementType,
  description: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  sourceLink: PropTypes.string.isRequired,
};

export default ProjectCard;
