import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { BsGrid } from "react-icons/bs";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { TfiPackage } from "react-icons/tfi";
import { RiGlobalLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { IoInformationCircleOutline } from "react-icons/io5";
import { BsFileText } from "react-icons/bs";
import { SlOrganization } from "react-icons/sl";
import { MdOutlineSecurity } from "react-icons/md";
// Images
import logo from "/logo-colored.svg";
import MobileBottomNav from "./MobileBottomNav";
const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  // Effect to toggle body scrolling when sidebar opens/closes
  useEffect(() => {
    if (showSidebar) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling
      document.body.style.overflow = "auto";
    }

    // Cleanup function to re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showSidebar]);

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
      {/* Desktop/Tablet Layout */}
      <div className="hidden w-[100%] md:container md:mx-auto px-4 md:px-0 md:flex md:justify-between md:items-center">
        {" "}
        {/* Logo - Left Section */}
        <div className="logo flex items-center flex-shrink-0 md:mr-4">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10 md:h-12" />
          </Link>
        </div>
        {/* Input - Mid Section */}
        <div className="Search flex-shrink flex-grow flex items-stretch border-2 border-blue rounded-md mx-4 min-w-0 max-w-3xl">
          <input
            type="text"
            placeholder="Search"
            className="pl-3 py-2 outline-none min-w-0 flex-grow"
          />
          <div className="flex items-center px-2 md:px-3 lg:px-4 border-l border-blue cursor-pointer whitespace-nowrap">
            <p className="hidden sm:block text-sm lg:text-base">All category</p>
            <RiArrowDropDownLine
              size={24}
              className="text-icons flex-shrink-0"
            />
          </div>
          <button className="bg-blue-600 text-white px-3 md:px-4 lg:px-6 py-2 whitespace-nowrap">
            Search
          </button>
        </div>{" "}
        {/* Icons - Right Section */}
        <div className="flex-shrink-0 flex items-center gap-2 md:gap-3 lg:gap-5 h-full my-auto ml-1">
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
          {" "}
          <div className="left flex items-center gap-4">
            <button onClick={() => setShowSidebar(true)} aria-label="Open menu">
              <RxHamburgerMenu
                size={24}
                className="text-gray-700 cursor-pointer"
              />
            </button>
            <Link to="/">
              <img src={logo} alt="Logo" className="h-10" />
            </Link>
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
        {/* Mobile Sidebar Navigation */}
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
            showSidebar ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
                User
              </div>
              <div className="ml-3">
                <div className="text-sm font-medium">Sign in | Register</div>
              </div>
            </div>{" "}
            <button
              onClick={() => setShowSidebar(false)}
              aria-label="Close menu"
            >
              <IoMdClose size={24} className="text-gray-700" />
            </button>
          </div>{" "}
          {/* Sidebar Links */}
          <div className="py-2">
            <Link
              to="/"
              className="flex items-center px-4 py-3 hover:bg-gray-100"
              onClick={() => setShowSidebar(false)}
            >
              <AiOutlineHome size={20} className="text-gray-600" />
              <span className="ml-3 text-gray-700">Home</span>
            </Link>
            <Link
              to="/products"
              className="flex items-center px-4 py-3 hover:bg-gray-100"
              onClick={() => setShowSidebar(false)}
            >
              <BsGrid size={20} className="text-gray-600" />
              <span className="ml-3 text-gray-700">Products</span>
            </Link>
            <Link
              to="/"
              className="flex items-center px-4 py-3 hover:bg-gray-100"
              onClick={() => setShowSidebar(false)}
            >
              <MdOutlineFavoriteBorder size={20} className="text-gray-600" />
              <span className="ml-3 text-gray-700">Favorites</span>
            </Link>
            <Link
              to="/"
              className="flex items-center px-4 py-3 hover:bg-gray-100"
              onClick={() => setShowSidebar(false)}
            >
              <TfiPackage size={20} className="text-gray-600" />
              <span className="ml-3 text-gray-700">My orders</span>
            </Link>{" "}
            <div className="border-t border-b py-2">
              <Link
                to="/"
                className="flex items-center px-4 py-3 hover:bg-gray-100"
                onClick={() => setShowSidebar(false)}
              >
                <RiGlobalLine size={20} className="text-gray-600" />
                <span className="ml-3 text-gray-700">English | USD</span>
              </Link>
              <Link
                to="/"
                className="flex items-center px-4 py-3 hover:bg-gray-100 relative"
                onClick={() => setShowSidebar(false)}
              >
                <BiSupport size={20} className="text-gray-600" />
                <span className="ml-3 text-gray-700">Contact us</span>
                <div className="absolute right-4 w-2 h-2 bg-pink-500 rounded-full"></div>
              </Link>{" "}
              <Link
                to="/"
                className="flex items-center px-4 py-3 hover:bg-gray-100"
                onClick={() => setShowSidebar(false)}
              >
                <IoInformationCircleOutline
                  size={20}
                  className="text-gray-600"
                />
                <span className="ml-3 text-gray-700">About</span>
              </Link>
            </div>
            <div className="py-2">
              <Link
                to="/"
                className="flex items-center px-4 py-3 hover:bg-gray-100"
                onClick={() => setShowSidebar(false)}
              >
                <BsFileText size={20} className="text-gray-600" />
                <span className="ml-3 text-gray-700">User agreement</span>
              </Link>
              <Link
                to="/"
                className="flex items-center px-4 py-3 hover:bg-gray-100"
                onClick={() => setShowSidebar(false)}
              >
                <SlOrganization size={20} className="text-gray-600" />
                <span className="ml-3 text-gray-700">Partnership</span>
              </Link>
              <Link
                to="/"
                className="flex items-center px-4 py-3 hover:bg-gray-100"
                onClick={() => setShowSidebar(false)}
              >
                <MdOutlineSecurity size={20} className="text-gray-600" />
                <span className="ml-3 text-gray-700">Privacy policy</span>
              </Link>
            </div>
          </div>
        </div>{" "}
        {/* No overlay - removed to keep the rest of the screen visible */}
      </div>
      <MobileBottomNav />
    </div>
  );
};

export default Header;
