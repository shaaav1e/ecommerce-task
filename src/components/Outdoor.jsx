import React from "react";
import plant from "/image92.png";
import softchair from "/interior/1.jpg";
import lamp from "/interior/6.jpg";
import mattress from "/interior/5.jpg";
import wood from "/interior/3.jpg";
import mixer from "/interior/9.jpg";
import blender from "/interior/8.jpg";
import appliance from "/interior/7.jpg";
import decoration from "/interior/4.jpg";

const Outdoor = () => {
  const items = [
    { image: softchair, name: "Soft chairs", text: "From USD 19" },
    { image: lamp, name: "Lamps", text: "From USD 22" },
    { image: mattress, name: "Mattress", text: "From USD 25" },
    { image: wood, name: "Wooden Jug", text: "From USD 28" },
    { image: mixer, name: "Kitchen Mixer", text: "From USD 100" },
    { image: blender, name: "Blenders", text: "From USD 39" },
    { image: appliance, name: "Home appliance", text: "From USD 18" },
    { image: decoration, name: "Decoration", text: "From USD 10" },
  ];

  return (
    <div className="mt-4">
      <div className="bg-white container rounded-md border border-gray-200 ">
        <div className="grid grid-cols-5 gap-4">
          {/* Left Column: Home and Outdoor */}
          <div className="relative col-span-1 rounded-md overflow-hidden">
            <img
              src={plant}
              alt="Plant"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-5 left-6 z-10">
              <h2 className="text-black text-xl font-semibold">
                Home and <br /> outdoor
              </h2>
              <button className="bg-white mt-4 px-4 py-3 rounded-md text-lg ">
                Source now
              </button>
            </div>
          </div>

          {/* Right Columns: Product Grid */}
          <div className="col-span-4 ml-10 grid grid-cols-4 gap-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="h-full border-l border-b border-gray-200 flex flex-col  gap-2 px-2 py-4"
              >
                <p>{item.name}</p>
                <p>{item.text}</p>

                <div className="flex flex-end">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-contain "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outdoor;
