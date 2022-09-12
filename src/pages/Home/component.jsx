import React from 'react';
import { useTranslation } from 'react-i18next';
import Wrapper from '@/components/Wrapper';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <p>{t('about.hello')}</p>
      <p>{t('about.intro')}</p>
      <button type="button">Download CV</button>
    </Wrapper>
  );
};

export default Home;
