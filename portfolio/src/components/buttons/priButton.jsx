import React from "react";
import { Link } from "react-router-dom";

export const PrimaryButton = ({ text, onClick }) => {
  return (
    <Link>
      <button className="btnPrimary" onClick={onClick}>
        {text}
      </button>
    </Link>
  );
};

