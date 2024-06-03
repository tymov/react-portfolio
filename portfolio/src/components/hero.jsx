import { useState, useEffect } from "react";
import { PrimaryButton } from "./buttons/priButton";
import SecondaryButton from "./buttons/secButton";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const Hero = () => {
  const { t } = useTranslation("hero");

  return (
    <section className="dark:bg-gray-slate dark:text-white relative  h-screen flex justify-center items-center">
      <div className="container flex flex-col justify-center p-6 mx-auto  lg:flex-row lg:justify-between">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-3xl lg:text-left"
        >
          <h1 className="text-4xl lg:block hidden font-bold uppercase header text-start mb-10">
            <span className="header text-4xl md:text-5xl">01</span>{" "}
            <span className="header text-4xl md:text-5xl mx-5">
              {t("hero.title")}
            </span>
          </h1>

          <p className="mt-6 mb-8 text-lg sm:mb-12">{t("hero.subtitle")}</p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <PrimaryButton
              text={t("hero.projects")}
              onClick={() => {
                const projectsSection = document.getElementById("projects");
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            />
            <SecondaryButton
              text={t("hero.contact")}
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="hidden lg:flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
        >
          <img
            src="/Tymo-removebg-preview.png"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </motion.div>
      </div>
    </section>
  );
};
