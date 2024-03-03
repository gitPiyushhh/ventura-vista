import React from "react";
import TabbedComponent from "../components/ui/TabbedComponent";
import GeneralHeader from "../components/layout/GeneralHeader";
import Navbar from "../components/layout/Navbar";
import CoverLetter from "../components/layout/CoverLetter";
import ColdEmail from "../components/layout/ColdEmail";
import Referal from "../components/layout/Referal";
import { useRecoilValue } from "recoil";
import { uiState } from "../atoms";

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

const Generative = () => {
  /* 
    Global state
  */
  const { status, activeTab } = useRecoilValue(uiState);

  return (
    <div className="flex flex-col w-full gap-16">
      {/* Tabbed components -- Results */}
      <Navbar />

      <div className="w-[80%] m-auto mb-4">
        <GeneralHeader cardsMetaData={cardsMetaData} />
      </div>

      <div className="w-[80%] m-auto flex flex-col gap-8 items-start">
        <h6 className="text-stone-700 text-3xl font-semibold">
          Your Documents
        </h6>
        <div className="w-[64%] m-auto my-5 rounded-xl">
          <TabbedComponent tabsMetaData={tabsMetaData} />
        </div>

        {activeTab === "Cover letter" && <CoverLetter />}
        {activeTab === "Gmail template" && <ColdEmail />}
        {activeTab === "Referral template" && <Referal />}
      </div>
    </div>
  );
};

export default Generative;
