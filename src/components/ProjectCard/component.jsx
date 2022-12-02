import React from 'react';
import Label from '@/components/ui/Label';
import { ReactComponent as CodeIcon } from '@/assets/icons/code.svg';
import styles from './styles.module.scss';

const ProjectCard = ({ id, title, preview, previewMobile, description, stack, source }) => (
  <article className={styles.card}>
    <picture className={styles.preview}>
      <source className={styles.previewImg} srcSet={`${preview} 1x, ${previewMobile} 2x`} />
      <img className={styles.previewImg} src={preview} alt="" />
    </picture>

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
        href={source}
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

export default ProjectCard;
