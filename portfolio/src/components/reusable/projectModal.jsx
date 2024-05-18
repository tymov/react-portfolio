import React, { useState, useEffect } from "react";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaYoutube,
  FaGit,
} from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
import { getIconForTechnology } from "../../constants/icons";
import { motion } from "framer-motion";
import { SiGit } from "react-icons/si";
import Graph from "./graph";

const Modal = ({ project, closeModal }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalHeight, setModalHeight] = useState("auto");
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [showExtraInfo, setShowExtraInfo] = useState(false);

  useEffect(() => {
    const descriptionHeight =
      document.getElementById("description").offsetHeight;
    const image = new Image();
    image.src = project.images[currentImageIndex];
    image.onload = () => {
      const imageHeight = image.height;
      const maxHeight = Math.max(descriptionHeight, imageHeight);
      setModalHeight(maxHeight);
    };
  }, [project, currentImageIndex]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  const toggleExtraInfo = () => {
    setShowExtraInfo(!showExtraInfo);
  };

  const getDescription = () => {
    return isDescriptionExpanded
      ? project.description
      : project.description.slice(0, 300) + "...";
  };

  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900 bg-opacity-50 text-gray-800 dark:text-white px-6 overflow-y-auto"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <motion.div
        className="bg-white  rounded-lg dark:bg-slate-800 overflow-hidden shadow-xl w-full h-full lg:h-full relative flex flex-col lg:flex-row"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.1, delay: 0 }}
        style={{ maxHeight: "90vh" }}
      >
        <div
          className="w-full md:w-4/4 lg:w-4/12 p-8 z-40 dark:bg-slate-700"
          id="description"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center justify-between">
            <span>{project.title}</span>
            <span className="flex items-center text-xl">
              <TiGroup className="mr-2" />
              <span className="text-gray-800 dark:text-white">
                {project.groupSize}
              </span>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-3">
            {project.date}
          </p>
          <div
            className="mb-8 h-full overflow-y-auto lg:max-h-[1400px] md:max-h-[1000px] sm:max-h-[475px] direction-rtl"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(71, 85, 105, 0.5) rgba(51, 65, 85, 0.2)",
              direction: "rtl", // Set scrollbar direction to right-to-left
            }}
          >
            <div style={{ direction: "ltr" }}>
              <p className="text-gray-800 dark:text-white text-lg lg:mt-3 ml-3 ">
                {getDescription()}
              </p>
              {project.description.length > 150 && (
                <button
                  onClick={toggleDescription}
                  className="text-blue-600 dark:text-blue-300 font-semibold hover:underline focus:outline-none py-6 lg:pb-24 px-5 sm:mb-4"
                >
                  {isDescriptionExpanded ? "Read less" : "Read more"}
                </button>
              )}
            </div>
          </div>{" "}
        </div>

        <div
          className={`w-full ${
            showExtraInfo ? "lg:w-11/12 z-40" : "lg:w-12/12 z-40"
          } lg:w-12/12 hidden p-8 relative lg:flex justify-center items-center bg-slate-900`}
        >
          {/* Check if there are images */}
          {project.images.length > 0 ? (
            <>
              {/* Container for image and count */}
              <div className={`relative ${project.aspectRatio >= 1 ? "" : ""}`}>
                {/* Display the image or graph */}
                {showExtraInfo ? (
                  <div className="w-full h-full flex items-center justify-center">
                    {/* Render your graph component here */}
                    <Graph project={project} />
                  </div>
                ) : (
                  <>
                    {/* Display the image */}
                    <motion.img
                      key={currentImageIndex}
                      src={project.images[currentImageIndex]}
                      alt={project.title}
                      className="rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.65 }}
                    />
                    {/* Display the number of images */}
                    <p className="absolute top-0 right-0 mt-2 mr-2 text-gray-600 bg-slate-800 px-2 py-1 rounded-md  dark:text-gray-200">
                      {`${currentImageIndex + 1}/${project.images.length}`}
                    </p>
                    {/* Arrows */}
                    {project.images.length > 1 && !showExtraInfo && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute mx-2 left-0 top-1/2 transform -translate-y-1/2 z-50 bg-gray-200 dark:bg-slate-800 rounded-full p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
                        >
                          <FaChevronLeft className="text-3xl" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute mx-2 right-0 top-1/2 transform -translate-y-1/2 z-50 bg-gray-200 dark:bg-slate-800 rounded-full p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
                        >
                          <FaChevronRight className="text-3xl" />
                        </button>
                      </>
                    )}
                  </>
                )}
              </div>

              {/* Button to toggle extra info */}
              <motion.button
                onClick={toggleExtraInfo}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.2, delay: 0 }}
                className="flex absolute bottom-0 right-0 p-4 m-4 select-none !bg-slate-900 hover:bg-slate-800  gap-2 rounded-lg py-3 px-4 font-sans text-xs font-bold uppercase text-white transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                {showExtraInfo ? (
                  <div className="flex items-center z-[60]">
                    <span className="text-lg mr-1">Hide Extra Info</span>
                    <span className="text-lg opacity-1 hover:animate-pulse">
                      {" "}
                      {/* Animate-ping class */}
                      <FaChevronRight />
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center z-[60]">
                    <span className="text-lg ml-1">
                      <FaChevronLeft className="opacity-1 hover:animate-pulse" />{" "}
                      {/* Animate-ping class */}
                    </span>
                    <span className="text-lg ml-1">Show Extra Info</span>
                  </div>
                )}
              </motion.button>
            </>
          ) : (
            <>
              <p className="text-white text-3xl bg-slate-900 py-3 px-4 rounded-md">
                No images for this project.
              </p>

              <motion.button
                onClick={toggleExtraInfo}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.2, delay: 0 }}
                className="flex absolute bottom-0 right-0 p-4 m-4 select-none !bg-slate-900 hover:bg-slate-800  gap-2 rounded-lg py-3 px-4 font-sans text-xs font-bold uppercase text-white transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                {showExtraInfo ? (
                  <div className="flex items-center z-[60]">
                    <span className="text-lg mr-1">Hide Extra Info</span>
                    <span className="text-lg opacity-1 hover:animate-pulse">
                      {" "}
                      {/* Animate-ping class */}
                      <FaChevronRight />
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center z-[60]">
                    <span className="text-lg ml-1">
                      <FaChevronLeft className="opacity-1 hover:animate-pulse" />{" "}
                      {/* Animate-ping class */}
                    </span>
                    <span className="text-lg ml-1">Show Extra Info</span>
                  </div>
                )}
              </motion.button>
            </>
          )}
        </div>

        {/* Extra info */}
        <motion.div
          className={`${
            showExtraInfo ? "z-50" : "lg:hidden"
          } w-full lg:w-1/4 p-8 !bg-slate-800 hidden lg:block`}
          style={{
            overflowY: "auto", // Enable vertical scrolling
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(71, 85, 105, 0.5) rgba(51, 65, 85, 0.2)",
            direction: "ltr", // Set scrollbar direction to left-to-right
          }}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.225, delay: 0 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 md:my-6">
            Technologies Used
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 pt-2">
            {project.technologies.map((technology, index) => (
              <span
                key={index}
                className="text-gray-600 dark:text-gray-300 text-3xl"
                title={technology.name}
              >
                {getIconForTechnology(technology.name)}
              </span>
            ))}
          </div>
          {project.liveDemoLink && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Watch Demo
              </h3>
              <a
                href={project.liveDemoLink}
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
              >
                <span className="text-red-500 text-3xl">
                  <FaYoutube />
                </span>
              </a>
            </div>
          )}

          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-6">
              Type
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg my-4">
              {project.type}
            </p>
          </div>

          {project.githubLink && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Source Code
              </h3>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
              >
                <span className="text-gray-800 dark:text-red-500 text-3xl">
                  <SiGit />
                </span>
              </a>
            </div>
          )}

          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-6">
              Role
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg my-4">
              {project.role}
            </p>
          </div>

          {project.softskills.length > 0 && (
            <div className="my-8 mt-10">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white my-4">
                Soft Skills
              </h3>
              {/* Display softskills as a list */}
              <div className="flex flex-wrap gap-2">
                {project.softskills.map((softskill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-slate-900 text-white dark:text-white rounded-full text-sm"
                  >
                    {softskill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        <motion.button
          onClick={closeModal}
          aria-label="Close modal"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-4 right-4 text-2xl text-gray-600 dark:text-gray-300 transition-colors rounded-full hover:text-gray-800 dark:hover:text-white z-[60]"
        >
          <FaTimes />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
