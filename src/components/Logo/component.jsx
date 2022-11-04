import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classes from './styles.module.scss';

const Logo = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'about' });

  return (
    <Link className={classes.link} to="/">
      <span className={classes.firstName}>{t('firstName')}</span>{' '}
      <span className={classes.lastName}>{t('lastName')}</span>
    </Link>
  );
};

export default Logo;
