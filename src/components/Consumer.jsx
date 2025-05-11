import React from "react";
import ipad from "/tech/2.jpg";
import electronics from "/electronics.jpg";
import blender from "/interior/8.jpg";
import securitycamera from "/security-camera.png";
import graphiccard from "/graphic-cards.avif";
import watch from "/8.jpg";
import laptop from "/7.jpg";
import camera from "/6.jpg";
import jug from "/10.jpg";
import mobile from "/3.jpg";
const Consumer = () => {
  const items = [
    { image: watch, name: "Smart Watches", text: "From USD 250" },
    { image: camera, name: "Cameras", text: "From USD 380" },
    { image: jug, name: "Electric Kettle", text: "From USD 38" },
    { image: laptop, name: "Laptops", text: "From USD 340" },
    { image: mobile, name: "SmartPhones", text: "From USD 310" },
    { image: securitycamera, name: "Security Camera", text: "From USD 390" },
    { image: graphiccard, name: "Graphic Cards", text: "From USD 1900" },
    { image: ipad, name: "Ipads", text: "From USD 850" },
  ];

  return (
    <div className="mt-4">
      <div className="bg-white container rounded-md border border-gray-200">
        {/* Changed grid-cols-5 to custom grid with fr units */}
        <div className="grid grid-cols-[350px_1fr]">
          {/* Left Column: Consumer - now with fixed width */}
          <div className="relative h-full bg-box-1">
            <img
              src={electronics}
              alt="Mobile"
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute top-6 left-6 z-10">
              <h2 className="text-black text-xl font-semibold">
                Consumer <br /> electronics and <br /> gadgets
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

export default Consumer;
