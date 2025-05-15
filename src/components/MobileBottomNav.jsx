import React from "react";

const MobileBottomNav = () => {
  const menu_names = [
    {
      name: "All category",
    },
    {
      name: "Gadgets",
    },
    {
      name: "Clothes",
    },
    {
      name: "Accessories",
    },
    {
      name: "Help",
    },
  ];
  return (
    <div className="md:hidden flex overflow-x-auto px-4 py-2 rounded-md text-blue gap-4">
      {/* Mobile Layout */}
      {menu_names.map((menu, index) => (
        <div
          key={index}
          className="bg-gray-200/60 px-3 py-3 rounded font-light whitespace-nowrap"
        >
          <p>{menu.name}</p>
        </div>
      ))}
    </div>
  );
};

export default MobileBottomNav;
