import { Icons } from "./icons";
import { RiReactjsLine, RiAngularjsLine } from "react-icons/ri";
import { SiDjango, SiFlutter, SiLaravel } from "react-icons/si";
import React from "react";

export const PROJECTS = [
  // {
  //   icon: <RiReactjsLine className="text-cyan-500" />,
  //   key: "Portfolio",
  // },
  {
    icon: <SiDjango className="text-green-500" />,
    key: "Bookingtool",
  },
  // {
  //   icon: <SiDjango className="text-green-500" />,
  //   key: "Grocery Tracker",
  // },
  {
    icon: <RiAngularjsLine className="text-red-500" />,
    key: "Industry 4.0",
  },
  {
    icon: <RiAngularjsLine className="text-red-500" />,
    key: "Angular Project",
  },
  {
    icon: <SiFlutter className="text-blue-500" />,
    key: "Flutter Project",
  },
  {
    icon: <SiLaravel className="text-red-500" />,
    key: "Laravel Project (PHP)",
  },
];
