import React from 'react';
import { useTranslation } from 'react-i18next';

const Logo = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'about' });

  return (
    <div>
      {t('firstName')} {t('lastName')}
    </div>
  );
};

export default Logo;
