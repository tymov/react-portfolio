import React from "react";
import { Link } from "react-router-dom"; // Import Link if you're using React Router

const SecondaryButton = ({ text, onClick }) => {
  return (
    <Link>
      <button
        className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800"
        onClick={onClick}
      >
        {text}
      </button>
    </Link>
  );
};

export default SecondaryButton;
