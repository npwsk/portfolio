import React from 'react';
import { useTranslation } from 'react-i18next';
import Wrapper from '@/components/ui/Wrapper';
import styles from './styles.module.scss';
import Carousel from './Carousel/component';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Wrapper className={styles.wrapper}>
      <p className={styles.greetingBox}>
        <span className={styles.greeting}>{t('about.hello')}</span>
        <span className={styles.name}>{t('about.firstName')}</span>
      </p>
      <p className={styles.intro}>{t('about.intro')}</p>
      <Carousel />
    </Wrapper>
  );
};

export default Home;
