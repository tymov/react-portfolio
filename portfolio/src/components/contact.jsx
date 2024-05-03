import { motion } from "framer-motion";
import { FaLinkedin, FaSoundcloud } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useState } from "react";
import ContactForm from "../contactForm";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // You can perform further actions such as sending the form data to a server
  };

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
            <ContactForm />
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
