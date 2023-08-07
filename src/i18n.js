import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n.use(Backend).use(initReactI18next).init({
  fallbackLng: 'en', // Default language
  debug: true, // Set to false in production
  interpolation: {
    escapeValue: false, // React already does escaping
  },
  backend: {
    loadPath: '/{{lng}}.json', // Path to your translation files
  },
});

export default i18n;