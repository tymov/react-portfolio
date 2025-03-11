import React, { useState, useEffect, useRef } from "react";
import { EXPERIENCES } from "../constants/experiences";
import { useTranslation } from "react-i18next";
import ExperienceModal from "./reusable/experienceModal";
import { motion } from "framer-motion";

const Experience = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [activeExperience, setActiveExperience] = useState(null);
  const experienceRefs = useRef([]);

  const { t } = useTranslation(["experience", "experiences"]);

  useEffect(() => {
    // Initialize refs array
    experienceRefs.current = experienceRefs.current.slice(
      0,
      EXPERIENCES.length
    );

    // Set up intersection observer to trigger animations when scrolling
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setActiveExperience(index);
          }
        });
      },
      { threshold: 0.3 }
    );

    experienceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      experienceRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const openModal = (experience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const dividerVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div id="experiences">
      <div
        id={t(`${EXPERIENCES[0].key}.key`)}
        className="bg-gray-50 text-gray-700 relative overflow-hidden"
      >
        <div className="custom-shape-divider-top-1716673344">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{ transform: "scaleX(-1)" }}
          >
            <motion.path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="#fff"
              initial="initial"
              animate="animate"
              variants={dividerVariants}
            ></motion.path>
          </svg>
        </div>

        <div className="max-w-screen-2xl mx-auto px-4 py-8">
          <motion.h2
            className="text-4xl font-bold mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t("experience.title")}
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {EXPERIENCES.map((experience, index) => (
              <motion.div
                key={experience.key}
                className="mb-8 flex flex-wrap justify-center pb-8 relative"
                ref={(el) => (experienceRefs.current[index] = el)}
                data-index={index}
                variants={itemVariants}
              >
                {/* Date */}
                <motion.div
                  className="w-full lg:w-1/6 flex items-start relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p className="text-xl uppercase sm:mb-5 sm:pb-5">
                    {t(`experience.${experience.key}.date`)}
                  </p>
                </motion.div>

                {/* Timeline */}
                <div className="w-full lg:w-1/6 lg:flex justify-center items-start relative hidden lg:items-center">
                  <motion.div
                    className="w-0.5 bg-white border-2 border-[#1364dd] absolute top-0 left-1/2 transform -translate-x-1/2"
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    transition={{ duration: 1, delay: 0.2 }}
                  ></motion.div>
                  <div className="w-4 h-4 bg-white border-2 border-[#1364dd] rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
                </div>

                {/* Content */}
                <motion.div
                  className="w-full lg:w-4/6 relative"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ x: 0 }}
                >
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
                  <motion.button
                    onClick={() => openModal(experience)}
                    className="text-blue-500 inline-block text-lg"
                    whileHover={{ scale: 1.05, color: "#0047AB" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {t("experience.details")}
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
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
