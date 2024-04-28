import React, { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import Modal from "./reusable/projectModal";
import { PROJECTS } from "../constants/projects";
import { motion } from "framer-motion";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [sortedProjects, setSortedProjects] = useState([]);

  useEffect(() => {
    // Sort the projects array when the component mounts
    const sortedProjects = [...PROJECTS].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA - dateB;
    });
    setSortedProjects(sortedProjects);
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div
      className="text-gray-800 dark:text-white pb-24 px-10 pt-10"
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
          <span className="header text-4xl md:text-5xl">04</span>{" "}
          <span className="header text-4xl md:text-5xl mx-5">PROJECTS</span>
        </motion.h1>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.66 }}
      >
        {sortedProjects.map((project, index) => (
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
                <p className="text-md text-blue-gray-500">{project.date}</p>
              </div>
            </div>

            <button
              onClick={() => {
                if (project.status === "Finished") {
                  openModal(project);
                }
              }}
              className="!font-medium !text-blue-gray-900 !transition-colors hover:!text-white"
              disabled={project.status === "Unfinished"}
            >
              <div className="p-6 pt-0">
                <div className="flex select-none hover:bg-slate-800 hover:bg-opacity-40 items-center gap-2 rounded-lg py-3 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                  {project.status === "Finished" ? (
                    <>
                      <span className="text-md">Check out the project</span>
                      <span className="text-md">
                        <FaChevronRight />
                      </span>
                    </>
                  ) : (
                    <span className="text-md">
                      In progress, check back later
                    </span>
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
    </div>
  );
};

export default Projects;
