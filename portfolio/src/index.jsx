import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import "react-tooltip/dist/react-tooltip.css";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_en from "./translations/en/common.json";
import common_es from "./translations/es/common.json";
import common_nl from "./translations/nl/common.json";
import navbar_en from "./translations/en/navbar.json";
import navbar_es from "./translations/es/navbar.json";
import navbar_nl from "./translations/nl/navbar.json";
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

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "nl",
  resources: {
    en: {
      common: common_en,
      navbar: navbar_en,
      hero: hero_en,
      experience: experience_en,
      skill: skill_en,
      project: projects_en,
      about: about_en,
    },
    es: {
      common: common_es,
      navbar: navbar_es,
      hero: hero_es,
      experience: experience_es,
      skill: skill_es,
      project: projects_es,
      about: about_es,
    },
    nl: {
      common: common_nl,
      navbar: navbar_nl,
      hero: hero_nl,
      experience: experience_nl,
      skill: skill_nl,
      project: projects_nl,
      about: about_nl,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Router>
        <App />
      </Router>
    </I18nextProvider>
  </React.StrictMode>
);
