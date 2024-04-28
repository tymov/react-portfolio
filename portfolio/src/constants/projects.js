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
      "React",
      "TailwindCSS",
      "Vercel",
      "JavaScript",
      "Framer",
      "Git",
    ],
    githubLink: "",
    liveDemoLink: "https://tymo-portfolio.vercel.app",
    images: [],
    softskills: [],
    status: "Finished",
  },
  {
    icon: <SiDjango className="text-green-500" />,
    title: "Bookingtool",
    date: "March 2024 - May 2024",
    role: "Full-Stack Developer",
    groupSize: 3,
    description: "A bookingtool website",
    technologies: [
      "Django",
      "TailwindCSS",
      "JavaScript",
      "Docker",
      "PostgreSQL",
      "Figma",
      "UML",
      "Git",
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
  },
  {
    icon: <RiAngularjsLine className="text-red-500" />,
    title: "Industry 4.0",
    date: "September 2023 - February 2023",
    role: "Full-Stack Developer",
    groupSize: 6,
    description:
      "I had the privilege to collaborate with VITO (Vlaamse Instituut voor Technologisch Onderzoek), the Flemish Institute for Technological Research, on a transformative multidisciplinary project during my academic journey. Partnering with VITO, our project spanned across multiple branches of IT, including Cloud & Cybersecurity (CCS), Artificial Intelligence (AI), and Application Development (APP).\n\nTogether, my group, consisting of 3 APP students, 2 CCS students and an AI student, and I embarked on a mission to develop a comprehensive solution addressing environmental challenges through advanced technology.\n\nOur primary objective was to create a web application and mobile app capable of detecting an invasive weed species known as yellownutsedge. This endeavor required the seamless integration of expertise from diverse fields, fostering an environment of innovation and collaboration. In our group project, I mainly handled front-end development responsibilities, driving the creation of user interfaces. I also pitched in on back-end tasks when needed. This hands-on experience allowed me to gain insight into both front-end and back-end processes, enhancing my skills for future projects in software development. Engaging in this project provided me with invaluable insights and practical experience, particularly in areas I had previously explored but never at this scale. It was a remarkable learning opportunity that not only enriched my academic journey but also prepared me for the challenges and opportunities in my future career endeavors.",
    technologies: [
      "Angular",
      "TypeScript",
      "Ionic",
      "TailwindCSS",
      "Leaflet",
      "Java",
      "Python",
      "UML",
      "SCRUM",
      "Gitlab",
      "Figma",
      "Trello",
    ],
    githubLink: "",
    liveDemoLink: "",
    images: [],
    softskills: [
      "Teamwork",
      "Communication",
      "Problem-solving",
      "Time management",
      "Retrospective Meetings",
      "Standup Meetings",
    ],
    status: "Finished",
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
      "Angular",
      "TypeScript",
      "TailwindCSS",
      "MongoDB",
      "Git",
      "UML",
    ],
    githubLink: "",
    liveDemoLink: "",
    images: [LandingPageImage, RecommendationsImage, TripsImage, InfoImage],
    softskills: ["Teamwork", "Communication", "Deadline Management"],
    status: "Finished",
  },
  {
    icon: <SiFlutter className="text-blue-500" />,
    title: "Flutter Project",
    date: "September 2023 - November 2023",
    role: "Developer",
    groupSize: 2,
    description:
      "During my Flutter course, I created a project with a fellow student focusing on Pokemon, developing a comprehensive database covering Gen 1 Pokemon, berries, and items. We enhanced the user experience by integrating Wikitude AR functionalities, allowing users to visualize Pokemon in their surroundings.\n\nIt was a fun journey in Flutter development, regardless of the setbacks we faced with Wikitude AR",
    technologies: ["Flutter", "Augmented Reality", "Dart", "Git"],
    githubLink: "",
    liveDemoLink: "https://www.youtube.com/watch?v=NGJm7VPcysI",
    images: [Index, Pokedex, PokeInfo, AR],
    softskills: ["Teamwork", "Communication", "Problem-solving"],
    status: "Finished",
  },
  {
    icon: <SiLaravel className="text-red-500" />,
    title: "Laravel Project (PHP)",
    date: "February 2023 - June 2023",
    role: "Full-Stack Developer",
    groupSize: 3,
    description:
      "As part of our PHP course, we developed a practical web application for our college to streamline job application trainings. The project aimed to simplify the process for both administrators and students.\n\nOur application allowed college administrators to efficiently manage job application trainings, including scheduling sessions and managing subscriptions. For students, we created an intuitive platform where they could easily browse available trainings and subscribe with just a few clicks.\n\nDespite facing internal challenges, our team persevered to deliver a robust web application for managing job application trainings within our college. While navigating through these hurdles, we remained focused on fulfilling the requirements set forth by our client.",
    technologies: ["Laravel", "TailwindCSS", "Git", "UML", "Jira"],
    githubLink: "",
    liveDemoLink: "https://ddpc.projectphp-503.com/",
    images: [
      "https://media.licdn.com/dms/image/D4E2DAQHYgCT5RkGCcw/profile-treasury-image-shrink_800_800/0/1709929008222?e=1714834800&v=beta&t=NqJOJG7sNO41DMax0VNsivWRDrq_isZTQePnU1qZstI",
      "https://media.licdn.com/dms/image/D4E2DAQFymzSc2RX-6g/profile-treasury-image-shrink_800_800/0/1709929164808?e=1714834800&v=beta&t=hTatGxQl22CU3J0xPai3gwKzdz1WZvlLgRFsjWDTBLo",
      "https://media.licdn.com/dms/image/D4E2DAQGcTSuVDJ2DRw/profile-treasury-image-shrink_800_800/0/1709929196371?e=1714834800&v=beta&t=0dhk35xOTkwOSyw_kFo59aPXUmMIYHpNQMadBXe2x5s",
      "https://media.licdn.com/dms/image/D4E2DAQGZY9pkZ3t7OQ/profile-treasury-image-shrink_800_800/0/1709929213699?e=1714834800&v=beta&t=uOq3dbks8BDAjqHE1bNJPIOkULDjx8fo11w7LdlSJ8I",
      "https://media.licdn.com/dms/image/D4E2DAQE8sECcn14DIg/profile-treasury-image-shrink_800_800/0/1709929240552?e=1714834800&v=beta&t=8fbh05c4q_u4ST4MCjipJ05gcKf9_RtMhU-Ffj2nnMo",
    ],
    softskills: [
      "Teamwork",
      "Communication",
      "Client Interaction",
      "Problem-solving",
      "Conflict Resolution",
    ],
    status: "Finished",
  },
];

PROJECTS.sort((a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateA - dateB;
});