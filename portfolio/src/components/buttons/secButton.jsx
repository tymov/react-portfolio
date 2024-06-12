import React from "react";
import { Link } from "react-router-dom"; // Import Link if you're using React Router

const SecondaryButton = ({ text, onClick }) => {
  return (
    <Link>
      <button
        className="px-8 py-3 text-lg font-semibold border rounded border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white shadow-lg hover:shadow-xl transition-colors duration-300 uppercase"
        onClick={onClick}
      >
        {text}
      </button>
    </Link>
  );
};

export default SecondaryButton;
