import React from 'react';
import PropTypes from 'prop-types';
import Label from '@/components/ui/Label';
import styles from './styles.module.scss';
// import { ReactComponent as ArrowIcon } from '@/assets/icons/arrow-right.svg';

const ProjectCard = ({ id, title, preview, description, stack }) => (
  <article className={styles.card}>
    <div className={styles.preview}>{preview}</div>

    <div className={styles.cardHeader}>
      <h3 className={styles.title}>{title}</h3>
    </div>

    <div className={styles.cardBody}>
      <p className={styles.description}>{description}</p>
    </div>

    <div className={styles.cardFooter}>
      <ul className={styles.skills}>
        {stack.map((item) => (
          <li key={`${id}_${item.id}`}>
            <Label key={`${id}_${item.id}_label`} name={item.name} color={item.color} />
          </li>
        ))}
      </ul>

      {/* <span>{t(`toProject`)}</span> */}
      {/* <ArrowIcon className={styles.moreLinkIcon} /> */}
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
};

export default ProjectCard;
