import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { getIconForTechnology } from "../constants/icons";
import { SKILLS } from "../constants/skills";

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

      <div className="max-w-screen-2xl mx-auto px-4 py-8 pb-80">
        <h2 className="text-4xl font-bold mb-12">{t("skill.title")}</h2>
        <div className="flex flex-wrap justify-start gap-6">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6  flex items-center space-x-4"
              whileHover={{ scale: 1.035 }}
            >
              {getIconForTechnology(skill.key)}
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {t(`skill.${skill.key}.title`)}
                </h3>
                {renderSkillLevel(t(`skill.${skill.key}.level.percentage`))}{" "}
                {/* Access level directly */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* <h2 className="text-4xl font-bold mb-12 mt-24">{t("certificates")}</h2> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {/* {CERTIFICATES.map((cert, index) => (
            <a
              key={index}
              href={t(`${cert.key}.url`)}
              className="bg-white rounded-lg shadow-md p-6 cursor-pointer flex flex-col justify-between hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div className="flex items-center space-x-4">
                {getIconForTechnology(cert.key)}
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    {t(`${cert.key}.title`)}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm">
                    <span>{t(`${cert.key}.organization`)}</span>
                    <span className="text-gray-500">|</span>
                    <span>{t(`${cert.key}.issued_date`)}</span>
                  </div>
                </div>
              </div>
            </a>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
