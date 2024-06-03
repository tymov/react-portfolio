import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files
import common_en from "./translations/en/common.json";
import common_es from "./translations/es/common.json";
import common_nl from "./translations/nl/common.json";
import hero_en from "./translations/en/hero.json";
import hero_es from "./translations/es/hero.json";
import hero_nl from "./translations/nl/hero.json";
import experience_en from "./translations/en/experience.json";
import experience_es from "./translations/es/experience.json";
import experience_nl from "./translations/nl/experience.json";
import skill_en from "./translations/en/skill.json";
import skill_es from "./translations/es/skill.json";
import skill_nl from "./translations/nl/skill.json";
import projects_en from "./translations/en/projects.json";
import projects_es from "./translations/es/projects.json";
import projects_nl from "./translations/nl/projects.json";
import about_en from "./translations/en/about.json";
import about_es from "./translations/es/about.json";
import about_nl from "./translations/nl/about.json";

i18n
  .use(HttpApi) // load translations using http -> see /public/locales
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    resources: {
      en: {
        common: common_en,
        hero: hero_en,
        experience: experience_en,
        skill: skill_en,
        project: projects_en,
        about: about_en,
      },
      es: {
        common: common_es,
        hero: hero_es,
        experience: experience_es,
        skill: skill_es,
        project: projects_es,
        about: about_es,
      },
      nl: {
        common: common_nl,
        hero: hero_nl,
        experience: experience_nl,
        skill: skill_nl,
        project: projects_nl,
        about: about_nl,
      },
    },
    lng: "nl",
    fallbackLng: "nl",
    debug: true,
    ns: [
      "common",
      "navbar",
      "hero",
      "experience",
      "skill",
      "projects",
      "about",
    ],
    defaultNS: "common",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });

export default i18n;
