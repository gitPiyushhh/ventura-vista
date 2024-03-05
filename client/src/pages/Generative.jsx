import React, { useCallback, useRef, useState } from "react";
import TabbedComponent from "../components/ui/TabbedComponent";
import GeneralHeader from "../components/layout/GeneralHeader";
import Navbar from "../components/layout/Navbar";
import CoverLetter from "../components/layout/CoverLetter";
import ColdEmail from "../components/layout/ColdEmail";
import Referal from "../components/layout/Referal";
import { useRecoilValue } from "recoil";
import { uiState } from "../atoms";
import Footer from "../components/layout/Footer";
import ModalFullScreen from "../components/layout/ModalFullScreen";

const tabsMetaData = [
  {
    id: 1,
    name: "Cover letter",
  },
  {
    id: 2,
    name: "Gmail template",
  },
  {
    id: 3,
    name: "Referral template",
  },
];

const cardsMetaData = [
  {
    id: 1,
    heading: "Cover letter in minutes",
    subHeading:
      "Stand out and get hired faster with your collection of cover letter",
  },
  {
    id: 2,
    heading: "Cover letter in minutes",
    subHeading:
      "Stand out and get hired faster with your collection of cover letter",
  },
  {
    id: 3,
    heading: "Cover letter in minutes",
    subHeading:
      "Stand out and get hired faster with your collection of cover letter",
  },
];

const questionsMetaData = [
  {
    id: 1,
    content: "Question-1?"
  },
  {
    id: 2,
    content: "Question-2 ?"
  },
  {
    id: 3,
    content: "Question-3 ?"
  },
  {
    id: 4,
    content: "Question-4 ?"
  },
]

const Generative = () => {
  /* 
    Local state
  */
  const [modalOpen, setModalOpen] = useState(false);

  /* 
    Global state
  */
  const { status, activeTab } = useRecoilValue(uiState);

  /* 
    Ref for the "Your Documents" section
  */
  const documentsSectionRef = useRef(null);

  /* 
    Event handlers
  */
  const handleModalOpen = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [modalOpen]);

  const handleModalClose = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [modalOpen]);

  const handleDocumentsButtonClick = useCallback(() => {
    // Scroll to the "Your Documents" section
    documentsSectionRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div
      className={`flex flex-col w-full gap-16 relative ${
        modalOpen && "h-screen overflow-y-hidden"
      }`}
    >
      <div className={`absolute top-0 left-0 z-10`}>
        <Navbar />

        <div className="w-[80%] m-auto mt-4 mb-4">
          <GeneralHeader
            cardsMetaData={cardsMetaData}
            handleButtonClick={handleModalOpen}
          />
        </div>

        <div
          className="p-4 w-fit px-8 rounded-full bg-stone-100 border-[2px] border-stone-200 shadow-sm fixed right-8 bottom-6"
          onClick={handleDocumentsButtonClick}
        >
          <button className="focus:outline-none active:outline-none hover:scale-105 transition-all duration-300">
            <div className="flex space-x-2 justify-center items-center">
              <span className="text-stone-700">Documents</span>
              <img src="/icons/down.svg" alt="down-icon" className="w-4 h-4" />
            </div>
          </button>
        </div>

        <div
          className="w-[80%] m-auto flex flex-col gap-8 items-start mt-16"
          ref={documentsSectionRef}
        >
          <h6 className="text-stone-700 text-3xl font-semibold">
            Your Documents
          </h6>

          {/* Tabbed components -- Results */}
          <div className="w-[64%] m-auto my-5 rounded-xl">
            <TabbedComponent tabsMetaData={tabsMetaData} />
          </div>

          {activeTab === "Cover letter" && <CoverLetter />}
          {activeTab === "Gmail template" && <ColdEmail />}
          {activeTab === "Referral template" && <Referal />}
        </div>

        <Footer />
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="absolute top-0 left-0 z-20">
          <ModalFullScreen pages={2} handleModalClose={handleModalClose} perPageQuestions={2} questionsData={questionsMetaData}/>
        </div>
      )}
    </div>
  );
};

export default Generative;
