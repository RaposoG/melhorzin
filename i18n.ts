import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationPT from './public/locales/pt/common.json';
import translationEN from './public/locales/en/common.json';

void i18n.use(initReactI18next).init({
  resources: {
    pt: {
      translation: translationPT
    },
    en: {
      translation: translationEN
    }
  },
  fallbackLng: 'pt',
  debug: false
});

export default i18n;
