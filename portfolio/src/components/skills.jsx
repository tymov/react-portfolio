import { RiReactjsLine, RiAngularjsLine } from "react-icons/ri";
import {
  SiDjango,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiFigma,
  SiUml,
} from "react-icons/si";
import { FaJava, FaNodeJs } from "react-icons/fa";
import { DiScrum } from "react-icons/di";
import React from "react";
import { motion } from "framer-motion";

export const Skills = () => {
  return (
    <div
      className="text-gray-800 dark:text-white pb-24 px-10 pt-10"
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="flex items-center justify-between mb-4 pb-10">
        <motion.h1
          className="text-4xl font-bold uppercase header text-start"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.33 }}
        >
          <span className="header text-4xl md:text-5xl">03</span>{" "}
          <span className="header text-4xl md:text-5xl mx-5">SKILLS</span>
        </motion.h1>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.66 }}
      >
        {/* Frontend */}
        <div className="rounded-2xl p-4 border-2 border-gray-300 dark:border-slate-800 dark:bg-slate-925 hover:dark:bg-slate-900 hover:scale-105 transition-colors flex justify-center items-center">
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </div>
        <div className="rounded-2xl p-4 border-2 border-gray-300 dark:border-slate-800 dark:bg-slate-925 hover:dark:bg-slate-900 hover:scale-105 transition-colors flex justify-center items-center">
          <RiAngularjsLine className="text-5xl text-red-600" />
        </div>
        <div className="rounded-2xl p-4 border-2 border-gray-300 dark:border-slate-800 dark:bg-slate-925 hover:dark:bg-slate-900 hover:scale-105 transition-colors flex justify-center items-center">
          <SiTailwindcss className="text-5xl text-blue-400" />
        </div>
        <div className="rounded-2xl p-4 border-2 border-gray-300 dark:border-slate-800 dark:bg-slate-925 hover:dark:bg-slate-900 hover:scale-105 transition-colors flex justify-center items-center">
          <SiBootstrap className="text-5xl text-purple-500" />
        </div>
        <div className="rounded-2xl p-4 border-2 border-gray-300 dark:border-slate-800 dark:bg-slate-925 hover:dark:bg-slate-900 hover:scale-105 transition-colors flex justify-center items-center">
          <FaNodeJs className="text-5xl text-green-400" />
        </div>

        {/* Backend */}
        <div className="rounded-2xl p-4 border-2 border-gray-300 dark:border-slate-800 dark:bg-slate-925 hover:dark:bg-slate-900 hover:scale-105 transition-colors flex justify-center items-center">
          <SiDjango className="text-5xl text-green-600" />
        </div>
        <div className="rounded-2xl p-4 border-2 border-gray-300 dark:border-slate-800 dark:bg-slate-925 hover:dark:bg-slate-900 hover:scale-105 transition-colors flex justify-center items-center">
          <SiMysql className="text-5xl text-blue-300" />
        </div>
        <div className="rounded-2xl p-4 border-2 border-gray-300 dark:border-slate-800 dark:bg-slate-925 hover:dark:bg-slate-900 hover:scale-105 transition-colors flex justify-center items-center">
          <SiMongodb className="text-5xl text-green-600" />
        </div>
        <div className="rounded-2xl p-4 border-2 border-gray-300 dark:border-slate-800 dark:bg-slate-925 hover:dark:bg-slate-900 hover:scale-105 transition-colors flex justify-center items-center">
          <FaJava className="text-5xl text-orange-500" />
        </div>

        {/* Tools */}
        <div className="rounded-2xl p-4 border-2 border-gray-300 dark:border-slate-800 dark:bg-slate-925 hover:dark:bg-slate-900 hover:scale-105 transition-colors flex justify-center items-center">
          <SiFigma className="text-5xl text-purple-400" />
        </div>
        <div className="rounded-2xl p-4 border-2 border-gray-300 dark:border-slate-800 dark:bg-slate-925 hover:dark:bg-slate-900 hover:scale-105 transition-colors flex justify-center items-center">
          <SiUml className="text-5xl text-yellow-500" />
        </div>
        <div className="rounded-2xl p-4 border-2 border-gray-300 dark:border-slate-800 dark:bg-slate-925 hover:dark:bg-slate-900 hover:scale-105 transition-colors flex justify-center items-center">
          <DiScrum className="text-5xl text-cyan-500" />
        </div>
      </motion.div>
    </div>
  );
};
