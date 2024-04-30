import React from "react";
import { Icons } from "./icons";

/* 
  Novice: 0% - 14%
  Beginner: 15% - 29%
  Intermediate: 30% - 44%
  Proficient: 45% - 59%
  Advanced: 60% - 74%
  Expert: 75% - 89%
  Masterful: 90% - 100%
*/

// skills.js
export const SKILLS = [
  {
    name: "React",
    level: {
      name: "Proficient",
      percentage: 45,
    },
    description:
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.",
    relatedTechnologies: ["Redux", "Next.js", "Webpack", "Babel"],
    projects: [
      {
        title: "Portfolio",
        technology: "React",
      },
    ],
    certifications: [],
    education: [
      {
        title: "Bachelor of Applied Computer Science",
        organization: "Thomas More University of Applied Sciences",
      },
    ],
    courses: [
      {
        title: "The Ultimate React Course 2024: React, Redux & More",
        organization: "Udemy",
        url: "https://www.udemy.com/course/the-ultimate-react-course/",
        status: "Incomplete",
      },
    ],
  },
  {
    name: "Angular",
    level: {
      name: "Advanced",
      percentage: 60,
    },
    description:
      "Angular is a platform and framework for building single-page client applications using HTML and TypeScript.",
    relatedTechnologies: ["RxJS", "NgRx", "Angular Material"],
    projects: [
      {
        title: "Industry 4.0",
        technology: "Angular",
      },
      {
        title: "Angular Project",
        technology: "Angular",
      },
    ],
    certifications: [],
    education: [
      {
        title: "Bachelor of Applied Computer Science",
        organization: "Thomas More University of Applied Sciences",
      },
    ],
    courses: [],
  },
  {
    name: "TailwindCSS",
    level: {
      name: "Advanced",
      percentage: 70,
    },
    description:
      "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.",
    relatedTechnologies: [],
    projects: [
      {
        title: "Portfolio",
        technology: "React",
      },
      {
        title: "Bookingtool",
        technology: "Django",
      },
      {
        title: "Industry 4.0",
        technology: "Angular",
      },
      {
        title: "Angular Project",
        technology: "Angular",
      },
      {
        title: "Laravel Project",
        technology: "Laravel",
      },
    ],
    certifications: [],
    education: [
      {
        title: "Bachelor of Applied Computer Science",
        organization: "Thomas More University of Applied Sciences",
      },
    ],
    courses: [],
  },
  {
    name: "Bootstrap",
    level: {
      name: "Advanced",
      percentage: 70,
    },
    description:
      "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
    relatedTechnologies: [],
    projects: [],
    certifications: [],
    education: [
      {
        title: "Bachelor of Applied Computer Science",
        organization: "Thomas More University of Applied Sciences",
      },
    ],
    courses: [],
  },
  {
    name: "Django",
    level: {
      name: "Proficient",
      percentage: 55,
    },
    description:
      "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.",
    relatedTechnologies: ["Django REST framework"],
    projects: [
      {
        title: "Bookingtool",
        technology: "Django",
      },
    ],
    certifications: [
      {
        title: "Django Masterclass",
        credential: "UC-484e53c7-1250-4ec8-a897-334649c95001",
        date: "February 2024",
        organization: "Udemy",
        url: "https://www.udemy.com/certificate/UC-484e53c7-1250-4ec8-a897-334649c95001/",
      },
    ],
    education: [],
    courses: [
      {
        title: "Django Masterclass : Build 9 Real World Django Projects",
        organization: "Udemy",
        url: "https://www.udemy.com/course/django-course/",
        status: "Completed",
      },
    ],
  },
  {
    name: "Laravel",
    level: {
      name: "Proficient",
      percentage: 50,
    },
    description:
      "Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern.",
    relatedTechnologies: [],
    projects: [
      {
        title: "Laravel Project",
        technology: "Laravel",
      },
    ],
    certifications: [],
    education: [
      {
        title: "Bachelor of Applied Computer Science",
        organization: "Thomas More University of Applied Sciences",
      },
    ],
    courses: [],
  },
  {
    name: "MySQL",
    level: {
      name: "Proficient",
      percentage: 55,
    },
    description:
      "MySQL is an open-source relational database management system.",
    relatedTechnologies: [],
    projects: [],
    certifications: [],
    education: [
      {
        title: "Bachelor of Applied Computer Science",
        organization: "Thomas More University of Applied Sciences",
      },
    ],
    courses: [],
  },
  {
    name: "MongoDB",
    level: {
      name: "Intermediate",
      percentage: 35,
    },
    description:
      "MongoDB is a source-available cross-platform document-oriented database program.",
    relatedTechnologies: [],
    projects: [
      {
        title: "Angular Project",
        technology: "Angular",
      },
    ],
    certifications: [],
    education: [
      {
        title: "Bachelor of Applied Computer Science",
        organization: "Thomas More University of Applied Sciences",
      },
    ],
    courses: [],
  },
  {
    name: "Java",
    level: {
      name: "Proficient",
      percentage: 50,
    },
    description:
      "Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
    relatedTechnologies: [],
    projects: [
      {
        title: "Industry 4.0",
        technology: "Angular",
      },
    ],
    certifications: [],
    education: [
      {
        title: "Bachelor of Applied Computer Science",
        organization: "Thomas More University of Applied Sciences",
      },
    ],
    courses: [],
  },
  {
    name: "Figma",
    level: {
      name: "Intermediate",
      percentage: 40,
    },
    description:
      "Figma is a vector graphics editor and prototyping tool which is primarily web-based.",
    relatedTechnologies: [],
    projects: [
      {
        title: "Industry 4.0",
        technology: "Angular",
      },
      {
        title: "Bookingtool",
        technology: "Django",
      },
    ],
    certifications: [],
    education: [],
    courses: [
      {
        title: "Complete Web & Mobile Designer: UI/UX, Figma, +more",
        organization: "Udemy",
        url: "https://www.udemy.com/course/complete-web-designer-mobile-designer-zero-to-mastery/",
        status: "Incomplete",
      },
    ],
  },
  {
    name: "UML",
    level: {
      name: "Intermediate",
      percentage: 40,
    },
    description:
      "UML is a standardized general-purpose modeling language in the field of software engineering.",
    relatedTechnologies: [],
    projects: [
      {
        title: "Industry 4.0",
        technology: "Angular",
      },
      {
        title: "Bookingtool",
        technology: "Django",
      },
      {
        title: "Angular Project",
        technology: "Angular",
      },
      {
        title: "Laravel Project",
        technology: "Laravel",
      },
    ],
    certifications: [],
    education: [
      {
        title: "Bachelor of Applied Computer Science",
        organization: "Thomas More University of Applied Sciences",
      },
    ],
    courses: [],
  },
  {
    name: "SCRUM",
    level: {
      name: "Proficient",
      percentage: 55,
    },
    description:
      "Scrum is a framework within which people can address complex adaptive problems, while productively and creatively delivering high value products.",
    relatedTechnologies: [],
    projects: [
      {
        title: "Industry 4.0",
        technology: "Angular",
      },
      {
        title: "Bookingtool",
        technology: "Django",
      },
      {
        title: "Laravel Project",
        technology: "Laravel",
      },
    ],
    certifications: [],
    education: [
      {
        title: "Bachelor of Applied Computer Science",
        organization: "Thomas More University of Applied Sciences",
      },
    ],
    courses: [],
  },
];
