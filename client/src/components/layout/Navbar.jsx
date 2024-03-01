import React from "react";
import Button from "../ui/Button";

const navbarMetaData = [
  {
    name: "General",
    to: "/",
    type: "link",
  },
  {
    name: "Personalised",
    to: "/",
    type: "link",
  },
  {
    name: "Job task",
    to: "/",
    type: "link",
  },
  {
    name: "Documents",
    to: "/",
    type: "link",
  },
  {
    name: "Login",
    to: "/",
    primary: false,
  },
  {
    name: "Signup",
    to: "/",
    primary: true,
  },
];

const Navbar = () => {
  return (
    <div className="h-[4.5rem] w-full px-10 flex justify-center items-center">
      <div className="w-[88%] flex justify-between items-center">
        <Button type="link" to="/">
          <div className="flex space-x-2 justify-center items-center">
            <img src="/graphics/logo.svg" alt="Logo" className="w-10 h-10" />
            <p className="text-stone-600 capitalize">jobscribe</p>
          </div>
        </Button>

        <ul className="flex justify-between items-center space-x-6">
          {navbarMetaData.map((item) => (
            <li className="">
              <Button
                type={item?.type}
                color
                to={item?.to}
                primary={item?.primary}
              >
                <p
                  className={`text-md text-stone-500 ${
                    !item.type &&
                    "px-8 h-5 flex justify-center items-center !text-stone-100"
                  }`}
                >
                  {item?.name}
                </p>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
