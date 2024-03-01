import React from "react";
import Button from "../ui/Button";

const footerMetaData = [
  {
    id: 1,
    name: "Contact",
    to: "/",
  },
  {
    id: 2,
    name: "About us",
    to: "/",
  },
];

const Footer = () => {
  return (
    <div className="bg-stone-100 w-full mt-16">
      <div className="w-[80%] flex flex-col gap-4 m-auto py-8 pb-6">
        <div className="space-beteen items-center border-b-[1px] pb-4 border-stone-500 flex">
          <div className="w-full flex justify-between items-center">
            <div className="flex justify-between items-center w-fit space-x-2">
              <img src="/graphics/logo.svg" alt="Logo" className="w-8 h-8" />
              <p className="text-md font-medium">Jobscribe</p>
            </div>

            <ul className="flex justify-between items-center space-x-4">
              {footerMetaData.map((item) => (
                <li key={item?.id}>
                  <Button type={"link"} color>
                    {item?.name}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full text-center">
          Copyright © 2024. LogoIpsum. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
