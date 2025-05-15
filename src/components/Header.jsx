import { React, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
// Images
import logo from "/logo-colored.svg";
import MobileBottomNav from "./MobileBottomNav";
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
      <div className="hidden container md:flex md:justify-between md:items-center">
        <div className="logo flex items-center">
          <img src={logo} alt="Logo" className="h-12" />
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
      {/* Mobile Layout */}
      <div className="px-4 py-2 flex flex-col md:px-0 md:py-0  md:hidden">
        <div className="flex justify-between items-center ">
          <div className="left flex items-center gap-4">
            <RxHamburgerMenu size={28} />
            <img src={logo} alt="Logo" className="h-12" />
          </div>
          <div className="right flex items-center gap-4">
            <IoCartOutline size={28} />
            <IoMdLogIn size={28} />
          </div>
        </div>
        <div className="flex items-center gap-2 border-1 border-gray-200 rounded-md px-2 py-2 mt-4 bg-placeholder-mob">
          <CiSearch size={22} className="text-icons" />
          <input
            className="focus:outline-none"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <MobileBottomNav />
    </div>
  );
};

export default Header;
