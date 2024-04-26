import { useEffect, useState } from "react";
import Glitches from "./glitches";

export const Projects = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const titlePosition = document
        .getElementById("projects")
        .getBoundingClientRect().top;
      if (scrollPosition > titlePosition) {
        setIsTitleVisible(true);
      } else {
        setIsTitleVisible(false); // Hide the title if scrolling up
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="text-gray-800 dark:text-white min-h-screen flex flex-col md:pt-10 pt-8 z-10 "
      id="projects"
    >
      <div className="container mx-auto md:px-4">
        <div>
          <h1 className="text-4xl font-bold mb-4 uppercase header text-end">
            {" "}
            {/* Removed fade-in-right class */}
            <span className="header sm:text-2xl md:text-6xl">02</span>{" "}
            <span className="header sm:text-2xl md:text-6xl mx-5"> PROJECTS</span>
          </h1>
        </div>
        <div className="bottom-0 right-0 mb-10 mx-10 text-right fade-in-right">
          <Glitches
            text="C:\Users\Tymo\Documents\Projects\App"
            textSize="0.5rem"
            color="gray"
            rotation={0}
          />
          <Glitches text="projects.jsx" textSize="0.4rem" color="gray" rotation={0} />
        </div>
        <div className="flex flex-wrap justify-center mt-10">
          {" "}
          {/* Flex container for projects */}
          {/* Project 1 */}
          <div className="bg-white text-black p-4 rounded-lg shadow-md mb-4 max-w-md mx-2">
            {" "}
            {/* Adjusted styling for project card */}
            <h2 className="text-lg font-bold mb-2">Project 1</h2>
            <p className="text-sm">Description of Project 1...</p>
          </div>
          {/* Project 2 */}
          <div className="bg-white text-black p-4 rounded-lg shadow-md mb-4 max-w-md mx-2">
            {" "}
            {/* Adjusted styling for project card */}
            <h2 className="text-lg font-bold mb-2">Project 2</h2>
            <p className="text-sm">Description of Project 2...</p>
          </div>
          {/* Add more projects similarly */}
        </div>
      </div>
    </div>
  );
};
