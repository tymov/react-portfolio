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

const Modal = ({ project, closeModal }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalHeight, setModalHeight] = useState("auto");

  useEffect(() => {
    const descriptionHeight =
      document.getElementById("description").offsetHeight;
    const image = new Image();
    image.src = project.images[currentImageIndex];
    image.onload = () => {
      const imageWidth = image.width;
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

  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900  bg-opacity-50 text-gray-800 dark:text-white px-24 py-10"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <motion.div
        className="bg-white dark:bg-slate-700 rounded-lg overflow-hidden shadow-xl w-full h-full relative flex flex-col lg:flex-row"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        style={{ height: modalHeight }}
      >
        <div className="w-full lg:w-4/12 p-8" id="description">
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

          <div className="mb-8 h-full max-h-full">
            <div className="overflow-y-auto h-full">
              <p className="text-gray-800 dark:text-white text-lg">
                {project.description}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-6/12 p-8 relative hidden lg:flex justify-center items-center bg-slate-900">
          {/* Check if there are images */}
          {project.images.length > 0 ? (
            <>
              {/* Image carousel buttons */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute mx-2 left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 dark:bg-slate-800 rounded-full p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
                  >
                    <FaChevronLeft className="text-3xl" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute mx-2 right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 dark:bg-slate-800 rounded-full p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
                  >
                    <FaChevronRight className="text-3xl" />
                  </button>
                </>
              )}

              {/* Container for image and count */}
              <div className="relative">
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
              </div>
            </>
          ) : (
            <p className="text-white text-3xl bg-slate-900 py-3 px-4 rounded-md">
              No images for this project.
            </p>
          )}
        </div>

        <div className="w-full lg:w-2/12 p-8 py-2 justify-center items-center bg-slate-800 lg:py-16 mx-auto px-5">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 md:my-4 lg:my-0 lg:mb-2">
            Technologies Used
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 pt-2">
            {project.technologies.map((technology, index) => (
              <span
                key={index}
                className="text-gray-600 dark:text-gray-300 text-3xl"
                title={technology}
              >
                {getIconForTechnology(technology)}
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
                <span className="text-red-500 text-4xl">
                  <FaYoutube />
                </span>
              </a>
            </div>
          )}

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
                <span className="text-gray-800 dark:text-white text-4xl">
                  <FaGit />
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

          <div className="my-8 mt-10">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white my-4">
              Soft Skills
            </h3>
            {/* Display softskills as a list */}
            <ul>
              {project.softskills.map((skill, index) => (
                <li
                  key={index}
                  className="text-gray-600 dark:text-gray-300 text-xl"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <motion.button
          onClick={closeModal}
          aria-label="Close modal"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-4 right-4 text-2xl text-gray-600 dark:text-gray-300 transition-colors rounded-full hover:text-gray-800 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600"
        >
          <FaTimes />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
