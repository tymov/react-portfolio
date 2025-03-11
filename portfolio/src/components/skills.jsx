import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { getIconForTechnology } from "../constants/icons";
import { SKILLS, CERTIFICATES } from "../constants/skills";

const Skills = () => {
  const { t } = useTranslation(["skill", "skills"]);

  const renderSkillLevel = (level) => {
    const maxLevel = 5; // Maximum level
    const filledCircle = (
      <div className="w-12 h-2 bg-[#6366F1] rounded-full mr-1"></div>
    );
    const unfilledCircle = (
      <div className="w-12 h-2 bg-gray-300 rounded-full mr-1"></div>
    );

    return (
      <div className="flex items-center">
        {[...Array(maxLevel)].map((_, index) =>
          index < level ? filledCircle : unfilledCircle
        )}
      </div>
    );
  };

  return (
    <div id="skills" className="bg-white text-gray-700 ">
      <div className="custom-shape-divider-top-1716673344">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            ></linearGradient>
          </defs>
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#f9fafb"
          ></path>
        </svg>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-8 pb-32">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">
          {t("skill.title")}
        </h2>

        {/* Skills section with better responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex items-center space-x-3 sm:space-x-4"
              whileHover={{ scale: 1.035 }}
            >
              <div className="flex-shrink-0">
                {getIconForTechnology(skill.key)}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 truncate">
                  {t(`skill.${skill.key}.title`)}
                </h3>
                <div className="w-full">
                  {renderSkillLevel(t(`skill.${skill.key}.level.percentage`))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 mt-16 sm:mt-24">
          {t("skill.certifications")}
        </h2>

        {/* Certifications section with better responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {CERTIFICATES.map((cert, index) => (
            <a
              key={index}
              href={t(`skill.${cert.key}.url`)}
              className="bg-white rounded-lg shadow-md p-4 sm:p-6 cursor-pointer flex flex-col justify-between hover:scale-105 transition-transform duration-300 ease-in-out h-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 mt-1 sm:mt-0">
                  {getIconForTechnology(cert.key)}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 truncate">
                    {t(`skill.${cert.key}.title`)}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-600">
                    <span className="truncate">
                      {t(`skill.${cert.key}.organization`)}
                    </span>
                    <span className="hidden sm:inline mx-2">|</span>
                    <span>{t(`skill.${cert.key}.issued_date`)}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
