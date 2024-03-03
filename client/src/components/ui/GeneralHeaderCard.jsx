import React from "react";

const GeneralHeaderCard = ({children}) => {
  return (
    <div className="flex flex-col gap-2 items-center w-[30%]">
      {children}
    </div>
  );
};

export default GeneralHeaderCard;
