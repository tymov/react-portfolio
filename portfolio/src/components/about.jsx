import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./../index.css"; // Import your CSS file
import { IoLogoLinkedin, IoMdDownload, IoMdMail } from "react-icons/io";

export const About = () => {
  const { t } = useTranslation("about");
  return (
    <div
      id="about"
      className="dark:text-white text-gray-800  h-screen flex justify-center items-center relative shape-top-left"
    >
      <div class="custom-shape-divider-top-1716754311">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="#fff"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Replace with your actual image */}

          <div className="md:w-1/2">
            <motion.h1
              className="text-4xl font-bold uppercase header text-start mb-10"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.33 }}
            >
              <span className="header text-4xl md:text-5xl">05</span>{" "}
              <span className="header text-4xl md:text-5xl mx-5">
                {t("about.title")}
              </span>
            </motion.h1>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.66 }}
            >
              <p className="text-lg">{t("about.about1")}</p>
              <br />
              <p className="text-lg">{t("about.about2")}</p>
              <br />
              <p className="text-lg">{t("about.about3")}</p>
              <br />
            </motion.div>

            <div className="flex gap-4 mt-4">
              <motion.a
                href={t("about.file")} // Path to the downloadable file
                target="_blank"
                rel="noreferrer"
                className="flex items-center rounded-md py-4 px-5 shadow-lg hover:scale-110 hover:shadow-xl bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
                initial={{ opacity: 1 }}
                animate={{
                  scale: 1.05,
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                download // Adding the download attribute to make it a download link
              >
                <IoMdDownload className="mr-2" /> {/* Icon with margin-right */}
                {t("about.cv")}
              </motion.a>

              <motion.a
                className="flex items-center rounded-md py-4 px-5 shadow-lg hover:scale-110 hover:shadow-xl bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
                initial={{ opacity: 1 }}
                animate={{
                  scale: 1.05,
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                href="https://www.linkedin.com/in/tymo-verhaegen/"
              >
                <IoLogoLinkedin className="scale-[1.75]" />{" "}
                {/* Icon with margin-right */}
              </motion.a>

              <motion.a
                className="flex items-center rounded-md py-4 px-5 shadow-lg hover:scale-110 hover:shadow-xl bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
                initial={{ opacity: 1 }}
                animate={{
                  scale: 1.05,
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                href="mailto:tymoverhaegen@gmail.com"
              >
                <IoMdMail className="scale-[1.75]" />{" "}
                {/* Icon with margin-right */}
              </motion.a>
            </div>
          </div>

          <motion.div
            className="w-full md:w-1/2 hidden md:flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Image section (visible on medium and larger screens) */}
            <img
              src="/assets/about.jpg"
              alt="Tymo Verhaegen"
              className="w-[600px] h-auto object-cover rounded-lg  p-8" // Updated width to make the image larger
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
