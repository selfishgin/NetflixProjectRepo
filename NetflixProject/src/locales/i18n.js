import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import az from './az.json';

const resources = {
    en: { translation: en },
    az: { translation: az },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
});

export default i18n;
