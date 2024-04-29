import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="sticky top-0 z-50 flex justify-between items-center text-gray-800 dark:text-white py-4 px-3"
      role="navigation"
    >
      <div className="pl-8">
        <a href="#" className="text-2xl font-bold">
          Tymo Verhaegen
        </a>
      </div>

      <div
        className={`md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 w-56 bg-vulcan-900 h-full z-50 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full">
          <button onClick={toggleMenu} className="p-4 ml-auto">
            <FontAwesomeIcon
              icon={faTimes}
              className="h-6 w-6 fill-current text-lg"
            />
          </button>
          <a
            href="#"
            className="block p-4 text-lg"
            onClick={() => scrollToSection("home")}
          >
            Home
          </a>
          <a
            href="#experience"
            className="block p-4 text-lg"
            onClick={() => scrollToSection("experience")}
          >
            Experience
          </a>
          <a
            href="#projects"
            className="block p-4 text-lg"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </a>
          <a
            href="#about"
            className="block p-4 text-lg"
            onClick={() => scrollToSection("about")}
          >
            About
          </a>
          <a
            href="#contact"
            className="block p-4 text-lg"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </a>
        </div>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            className="h-6 w-6 fill-current text-white"
          />
        </button>
      </div>
      <div className="hidden md:flex space-x-4 text-lg">
        <a
          href="#"
          className="p-4 text-lg"
          onClick={() => scrollToSection("home")}
        >
          Home
        </a>
        <a
          href="#experience"
          className="p-4 text-lg"
          onClick={() => scrollToSection("experience")}
        >
          Experience
        </a>
        <a
          href="#projects"
          className="p-4 text-lg"
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </a>

        <a
          href="#about"
          className="p-4 text-lg"
          onClick={() => scrollToSection("about")}
        >
          About
        </a>
        <a
          href="#contact"
          className="p-4 text-lg"
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};
