import React from "react";

const SkillProgressBar = ({ level }) => {
  const getMarkerPosition = () => {
    return { left: `${level.percentage}%` };
  };

  return (
    <div className="flex items-center relative w-1/2 my-3 bg-gray-200 dark:bg-gray-700 rounded-full h-3">
      
      {/* Current percentage marker */}
      <div
        className="absolute top-0 left-0 bg-slate-800 h-3 w-1"
        style={getMarkerPosition()}
      ></div>

      {/* Skill level name above the right percentage */}
      <div
        className="absolute top-0 left-0 -mt-4 text-xs text-gray-700 dark:text-gray-300"
        style={getMarkerPosition()}
      >
        {level.name}
      </div>

      {/* Color sections */}
      {[
        { color: "bg-red-500", width: "15%" },
        { color: "bg-orange-500", width: "15%" },
        { color: "bg-yellow-500", width: "15%" },
        { color: "bg-lime-500", width: "15%" },
        { color: "bg-green-500", width: "15%" },
        { color: "bg-blue-500", width: "15%" },
        { color: "bg-indigo-500", width: "15%" },
      ].map((section, index) => (
        <div
          key={index}
          className={`${section.color} h-full`}
          style={{ width: section.width }}
        ></div>
      ))}
    </div>
  );
};

export default SkillProgressBar;
