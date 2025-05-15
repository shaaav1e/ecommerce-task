import React from "react";
import image1 from "/cloth/1.jpg";
import image2 from "/cloth/2.jpg";
import image3 from "/cloth/3.jpg";
import image5 from "/cloth/5.jpg";
import image6 from "/cloth/6.jpg";

const Recommended = () => {
  // Array of clothing objects with image, price and description
  const clothItems = [
    {
      id: 1,
      image: image1,
      price: "$10.30",
      text: "T-shirt with multiple colors, for men",
    },
    {
      id: 2,
      image: image2,
      price: "$12.50",
      text: "Jeans shorts for men blue color",
    },
    {
      id: 3,
      image: image3,
      price: "$15.99",
      text: "Brown winter coat medium size",
    },
    {
      id: 4,
      image: image3,
      price: "$8.30",
      text: "Brown winter coat medium size",
    },
    { id: 5, image: image5, price: "$22.10", text: "Leather wallet for men" },
    {
      id: 6,
      image: image6,
      price: "$18.75",
      text: "Canon camera black, 100x zoom",
    },
    {
      id: 7,
      image: image6,
      price: "$9.99",
      text: "Canon camera black, 100x zoom",
    },
    {
      id: 1,
      image: image1,
      price: "$10.30",
      text: "Casual t-shirt for everyday wear",
    },
    {
      id: 2,
      image: image2,
      price: "$12.50",
      text: "Summer shorts comfortable fit",
    },
    { id: 3, image: image3, price: "$15.99", text: "Winter jacket waterproof" },
  ];

  return (
    <div className="mt-6">
      <div className="container px-4 py-2 md:px-0 md:py-0">
        <h1 className="text-black font-semibold text-2xl">Recommended items</h1>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-4">
          {clothItems.map((item, index) => (
            <div
              key={index}
              className="border-1 border-gray-200 rounded-md bg-white"
            >
              <div className="flex flex-col">
                <div className="flex justify-center items-center p-4">
                  <img
                    src={item.image}
                    alt={`Cloth item ${index + 1}`}
                    className="h-32 object-contain"
                  />
                </div>
                <div className="px-3 pb-3">
                  <p className="text-black font-semibold">{item.price}</p>
                  <p className="text-sm text-[color:var(--color-desc)]">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommended;
