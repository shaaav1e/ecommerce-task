import React, { useState, useEffect } from "react";
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
import { products } from "../../data/productData";

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
  // State to track if we're on mobile view
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile viewport on component mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

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

  if (isMobile) {
    // Mobile layout that matches the image
    return (
      <div className="container px-4 py-3">
        {/* Product Images - Gallery view */}
        <div className="mb-4">
          <img
            src={selectedImage}
            alt="Product"
            className="w-full h-60 object-contain bg-gray-100 rounded-md"
          />
          <div className="flex overflow-x-auto mt-2 gap-2 pb-1">
            {[shirt1, shirt2, shirt3, shirt4, shirt5, shirt6].map(
              (img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  className="flex-shrink-0 focus:outline-none"
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-12 h-12 object-cover border rounded-md ${
                      selectedImage === img
                        ? "border-blue-500 border-2"
                        : "border-gray-200"
                    }`}
                  />
                </button>
              )
            )}
          </div>
        </div>

        {/* Product Info */}
        <div>
          {/* Reviews and Rating */}
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <IoMdStar
                key={i}
                className={i < 4 ? "text-yellow-400" : "text-gray-300"}
                size={16}
              />
            ))}
            <span className="text-sm text-gray-500 ml-1">32 reviews</span>
          </div>

          {/* Product Name */}
          <h1 className="text-lg font-medium mt-2">Product name goes here</h1>
          <p className="text-xl font-bold text-blue-600 mt-1">$129.95</p>

          {/* Description Details */}
          <div className="mt-3">
            <div className="grid grid-cols-2 gap-y-2 text-sm border-t border-b border-gray-200 py-3">
              <div className="text-gray-500">Condition</div>
              <div>Brand new</div>

              <div className="text-gray-500">Material</div>
              <div>Plastic</div>

              <div className="text-gray-500">Category</div>
              <div>Electronics, gadgets</div>

              <div className="text-gray-500">Item num.</div>
              <div>23421</div>
            </div>
          </div>

          {/* Product Description */}
          <div className="mt-3">
            <p className="text-sm text-gray-600">
              Info about edu doll. An ideal companion for preschoolers engaged
              in learning. The drone provides precise and...
            </p>
            <button className="text-blue-600 text-sm mt-1">Read more</button>
          </div>

          {/* Seller Info */}
          <div className="mt-4 flex items-center justify-between border-t border-b border-gray-200 py-3">
            <div className="flex items-center">
              <div className="rounded-full bg-teal-100 text-teal-600 w-8 h-8 flex items-center justify-center font-bold mr-2">
                R
              </div>
              <div>
                <p className="text-sm font-medium">Supplier</p>
                <p className="text-xs text-gray-500">Guanxi Trading LLC</p>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Shipping and Country */}
          <div className="flex justify-between mt-3">
            <div className="flex items-center">
              <img
                src="/flags/germany.png"
                alt="Germany"
                className="w-6 h-6 mr-2"
              />
              <span className="text-sm">Germany</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm mr-1">✓</span>
              <span className="text-sm">Verified</span>
            </div>
            <div className="flex items-center">
              <MdLocalShipping className="text-gray-500 mr-1" />
              <span className="text-sm">Shipping</span>
            </div>
          </div>

          {/* CTA Button */}
          <button className="mt-4 bg-blue-600 text-white w-full py-2 rounded-md text-center">
            Send inquiry
          </button>

          {/* Save / Favorite Button */}
          <div className="mt-3 flex justify-center items-center">
            <FaRegHeart className="text-blue-600 mr-1" />
            <span className="text-blue-600 text-sm">Save</span>
          </div>
        </div>

        {/* Similar Products */}
        <div className="mt-6">
          <h2 className="font-medium mb-3">Similar products</h2>
          <div className="grid grid-cols-3 gap-2">
            {products.slice(0, 3).map((product) => (
              <div
                key={product.id}
                className="border border-gray-200 rounded-md p-2"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-20 object-contain"
                />
                <p className="text-xs mt-1 text-gray-500">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Desktop layout - your existing code
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
        {/* Right Section Wrapper - to align the card vertically */}
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
            </button>{" "}
          </div>
          {/* Save for later - placed under the seller card */}
          <div className="flex items-center justify-center gap-2 mt-4 text-blue cursor-pointer">
            <FaRegHeart />
            <span>Save for later</span>
          </div>{" "}
        </div>
      </div>
      {/* SECTION 2: Main content area with Description + You May Like in a row */}
      <div className="flex mt-8  pt-5">
        {/* Left Side - Description Area */}
        <div className="w-3/4">
          {/* Product Info Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex gap-6 px-6">
              <button className="text-blue border-b-2 border-blue pb-2 font-medium">
                Description
              </button>
              <button className="text-gray-500 pb-2 font-medium">
                Reviews
              </button>
              <button className="text-gray-500 pb-2 font-medium">
                Shipping
              </button>
              <button className="text-gray-500 pb-2 font-medium">
                About seller
              </button>
            </div>
          </div>

          {/* Description Content */}
          <div className="px-6 py-4">
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam.
            </p>
            <p className="text-gray-600 mt-2 leading-relaxed">
              Duis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>

            {/* Specifications */}
            <div className="mt-6">
              <table className="w-full text-sm">
                <tbody>
                  <tr>
                    <td className="py-2 text-gray-500 w-1/3">Model</td>
                    <td className="py-2">AB78GH87</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-500">Style</td>
                    <td className="py-2">Classic style</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-500">Certificate</td>
                    <td className="py-2">ISO-8998212312</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-500">Size</td>
                    <td className="py-2">34mm x 450mm x 19mm</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-500">Memory</td>
                    <td className="py-2">36GB RAM</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Features List */}
            <div className="mt-6">
              <ul className="list-inside space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Some great feature name here
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Lorem ipsum dolor sit amet, consectetur
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Duis aute irure dolor in reprehenderit
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Some great feature name here
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Right Side - You May Like Section */}
        <div className="w-1/4 px-4 pt-0">
          <h2 className="text-xl font-semibold mb-4">You may like</h2>
          <div className="flex flex-col gap-4">
            {products.slice(0, 4).map((product) => (
              <div
                key={product.id}
                className="border border-gray-200 rounded-md p-3 flex flex-col"
              >
                <div className="mb-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-20 object-contain"
                  />
                </div>
                <h3 className="text-xs font-medium">{product.name}</h3>
                <p className="text-gray-500 text-xs mt-1">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            ))}
          </div>{" "}
        </div>
      </div>
      {/* SECTION 3: Related Products Section as a separate section */}
      <div className="mt-8 border-t border-gray-200 pt-5">
        <div className="px-6">
          <h2 className="text-xl font-semibold mb-4">Related products</h2>
          <div className="grid grid-cols-6 gap-4">
            {products.slice(4, 10).map((product) => (
              <div
                key={product.id}
                className="border border-gray-200 rounded-md p-3 flex flex-col"
              >
                <div className="mb-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-24 object-contain"
                  />
                </div>
                <h3 className="text-xs font-medium">{product.name}</h3>
                <p className="text-gray-500 text-xs mt-1">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            ))}
          </div>{" "}
        </div>
      </div>
      {/* Discount */}
      <div className="mt-8">
        <div className="bg-blue-1 text-white rounded-md flex items-center justify-between">
          <div className="flex flex-col px-8 py-6">
            <p className="font-semibold">
              <span className="text-blue-2">Super discount</span>
              <span className="text-white"> on more than </span>
              <span className="text-blue-2">100 USD</span>
            </p>
            <p className="text-white/50">Applicable on all items.</p>
          </div>
          <div className="text-white bg-orange-300 rounded-md mr-3 px-4 py-2">
            <button>Shop Now</button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
