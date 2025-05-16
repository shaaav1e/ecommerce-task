import { React, useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
const BottomNavbar = () => {
  const menu_names = [
    {
      name: "All category",
      path: "/",
    },
    {
      name: "Hot offers",
      path: "/",
    },
    {
      name: "Gift boxes",
      path: "/",
    },
    {
      name: "Products",
      path: "/products",
    },
    {
      name: "Description",
      path: "/description",
    },
    {
      name: "Help",
      hasDropdown: true,
      path: "/",
    },
  ];
  return (
    <>
      <div className="hidden md:block bg-white border-border py-2 border-t border-b mt-2">
        <div className="w-[100%] md:container md:mx-auto px-4 md:px-0 text-black flex items-center justify-between">
          {" "}
          {/* Left side with flex-1 - taking more space */}
          <div className="flex flex-1 items-center md:gap-3 lg:gap-6 xl:gap-8">
            <GiHamburgerMenu className="flex-shrink-0" />{" "}
            {menu_names.map((menu, i) => (
              <Link
                to={menu.path}
                key={i}
                className="flex items-center whitespace-nowrap hover:text-blue transition-colors"
              >
                <p className="text-black text-sm md:text-base hover:text-blue">
                  {menu.name}
                </p>
                {menu.hasDropdown && (
                  <RiArrowDropDownLine
                    size={24}
                    className="text-icons flex-shrink-0"
                  />
                )}
              </Link>
            ))}
          </div>{" "}
          {/* 1st right side - taking less space */}
          <div className="flex items-center mr-2 md:mr-4 lg:mr-6 flex-shrink-0 whitespace-nowrap">
            <p className="line-height-1 text-sm md:text-base">English, USD</p>
            <RiArrowDropDownLine
              size={24}
              className="text-icons flex-shrink-0"
            />
          </div>
          {/* 2nd right side */}
          <div className="flex items-center flex-shrink-0 whitespace-nowrap">
            <p className="line-height-1 text-sm md:text-base">Ship to </p>
            <img
              src="/pak-flag.png"
              alt="Pakistan Flag"
              className="h-6 md:h-8 ml-2 flex-shrink-0"
            />
            <RiArrowDropDownLine
              size={24}
              className="text-icons flex-shrink-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNavbar;
