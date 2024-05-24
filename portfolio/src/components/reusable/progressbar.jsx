import React from "react";
import { motion } from "framer-motion";

const SkillProgressBar = ({ level }) => {
  const getMarkerPosition = () => {
    return { left: `${level.percentage}%` };
  };

  return (
    <div className="flex items-center relative w-full my-3 bg-gray-200 dark:bg-gray-800 h-4" >      
      {/* Current percentage marker */}
      <div
        className="absolute top-0 left-0 bg-slate-800 h-4 w-1.5 overflow-hidden rounded-full "
        style={getMarkerPosition()}
      ></div>

      {/* Skill level name above the right percentage */}
      <div
        className="absolute top-0 left-0 -mt-6 text-sm text-gray-700 dark:text-gray-300 overflow-hidden"
        style={getMarkerPosition()}
      >
        {level.name}
      </div>

      {/* Color sections */}
      {[
        { color: "rgba(17, 95, 154, 0.65)", width: "15%" }, // Red
        { color: "rgba(29, 126, 202, 0.65)", width: "15%" }, // Yellow
        { color: "rgba(34, 150, 218, 0.65)", width: "15%" }, // Green
        { color: "rgba(72, 181, 196, 0.65)", width: "15%" }, // Blue
        { color: "rgba(166, 215, 91, 0.65)", width: "15%" }, // Indigo
        { color: "rgba(208, 238, 17, 0.65)", width: "15%" }, // Purple
        { color: "rgba(253, 255, 0, 0.65)", width: "15%" }, // Pink
      ].map((section, index) => (
        <motion.div
          key={index}
          animate={{ width: section.width }}
          transition={{ duration: 0.5 }}
          className="h-full"
          style={{ width: section.width, backgroundColor: section.color }}
        ></motion.div>
      ))}
    </div>
  );
};

export default SkillProgressBar;
