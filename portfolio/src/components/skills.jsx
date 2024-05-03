import { useState } from "react";
import { SKILLS } from "../constants/skills";
import { getIconForTechnology } from "../constants/icons";
import { motion } from "framer-motion";
import Modal from "./reusable/skillModal";

export const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  const handleCloseModal = () => {
    setSelectedSkill(null);
  };
  
  return (
    <div
      className="text-gray-800 dark:text-white pb-24 px-10 pt-10"
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 0 }}
      transition={{ duration: 0.99, delay: 0.5 }}
    >
      <div className="flex items-center justify-between mb-4 pb-10">
        <motion.h1
          className="text-4xl font-bold uppercase header text-start"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.33 }}
        >
          <span className="header text-4xl md:text-5xl">03</span>{" "}
          <span className="header text-4xl md:text-5xl mx-5">SKILLS</span>
        </motion.h1>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 items-center justify-center gap-4"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.66 }}
      >
        {SKILLS.map((skill, index) => (
          <motion.div
            key={index}
            className="rounded-2xl p-4 border-2 border-gray-300 dark:border-slate-800 dark:bg-slate-925 hover:dark:bg-slate-900 hover:scale-105 transition-colors flex justify-center items-center cursor-pointer"
            onClick={() => handleSkillClick(skill)}
          >
            <span className="!text-5xl scale-165 py-2">
              {getIconForTechnology(skill.name)}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Render modal if a skill is selected */}
      {selectedSkill && (
        <Modal
          skill={selectedSkill}
          closeModal={handleCloseModal}
        />
      )}
    </div>
  );
};
