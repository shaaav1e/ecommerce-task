import React from "react";
import watch from "/8.jpg"; // Corrected import
import laptop from "/7.jpg"; // Corrected import
import camera from "/6.jpg"; // Corrected import
import jug from "/10.jpg"; // Corrected import
import mobile from "/3.jpg"; // Corrected import
const Deals = () => {
  const deals = [
    {
      id: 1,
      number: "04",
      text: "Days",
    },
    {
      id: 2,
      number: "13",
      text: "Hour",
    },
    {
      id: 3,
      number: "34",
      text: "min",
    },
    {
      id: 4,
      number: "56",
      text: "Sec",
    },
  ];
  const items = [
    {
      image: watch,
      name: "Smart watches",
      discount: "-25%",
    },
    {
      image: laptop,
      name: "Laptops",
      discount: "-15%",
    },
    {
      image: camera,
      name: "GoPro cameras",
      discount: "-10%",
    },
    {
      image: jug,
      name: "Water jug",
      discount: "-5%",
    },
    {
      image: mobile,
      name: "Mobile phones",
      discount: "-20%",
    },
  ];
  return (
    <div className="mt-4">
      <div className="bg-white container rounded-md border-1 border-gray-200 px-6 py-4">
        <div className="grid grid-cols-6">
          {/* Col 1 - Left Side - Deals and offers */}
          <div className="flex flex-col">
            <h2 className="text-black text-lg font-bold">Deals and offers</h2>
            <p className="text-sm text-icons">Tech equipments</p>
            <div className="mt-4 flex items-center gap-2">
              {deals.map((deal, i) => (
                <div
                  key={deal.id}
                  className="flex flex-col items-center bg-gray rounded-md text-white px-3 py-2"
                >
                  <p className="font-bold">{deal.number}</p>
                  <p className="text-sm">{deal.text}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Col 2-6 */}
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 px-2 py-2"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-42 h-48 object-contain mb-1"
              />

              <p className="font-light text-lg text-center leading-6">
                {item.name}
              </p>
              <p className="text-sm text-red bg-red-border rounded-full px-3 py-2 font-semibold">
                {item.discount}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deals;
