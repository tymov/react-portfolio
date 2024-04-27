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
  SiLaravel,
  SiSqlite,
  SiVercel,
  SiTypescript,
} from "react-icons/si";
import { FaJava, FaNodeJs } from "react-icons/fa";
import { DiScrum, DiHtml5, DiCss3, DiGit } from "react-icons/di";
import { IoLogoJavascript, IoLogoPython } from "react-icons/io";

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
    Figma: "text-purple-500",
    UML: "text-blue-500",
    Java: "text-orange-500",
    "Node.js": "text-green-500",
    SCRUM: "text-orange-500",
    JavaScript: "text-yellow-500",
    Git: "text-red-500",
    PostgreSQL: "text-blue-500",
    Docker: "text-blue-500",
    Trello: "text-blue-500",
    Flutter: "text-blue-500",
    Laravel: "text-red-500",
    SQL: "text-blue-500",
    Python: "text-blue-500",
    Vercel: "text-white",
    TypeScript: "text-blue-500",
  };

  const colorClass = iconColors[technology];

  switch (technology) {
    case "HTML":
      return <DiHtml5 className={colorClass} />;
    case "CSS":
      return <DiCss3 className={colorClass} />;
    case "React":
      return <RiReactjsLine className={colorClass} />;
    case "Angular":
      return <RiAngularjsLine className={colorClass} />;
    case "Django":
      return <SiDjango className={colorClass} />;
    case "MySQL":
      return <SiMysql className={colorClass} />;
    case "MongoDB":
      return <SiMongodb className={colorClass} />;
    case "TailwindCSS":
      return <SiTailwindcss className={colorClass} />;
    case "Bootstrap":
      return <SiBootstrap className={colorClass} />;
    case "Figma":
      return <SiFigma className={colorClass} />;
    case "UML":
      return <SiUml className={colorClass} />;
    case "Java":
      return <FaJava className={colorClass} />;
    case "Node.js":
      return <FaNodeJs className={colorClass} />;
    case "SCRUM":
      return <DiScrum className={colorClass} />;
    case "JavaScript":
      return <IoLogoJavascript className={colorClass} />;
    case "Git":
      return <DiGit className={colorClass} />;
    case "PostgreSQL":
      return <SiPostgresql className={colorClass} />;
    case "Docker":
      return <SiDocker className={colorClass} />;
    case "Trello":
      return <SiTrello className={colorClass} />;
    case "Flutter":
      return <SiFlutter className={colorClass} />;
    case "Laravel":
      return <SiLaravel className={colorClass} />;
    case "SQL":
      return <SiSqlite className={colorClass} />;
    case "Python":
      return <IoLogoPython className={colorClass} />;
    case "Vercel":
      return <SiVercel className={colorClass} />;
    case "TypeScript":
      return <SiTypescript className={colorClass} />;
    default:
      return null;
  }
};
