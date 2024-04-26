import React from "react";
import { Link } from "react-router-dom";

export const PrimaryButton = ({ text, onClick }) => {
  return (
    <Link>
      <button className="btnPrimary text-md 2xl:text-xl" onClick={onClick}>
        {text}
      </button>
    </Link>
  );
};

