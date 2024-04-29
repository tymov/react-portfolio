import { motion } from "framer-motion";
import { FaLinkedin, FaSoundcloud } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const Contact = () => {
  return (
    <motion.div
      className="text-gray-800 dark:text-white pb-10 px-10 pt-10 relative"
      id="contact"
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 0 }}
      transition={{ duration: 0.99, delay: 0 }}
    >
      <h1 className="text-4xl font-bold uppercase header text-start mb-10">
        <span className="header text-4xl md:text-5xl">06</span>{" "}
        <span className="header text-4xl md:text-5xl mx-5">CONTACT</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-800 dark:text-white">
        <div>
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-3 text-md">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-slate-800 dark:border-slate-600 dark:bg-slate-900"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-3 text-md">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-slate-800 dark:border-slate-600 dark:bg-slate-900"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-3 text-md">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-slate-800 dark:border-slate-600 dark:bg-slate-900"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3 text-lg font-semibold rounded dark:bg-vulcan-600 dark:text-white"
            >
              Send Message
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <ul className="space-y-2">
            <li className="text-2xl my-3 py-3">
              <IoMdMail className="inline-block mr-4" /><span className="text-lg">tymoverhaegen@gmail.com</span>
            </li>
            <li className="text-2xl my-3 py-3">
              <FaLinkedin className="inline-block mr-4" /><span className="text-lg">Tymo Verhaegen</span>
            </li>
            <li className="text-2xl my-3 py-3">
              <FaSoundcloud className="inline-block mr-4" /><span className="text-lg">Neuralon</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};
