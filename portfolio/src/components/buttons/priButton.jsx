import React from "react";
import { Link } from "react-router-dom";

export const PrimaryButton = ({ text, onClick }) => {
  return (
    <Link>
      <button className="btnPrimary lg:text-3xl" onClick={onClick}>
        {text}
      </button>
    </Link>
  );
};

