import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  AiFillHome,
  AiOutlineInfoCircle,
  AiOutlineProject,
  AiOutlineIdcard,
} from "react-icons/ai";
import { TbTimelineEvent } from "react-icons/tb";
import { GrDocumentPdf } from "react-icons/gr";
import { FaBarsProgress, FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import { LanguageSelector } from "./reusable/languageSelector";
import { useTranslation } from "react-i18next";
import { EXPERIENCES } from "../constants/experiences";

const Navigation = () => {
  const { t } = useTranslation("navbar");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const scrolling = useRef(false);
  const scrollTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar shrinking on scroll
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 20);

      // Debounce scroll events to make section detection less jittery
      if (!scrolling.current) {
        scrolling.current = true;

        // Clear previous timer
        if (scrollTimer.current) {
          clearTimeout(scrollTimer.current);
        }
      }

      // Set timer to check sections after scrolling stops
      scrollTimer.current = setTimeout(() => {
        checkActiveSections();
        scrolling.current = false;
      }, 50);
    };

    const checkActiveSections = () => {
      // Get all sections and find which one is most visible
      const sections = ["home", "projects", "experiences", "skills", "about"];
      let maxVisibility = 0;
      let mostVisibleSection = null;

      // Special case for home section (usually at the top)
      const homeSection =
        document.getElementById("home") || document.querySelector("header");
      if (homeSection) {
        const windowHeight = window.innerHeight;
        const rect = homeSection.getBoundingClientRect();

        // If we're at the very top of the page, activate home
        if (window.scrollY < windowHeight / 2) {
          setActiveSection("home");
          return;
        }
      }

      // Check all other sections
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // Calculate how much of the section is visible in the viewport
          const visibleHeight =
            Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
          const visiblePercentage = visibleHeight / element.offsetHeight;

          if (visibleHeight > 0 && visiblePercentage > maxVisibility) {
            maxVisibility = visiblePercentage;
            mostVisibleSection = section;
          }
        }
      }

      if (mostVisibleSection) {
        setActiveSection(mostVisibleSection);
      }
    };

    // Initial check for active section
    setTimeout(checkActiveSections, 300);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimer.current) {
        clearTimeout(scrollTimer.current);
      }
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Animation variants with smoother transitions
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.25,
        ease: "easeInOut",
        staggerChildren: 0.03,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.35,
        ease: "easeOut",
        staggerChildren: 0.05,
        staggerDirection: 1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: -5,
      x: -10,
      transition: { duration: 0.2, ease: "easeIn" },
    },
    open: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  const navItems = [
    {
      id: "home",
      icon: <AiFillHome className="text-lg" />,
      label: t("navbar.home"),
      href: "#",
    },
    {
      id: "projects",
      icon: <AiOutlineProject className="text-lg" />,
      label: t("navbar.projects"),
      href: "#projects",
    },
    {
      id: "experiences",
      icon: <TbTimelineEvent className="text-lg" />,
      label: t("navbar.experience"),
      href: "#experiences",
    },
    {
      id: "skills",
      icon: <FaBarsProgress className="text-lg" />,
      label: t("navbar.skills"),
      href: "#skills",
    },
    {
      id: "about",
      icon: <AiOutlineInfoCircle className="text-lg" />,
      label: t("navbar.about"),
      href: "#about",
    },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 bg-gradient-to-r from-[#1364dd] to-[#0095ff] shadow-lg"
          : "py-2 bg-gradient-to-r from-[#1364dd] to-[#0095ff]"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo or Brand */}
          <div className="flex-shrink-0">
            <a href="#" className="text-white font-bold text-xl">
              Portfolio
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={toggleMenu}
              className="text-white p-2 rounded-md focus:outline-none"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <motion.div
                initial={false}
                animate={{ rotate: menuOpen ? 90 : 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                {menuOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </motion.div>
            </motion.button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium flex flex-col items-center transition-all duration-150 mx-1 ${
                      isActive
                        ? "text-white bg-blue-600 bg-opacity-40"
                        : "text-blue-100 hover:text-white hover:bg-blue-500 hover:bg-opacity-30"
                    }`}
                    whileHover={{ y: -2, transition: { duration: 0.15 } }}
                    whileTap={{
                      y: 0,
                      scale: 0.98,
                      transition: { duration: 0.1 },
                    }}
                    onClick={() => {
                      if (item.id === "home") {
                        // Force home to be active when clicked
                        setActiveSection("home");
                      }
                    }}
                  >
                    {item.icon}
                    <span className="mt-1">{item.label}</span>
                    {isActive && (
                      <motion.div
                        className="h-1 w-full bg-white rounded-full mt-1"
                        layoutId="activeIndicator"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Language selector (desktop) */}
          <div className="hidden md:flex items-center ml-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="rounded-md"
            >
              <LanguageSelector />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile navigation menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden bg-gradient-to-r from-[#1364dd] to-[#0095ff] shadow-lg overflow-hidden"
          >
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  variants={itemVariants}
                  href={item.href}
                  className={`block rounded-md px-3 py-4 text-base font-medium transition-colors duration-150 ${
                    activeSection === item.id
                      ? "bg-blue-600 text-white"
                      : "text-blue-100 hover:bg-blue-600 hover:bg-opacity-75 hover:text-white"
                  }`}
                  onClick={() => {
                    setMenuOpen(false);
                    if (item.id === "home") {
                      // Force home to be active when clicked
                      setActiveSection("home");
                    }
                  }}
                >
                  <div className="flex items-center">
                    {item.icon}
                    <span className="ml-2">{item.label}</span>
                  </div>
                </motion.a>
              ))}

              {/* Language selector (mobile) */}
              <motion.div variants={itemVariants} className="mt-4 px-3 py-2">
                <LanguageSelector />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
