import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import Modal from "./reusable/projectModal";
import { PROJECTS } from "../constants/projects";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { t } = useTranslation(["project", "projects"]);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div id="projects">
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

      <motion.div
        className="text-gray-800 dark:text-white pb-24 px-10"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 0 }}
        transition={{ duration: 0.99, delay: 0.5 }}
      >
        <div className="flex items-center justify-between mb-4 pb-10">
          <motion.h1
            className="text-4xl font-bold uppercase header text-start"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.33 }}
          >
            <span className="header text-4xl md:text-5xl">02</span>{" "}
            <span className="header text-4xl md:text-5xl mx-5">
              {t("project.title")}
            </span>
          </motion.h1>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.66 }}
        >
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="relative flex flex-col rounded-xl border-2 dark:border-slate-800 dark:bg-slate-925 hover:dark:bg-slate-900 bg-gray-50 hover:bg-gray-100 hover:scale-105 transition-colors border-gray-300 bg-clip-border text-gray-800 dark:text-white shadow-md"
            >
              <button
                onClick={() => {
                  if (t(`project.${project.key}.status`) === "Finished") {
                    openModal(project);
                  }
                }}
                className="focus:outline-none"
                disabled={t(`project.${project.key}.status`) === "Unfinished"}
              >
                <div className="p-6 flex items-center">
                  <span className="text-4xl mr-4">{project.icon}</span>
                  <div>
                    <h5 className="my-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased items-start text-left">
                      {t(`project.${project.key}.title`)}
                    </h5>
                    <p className="text-md text-blue-gray-500 items-start text-left capitalize">
                      {t(`project.${project.key}.date`)}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="flex select-none items-center gap-2 rounded-lg py-3 px-4 text-center align-middle font-sans text-xs font-bold uppercase dark:text-white transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    {t(`project.${project.key}.status`) === "Finished" ? (
                      <>
                        <span className="text-md">
                          {t("project.learnMore")}
                        </span>
                        <span className="text-md">
                          <FaChevronRight />
                        </span>
                      </>
                    ) : (
                      <span className="text-md">{t("project.inProgress")}</span>
                    )}
                  </div>
                </div>
              </button>
            </div>
          ))}
        </motion.div>

        {selectedProject && (
          <Modal project={selectedProject} closeModal={closeModal} />
        )}
      </motion.div>
    </div>
  );
};

export default Projects;
