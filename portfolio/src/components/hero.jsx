import { useState, useEffect } from "react";
import { PrimaryButton } from "./buttons/priButton";
import SecondaryButton from "./buttons/secButton";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <motion.div
      className="text-gray-800 dark:text-white pb-4 px-10 lg:my-60"
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 0 }}
      transition={{ duration: 0.5, delay: 0 }}
    >
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.33 }}
              className="text-4xl font-bold mb-4 uppercase header text-center md:text-start"
            >
              <span className="header text-4xl lg:text-6xl">01</span>
              <span className="header text-4xl lg:text-6xl mx-5">INTRO</span>
            </motion.h1>

            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.66 }}
              className="md:text-lg 2xl:text-2xl mb-4 text-center md:text-start px-3 md:px-0"
            >
              Welcome to my portfolio. I'm Tymo Verhaegen, a dedicated
              professional in Application Development, with a particular
              emphasis on Front-End Development and UI/UX Design. Feel free to
              delve into my showcased projects below.
            </motion.p>

            <motion.div
              className="buttonContainer mt-4 pt-4 flex md:justify-start md:items-start justify-center items-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.99 }}
            >
              <PrimaryButton
                text="Projects"
                onClick={() => {
                  const projectsSection = document.getElementById("projects");
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              />
              <SecondaryButton
                text="Contact"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              />
            </motion.div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="hidden md:flex justify-center">
            <img
              src="/Tymo-removebg-preview.png"
              alt="Tymo"
              className="max-w-full max-h-full rounded-xl scale-150"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
