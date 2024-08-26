import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./../index.css"; // Import your CSS file
import { IoMdDownload } from "react-icons/io";

const About = () => {
  const { t } = useTranslation("about");

  return (
    <div
      id="about"
      className="text-white bg-gradient-to-r from-[#1364dd] to-[#0095ff] h-screen flex justify-center items-center relative shape-top-left"
    >
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

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Replace with your actual image */}

          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">{t("about.title")}</h2>
            <p className="">{t("about.about1")}</p>
            <br />
            <p className="0">{t("about.about2")}</p>
            <br />
            <p className="">{t("about.about3")}</p>
            <br />

            <div className="flex mt-4 font-semibold">
              <motion.a
                href={t("about.file")} // Path to the downloadable file
                target="_blank"
                rel="noreferrer"
                className="flex items-center rounded-md py-4 px-5 shadow-lg hover:scale-110 hover:shadow-xl hover:bg-[#1364dd] text-white bg-[#0095ff] transition-colors duration-300 mx-2 mr-5"
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
              src="assets/about.jpg"
              alt="Tymo Verhaegen"
              className="w-[500px] h-auto object-cover rounded-lg shadow-lg" // Updated width to make the image larger
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
