import React from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";
import china from "/flags/china.png";

const FooterBottom = () => {
  return (
    <div className="bg-newsletter">
      <div className="container py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FaRegCopyright className="text-newsletter-text" size={16} />
          <p className="text-newsletter-text font-light">2023 Ecommerce.</p>
        </div>
        <div className="flex items-center gap-1">
          <img src={china} alt="China Flag" className="w-10 h-10 ml-2" />
          <p className="text-newsletter-text font-light">English</p>
          <MdKeyboardArrowUp size={24} className="text-black font-bold" />
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
