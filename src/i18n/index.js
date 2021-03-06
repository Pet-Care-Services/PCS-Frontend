import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from 'i18n/en';
import pl from 'i18n/pl';

// eslint-disable-next-line import/no-named-as-default-member
i18n.use(initReactI18next).init({
  resources: {
    en,
    pl,
  },
  lng: localStorage.getItem('lang'),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
