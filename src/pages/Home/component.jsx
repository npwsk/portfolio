import React from 'react';
import { useTranslation } from 'react-i18next';
import Wrapper from '@/components/ui/Wrapper';
import Button from '../../components/ui/buttons/Button/component';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <p>{t('about.hello')}</p>
      <p>{t('about.intro')}</p>
      <Button type="download" href="./cv.pdf" download="nika-perfilova-cv" variant="filled">
        {t('about.download')}
      </Button>
    </Wrapper>
  );
};

export default Home;
