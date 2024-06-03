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
import { useTranslation } from "react-i18next";

const Modal = ({ project, closeModal }) => {
  const { t } = useTranslation(["project", "projects"]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalHeight, setModalHeight] = useState("auto");
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [showExtraInfo, setShowExtraInfo] = useState(false);

  const technologies = t(`project.${project.key}.technologies`, {
    returnObjects: true,
  });
  const softskills = t(`project.${project.key}.softskills`, {
    returnObjects: true,
  });
  const images = t(`project.${project.key}.images`, {
    returnObjects: true,
  });

  const description = t(`project.${project.key}.description`, {
    returnObjects: true,
  });

  useEffect(() => {
    if (!Array.isArray(images)) {
      console.error("Images is not an array:", images);
      return; // Exit early if images is not an array
    }

    const descriptionHeight =
      document.getElementById("description")?.offsetHeight || 0;
    const image = new Image();
    image.src = images[currentImageIndex];
    image.onload = () => {
      const imageHeight = image.height;
      const maxHeight = Math.max(descriptionHeight, imageHeight);
      setModalHeight(maxHeight);
    };
  }, [project, currentImageIndex, images]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
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
      ? description
      : description.slice(0, 300) + "...";
  };

  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900 bg-opacity-50 text-gray-800 dark:text-white px-6 overflow-y-auto"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <motion.div
        className="bg-white rounded-lg dark:bg-slate-800 overflow-hidden shadow-xl w-full h-full lg:h-full relative flex flex-col lg:flex-row"
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
            <span>{t(`project.${project.key}.title`)}</span>
            <span className="flex items-center text-xl text-blue-600 dark:text-white">
              <TiGroup className="mr-2" />
              <span className="">{t(`project.${project.key}.groupSize`)}</span>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-3 capitalize">
            {t(`project.${project.key}.date`)}
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
              {description.length > 150 && (
                <button
                  onClick={toggleDescription}
                  className="text-blue-600 dark:text-blue-300 font-semibold hover:underline focus:outline-none py-6 lg:pb-24 px-5 sm:mb-4"
                >
                  {isDescriptionExpanded
                    ? t(`project.readLess`)
                    : t(`project.readMore`)}
                </button>
              )}
            </div>
          </div>{" "}
        </div>

        <div
          className={`w-full ${
            showExtraInfo ? "lg:w-11/12 z-40" : "lg:w-12/12 z-40"
          } lg:w-12/12 hidden p-8 relative lg:flex justify-center items-center bg-gray-100 dark:bg-slate-900`}
        >
          {/* Check if there are images */}
          {images.length > 0 ? (
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
                      src={images[currentImageIndex]}
                      alt={t(`project.${project.key}.title`)}
                      className="rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.65 }}
                    />
                    {/* Display the number of images */}
                    <p className="absolute top-0 right-0 mt-2 mr-2 text-gray-600 bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded-md  dark:text-gray-200">
                      {`${currentImageIndex + 1}/${images.length}`}
                    </p>
                    {/* Arrows */}
                    {images.length > 1 && !showExtraInfo && (
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
                className="flex absolute bottom-0 right-0 p-4 m-4 select-none bg-blue-500 hover:bg-blue-600 dark:!bg-slate-900 dark:hover:bg-slate-800  gap-2 rounded-lg py-3 px-4 font-sans text-xs font-bold uppercase text-white transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                {showExtraInfo ? (
                  <div className="flex items-center z-[60]">
                    <span className="text-lg mr-1">
                      {t(`project.showLess`)}
                    </span>
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
                    <span className="text-lg ml-1">
                      {t(`project.showMore`)}
                    </span>
                  </div>
                )}
              </motion.button>
            </>
          ) : (
            <>
              <p className="text-white text-3xl bg-slate-900 py-3 px-4 rounded-md">
                {t(`project.noImages`)}
              </p>

              <motion.button
                onClick={toggleExtraInfo}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.2, delay: 0 }}
                className="flex absolute bottom-0 right-0 p-4 m-4 select-none bg-blue-500 hover:bg-blue-600 dark:!bg-slate-900 dark:hover:bg-slate-800  gap-2 rounded-lg py-3 px-4 font-sans text-xs font-bold uppercase text-white transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                {showExtraInfo ? (
                  <div className="flex items-center z-[60]">
                    <span className="text-lg mr-1">
                      {t(`project.showLess`)}
                    </span>
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
                    <span className="text-lg ml-1">
                      {t(`project.showMore`)}
                    </span>
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
          } w-full lg:w-1/4 p-8  bg-white dark:!bg-slate-800 hidden lg:block`}
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
            {t(`project.technologiesUsed`)}
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 pt-2">
            {technologies.map((technology, index) => (
              <span
                key={index}
                className="text-gray-600 dark:text-gray-300 text-3xl"
                title={technology.name}
              >
                {getIconForTechnology(technology.name)}
              </span>
            ))}
          </div>
          {t(`project.${project.key}.liveDemoLink`) && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {t(`project.demo`)}
              </h3>
              <a
                href={t(`project.${project.key}.liveDemoLink`)}
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
              {t(`project.type`)}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg my-4">
              {t(`project.${project.key}.type`)}
            </p>
          </div>

          {t(`project.${project.key}.githubLink`) && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {t(`project.sourceCode`)}
              </h3>
              <a
                href={t(`project.${project.key}.githubLink`)}
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
              {t(`project.role`)}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg my-4">
              {t(`project.${project.key}.role`)}
            </p>
          </div>

          {softskills.length > 0 && (
            <div className="my-8 mt-10">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white my-4">
                {t(`project.softskills`)}
              </h3>
              {/* Display softskills as a list */}
              <div className="flex flex-wrap gap-2">
                {softskills.map((softskill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-500 dark:bg-slate-900 text-white rounded-full text-md"
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
