import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                welcome: "Welcome",
                signin: "Sign in",
                trending: "Trending Now",
                reasonToJoin: "Why Join Us?",
                faq: "Frequently Asked Questions",
                footerMessage: "Thank you for visiting!",
            },
        },
        az: {
            translation: {
                welcome: "Xoş gəlmisiniz",
                signin: "Daxil olun",
                trending: "Hal-hazırda trenddə olanlar",
                reasonToJoin: "Niyə bizə qoşulmalısınız?",
                faq: "Tez-tez verilən suallar",
                footerMessage: "Ziyarətiniz üçün təşəkkür edirik!",
            },
        },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if translation is missing
    interpolation: {
        escapeValue: false, // React already escapes by default
    },
});

export default i18n;
