import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { IoMdDownload } from "react-icons/io";

const Hero = () => {
  const { t } = useTranslation("hero");

  return (
    <motion.div
      className="relative py-12 h-screen overflow-hidden flex justify-center items-center text-white bg-gradient-to-r from-[#1364dd]  to-[#0095ff]"
      id="hero"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-hero-pattern opacity-50"></div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row relative z-10">
        {/* Main container */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center items-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Content section */}
          <h1 className="text-7xl font-bold drop-shadow-lg">
            {t("hero.title")}
          </h1>
          <h3 className="text-2xl leading-relaxed my-10 drop-shadow-lg">
            {t("hero.subtitle")}
          </h3>
          <motion.div className="flex md:flex-row flex-wrap justify-start">
            {/* Added flex-wrap for buttons on small screens */}
          </motion.div>
          <div className="flex mt-4 font-semibold">
            <motion.a
              href="#" // Path to the downloadable file
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
              {t("hero.cv")}
            </motion.a>
            <motion.a
              href="#projects"
              className="bg-white text-gray-700 rounded-md py-4 px-8 shadow-lg hover:scale-110 hover:shadow-xl hover:bg-[#0095ff] hover:text-white transition-colors duration-300 mx-2"
              initial={{ opacity: 1 }}
              animate={{
                scale: 1.05,
                shadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {t("hero.projects")}
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 hidden md:flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Image section (visible on medium and larger screens) */}
          <img
            src="/Tymo-removebg-preview.png"
            alt="Tymo Verhaegen"
            className="w-96 h-auto object-cover rounded-lg "
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
