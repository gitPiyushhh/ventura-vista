import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ children, type, to, primary, color }) => {
  const navigate = useNavigate();

  if (type === "link") {
    return (
      <span className="block" onClick={() => navigate(to)}>
        <p
          className={`${
            color ? `text-${color}` : "text-cyan-500"
          } hover:underline underline-offset-4 transition-all duration-300 cursor-pointer`}
        >
          {children}
        </p>
      </span>
    );
  }

  if (type === "transparent") {
    return (
      <button
        className={`border-2 border-cyan-600 py-3 w-full rounded-lg shadow-lg text-cyan-600 hover:scale-105 transition-all duration-300`}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={`${
        primary ? "bg-cyan-600" : "bg-stone-600"
      } flex justify-center items-center py-3 w-full rounded-lg shadow-lg text-stone-100 hover:scale-105 transition-all duration-300`}
    >
      {children}
    </button>
  );
};

export default Button;
