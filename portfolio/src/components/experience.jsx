import React, { useState } from "react";
import { EXPERIENCES } from "../constants/experiences";
import { motion } from "framer-motion";
import Modal from "./reusable/experienceModal";
import { FaChevronRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const Experience = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const { t } = useTranslation(["experience", "experiences"]);

  const openModal = (experience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.div
      className="text-gray-800 dark:text-white pb-10 pt-10 px-10 relative"
      id="experience"
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 0 }}
      transition={{ duration: 0.99, delay: 0 }}
    >
      <h1 className="text-4xl font-bold uppercase header text-start mb-10">
        <span className="header text-4xl md:text-5xl">02</span>{" "}
        <span className="header text-4xl md:text-5xl mx-5">{t('experience.title')}</span>
      </h1>

      <div>
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap justify-center pb-8 relative"
          >
            {/* Date */}
            <div className="w-full lg:w-1/6 flex items-start relative">
              <p className="text-xl uppercase sm:mb-5 sm:pb-5">
                {t(`experience.${experience.key}.date`)}
              </p>
            </div>

            {/* Timeline */}
            <div className="w-full lg:w-1/6 lg:flex justify-center items-start relative hidden lg:items-center">
              <div className="w-0.5 bg-white dark:bg-slate-925 border-2 border-blue-800 absolute top-0 left-1/2 transform -translate-x-1/2 h-full"></div>
              <div className="w-4 h-4 bg-white dark:bg-slate-925 border-2 border-blue-800 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-4/6 relative">
              <h3 className="mb-2 font-semibold text-2xl">
                {t(`experience.${experience.key}.title`)}
              </h3>
              <span className="text-lg text-blue-400 dark:text-gray-100 font-semibold mb-2 pb-2">
                {" - "}
                {t(`experience.${experience.key}.company`)}{" "}
              </span>
              <p className="text-lg mt-2 mb-4 pb-3 pt-2">
                {t(`experience.${experience.key}.description`)}
              </p>

              {/* Button to open modal */}
              <button
                onClick={() => {
                  openModal(experience);
                }}
                className=""
              >
                <div>
                  <button className="flex select-none bg-blue-500 hover:bg-blue-600 items-center gap-2 rounded-lg px-4 py-3 utext-md text-center align-middle font-sans font-bold uppercase text-white transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    <span className="text-lg">{t('experience:details')}</span>
                    <span className="text-lg">
                      <FaChevronRight />
                    </span>
                  </button>
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Render modal if open */}
      {isModalOpen && (
        <Modal experience={selectedExperience} closeModal={closeModal} />
      )}
    </motion.div>
  );
};

export default Experience;
