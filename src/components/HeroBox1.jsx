import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
const HeroBox1 = () => {
  return (
    <div className="flex flex-col px-3 py-6 bg-box-1 rounded-md">
      <div className="flex items-center">
        <HiOutlineShoppingBag size={32} className="text-gray" />
        <div className="ml-2 font-light">
          <p className="text-black">Hi, user</p>
          <p className="text-black">let's get started</p>
        </div>
      </div>

      <button className="bg-button text-white px-4 py-1.5 rounded-md mt-2">
        Join now
      </button>
      <button className="bg-white text-button px-4 py-1.5 rounded-md mt-2">
        Log in
      </button>
    </div>
  );
};

export default HeroBox1;
