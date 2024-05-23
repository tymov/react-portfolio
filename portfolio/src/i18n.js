import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import common_en from './translations/en/common.json';
import common_es from './translations/es/common.json';
import common_nl from './translations/nl/common.json';
import hero_en from './translations/en/hero.json';
import hero_es from './translations/es/hero.json';
import hero_nl from './translations/nl/hero.json';
import experience_en from './translations/en/experience.json';
import experience_es from './translations/es/experience.json';
import experience_nl from './translations/nl/experience.json';

i18n
  .use(HttpApi) // load translations using http -> see /public/locales
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    resources: {
      en: {
        common: common_en,
        navbar: navbar_en,
        hero: hero_en,
        experience: experience_en
      },
      es: {
        common: common_es,  
        navbar: navbar_es,
        hero: hero_es,
        experience: experience_es
      },
      nl: {
        common: common_nl,
        navbar: navbar_nl,
        hero: hero_nl,
        experience: experience_nl
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    ns: ['common', 'navbar', 'hero', 'experience'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
