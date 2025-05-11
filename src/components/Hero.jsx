import React from "react";

const Hero = () => {
  const categories = [
    {
      name: "Automobiles",
    },
    {
      name: "Clothes and wear",
    },
    {
      name: "Home interiors",
    },
    {
      name: "Compuer and tech",
    },
    {
      name: "Tools, equipments",
    },
    {
      name: "Sports and outdoor",
    },
    {
      name: "Food items",
    },
    {
      name: "Machinery tools",
    },
    {
      name: "More category",
    },
  ];
  return (
    <div className="mt-2">
      <div className="bg-white container grid grid-cols-3 grid-rows-3 gap-4 rounded-md border-1 border-icons">
        {/* Left side - Col 1 */}
        <div className="flex flex-col gap-2 px-6 py-4 ">
          {categories.map((category, i) => (
            <div
              key={i}
              className="hover:text-black hover:bg-hover hover:rounded-md hover:py-2 hover:px-2 cursor-pointer"
            >
              <p className="text-hero-text">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
