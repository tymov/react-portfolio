import { Icons } from "./icons";
import { RiReactjsLine, RiAngularjsLine } from "react-icons/ri";
import { SiDjango } from "react-icons/si";
import React from "react";

export const PROJECTS = [
  {
    icon: <RiReactjsLine className="text-cyan-500" />,
    title: "Portfolio",
    date: "2024",
    groupSize: 1,
    description:
      "My personal portfolio website, showcasing my projects and skills.",
    technologies: ["React", "TailwindCSS", "Vercel", "JavaScript", "Git"],
    githubLink: "",
    liveDemoLink: "https://tymo-portfolio.vercel.app",
    images: [""],
  },
  {
    icon: <RiAngularjsLine className="text-red-500" />,
    title: "Industry 4.0",
    date: "September 2023 - February 2023",
    groupSize: 6,
    description:
      "I had the privilege to collaborate with VITO (Vlaamse Instituut voor Technologisch Onderzoek), the Flemish Institute for Technological Research, on a transformative multidisciplinary project during my academic journey. Partnering with VITO, our project spanned across multiple branches of IT, including Cloud & Cybersecurity (CCS), Artificial Intelligence (AI), and Application Development (APP). Together, my group, consisting of 3 APP students, 2 CCS students and an AI student, and I embarked on a mission to develop a comprehensive solution addressing environmental challenges through advanced technology." +
      "Our primary objective was to create a web application and mobile app capable of detecting an invasive weed species known as yellownutsedge. This endeavor required the seamless integration of expertise from diverse fields, fostering an environment of innovation and collaboration. In our group project, I mainly handled front-end development responsibilities, driving the creation of user interfaces. I also pitched in on back-end tasks when needed. This hands-on experience allowed me to gain insight into both front-end and back-end processes, enhancing my skills for future projects in software development. Engaging in this project provided me with invaluable insights and practical experience, particularly in areas I had previously explored but never at this scale. It was a remarkable learning opportunity that not only enriched my academic journey but also prepared me for the challenges and opportunities in my future career endeavors.",
    technologies: [
      "Angular",
      "TailwindCSS",
      "Java",
      "Python",
      "UML",
      "SCRUM",
      "Git",
      "Figma",
      "Trello",
    ],
    githubLink: "",
    liveDemoLink: "",
    images: [""],
  },
  {
    icon: <RiAngularjsLine className="text-red-500" />,
    title: "Angular Project",
    date: "October 2023 - December 2023",
    groupSize: 4,
    description:
      "During my coursework in Angular, I embarked on a captivating project to develop an application tailored for planning multi-day trips with ease and user-friendliness in mind. It was an enriching experience that allowed me to delve into the intricacies of Angular while creating a practical solution for travel enthusiasts. The application featured a variety of trip options, including hiking vacations, hotel stays, blended experiences, and more, catering to diverse preferences. One of the highlights was implementing a privacy feature where trips were initially set to private, ensuring the creator's exclusive access. However, users had the flexibility to make their trips public, fostering a collaborative platform for sharing inspiration and ideas. While the project had its challenges, particularly as my first Angular endeavor, I embraced the learning curve and am proud of the result. It was a testament to my adaptability and determination to overcome obstacles in pursuit of delivering impactful solutions.",
    technologies: [
      "Angular",
      "TailwindCSS",
      "TypeScript",
      "MongoDB",
      "Git",
      "UML",
    ],
    githubLink: "",
    liveDemoLink: "",
    images: [
      "https://media.licdn.com/dms/image/D4D2DAQEIk39P58Pehg/profile-treasury-image-shrink_800_800/0/1709917816795?e=1714780800&v=beta&t=GRUa3WM3RaxtXRDwGr7tYjtbaq04YxmctYYb9kjshJo",
      "https://media.licdn.com/dms/image/D4D2DAQElXa3THk-A6w/profile-treasury-image-shrink_800_800/0/1709917856282?e=1714780800&v=beta&t=03mGYvFBLexRHd7gA4Kzk9lD7vHWd7Tn4JBudll9Jns",
      "https://media.licdn.com/dms/image/D4D2DAQE_9BxQM9liYg/profile-treasury-image-shrink_800_800/0/1709918067527?e=1714780800&v=beta&t=ldilGKsgW6GYvlJhCPEw7NTmFsqhstj3uN5jt-6bYNw",
      "https://media.licdn.com/dms/image/D4D2DAQFfLhrrJsGW4w/profile-treasury-image-shrink_800_800/0/1709918118820?e=1714780800&v=beta&t=qIys-LTalZUeufcUaqw9JIKuAj01AGQE1yNfwUz6TWA",
    ],
  },
  {
    icon: <SiDjango className="text-green-500" />,
    title: "Bookingtool",
    date: "March 2024 - May 2024",
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
    images: [""],
  },
];
