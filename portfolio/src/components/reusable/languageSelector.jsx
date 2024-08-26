import React from "react";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

export const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="inline-block relative w-full">
      <select
        id="language-select"
        onChange={handleChangeLanguage}
        className="block appearance-none bg-[#0095ff] border border-white text-white border-opacity-25 px-4 py-2 rounded-md shadow-sm leading-tight focus:outline-none focus:ring-indigo-500 focus:ring-opacity-50"
      >
        <option value="nl">
          <ReactCountryFlag
            countryCode="NL"
            svg
            cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
            cdnSuffix="svg"
            title="NL"
          />
          <span className=" bg-transparent"> NL</span>
        </option>
        <option value="en">
          <ReactCountryFlag
            countryCode="US"
            svg
            cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
            cdnSuffix="svg"
            title="US"
          />
          <span className="bg-transparent"> EN</span>
        </option>
        <option value="es">
          <ReactCountryFlag
            countryCode="ES"
            svg
            cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
            cdnSuffix="svg"
            title="ES"
          />
          <span className="bg-transparent"> ES</span>
        </option>
      </select>
    </div>
  );
};
