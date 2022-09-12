import React from 'react';
import { useTranslation } from 'react-i18next';
import Wrapper from '@/components/Wrapper';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <p>{t('about.hello')}</p>
      <p>{t('about.intro')}</p>
      <a href="./cv.pdf" download="nika-perfilova-cv">
        {t('about.download')}
      </a>
    </Wrapper>
  );
};

export default Home;
