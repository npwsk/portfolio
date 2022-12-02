import React from 'react';
import { useTranslation } from 'react-i18next';
import Wrapper from '@/components/ui/Wrapper';
import styles from './styles.module.scss';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Wrapper className={styles.wrapper}>
      <p>{t('about.hello')}</p>
      <p>{t('about.intro')}</p>
    </Wrapper>
  );
};

export default Home;
