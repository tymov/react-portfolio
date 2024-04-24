import React from "react";
import { Link } from "react-router-dom"; // Import Link if you're using React Router

const SecondaryButton = ({ text, onClick }) => {
  return (
    <Link>
      <button className="btnSecondary lg:text-3xl" onClick={onClick}>
        {text}
      </button>
    </Link>
  );
};

export default SecondaryButton;
