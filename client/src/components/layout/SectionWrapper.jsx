import React from "react";

const SectionWrapper = ({ align, children, imgSrc }) => {
  return (
    <div className="flex justify-between items-center w-[92%] m-auto">
      <div className={`flex ${align === "left" ? 'flex-row' : "flex-row-reverse"} justify-between items-center w-[88%] m-auto space-x-8`}>
        <div className="w-[60%]">{children}</div>

        <img
          src={`/graphics/sections/${imgSrc}.svg`}
          alt="Section_illustration"
          className="w-[36%] h-full !object-cover object-center bg-center block self-start"
        />
      </div>
    </div>
  );
};

export default SectionWrapper;
