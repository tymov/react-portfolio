import React, { useState } from "react";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaYoutube,
} from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
import { getIconForTechnology } from "./../../constants/icons";

const Modal = ({ project, closeModal }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75 text-gray-800 dark:text-white px-24 py-10">
      <div className="bg-white dark:bg-slate-700 rounded-lg overflow-hidden shadow-xl max-w-fit w-full h-full relative flex flex-col lg:flex-row">
        <div className="w-full lg:w-4/12 p-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
            {project.title}{" "}
            <span className="ml-10 flex items-center text-xl">
              <TiGroup className="mr-2" />
              <span className="text-gray-800 dark:text-white">
                {project.groupSize}
              </span>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
            {project.date}
          </p>
          <div className="mb-8">
            {/* Removed overflow-y-auto class */}
            <p className="text-gray-800 dark:text-white text-lg">
              {project.description}
            </p>
          </div>
          <div className="flex justify-center lg:hidden mb-4">
            {/* Image carousel buttons */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="mx-3 scale-150 bg-gray-200 dark:bg-slate-800 rounded-full p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={nextImage}
                  className="mx-3 scale-150 bg-gray-200 dark:bg-slate-800 rounded-full p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
                >
                  <FaChevronRight />
                </button>
              </>
            )}
            {/* Display the image */}
            <img
              src={project.images[currentImageIndex]}
              alt={project.title}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="w-full lg:w-6/12 p-8 relative hidden lg:flex justify-center items-center">
          {/* Image carousel buttons */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="mx-3 scale-150 absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 dark:bg-slate-800 rounded-full p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextImage}
                className="mx-3 scale-150 absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 dark:bg-slate-800 rounded-full p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
              >
                <FaChevronRight />
              </button>
            </>
          )}
          {/* Display the image */}
          <img
            src={project.images[currentImageIndex]}
            alt={project.title}
            className="rounded-lg"
          />
        </div>

        <div className="w-full lg:w-2/12 p-8 bg-slate-800">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            Technologies Used:
          </h3>
          <div className="grid grid-cols-3 gap-4 pt-2">
            {project.technologies.map((technology, index) => (
              <span
                key={index}
                className="text-gray-600 dark:text-gray-300 text-3xl"
              >
                {getIconForTechnology(technology)}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Watch Demo
            </h3>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
            >
              <span className="text-red-500 text-4xl">
                <FaYoutube />
              </span>
            </a>
          </div>
        </div>
        <button
          onClick={closeModal}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-2xl text-gray-600 dark:text-gray-300 transition-colors rounded-full hover:text-gray-800 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600"
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
