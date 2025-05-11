import { React, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
const BottomNavbar = () => {
  const menu_names = [
    {
      name: "All category",
    },
    {
      name: "Hot offers",
    },
    {
      name: "Gift boxes",
    },
    {
      name: "Projects",
    },
    {
      name: "Menu item",
    },
    {
      name: "Help",
      hasDropdown: true,
    },
  ];
  return (
    <div className="bg-white border-border py-2 border-t-1 border-b-1 mt-2">
      <div className="container text-black flex items-center justify-center">
        {/* Left side with flex-1 - taking more space */}
        <div className="flex flex-1 items-center gap-8">
          <GiHamburgerMenu />
          {menu_names.map((menu, i) => (
            <div key={i} className="flex items-center">
              <p className="text-black">{menu.name}</p>
              {menu.hasDropdown && (
                <RiArrowDropDownLine size={32} className="text-icons" />
              )}
            </div>
          ))}
        </div>
        {/* 1st right side - taking less space */}
        <div className="flex items-center mr-6">
          <p className="line-height-1">English, USD</p>
          <RiArrowDropDownLine size={32} className="text-icons" />
        </div>
        {/* 2nd right side */}
        <div className="flex items-center">
          <p className="line-height-1">Ship to </p>
          <img
            src="/public/pak-flag.png"
            alt="Pakistan Flag"
            className="h-8 ml-2"
          />
          {/* <FaHome className="ml-1" /> */}
          <RiArrowDropDownLine size={32} className="text-icons" />
        </div>
      </div>
    </div>
  );
};

export default BottomNavbar;
