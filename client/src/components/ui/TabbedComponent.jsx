import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { uiState } from "../../atoms";

const TabbedComponent = ({ tabsMetaData }) => {
  const { status, activeTab } = useRecoilValue(uiState);
  const setUiState = useSetRecoilState(uiState);

  /* 
    Event handlers
  */
  const handleTabClick = (tabName) => {
    // Update the activeTab in the uiState Recoil atom
    setUiState((prevUiState) => ({ ...prevUiState, activeTab: tabName }));
  };

  return (
    <div className="flex justify-center items-center w-full text-stone-700">
      {tabsMetaData.map((item) => (
        <div
          className={`w-[33%] bg-stone-100 p-4 ${
            item?.id === 1 && "rounded-l-xl !border-r-0"
          } ${item?.id === tabsMetaData.length && "rounded-r-xl !border-l-0"} ${
            activeTab === item?.name && "bg-stone-400 text-stone-800"
          } text-center cursor-pointer transition-all duration-300 border-[1px] border-stone-400`}
          key={item?.id}
          onClick={() => handleTabClick(item?.name)}
        >
          {item?.name}
        </div>
      ))}
    </div>
  );
};

export default TabbedComponent;
