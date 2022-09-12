import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
import './App.scss';
import Router from '@/Router';
import en from '@/content/en';
import ru from '@/content/ru';

i18n
  // .use(LanguageDetector)
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

const App = () => (
  <div className="App">
    <Router />
  </div>
);

export default App;
