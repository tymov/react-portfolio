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
import Glitches from "./glitches";

export const Skills = () => {
  return (
    <div className="text-gray-800 dark:text-white pb-24 px-10 pt-10 ">
      <div className="flex items-center justify-between mb-4 pb-4">
        <h1 className="text-4xl font-bold uppercase header text-start">
          <span className="header text-4xl md:text-5xl">02</span>{" "}
          <span className="header text-4xl md:text-5xl mx-5">SKILLS</span>
        </h1>

        <div className="flex space-x-2">
          <Glitches text="ERROR: " textSize="0.7rem" color="gray" rotation={0} />
          <Glitches
            text="NOT FOUND"
            textSize="0.7rem"
            color="gray"
            rotation={0}
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* Frontend */}
        <div className="rounded-2xl p-4 border-2 border-gray-300 dark:border-slate-700">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl p-4 border-2 border-gray-300 dark:border-slate-700">
          <RiAngularjsLine className="text-7xl text-red-600" />
        </div>
        <div className="rounded-2xl p-4 border-2 border-gray-300 dark:border-slate-700">
          <SiTailwindcss className="text-7xl text-blue-400" />
        </div>
        <div className="rounded-2xl p-4 border-2 border-gray-300 dark:border-slate-700">
          <SiBootstrap className="text-7xl text-blue-500" />
        </div>
        <div className="rounded-2xl p-4 border-2 border-gray-300 dark:border-slate-700">
          <FaNodeJs className="text-7xl text-green-400" />
        </div>

        {/* Backend */}
        <div className="rounded-2xl p-4 border-2 border-gray-300 dark:border-slate-700">
          <SiDjango className="text-7xl text-green-600" />
        </div>
        <div className="rounded-2xl p-4 border-2 border-gray-300 dark:border-slate-700">
          <SiMysql className="text-7xl text-blue-300" />
        </div>
        <div className="rounded-2xl p-4 border-2 border-gray-300 dark:border-slate-700">
          <SiMongodb className="text-7xl text-green-600" />
        </div>
        <div className="rounded-2xl p-4 border-2 border-gray-300 dark:border-slate-700">
          <FaJava className="text-7xl text-orange-500" />
        </div>

        {/* Tools */}
        <div className="rounded-2xl p-4 border-2 border-gray-300 dark:border-slate-700">
          <SiFigma className="text-7xl text-purple-500" />
        </div>
        <div className="rounded-2xl p-4 border-2 border-gray-300 dark:border-slate-700">
          <SiUml className="text-7xl text-blue-500" />
        </div>
      </div>
    </div>
  );
};
