import React from "react";
// Flag images
import australia from "/flags/australia.png";
import china from "/flags/china.png";
import france from "/flags/france.png";
import germany from "/flags/germany.png";
import dubai from "/flags/dubai.png";
import italy from "/flags/itlay.png";
import russia from "/flags/russia.png";
import scotland from "/flags/scotland.png";
import usa from "/flags/usa.png";
import england from "/flags/england.png";

const Suppliers = () => {
  const flags = [
    {
      image: dubai,
      name: "Arabic Emirates",
      text: "shopname.ae",
    },
    {
      image: australia,
      name: "Australia",
      text: "shopname.com.au",
    },
    {
      image: china,
      name: "China",
      text: "shopname.com.cn",
    },
    {
      image: france,
      name: "France",
      text: "shopname.com.fr",
    },
    {
      image: germany,
      name: "Germany",
      text: "shopname.com.gr",
    },
    {
      image: italy,
      name: "Italy",
      text: "shopname.com.it",
    },
    {
      image: russia,
      name: "Russia",
      text: "shopname.com.ru",
    },
    {
      image: scotland,
      name: "Scotland",
      text: "shopname.com.scot",
    },
    {
      image: usa,
      name: "USA",
      text: "shopname.com.us",
    },
    {
      image: england,
      name: "England",
      text: "shopname.co.uk",
    },
  ];
  return (
    <div className="mt-6">
      <div className="container px-4 md:px-0">
        <h1 className="text-black font-semibold text-xl md:text-2xl">
          Suppliers by region
        </h1>

        {/* Mobile view - horizontal scrollable list */}
        <div className="md:hidden mt-4">
          <div className="overflow-x-auto pb-4 scrollbar-thin">
            <div className="flex gap-4 py-2">
              {flags.map((flag, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-white rounded-md p-3 border border-gray-200/60 shadow-sm"
                >
                  <div className="flex items-center gap-3 w-48">
                    <img
                      src={flag.image}
                      alt={flag.name}
                      className="w-10 h-10 object-contain"
                    />
                    <div className="flex flex-col">
                      <p className="font-medium text-sm">{flag.name}</p>
                      <p className="text-xs text-desc">{flag.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop view - grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
          {flags.map((flag, index) => (
            <div
              key={index}
              className="text-black hover:bg-gray-50 p-2 rounded-md transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                <img
                  src={flag.image}
                  alt={flag.name}
                  className="w-10 h-10 object-contain"
                />
                <div className="flex flex-col">
                  <p className="font-light">{flag.name}</p>
                  <p className="text-sm text-desc">{flag.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Suppliers;
