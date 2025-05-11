import { React, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdMessage } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";

const Header = () => {
  const icons = [
    {
      icon: <MdMessage size={28} />,
      para: "Message",
    },
    {
      icon: <FaHeart size={28} />,
      para: "Orders",
    },
    {
      icon: <IoMdCart size={28} />,
      para: "My cart",
    },
  ];

  return (
    <div className="bg-white py-4">
      {/* Flex - Logo*/}
      <div className="container flex justify-between items-center">
        <div className="logo flex items-center">
          <img src="/logo-colored.svg" alt="Logo" className="h-12" />
        </div>
        {/* Input - Mid Section*/}{" "}
        <div className="Search flex items-stretch border-2 border-blue rounded-md">
          <input
            type="text"
            placeholder="Search"
            className="pl-3 pr-12 py-2 outline-none flex-grow"
          />
          <div className="flex items-center px-4 border-l border-blue cursor-pointer">
            <p className="mr-1">All category</p>
            <RiArrowDropDownLine size={32} className="text-icons" />
          </div>
          <button className="bg-blue-600 text-white px-6 py-2">Search</button>
        </div>{" "}
        {/* Icons - Right Section   */}
        <div className="flex items-center gap-6 h-full my-auto">
          {icons.map((icon, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-1 text-icons"
            >
              {icon.icon}
              <p className="text-icons text-sm">{icon.para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
