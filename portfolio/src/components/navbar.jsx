import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiFillHome,
  AiOutlineInfoCircle,
  AiOutlineProject,
  AiOutlineIdcard,
} from "react-icons/ai"; // Import needed icons
import { TbTimelineEvent } from "react-icons/tb";
import { GrDocumentPdf } from "react-icons/gr";
import { FaBarsProgress, FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

import { LanguageSelector } from "./reusable/languageSelector";
import { useTranslation } from "react-i18next";
import { EXPERIENCES } from "../constants/experiences";

const Navigation = () => {
  const { t } = useTranslation("navbar"); // Specify the "hero" namespace
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center shadow-md bg-gradient-to-r from-[#1364dd]  to-[#0095ff] py-5 px-10 capitalize">
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="text-white text-2xl md:hidden" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <ul
        className={`flex-col md:flex-row md:flex md:items-center text-lg space-y-5 md:space-y-0 md:space-x-16 ${
          menuOpen ? "flex" : "hidden"
        }`}
      >
        <li>
          <a href="#" className="text-white flex items-center">
            <AiFillHome className="mr-2" />
            {t("navbar.home")}
          </a>
        </li>
        <li>
          <a href="#projects" className="text-white flex items-center">
            <AiOutlineProject className="mr-2" />
            {t("navbar.projects")}
          </a>
        </li>
        <li>
          <a href="#experiences" className="text-white flex items-center">
            <TbTimelineEvent className="mr-2" />
            {t("navbar.experience")}
          </a>
        </li>

        <li>
          <a href="#skills" className="text-white flex items-center">
            <FaBarsProgress className="mr-2" />
            {t("navbar.skills")}
          </a>
        </li>
        <li>
          <a href="#about" className="text-white flex items-center">
            <AiOutlineInfoCircle className="mr-2" />
            {t("navbar.about")}
          </a>
        </li>
      </ul>

      <div className="hidden md:flex items-center">
        <LanguageSelector />
      </div>
    </nav>
  );
};

export default Navigation;
