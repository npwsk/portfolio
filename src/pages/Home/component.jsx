import React from 'react';
import { useTranslation } from 'react-i18next';
import Wrapper from '@/components/ui/Wrapper';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import Carousel from './Carousel/component';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Wrapper className={styles.wrapper}>
      <section>
        <p className={styles.greetingBox}>
          <span className={styles.greeting}>{t('about.hello')}</span>
          <span className={styles.name}>{t('about.firstName')}</span>
        </p>
        <p className={styles.intro}>{t('about.intro')}</p>
      </section>

      <section className={styles.projectsSection}>
        <h2 className={styles.heading2}>{t('about.projects.heading')}</h2>
        <Link to="/projects" className={styles.allProjectsLink}>
          {t('about.projects.seeAll')}
        </Link>
        <Carousel className={styles.projectsCarousel} />
      </section>
    </Wrapper>
  );
};

export default Home;
