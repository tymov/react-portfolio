import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("message sent successfully...");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label className="block mb-3 text-md">
        Name
        <input
          type="text"
          name="user_name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-slate-800 dark:border-slate-600 dark:bg-slate-900"
        />
      </label>
      <label className="block mt-3 text-md">Email</label>
      <input
        type="email"
        name="user_email"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-slate-800 dark:border-slate-600 dark:bg-slate-900"
      />
      <label className="block mt-3 text-md">Message</label>
      <textarea
        name="message"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-slate-800 dark:border-slate-600 dark:bg-slate-900"
      />
      <input
        type="submit"
        value="Send"
        className="px-8 py-3 text-lg font-semibold rounded dark:bg-vulcan-600 dark:text-gray-50 mt-5"
      />
    </form>
  );
};

export default ContactForm;
