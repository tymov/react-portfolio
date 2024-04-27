import React from "react";

import { EXPERIENCES } from "../constants/experiences";
import { getIconForTechnology } from "../constants/icons";

export const Experience = () => {
  return (
    <div className="text-gray-800 dark:text-white pb-10 px-10 pt-10 ">
      <h1 className="text-4xl font-bold uppercase header text-start mb-10">
        <span className="header text-4xl md:text-5xl">02</span>{" "}
        <span className="header text-4xl md:text-5xl mx-5">EXPERIENCE</span>
      </h1>

      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap justify-center pb-8">
            <div className="w-full lg:w-1/4 ">
              <p className="text-xl uppercase sm:mb-5 sm:pb-5">
                {experience.date}
              </p>
            </div>

            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold text-2xl">
                {experience.title}
              </h3>
              <span className="text-lg text-vulcan-100 font-semibold mb-2 pb-2">
                {" - "}
                {experience.company}{" "}
              </span>
              <p className="text-lg mt-2 mb-4 pb-3 pt-2">
                {experience.description}
              </p>
              {/* Check if there's a comment */}
              {experience.comment && (
                <div>
                  <p>{experience.comment}</p>
                  <br></br>
                </div>
              )}
              <div className="flex flex-wrap overflow-x-auto">
                {experience.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-2 rounded px-3 py-1.5 text-4xl"
                  >
                    {getIconForTechnology(technology)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
