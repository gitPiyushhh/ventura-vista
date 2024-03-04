import React from "react";
import GeneralHeaderCard from "../ui/GeneralHeaderCard";
import Button from "../ui/Button";

function GeneralHeader({ cardsMetaData, heading, handleButtonClick }) {
  return (
    <div className="w-full">
      <div className="flex h-[80vh] justify-start items-center flex-col gap-8">
        {heading && <p className="text-3xl font-semibold">{heading}</p>}

        <div className="flex justify-between mt-8">
          {cardsMetaData.map((item) => (
            <GeneralHeaderCard key={item?.id}>
              <img
                src={`/graphics/headers/general-header-${item.id}.svg`}
                alt="Image1"
              />
              <div className="ml-2 flex flex-col gap-4 items-center">
                <div className="flex flex-col items-center">
                  <h3 className="font-[500] text-gray-700 text-2xl w-[80%] mb-1 text-center">
                    Build your
                  </h3>
                  <h3 className="font-[500] mt-[-4px] text-gray-700 text-2xl w-full mb-1 text-center">
                    {item?.heading}
                  </h3>
                </div>
                <p className="text-md text-gray-600 text-center">
                  {item?.subHeading}
                </p>
              </div>
            </GeneralHeaderCard>
          ))}
        </div>

        <div className="w-[16rem] self-center mt-6" onClick={handleButtonClick}>
          <Button primary>Generate your documents</Button>
        </div>
      </div>
    </div>
  );
}

export default GeneralHeader;
