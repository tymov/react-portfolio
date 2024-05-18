import { Icons } from "./icons";
import { RiReactjsLine, RiAngularjsLine } from "react-icons/ri";
import { SiDjango, SiFlutter, SiLaravel } from "react-icons/si";
import React from "react";
import InfoImage from "../assets/Angular/info.jpeg";
import LandingPageImage from "../assets/Angular/landingpage.jpeg";
import RecommendationsImage from "../assets/Angular/recommendations.jpeg";
import TripsImage from "../assets/Angular/trips.jpeg";
import Pokedex from "../assets/Flutter/Pokedex.png";
import Index from "../assets/Flutter/Index.png";
import AR from "../assets/Flutter/AR.png";
import PokeInfo from "../assets/Flutter/PokeInfo.png";
import Dashboard from "../assets/Project 4.0/Dashboard.png";
import AccountManage from "../assets/Project 4.0/Account dashboard.png";
import UploadImage from "../assets/Project 4.0/Afbeelding uploaden.png";
import CreateField from "../assets/Project 4.0/Veld create.png";
import LaravelIndex from "../assets/Laravel/index.jpeg";
import ManageAnnouncements from "../assets/Laravel/manageAnnouncements.jpeg";
import ManageBookings from "../assets/Laravel/manageBookings.jpeg";
import ManageFiles from "../assets/Laravel/manageFiles.jpeg";
import ManageForms from "../assets/Laravel/manageForms.jpeg";
import ManageTimeslots from "../assets/Laravel/manageTimeslots.jpeg";
import ManageUsers from "../assets/Laravel/manageUsers.jpeg";
import seeBookings from "../assets/Laravel/seeBookings.jpeg";
import Login from "../assets/Grocery Tracker/Login.png";
import GroceryList from "../assets/Grocery Tracker/GroceryList.png";
import MacroTracker from "../assets/Grocery Tracker/MacroTracker.png";
import RecipeList from "../assets/Grocery Tracker/RecipeList.png";
import AddItem from "../assets/Grocery Tracker/AddItem.png";
import Recipe from "../assets/Grocery Tracker/Recipe.png";

export const PROJECTS = [
  {
    icon: <RiReactjsLine className="text-cyan-500" />,
    title: "Portfolio",
    date: "2024",
    role: "Developer",
    groupSize: 1,
    description:
      "My personal portfolio website, showcasing my projects and skills.",
    technologies: [
      {
        name: "React",
        developmentTime: "75",
      },
      {
        name: "TailwindCSS",
        developmentTime: "75",
      },
      {
        name: "Vercel",
        developmentTime: "10",
      },
      {
        name: "JavaScript",
        developmentTime: "20",
      },
      {
        name: "ChartJS",
        developmentTime: "10",
      },
      {
        name: "Framer",
        developmentTime: "15",
      },
      {
        name: "Git",
        developmentTime: "20",
      },
    ],
    githubLink: "",
    liveDemoLink: "https://tymo-portfolio.vercel.app",
    images: [],
    softskills: [],
    status: "Finished",
    type: "Personal Project",
  },
  {
    icon: <SiDjango className="text-green-500" />,
    title: "Bookingtool",
    date: "March 2024 - May 2024",
    role: "Full-Stack Developer",
    groupSize: 3,
    description: "A bookingtool website",
    technologies: [
      {
        name: "Django",
        developmentTime: "70",
      },
      {
        name: "TailwindCSS",
        developmentTime: "65",
      },
      {
        name: "JavaScript",
        developmentTime: "10",
      },
      {
        name: "Docker",
        developmentTime: "10",
      },
      {
        name: "PostgreSQL",
        developmentTime: "15",
      },
      {
        name: "Figma",
        developmentTime: "100",
      },
      {
        name: "UML",
        developmentTime: "15",
      },
      {
        name: "Git",
        developmentTime: "20",
      },
    ],
    githubLink: "",
    liveDemoLink: "",
    images: [],
    softskills: [
      "Teamwork",
      "Professional Communication",
      "Problem-solving",
      "Independence",
    ],
    status: "Unfinished",
    type: "Internship",
  },
  {
    icon: <SiDjango className="text-green-500" />,
    title: "Grocery Tracker",
    date: "February 2023 - Present",
    role: "Full-Stack Developer",
    groupSize: 1,
    description:
      "The Grocery Tracker project helps users manage their household groceries efficiently. It provides a digital inventory system for users to keep track of pantry items, fridge contents, and other essentials. By logging purchases and consumption, users can reduce waste, plan meals effectively, and simplify shopping trips.",
    technologies: [
      {
        name: "Django",
        developmentTime: "100",
      },
      {
        name: "Bootstrap",
        developmentTime: "100",
      },
      {
        name: "Python",
        developmentTime: "100",
      },
      {
        name: "JavaScript",
        developmentTime: "100",
      },
      {
        name: "Git",
        developmentTime: "100",
      },
    ],
    githubLink: "https://github.com/tymov/grocery-tracker",
    liveDemoLink: "",
    images: [Login, GroceryList, MacroTracker, RecipeList, AddItem, Recipe],
    softskills: [],
    status: "Finished",
    type: "Personal Project",
  },
  {
    icon: <RiAngularjsLine className="text-red-500" />,
    title: "Industry 4.0",
    date: "September 2023 - February 2023",
    role: "Full-Stack Developer",
    groupSize: 6,
    description:
      "I had the privilege to collaborate with VITO (Vlaamse Instituut voor Technologisch Onderzoek), the Flemish Institute for Technological Research, on a transformative multidisciplinary project during my academic journey. Partnering with VITO, our project spanned across multiple branches of IT, including Cloud & Cybersecurity (CCS), Artificial Intelligence (AI), and Application Development (APP).\n\nTogether, my group, consisting of 3 APP students, 2 CCS students and an AI student, and I embarked on a mission to develop a comprehensive solution addressing environmental challenges through advanced technology.\n\nOur primary objective was to create a web application and mobile app capable of detecting an invasive weed species known as yellownutsedge. This endeavor required the seamless integration of expertise from diverse fields, fostering an environment of innovation and collaboration. In our group project, I mainly handled front-end development responsibilities, driving the creation of user interfaces. I also pitched in on back-end tasks when needed. This hands-on experience allowed me to gain insight into both front-end and back-end processes, enhancing my skills for future projects in software development. Engaging in this project provided me with invaluable insights and practical experience, particularly in areas I had previously explored but never at this scale. I'm not at liberty to share a lot of content about this project, like a demo or images that contain private information, I am allowed to show dummy/fake data to show the general feel of the project. It was a remarkable learning opportunity that not only enriched my academic journey but also prepared me for the challenges and opportunities in my future career endeavors.",
    technologies: [
      {
        name: "Angular",
        developmentTime: "70",
      },
      {
        name: "TypeScript",
        developmentTime: "55",
      },
      {
        name: "Ionic",
        developmentTime: "10",
      },
      {
        name: "TailwindCSS",
        developmentTime: "60",
      },
      {
        name: "Leaflet",
        developmentTime: "50",
      },
      {
        name: "Java",
        developmentTime: "30",
      },
      {
        name: "Python",
        developmentTime: "10",
      },
      {
        name: "Docker",
        developmentTime: null,
      },
      {
        name: "UML",
        developmentTime: "10",
      },
      {
        name: "SCRUM",
        developmentTime: "10",
      },
      {
        name: "Gitlab",
        developmentTime: "5",
      },
      {
        name: "Figma",
        developmentTime: "50",
      },
      {
        name: "Trello",
        developmentTime: "5",
      },
      {
        name: "AWS",
        developmentTime: null,
      },
    ],
    githubLink: "",
    liveDemoLink: "",
    images: [Dashboard, AccountManage, UploadImage, CreateField],
    softskills: [
      "Teamwork",
      "Communication",
      "Problem-solving",
      "Time management",
      "Retrospective Meetings",
      "Standup Meetings",
    ],
    status: "Finished",
    type: "College Project",
  },
  {
    icon: <RiAngularjsLine className="text-red-500" />,
    title: "Angular Project",
    date: "October 2023 - December 2023",
    role: "Full-Stack Developer",
    groupSize: 4,
    description:
      "During my coursework in Angular, I embarked on a captivating project to develop an application tailored for planning multi-day trips with ease and user-friendliness in mind. It was an enriching experience that allowed me to delve into the intricacies of Angular while creating a practical solution for travel enthusiasts.\n\nThe application featured a variety of trip options, including hiking vacations, hotel stays, blended experiences, and more, catering to diverse preferences. One of the highlights was implementing a privacy feature where trips were initially set to private, ensuring the creator's exclusive access. However, users had the flexibility to make their trips public, fostering a collaborative platform for sharing inspiration and ideas. While the project had its challenges, particularly as my first Angular endeavor, I embraced the learning curve and am proud of the result. It was a testament to my adaptability and determination to overcome obstacles in pursuit of delivering impactful solutions.",
    technologies: [
      {
        name: "Angular",
        developmentTime: "50",
      },
      {
        name: "TypeScript",
        developmentTime: "30",
      },
      {
        name: "TailwindCSS",
        developmentTime: "20",
      },
      {
        name: "MongoDB",
        developmentTime: "10",
      },
      {
        name: "Git",
        developmentTime: "10",
      },
      {
        name: "UML",
        developmentTime: "5",
      },
    ],
    githubLink: "",
    liveDemoLink: "",
    images: [LandingPageImage, RecommendationsImage, TripsImage, InfoImage],
    softskills: ["Teamwork", "Communication", "Deadline Management"],
    status: "Finished",
    type: "College Project",
  },
  {
    icon: <SiFlutter className="text-blue-500" />,
    title: "Flutter Project",
    date: "September 2023 - November 2023",
    role: "Developer",
    groupSize: 2,
    description:
      "During my Flutter course, I created a project with a fellow student focusing on Pokemon, developing a comprehensive database covering Gen 1 Pokemon, berries, and items. We enhanced the user experience by integrating Wikitude AR functionalities, allowing users to visualize Pokemon in their surroundings.\n\nIt was a fun journey in Flutter development, regardless of the setbacks we faced with Wikitude AR",
    technologies: [
      {
        name: "Flutter",
        developmentTime: "50",
      },
      {
        name: "Augmented Reality",
        developmentTime: "5",
      },
      {
        name: "Dart",
        developmentTime: "40",
      },
      {
        name: "Git",
        developmentTime: "10",
      },
    ],
    githubLink: "",
    liveDemoLink: "https://www.youtube.com/watch?v=NGJm7VPcysI",
    images: [Index, Pokedex, PokeInfo, AR],
    softskills: ["Teamwork", "Communication", "Problem-solving"],
    status: "Finished",
    type: "College Project",
  },
  {
    icon: <SiLaravel className="text-red-500" />,
    title: "Laravel Project (PHP)",
    date: "February 2023 - June 2023",
    role: "Full-Stack Developer",
    groupSize: 3,
    description:
      "As part of our PHP course, we developed a practical web application for our college to streamline job application trainings. The project aimed to simplify the process for both administrators and students.\n\nOur application allowed college administrators to efficiently manage job application trainings, including scheduling sessions and managing subscriptions. For students, we created an intuitive platform where they could easily browse available trainings and subscribe with just a few clicks.\n\nDespite facing internal challenges, our team persevered to deliver a robust web application for managing job application trainings within our college. While navigating through these hurdles, we remained focused on fulfilling the requirements set forth by our client.",
    technologies: [
      {
        name: "Laravel",
        developmentTime: "70",
      },
      {
        name: "TailwindCSS",
        developmentTime: "60",
      },
      {
        name: "Git",
        developmentTime: "10",
      },
      {
        name: "UML",
        developmentTime: "50",
      },
      {
        name: "Jira",
        developmentTime: "15",
      },
      {
        name: "SCRUM",
        developmentTime: "15",
      },
    ],
    githubLink: "",
    liveDemoLink: "https://ddpc.projectphp-503.com/",
    images: [
      LaravelIndex,
      ManageAnnouncements,
      ManageBookings,
      ManageFiles,
      ManageForms,
      ManageTimeslots,
      ManageUsers,
      seeBookings,
    ],
    softskills: [
      "Teamwork",
      "Communication",
      "Client Interaction",
      "Problem-solving",
      "Conflict Resolution",
    ],
    status: "Finished",
    type: "College Project",
  },
];

PROJECTS.sort((a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateA - dateB;
}).map((project) => ({
  ...project,
  technologies: project.technologies.sort(
    (a, b) => b.developmentTime - a.developmentTime
  ),
}));
