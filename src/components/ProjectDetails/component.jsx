import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Label from '@/components/ui/Label';
import classes from './styles.module.scss';

const ProjectDetails = ({
  id,
  name,
  description,
  year,
  stack,
  sourceUrl,
  deployUrl,
  image,
  features,
}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'projects' });

  return (
    <article className={classes.grid}>
      <h2 className={classes.projectTitle}>{name}</h2>

      <div className={classes.projectDetails}>
        <ul className={classes.skillsList}>
          {stack.map((item) => (
            <li key={`${id}_${item.id}_li`}>
              <Label key={`${id}_${item.id}_label`} name={item.name} color={item.color} />
            </li>
          ))}
        </ul>

        <div className={classes.projectYear}>{year}</div>

        <p className={classes.projectDescription}>{description}</p>

        <ul className={classes.skillsList}>
          {features.map((feat, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={`feature_${i}`}>{feat}</li>
          ))}
        </ul>

        <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
          {t(`source`)}
        </a>
        <a href={deployUrl} target="_blank" rel="noopener noreferrer">
          {t(`deploy`)}
        </a>
      </div>

      <div className={classes.projectImgBox}>
        <img className={classes.projectImg} src={image} alt={name} />
      </div>
    </article>
  );
};

ProjectDetails.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  stack: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  sourceUrl: PropTypes.string.isRequired,
  deployUrl: PropTypes.string.isRequired,
  image: PropTypes.elementType,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectDetails;
