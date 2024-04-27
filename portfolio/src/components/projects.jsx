import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import Modal from "./reusable/modal";
import { PROJECTS } from "../constants/projects";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div
      className="text-gray-800 dark:text-white flex flex-col pb-24 px-10 pt-10"
      id="projects"
    >
      <div className="text-gray-800 dark:text-white pb-16 px-5 pt-10 ">
        <h1 className="text-4xl font-bold uppercase header text-star">
          <span className="header text-4xl md:text-5xl">04</span>{" "}
          <span className="header text-4xl md:text-5xl mx-5">PROJECTS</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-5">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="relative flex flex-col rounded-xl border-2 dark:border-slate-800 dark:bg-slate-925 hover:dark:bg-slate-900 hover:scale-105 transition-colors border-gray-300 bg-clip-border text-gray-800 dark:text-white shadow-md"
          >
            <div className="p-6 flex items-center">
              <span className="text-4xl mr-4">{project.icon}</span>
              <div>
                <h5 className="my-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {project.title}
                </h5>
              </div>
            </div>

            <button
              onClick={() => openModal(project)}
              className="!font-medium !text-blue-gray-900 !transition-colors hover:!text-white"
            >
              <div className="p-6 pt-0">
                <div
                  className="flex select-none items-center gap-2 rounded-lg py-3 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-dark="true"
                >
                  {"Check it out!"}
                  <span className="text-md">
                    <FaChevronRight />
                  </span>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <Modal project={selectedProject} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Projects;
