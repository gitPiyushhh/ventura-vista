import React, { useCallback, useEffect, useState } from "react";
import Button from "../ui/Button";
import FormInput from "../ui/FormInput";

const ModalFullScreen = ({
  pages = 2,
  handleModalClose,
  perPageQuestions,
  questionsData,
}) => {
  /* 
    Local state
  */
  const [activePage, setActivePage] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  /* 
    Event handlers
  */
  const handleNextQuestion = useCallback(() => {
    if (currentQuestionIndex >= questionsData.length / perPageQuestions) return;

    setCurrentQuestionIndex(currentQuestionIndex + perPageQuestions);
  }, [currentQuestionIndex, perPageQuestions, questionsData.length]);

  const handlePreviousQuestion = useCallback(() => {
    if (currentQuestionIndex < perPageQuestions) return;
    setCurrentQuestionIndex(currentQuestionIndex - perPageQuestions);
  }, [currentQuestionIndex, perPageQuestions]);

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

      <div
        className="bg-stone-300 p-4 py-2 w-fit absolute right-4 top-4 flex rounded-full justify-center items-center space-x-1 cursor-pointer hover:scale-[1.1] transition-all duration-300"
        onClick={handleModalClose}
      >
        <span>Close</span>
        <img src="/icons/cross.svg" className="w-6 h-6" alt="close_icon" />
      </div>

      <div className="bg-stone-100 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-xl w-[64%] h-[80%] rounded-[1rem]">
        <div className="flex justify-between items-center space-x-2 w-full p-8">
          {Array.from({ length: pages }, (_, index) => (
            <div
              className={`${
                index <= currentQuestionIndex ? "bg-green-500" : "bg-stone-200"
              } flex-grow h-2 rounded transition-all duration-300`}
            >
              &nbsp;
            </div>
          ))}
        </div>

        <div className="h-[88%] flex flex-col gap-4 px-8">
          {/* Take previous data button */}
          <div className="flex space-x-2 w-full justify-end">
            <span className="text-stone-600">
              Your previous data is saved.{" "}
            </span>
            <div onClick={() => alert("Hello world")} className="self-end">
              <Button type="link" color="cyan-600">
                Use existing data
              </Button>
            </div>
          </div>

          {/* <div className="flex flex-col gap-6">
            <FormInput />
            <FormInput />
          </div> */}

          {questionsData
            .slice(
              currentQuestionIndex,
              currentQuestionIndex + perPageQuestions
            )
            .map((item) => (
              <div className="flex flex-col gap-4">
                <span className="text-stone-700">{item?.content}</span>
                <textarea
                  name="random"
                  cols="30"
                  rows="4"
                  className="p-4 px-4 bg-transparent border-[1px] border-stone-400 rounded-lg text-stone-600"
                ></textarea>
              </div>
            ))}

          <div className="flex justify-between items-center space-x-[32%] mt-4">
            <Button
              primary
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex < perPageQuestions}
            >
              <div className="flex space-x-2 justify-center items-center w-fit translate-x-[-12%]">
                <img
                  src="/icons/left.svg"
                  alt="prev_icon"
                  className="w-6 h-6"
                />
                <span className="inline-block">Previous</span>
              </div>
            </Button>

            {currentQuestionIndex >= questionsData.length - perPageQuestions ? (
              <Button primary onClick={() => alert("No event handler 🙂")}>
                <div className="flex space-x-2 justify-center items-center w-fit">
                  <span className="inline-block">Generate your documents</span>
                  <img
                    src="/icons/next.svg"
                    alt="prev_icon"
                    className="w-6 h-6"
                  />
                </div>
              </Button>
            ) : (
              <Button primary onClick={handleNextQuestion}>
                <div
                  className="flex space-x-2 justify-center items-center w-fit"
                  disabled={
                    currentQuestionIndex + perPageQuestions >=
                    questionsData.length
                  }
                >
                  <span className="inline-block">Next</span>
                  <img
                    src="/icons/next.svg"
                    alt="prev_icon"
                    className="w-6 h-6"
                  />
                </div>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFullScreen;
