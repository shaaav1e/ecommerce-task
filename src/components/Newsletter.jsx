import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
const Newsletter = () => {
  return (
    <div className="bg-newsletter mt-8">
      <div className="py-10 container flex flex-col text-center">
        <h1 className="text-black font-semibold text-xl">
          Subscribe on our newsletter
        </h1>
        <p className="text-newsletter-text font-light">
          Get daily news on upcoming offers from many supplies all over the
          world
        </p>
        <div className="flex items-center mx-auto mt-4 gap-2">
          <div className="flex items-center w-full bg-white rounded-md py-2 px-2">
            <FaRegEnvelope size={24} className="text-desc mr-2" />
            <input
              type="text"
              placeholder="Email"
              className="bg-transparent outline-none text-lg text-desc w-full"
            />
          </div>
          <button className="bg-blue text-white rounded-md px-4 py-2">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
