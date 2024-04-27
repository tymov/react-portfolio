import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const i18nInstance = i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          greeting:
            "Welcome to my portfolio. I'm Tymo Verhaegen, a dedicated professional in Application Development, with a particular emphasis on Front-End Development and UI/UX Design. Feel free to delve into my showcased projects below.",
        },
      },
      nl: {
        translation: {
          greeting:
            "Welkom op mijn portfolio website. Ik ben Tymo Verhaegen, een toegewijde professional in applicatieontwikkeling, met een bijzondere nadruk op front-end ontwikkeling en UI/UX-design. Bekijk gerust mijn hieronder gepresenteerde projecten.",
        },
      },
      fr: {
        translation: {
          greeting:
            "Bienvenue sur mon portfolio. Je suis Tymo Verhaegen, un professionnel dévoué dans le développement d'applications, avec un accent particulier sur le développement front-end et la conception UI/UX. N'hésitez pas à plonger dans mes projets présentés ci-dessous.",
        },
      },
      es: {
        translation: {
          greeting:
            "Bienvenido a mi portafolio. Soy Tymo Verhaegen, un profesional dedicado en el desarrollo de aplicaciones, con un énfasis particular en el desarrollo front-end y el diseño UI/UX. Siéntase libre de sumergirse en mis proyectos presentados a continuación.",
        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export const changeLanguage = (lng) => {
  i18nInstance.changeLanguage(lng);
};

export default i18nInstance;
