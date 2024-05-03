import React from "react";
import { motion } from "framer-motion";
import { FaTimes, FaDownload } from "react-icons/fa";
import { getIconForTechnology } from "../../constants/icons";

const Modal = ({ experience, closeModal }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900 bg-opacity-50 text-gray-800 dark:text-white px-24 py-10"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.63, delay: 0.1 }}
    >
      <motion.div
        className="bg-white dark:bg-slate-700 rounded-lg overflow-hidden shadow-xl relative flex flex-col lg:flex-row"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.1, delay: 0 }}
      >
        <div className="w-full lg:w-3/4 p-8 relative bg-slate-700">
          <div>
            <h3 className="mb-2 font-semibold text-3xl">{experience.title}</h3>
            <p className="text-lg text-vulcan-100 font-semibold mb-6 flex items-center">
              <span className="flex">
                <span className="text-gray-700 dark:text-gray-300 mr-3">
                  {experience.company}
                </span>{" "}
                -{" "}
                <span className="text-gray-700 dark:text-gray-300 ml-3">
                  {experience.location}
                </span>{" "}
              </span>
            </p>

            <p className="text-lg text-gray-800 dark:text-white mb-6">
              {experience.description}
            </p>

            {experience.comment && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Comment</h4>
                <p className="text-base text-gray-800 dark:text-white">
                  {experience.comment}
                </p>
              </div>
            )}
          </div>

          <div className="mt-8">
            {/* Files */}
            {experience.files && experience.files.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Files
                </h3>
                <div className="flex flex-wrap gap-4 mx-5">
                  {experience.files.map((file, index) => (
                    <a
                      key={index}
                      href={file.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg text-gray-800 dark:text-white hover:underline flex items-center"
                      download // Add download attribute for better UX
                    >
                      <FaDownload className="mr-2 text-vulcan-300" />{" "}
                      {/* Download icon */}
                      <span>{file.name}</span> {/* File name */}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="w-full lg:w-1/4 p-8 bg-slate-800 hidden lg:block">
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 md:my-6">
              Technologies Used
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 pt-2">
              {/* Display technologies */}
              {experience.technologies.map((technology, index) => (
                <span
                  key={index}
                  className="text-gray-600 dark:text-gray-300 text-3xl"
                >
                  {getIconForTechnology(technology)}
                </span>
              ))}
            </div>
          </div>

          <div className="my-8 mt-10 md:hidden lg:block">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white my-4 md:mt-8">
              {" "}
              {/* Adjusted margin for md screens */}
              Softskills Learned
            </h3>
            {/* Display softskills as a as a row of pills */}
            <div className="flex flex-wrap gap-2">
              {experience.softskills.map((softskill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-slate-900 text-white dark:text-white rounded-full text-sm"
                >
                  {softskill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <motion.button
          onClick={closeModal}
          aria-label="Close modal"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-4 right-4 text-2xl text-gray-600 dark:text-gray-300 transition-colors rounded-full hover:text-gray-800 dark:hover:text-white "
        >
          <FaTimes />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
