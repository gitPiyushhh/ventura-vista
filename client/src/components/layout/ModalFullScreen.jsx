import React, { useEffect, useState } from "react";

const ModalFullScreen = ({ pages = 2, handleModalClose, perPageQuestions }) => {
  /* 
    Local state
  */
  const [activePage, setActivePage] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  /* 
    Effects
  */
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleModalClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleModalClose]);

  return (
    <div className="relative w-screen h-screen  overflow-hidden flex justify-center cursor-auto items-center">
      <div
        className="bg-[#000000be] w-screen h-screen"
        onClick={handleModalClose}
      >
        &nbsp;
      </div>

      <div className="bg-stone-300 p-4 py-2 w-fit absolute right-4 top-4 flex rounded-full justify-center items-center space-x-1 cursor-pointer hover:scale-[1.1] transition-all duration-300" onClick={handleModalClose}>
        <span>Close</span>
        <img src="/icons/cross.svg" className="w-6 h-6" alt="close_icon" />
      </div>

      <div className="bg-stone-100 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-xl w-[64%] h-[80%] rounded-[1rem]">
        <div className="flex justify-between items-center space-x-2 w-full p-8">
          {Array.from({ length: pages }, (_, index) => (
            <div
              className={`${
                index <= activePage ? "bg-green-500" : "bg-stone-200"
              } flex-grow h-2 rounded transition-all duration-300`}
            >
              &nbsp;
            </div>
          ))}
        </div>

        <div className=""></div>
      </div>
    </div>
  );
};

export default ModalFullScreen;
