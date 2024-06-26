import React from "react";
import { motion } from "framer-motion";
import { FaTimes, FaEye } from "react-icons/fa";
import { getIconForTechnology } from "../../constants/icons";
import SkillProgressBar from "./progressbar";
import { useTranslation } from "react-i18next";

const Modal = ({ skill, closeModal }) => {
  const { t } = useTranslation(["skill", "skills"]);

  const level = t(`skill.${skill.key}.level`, { returnObjects: true });
  const relatedTechnologies = t(`skill.${skill.key}.relatedTechnologies`, {
    returnObjects: true,
  });
  const projects = t(`skill.${skill.key}.projects`, { returnObjects: true });
  const certifications = t(`skill.${skill.key}.certifications`, {
    returnObjects: true,
  });
  const education = t(`skill.${skill.key}.education`, { returnObjects: true });
  const courses = t(`skill.${skill.key}.courses`, { returnObjects: true });

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
        <div className="w-full lg:w-3/4 p-8 relative bg-white dark:bg-slate-700">
          <div>
            <h3 className="mb-6 font-semibold text-3xl flex items-center">
              <span className="mr-2">{getIconForTechnology(skill.key)}</span>
              <span className="ml-2">{t(`${skill.key}`)}</span>
            </h3>
            {/* <p className="text-lg text-gray-800 dark:text-white my-5">
              {t(`skill.${skill.key}.description`)}
            </p> */}
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              {t(`skill.level`)} {/* Access the 'name' property */}
            </h3>
            <SkillProgressBar level={level} />
            {/* Pass only the percentage */}
          </div>

          {projects.length > 0 && (
            <div className="mt-8 hidden lg:block">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                {t("skill.projects")}
              </h3>

              <div className="grid grid-cols-3 gap-4">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col rounded-xl border-2 dark:border-slate-800 dark:bg-slate-800 bg-gray-50 border-gray-300 bg-clip-border text-gray-800 dark:text-white shadow-md"
                  >
                    <div className="p-4 flex items-center">
                      <span className="text-4xl mr-4">
                        {" "}
                        {getIconForTechnology(project.technology)}
                      </span>
                      <div>
                        <h5 className="my-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased items-start text-left">
                          {project.title}
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="w-full lg:w-1/4 p-8 bg-gray-100 dark:bg-slate-800">
          <div className="mb-8">
            {(certifications.length > 0 ||
              courses.length > 0 ||
              education.length > 0) && (
              <div className="pt-2">
                {certifications.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 md:my-4">
                      {t("skill.certifications")}
                    </h3>
                    {certifications.map((certificate, index) => (
                      <div key={index}>
                        <h3 className="text-md text-vulcan-100 font-semibold mb-3 mt-3 flex items-center">
                          <span className="flex">
                            <span className="text-gray-700 dark:text-gray-300">
                              {certificate.title}
                            </span>
                          </span>
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-2">
                          {certificate.organization}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">
                          {certificate.date}
                        </p>
                        {certificate.url && (
                          <a
                            href={certificate.url}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center text-vulcan-300 hover:underline"
                          >
                            <FaEye className="mr-3" />
                            <span className="text-blue-500 dark:text-white">
                              {t("skill.viewCertificate")}
                            </span>
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {education.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 md:my-6">
                      {t("skill.education")}
                    </h3>
                    <p className="text-md text-vulcan-100 font-semibold mb-3 mt-3 flex items-center">
                      <span className="flex">
                        <span className="text-gray-700 dark:text-gray-300">
                          {education[0].title}
                        </span>
                      </span>
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      {education[0].organization}
                    </p>
                  </div>
                )}
                {courses.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 pt-6 md:my-6">
                      {t("skill.courses")}
                    </h3>
                    {courses.map((course, index) => (
                      <div key={index}>
                        <h3 className="text-md text-vulcan-100 font-semibold mb-3 mt-3 flex items-center">
                          <span className="flex">
                            <span className="text-gray-700 dark:text-gray-300">
                              {course.title}
                            </span>
                          </span>
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-2">
                          <span className="flex">
                            <span className="text-gray-700 dark:text-gray-300">
                              {course.organization}
                            </span>
                          </span>
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">
                          {course.date}
                        </p>
                        {course.url && (
                          <a
                            href={course.url}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center text-vulcan-300 hover:underline"
                          >
                            <FaEye className="mr-3" />
                            <span className="text-blue-500 dark:text-white">
                              {t("skill.viewCourse")}
                            </span>
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
            {certifications.length === 0 &&
              courses.length === 0 &&
              education.length === 0 && (
                <div className="pt-2">
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    {t("skill.noCertificationsCoursesEducation")}
                  </p>
                </div>
              )}
          </div>
        </div>

        <motion.button
          onClick={closeModal}
          aria-label="Close modal"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-4 right-4 text-2xl text-gray-600 dark:text-gray-300 transition-colors rounded-full hover:text-gray-800 dark:hover:text-white"
        >
          <FaTimes />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
