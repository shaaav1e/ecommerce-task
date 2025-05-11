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
    { image: lamp, name: "Sofa & chair", text: "From USD 19" },
    { image: mattress, name: "Kitchen dishes", text: "From USD 19" },
    { image: wood, name: "Smart watches", text: "From USD 19" },
    { image: mixer, name: "Kitchen mixer", text: "From USD 100" },
    { image: blender, name: "Blenders", text: "From USD 39" },
    { image: appliance, name: "Home appliance", text: "From USD 19" },
    { image: decoration, name: "Coffee maker", text: "From USD 10" },
  ];

  return (
    <div className="mt-4">
      <div className="bg-white container rounded-md border border-gray-200">
        {/* Changed grid-cols-5 to custom grid with fr units */}
        <div className="grid grid-cols-[350px_1fr]">
          {/* Left Column: Home and Outdoor - now with fixed width */}
          <div className="relative h-full bg-box-1">
            <img
              src={plant}
              alt="Plant"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 left-6 z-10">
              <h2 className="text-black text-xl font-semibold">
                Home and <br /> outdoor
              </h2>
              <button className="bg-white mt-4 px-4 py-2 rounded-md">
                Source now
              </button>
            </div>
          </div>

          {/* Right Columns: Product Grid */}
          <div className="grid grid-cols-4">
            {items.map((item, index) => {
              // Calculate row and column position
              const row = Math.floor(index / 4);
              const col = index % 4;

              return (
                <div
                  key={index}
                  className={`h-full flex flex-col justify-between px-4 py-4
                    ${col > 0 ? "border-l border-gray-200" : ""}
                    ${row > 0 ? "border-t border-gray-200" : ""}`}
                >
                  <div>
                    <p className="font-medium text-base">{item.name}</p>
                    <p className="text-sm text-icons">{item.text}</p>
                  </div>

                  <div className="flex justify-end mt-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outdoor;
