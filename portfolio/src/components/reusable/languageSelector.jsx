import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from 'react-country-flag';

export const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div class="inline-block relative w-full">
      <select
        id="language-select"
        onChange={handleChangeLanguage}
        class="block appearance-none bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-925 px-4 py-2 pr-8 rounded-md shadow-sm leading-tight focus:outline-none focus:ring-indigo-500 focus:ring-opacity-50"
      >
        <option value="en">
          <ReactCountryFlag countryCode="US" className="w-6 h-6 mx-2 px-2" />
          <span className='mx-3 px-3'> EN</span>
        </option>
        <option value="es">
          <ReactCountryFlag countryCode="ES" className="w-6 h-6 mr-2" />
          <span className='mx-3 px-3'> ES</span>
        </option>
        <option value="nl">
          <ReactCountryFlag countryCode="NL" className="w-6 h-6 mr-2" />
          <span className='mx-3 px-3'> NL</span>
        </option>
      </select>
    </div>
  );
};
