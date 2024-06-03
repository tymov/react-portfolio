import React from "react";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

export const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="inline-block relative w-full px-4">
      <select
        id="language-select"
        onChange={handleChangeLanguage}
        className="block appearance-none bg-gray-50 dark:bg-slate-900 px-4 py-2 rounded-md shadow-sm leading-tight focus:outline-none focus:ring-indigo-500 focus:ring-opacity-50"
      >
        <option value="nl">
          <ReactCountryFlag countryCode="NL" className="w-6 h-6 mr-2" />
          <span className="mx-3 px-3 bg-transparent"> NL</span>
        </option>
        <option value="en">
          <ReactCountryFlag countryCode="US" className="w-6 h-6 mx-2 px-2" />
          <span className="mx-3 px-3 bg-transparent"> EN</span>
        </option>
        <option value="es">
          <ReactCountryFlag countryCode="ES" className="w-6 h-6 mr-2" />
          <span className="mx-3 px-3 bg-transparent"> ES</span>
        </option>
      </select>
    </div>
  );
};
