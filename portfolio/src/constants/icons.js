import { RiReactjsLine, RiAngularjsLine } from "react-icons/ri";
import {
  SiDjango,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiFigma,
  SiUml,
  SiPostgresql,
  SiDocker,
  SiTrello,
  SiFlutter,
  SiDart,
  SiLaravel,
  SiSqlite,
  SiVercel,
  SiGit,
  SiTypescript,
  SiJirasoftware,
  SiFramer,
  SiLeaflet,
} from "react-icons/si";
import { FaJava, FaNodeJs, FaNpm } from "react-icons/fa";
import { PiGitlabLogoLight } from "react-icons/pi";
import { DiScrum, DiHtml5, DiCss3, DiMysql } from "react-icons/di";
import { IoLogoJavascript, IoLogoPython, IoLogoIonic } from "react-icons/io";
import { TbAugmentedReality } from "react-icons/tb";

export const getIconForTechnology = (technology) => {
  const iconColors = {
    HTML: "text-blue-500",
    CSS: "text-orange-500",
    React: "text-cyan-500",
    Angular: "text-red-500",
    Django: "text-green-600",
    MySQL: "text-blue-300",
    MongoDB: "text-green-600",
    TailwindCSS: "text-blue-400",
    Bootstrap: "text-purple-500",
    Figma: "text-purple-400",
    UML: "text-yellow-500",
    Java: "text-orange-500",
    "Node.js": "text-green-500",
    SCRUM: "text-cyan-500",
    JavaScript: "text-yellow-500",
    Git: "text-red-500",
    Gitlab: "text-orange-500",
    PostgreSQL: "text-blue-500",
    Docker: "text-blue-500",
    Trello: "text-blue-500",
    Flutter: "text-blue-500",
    Laravel: "text-red-500",
    SQL: "text-blue-300",
    Python: "text-blue-500",
    Vercel: "text-white",
    TypeScript: "text-blue-500",
    Dart: "text-blue-500",
    "Augmented Reality": "text-blue-500",
    Ionic: "text-blue-500",
    Jira: "text-sky-600",
    Framer: "text-violet-600",
    Leaflet: "text-green-400",
    NPM: "text-red-500",
  };

  const colorClass = iconColors[technology];

  // Common classes for all icons
  const commonIconClasses = "text-3xl"; // Adjust the size as needed

  switch (technology) {
    case "HTML":
      return <DiHtml5 className={`${colorClass} ${commonIconClasses}`} />;
    case "CSS":
      return <DiCss3 className={`${colorClass} ${commonIconClasses}`} />;
    case "React":
      return <RiReactjsLine className={`${colorClass} ${commonIconClasses}`} />;
    case "Angular":
      return (
        <RiAngularjsLine className={`${colorClass} ${commonIconClasses}`} />
      );
    case "Django":
      return <SiDjango className={`${colorClass} ${commonIconClasses}`} />;
    case "MySQL":
      return <DiMysql className={`${colorClass} ${commonIconClasses}`} />;
    case "MongoDB":
      return <SiMongodb className={`${colorClass} ${commonIconClasses}`} />;
    case "TailwindCSS":
      return <SiTailwindcss className={`${colorClass} ${commonIconClasses}`} />;
    case "Bootstrap":
      return <SiBootstrap className={`${colorClass} ${commonIconClasses}`} />;
    case "Figma":
      return <SiFigma className={`${colorClass} ${commonIconClasses}`} />;
    case "UML":
      return <SiUml className={`${colorClass} ${commonIconClasses}`} />;
    case "Java":
      return <FaJava className={`${colorClass} ${commonIconClasses}`} />;
    case "Node.js":
      return <FaNodeJs className={`${colorClass} ${commonIconClasses}`} />;
    case "SCRUM":
      return <DiScrum className={`${colorClass} ${commonIconClasses}`} />;
    case "JavaScript":
      return (
        <IoLogoJavascript className={`${colorClass} ${commonIconClasses}`} />
      );
    case "Git":
      return <SiGit className={`${colorClass} ${commonIconClasses}`} />;
    case "Gitlab":
      return (
        <PiGitlabLogoLight className={`${colorClass} ${commonIconClasses}`} />
      );
    case "PostgreSQL":
      return <SiPostgresql className={`${colorClass} ${commonIconClasses}`} />;
    case "Docker":
      return <SiDocker className={`${colorClass} ${commonIconClasses}`} />;
    case "Trello":
      return <SiTrello className={`${colorClass} ${commonIconClasses}`} />;
    case "Flutter":
      return <SiFlutter className={`${colorClass} ${commonIconClasses}`} />;
    case "Laravel":
      return <SiLaravel className={`${colorClass} ${commonIconClasses}`} />;
    case "SQL":
      return <SiMysql className={`${colorClass} ${commonIconClasses}`} />;
    case "Python":
      return <IoLogoPython className={`${colorClass} ${commonIconClasses}`} />;
    case "Vercel":
      return <SiVercel className={`${colorClass} ${commonIconClasses}`} />;
    case "TypeScript":
      return <SiTypescript className={`${colorClass} ${commonIconClasses}`} />;
    case "Dart":
      return <SiDart className={`${colorClass} ${commonIconClasses}`} />;
    case "Augmented Reality":
      return (
        <TbAugmentedReality className={`${colorClass} ${commonIconClasses}`} />
      );
    case "Ionic":
      return <IoLogoIonic className={`${colorClass} ${commonIconClasses}`} />;
    case "Jira":
      return (
        <SiJirasoftware className={`${colorClass} ${commonIconClasses}`} />
      );
    case "Framer":
      return <SiFramer className={`${colorClass} ${commonIconClasses}`} />;
    case "Leaflet":
      return <SiLeaflet className={`${colorClass} ${commonIconClasses}`} />;
    case "NPM":
      return <FaNpm className={`${colorClass} ${commonIconClasses}`} />;
    default:
      return null;
  }
};
