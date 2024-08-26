import React, { useState } from "react"; // Add useState import
import { useTranslation } from "react-i18next";
import { PROJECTS } from "../constants/projects";
import ProjectModal from "./reusable/projectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { t } = useTranslation(["project", "projects"]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <div id="projects" className="bg-white">
      <div className="custom-shape-divider-top-1716673344">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1364dd" />
              <stop offset="100%" stopColor="#0095ff" />
            </linearGradient>
          </defs>
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="url(#gradient)"
          ></path>
        </svg>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold mb-12">{t("project.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-b-lg border-t-4 border-[#1364dd] shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-4">
                {t(`project.${project.key}.title`)}
              </h3>
              <p className="text-gray-700 mb-4">
                {t(`project.${project.key}.description`).slice(0, 200)}...
              </p>
              <button
                onClick={() => openModal(project)}
                className="text-blue-500  inline-block"
              >
                {t("project.learnMore")}
              </button>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <ProjectModal project={selectedProject} closeModal={closeModal} t={t} />
      )}
    </div>
  );
};

export default Projects;
