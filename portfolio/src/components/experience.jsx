import React, { useState } from "react";
import { EXPERIENCES } from "../constants/experiences";
import { useTranslation } from "react-i18next";
import ExperienceModal from "./reusable/experienceModal";

const Experience = () => {
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
    <div id="experiences">
      <div
        id={t(`${EXPERIENCES[0].key}.key`)}
        className="bg-gray-50 text-gray-700"
      >
        <div className="custom-shape-divider-top-1716673344">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{ transform: "scaleX(-1)" }} /* Inline Style Object */
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="#fff"
            ></path>
          </svg>
        </div>

        <div className="max-w-screen-2xl mx-auto px-4 py-8">
          <h2 className="text-4xl font-bold mb-12">{t("experience.title")}</h2>
          <div>
            {EXPERIENCES.map((experience, index) => (
              <div
                key={experience.key}
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
                  <div className="w-0.5 bg-white border-2 border-[#1364dd] absolute top-0 left-1/2 transform -translate-x-1/2 h-full"></div>
                  <div className="w-4 h-4 bg-white border-2 border-[#1364dd] rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-4/6 relative">
                  <h3 className="mb-2 font-semibold text-2xl">
                    {t(`experience.${experience.key}.title`)}
                  </h3>
                  <span className="text-lg text-[#1364dd] font-semibold mb-2 pb-2">
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
                      <button
                        onClick={() => openModal(experience)}
                        className="text-blue-500 inline-block text-lg"
                      >
                        {t("experience.details")}
                      </button>
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {isModalOpen && (
          <ExperienceModal
            experience={selectedExperience}
            closeModal={closeModal}
            t={t}
          />
        )}
      </div>
    </div>
  );
};

export default Experience;
