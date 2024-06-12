import React from "react";
import { Link } from "react-router-dom";

export const PrimaryButton = ({ text, onClick }) => {
  return (
    <Link>
      <button
        className="px-8 py-3 text-lg font-semibold border rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300 shadow-lg hover:shadow-xl hover:border-blue-600 border-blue-500 uppercase"
        onClick={onClick}
      >
        {text}
      </button>
    </Link>
  );
};
