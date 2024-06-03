import { useState } from "react";
import { SKILLS } from "../constants/skills";
import { getIconForTechnology } from "../constants/icons";
import { motion } from "framer-motion";
import Modal from "./reusable/skillModal";
import { useTranslation } from "react-i18next";

export const Skills = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const { t } = useTranslation(["skill", "skills"]);

  const openModal = (experience) => {
    setSelectedSkill(experience);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="skills">
      <div className="custom-shape-divider-top-1716673344">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="url(#gradient)"
          ></path>
        </svg>
      </div>

      <div
        className="text-gray-800 dark:text-white pb-24 px-10 pt-10"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 0 }}
        transition={{ duration: 0.99, delay: 0.5 }}
      >
        <div className="flex items-center justify-between mb-4 pb-10">
          <motion.h1
            className="text-4xl font-bold uppercase header text-start"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.33 }}
          >
            <span className="header text-4xl md:text-5xl">04</span>{" "}
            <span className="header text-4xl md:text-5xl mx-5">
              {t("skill.title")}
            </span>
          </motion.h1>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 items-center justify-center gap-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.66 }}
        >
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              className="rounded-2xl p-4 border-2 border-gray-300 hover:bg-gray-100 dark:border-slate-800 dark:bg-slate-925 hover:dark:bg-slate-900 hover:scale-105 transition-colors flex justify-center items-center cursor-pointer"
              onClick={() => {
                openModal(skill);
              }}
            >
              <span className="!text-5xl scale-165 py-2">
                {getIconForTechnology(skill.key)}{" "}
                {/* Corrected to use skill.key */}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Render modal if a skill is selected */}
        {isModalOpen && <Modal skill={selectedSkill} closeModal={closeModal} />}
      </div>
    </div>
  );
};
