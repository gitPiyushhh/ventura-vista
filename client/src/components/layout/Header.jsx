import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center mt-10">
      <div className="w-[88%] h-[80vh] m-auto flex justify-between items-center">
        {/* Left side content */}
        <div className="flex-1 p-10">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <p className="text-6xl font-semibold">Let's Create</p>
              <p className="text-6xl font-semibold text-cyan-500">
                professional carrier
              </p>
            </div>
            <p className="text-2xl text-gray-600">
              Better way to manage resources
            </p>
          </div>
          <button className="text-white bg-cyan-600 py-3 px-10 rounded mt-10 text-center text-md">
            Get started
          </button>
        </div>
        {/* Right side image */}
        <div className="flex-1 w-[40%] h-full p-8 relative">
          {/* Left-bottom */}
          <div className="flex justify-between items-center w-[24%] h-[24%] bg-stone-400 absolute top-0 right-0 rounded z-10 shadow-md">
            &nbsp;
          </div>
          {/* Center */}
          <div className="flex justify-between items-center w-[64%] h-[64%] bg-stone-500 absolute top-[50%] left-[50%] rounded translate-x-[-50%] translate-y-[-50%] z-20 shadow-xl">
            &nbsp;
          </div>
          {/* Top-right */}
          <div className="flex justify-between items-center w-[24%] h-[24%] bg-stone-400 absolute bottom-0 rounded left-0 z-10 shadow-md">
            &nbsp;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
