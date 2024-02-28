import React from "react";

const Button = ({ children, type, action, to, primary }) => {
  if (type === "link") {
    return (
      <span className="block">
        <a href={"/"} className="text-cyan-500 hover:underline underline-offset-1 transition-all duration-300">
          {children}
        </a>
      </span>
    );
  }

  return <button className={`${primary ? 'bg-cyan-600' : 'bg-stone-600'} py-3 w-full rounded-full text-stone-100 hover:scale-105 transition-all duration-300`}>{children}</button>;
};

export default Button;
