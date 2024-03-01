import React from "react";

const ListView = ({ points }) => {
  return (
    <div className="w-full flex flex-wrap justify-between items-center gap-2">
      {points.map((item, index) => (
        <div key={index} className="w-[44%] flex justify-start items-center space-x-2 flex-shrink-0">
          <img
            src="/icons/tick.svg"
            alt="cloud_icon"
            className="h-6 w-6 block"
          />
          <p className="text-stone-500">{item}</p>
        </div>
      ))}
    </div>
  );
};

export default ListView;
