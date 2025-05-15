import React from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";
import china from "/flags/china.png";

const FooterBottom = () => {
  return (
    <div className="bg-newsletter">
      <div className="container py-4 px-4 md:px-0 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div className="flex items-center gap-2 order-2 md:order-1">
          <FaRegCopyright className="text-newsletter-text" size={14} />
          <p className="text-newsletter-text font-light text-sm">
            2023 Ecommerce.
          </p>
        </div>
        <div className="flex items-center gap-2 order-1 md:order-2">
          <img
            src={china}
            alt="China Flag"
            className="w-8 h-8 md:w-10 md:h-10"
          />
          <p className="text-newsletter-text font-light text-sm">English</p>
          <MdKeyboardArrowUp size={20} className="text-black font-bold" />
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
