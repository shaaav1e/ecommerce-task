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
      {" "}
      {/* Desktop/Tablet Layout */}
      <div className="hidden container md:flex md:justify-between md:items-center md:flex-wrap lg:flex-nowrap">
        {/* Logo - Left Section */}
        <div className="logo flex items-center md:mb-0 md:mr-4 lg:mr-0">
          <img src={logo} alt="Logo" className="h-12" />
        </div>

        {/* Input - Mid Section */}
        <div className="Search flex-grow flex items-stretch border-2 border-blue rounded-md md:order-3 md:w-full md:mt-4 lg:mt-0 lg:order-none lg:w-auto lg:max-w-xl xl:max-w-2xl">
          <input
            type="text"
            placeholder="Search"
            className="pl-3 py-2 outline-none min-w-0 flex-grow"
          />
          <div className="flex items-center px-2 md:px-3 lg:px-4 border-l border-blue cursor-pointer whitespace-nowrap">
            <p className="text-sm lg:text-base">All category</p>
            <RiArrowDropDownLine
              size={24}
              className="text-icons flex-shrink-0"
            />
          </div>
          <button className="bg-blue-600 text-white px-4 lg:px-6 py-2 whitespace-nowrap">
            Search
          </button>
        </div>

        {/* Icons - Right Section */}
        <div className="flex items-center gap-3 md:gap-4 lg:gap-6 h-full my-auto">
          {icons.map((icon, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-1 text-icons"
            >
              {icon.icon}
              <p className="text-icons text-xs lg:text-sm whitespace-nowrap">
                {icon.para}
              </p>
            </div>
          ))}
        </div>
      </div>{" "}
      {/* Mobile Layout */}
      <div className="w-full px-4 py-2 flex flex-col md:hidden">
        <div className="flex justify-between items-center">
          <div className="left flex items-center gap-4">
            <RxHamburgerMenu size={24} className="text-gray-700" />
            <img src={logo} alt="Logo" className="h-10" />
          </div>
          <div className="right flex items-center gap-5">
            <IoCartOutline size={24} className="text-gray-700" />
            <IoMdLogIn size={24} className="text-gray-700" />
          </div>
        </div>
        <div className="flex items-center gap-2 border border-gray-200 rounded-md px-3 py-2 mt-4 bg-placeholder-mob w-full">
          <CiSearch size={20} className="text-icons flex-shrink-0" />
          <input
            className="w-full focus:outline-none bg-transparent"
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
