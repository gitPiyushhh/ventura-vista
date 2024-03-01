import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ children, type, to, primary }) => {
  const navigate = useNavigate();


  if (type === "link") {
    return (
      <span className="block" onClick={() => navigate(to)}>
        <p className="text-cyan-500 hover:underline underline-offset-1 transition-all duration-300 cursor-pointer">
          {children}
        </p>
      </span>
    );
  }

  return (
    <button className={`${primary ? 'bg-cyan-600' : 'bg-stone-600'} py-3 w-full rounded-full text-stone-100 hover:scale-105 transition-all duration-300`}>
      {children}
    </button>
  );
};

export default Button;
