import { motion } from "framer-motion";

export const About = () => {
  return (
    <motion.div
      className="text-gray-800 dark:text-white pb-10 px-10 pt-10 relative"
      id="about"
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 0 }}
      transition={{ duration: 0.99, delay: 0 }}
    >
      <h1 className="text-4xl font-bold uppercase header text-start mb-10">
        <span className="header text-4xl md:text-5xl">05</span>{" "}
        <span className="header text-4xl md:text-5xl mx-5">ABOUT ME</span>
      </h1>

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              src="/about.png"
              alt="Tymo Verhaegen"
              className="rounded-full h-64 w-64 mx-auto md:mx-0"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="flex justify-center items-center">
            <p className="text-lg mb-8">
              Hi there! I'm Tymo Verhaegen, an application developer and design
              enthusiast based in Belgium.
              <br></br>
              <br></br>
              With a background in application development and an interest in
              design, I bring a unique perspective to my projects. Whether it's
              creating intuitive user interfaces or implementing the best
              possible user experience, I'm always up for a challenge.
              <br></br>
              <br></br>
              When I'm not coding, you can find me producing music, playing
              games, experimenting in the kitchen, or planning my next travel
              adventure.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
