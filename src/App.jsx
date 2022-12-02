import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import LanguageDetector from 'i18next-browser-languagedetector';
import './App.scss';
import Router from '@/Router';
import en from '@/content/en';
import ru from '@/content/ru';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'ru',
    resources: {
      en,
      ru,
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

const App = () => {
  const { t } = useTranslation();

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t('title')}</title>
        <html lang={i18n.language} />
      </Helmet>
      <Router />
    </div>
  );
};

export default App;
