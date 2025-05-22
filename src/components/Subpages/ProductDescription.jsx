import React from "react";
// Icons
import { IoMdCheckmark } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { MdLocalShipping } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import pakflag from "/flags/pak-flag.png";

// Images
import shirt1 from "/shirt/image34.png";
import shirt2 from "/shirt/image35.png";
import shirt3 from "/shirt/image36.png";
import shirt4 from "/shirt/image37.png";
import shirt5 from "/shirt/image39.png";
import shirt6 from "/shirt/image40.png";
const ProductDescription = () => {
  // State to track which image is currently selected
  const [selectedImage, setSelectedImage] = React.useState(shirt1);

  const pcs = [
    {
      price: "$98.00",
      text: "50-100 pcs",
    },
    {
      price: "$90.00",
      text: "100-700 pcs",
    },
    {
      price: "$78.00",
      text: "700+ pcs",
    },
  ];
  const description = [
    {
      heading: "Price",
      info: "Negotiable",
    },
    {
      heading: "Type:",
      info: "T-Shirt Cotton Base",
    },
    {
      heading: "Material:",
      info: "Cotton",
    },
    {
      heading: "Design",
      info: "Names can be printed",
    },
    {
      heading: "Size:",
      info: "S, M, L, XL",
    },
    {
      heading: "Color:",
      info: "Black, White, Gray",
    },
    {
      heading: "Protection:",
      info: "Refund Policy",
    },
  ];
  const right = [
    {
      icon: <img src={pakflag} alt="Pakistan Flag" className="w-6 h-6" />,
      text: "Pakistan,Rawalpindi",
    },

    {
      icon: <IoShieldCheckmarkOutline size={24} className="text-icons" />,
      text: "Verified Seller",
    },
    {
      icon: <MdLocalShipping size={24} className="text-icons" />,
      text: "WorldWide Shipping",
    },
  ];
  return (
    <div className="container bg-white rounded-md mt-5 border-1 border-icons/50">
      {" "}
      <div className="flex">
        {" "}
        {/* Image - Left Section */}
        <div className="left px-6 py-4 w-[30%]">
          {" "}
          <div className="relative">
            {" "}
            <img
              src={selectedImage}
              alt="Collared Gray T-Shirt"
              className="w-full border-1 border-icons/50 rounded-md h-80 object-contain bg-white"
            />
            {/* Thumbnail images */}
            <div className="flex overflow-x-auto scrollbar-hide mt-3 w-full">
              <div className="flex gap-2">
                {[shirt1, shirt2, shirt3, shirt4, shirt5, shirt6].map(
                  (img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(img)}
                      className="focus:outline-none"
                    >
                      <img
                        src={img}
                        alt={`T-shirt view ${index + 1}`}
                        className={`w-14 h-14 object-cover border ${
                          selectedImage === img
                            ? "border-blue-500 border-2"
                            : "border-gray-300"
                        } rounded-md cursor-pointer hover:border-blue transition-colors duration-200`}
                      />
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Mid Section - Description */}
        <div className="flex flex-col mt-4 px-4 w-[50%]">
          {/* Arrow and in Stock */}
          <div className="flex items-center text-green-600 gap-2">
            <IoMdCheckmark size={24} />
            <p className="font-medium">In stock</p>
          </div>
          <h1 className="font-semibold text-xl mt-2">
            Mens Long Sleeve T-shirt Cotton Base <br />
            Layer Slim Muscle
          </h1>
          {/* Rating - reviews - sold */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center text-rating ">
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStarOutline />
              <p className="ml-1">9.3</p>
            </div>
            <div className="w-2 h-2 bg-dot rounded-full"></div>
            <div className="flex items-center gap-2 text-reviews">
              <MdOutlineMessage size={20} />
              <p className="font-medium">32 reviews</p>
            </div>
            <div className="w-2 h-2 bg-dot rounded-full"></div>
            <div className="flex items-center gap-2 text-reviews">
              <MdOutlineShoppingBasket size={20} />
              <p className="font-medium">154 sold</p>
            </div>{" "}
          </div>
          {/* Pricing Tiers */}
          <div className="my-3">
            <div className="flex bg-box rounded-md overflow-hidden">
              {pcs.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col items-center justify-center px-6 py-3 
                    ${
                      index === 0
                        ? ""
                        : index === 1
                        ? "border-l border-r border-icons/50"
                        : ""
                    }
                  `}
                >
                  <p
                    className={`font-bold text-lg ${
                      index === 0 ? "text-red-600" : ""
                    }`}
                  >
                    {item.price}
                  </p>
                  <p className="text-pcs text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>{" "}
          {/* Description */}
          <div className="mt-4">
            {description.map((desc, index) => (
              <div
                key={index}
                className={`flex items-center py-3 ${
                  index === 0 || index === 3 || index === description.length - 1
                    ? "border-b border-icons/50"
                    : ""
                }`}
              >
                <p className="text-desc w-32">{desc.heading}</p>
                <p className="text-hero-text">{desc.info}</p>
              </div>
            ))}
          </div>
        </div>{" "}
        {/* Right Section Wrapper - to align the card and save for later vertically */}
        <div className="flex flex-col ml-4 mr-6 mt-4">
          {/* Card with seller info */}
          <div className="w-[240px] border border-icons/50 rounded-md p-4">
            {/* Supplier */}
            <div className="flex items-center pb-3 mb-3 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="bg-[#DEFFEE] w-10 h-10 flex items-center justify-center rounded-md text-xl font-semibold text-[#4CA981]">
                  R
                </div>
                <div>
                  <p className="text-sm text-gray-500">Supplier</p>
                  <p className="font-medium">Shawaiz Ishtiaq</p>
                </div>
              </div>
            </div>

            {/* Location and verification */}
            <div className="flex flex-col gap-3 mb-4">
              {right.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  {item.icon}
                  <span className="text-gray-500">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <button className="w-full bg-blue text-white py-2 rounded-md mt-2 font-medium">
              Send inquiry
            </button>
            <button className="w-full bg-white text-blue py-2 rounded-md mt-2 border border-gray-200 font-medium">
              Seller's profile
            </button>
          </div>

          {/* Save for later - outside the card */}
          <div className="flex items-center justify-center gap-2 mt-4 text-blue cursor-pointer">
            <FaRegHeart />
            <span>Save for later</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
