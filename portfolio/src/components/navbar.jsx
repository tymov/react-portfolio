import React, { useState } from "react";
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
      className="flex justify-between items-center h-16  text-white relative shadow-sm px-3 z-50"
      role="navigation"
    >
      <a href="/" className="pl-8">
        <img src="/cb-logo(2).svg" alt="Logo" />
      </a>

      <div
        className={`md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 w-56 bg-cyberpunk-950 h-full z-50 transition-transform duration-300 ease-in-out`}
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
            href="#about"
            className="block p-4 text-lg"
            onClick={() => scrollToSection("about")}
          >
            About
          </a>
          <a
            href="#projects"
            className="block p-4 text-lg"
            onClick={() => scrollToSection("projects")}
          >
            Projects
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
          href="#about"
          className="p-4 text-lg"
          onClick={() => scrollToSection("about")}
        >
          About
        </a>
        <a
          href="#projects"
          className="p-4 text-lg"
          onClick={() => scrollToSection("projects")}
        >
          Projects
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
