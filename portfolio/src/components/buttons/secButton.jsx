import React from "react";
import { Link } from "react-router-dom"; // Import Link if you're using React Router

const SecondaryButton = ({ text, onClick }) => {
  return (
    <Link>
      <button className="btnSecondary text-md 2xl:text-xl" onClick={onClick}>
        {text}
      </button>
    </Link>
  );
};

export default SecondaryButton;
