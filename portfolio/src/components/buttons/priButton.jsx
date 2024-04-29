import React from "react";
import { Link } from "react-router-dom";

export const PrimaryButton = ({ text, onClick }) => {
  return (
    <Link>
      <button className="px-8 py-3 text-lg font-semibold rounded dark:bg-vulcan-600 dark:text-gray-50" onClick={onClick}>
        {text}
      </button>
    </Link>
  );
};

