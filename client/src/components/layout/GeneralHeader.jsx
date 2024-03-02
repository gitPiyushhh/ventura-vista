import React from "react";
import Navbar from "./Navbar";
function GeneralHeader() {
  return (
    <>
      <Navbar />
      <div>
        <div className="text-3xl font-semibold mt-20 mb-20 ml-10 ">
          Expert Resume Maker
        </div>
        <div className="flex justify-between ml-10">
          <SmallGeneralHeader>
            <img src="/graphics/Image1.svg" alt="Image1" />
            <div className="ml-2">
              <h3 className="font-semibold text-gray-700 text-lg mb-1 text-center">
                Build your Cover letter in minutes
              </h3>
              <p className="text-sm text-gray-600 text-center">
                Stand out and get hired faster with your collection of cover
                letter
              </p>
            </div>
          </SmallGeneralHeader>
          <SmallGeneralHeader>
            <img src="/graphics/Image2.svg" alt="Image2" />
            <div className="ml-2">
              <h3 className="font-semibold text-gray-700 text-lg mb-1 text-center">
                Build your Cover letter in minutes
              </h3>
              <p className="text-sm text-gray-600 text-center">
                Stand out and get hired faster with your collection of cover
                letter
              </p>
            </div>
          </SmallGeneralHeader>
          <SmallGeneralHeader>
            <img src="/graphics/Image3.svg" alt="Image3" />
            <div className="ml-2">
              <h3 className="font-semibold text-gray-700 text-lg mb-1 text-center">
                Build your Cover letter in minutes
              </h3>
              <p className="text-sm  text-gray-600 text-center ">
                Stand out and get hired faster with your collection of cover
                letter
              </p>
            </div>
          </SmallGeneralHeader>
        </div>
      </div>
    </>
  );
}

function SmallGeneralHeader({ children }) {
  return (
    <div className="flex flex-col items-center w-[300px] pl-[2px] pr-[20px]">
      {children}
    </div>
  );
}

export default GeneralHeader;
