import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { IoMdDownload } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const { t } = useTranslation("hero");

  return (
    <section
      className="relative py-20 min-h-screen flex items-center text-white bg-gradient-to-r from-[#1364dd] to-[#0095ff] "
      id="hero"
    >
      {/* Refined Background */}

      <div className="container mx-auto px-8 flex flex-col md:flex-row items-center relative z-10">
        {/* Content Section */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4">
            <motion.div
              className="h-1 w-16 bg-white mb-6"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            />
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t("hero.title")}
            </motion.h1>
          </div>

          <motion.h3
            className="text-xl md:text-2xl font-light my-8 max-w-xl leading-relaxed opacity-90"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 0.9 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {t("hero.subtitle")}
          </motion.h3>

          <motion.div
            className="flex flex-wrap gap-4 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.a
              href="#" // Path to CV
              className="flex items-center rounded-md py-3 px-6 bg-white text-[#1364dd] font-medium shadow-lg transition-all duration-300"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              download
            >
              <IoMdDownload className="mr-2 text-lg" />
              {t("hero.cv")}
            </motion.a>

            <motion.a
              href="#projects"
              className="flex items-center rounded-md py-3 px-6 bg-transparent border-2 border-white text-white font-medium hover:bg-white hover:text-[#1364dd] transition-all duration-300"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {t("hero.projects")}
              <FaArrowRight className="ml-2 text-sm opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 mt-16 md:mt-0 flex justify-center md:justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative">
            {/* Subtle frame for image */}
            <div className="absolute -inset-2 border border-white/10 rounded-lg"></div>

            <motion.img
              src="/new picture.png"
              alt="Tymo Verhaegen"
              className="w-full max-w-lg rounded-lg shadow-lg object-cover relative z-10"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
              }}
            />

            {/* Decorative element */}
            <motion.div
              className="absolute -bottom-6 -right-6 w-24 h-24 border border-white/20 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
