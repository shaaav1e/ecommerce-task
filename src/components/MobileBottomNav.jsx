import React from "react";
import { Link } from "react-router-dom";

const MobileBottomNav = () => {
  const menu_names = [
    {
      name: "All category",
      path: "/",
    },
    {
      name: "Products",
      path: "/products",
    },
    {
      name: "Clothes",
      path: "/",
    },
    {
      name: "Accessories",
      path: "/",
    },
    {
      name: "Help",
      path: "/",
    },
  ];
  return (
    <div className="md:hidden flex overflow-x-auto px-4 py-2 rounded-md text-blue gap-4">
      {/* Mobile Layout */}
      {menu_names.map((menu, index) => (
        <Link
          key={index}
          to={menu.path}
          className="bg-gray-200/60 px-3 py-3 rounded font-light whitespace-nowrap hover:bg-gray-300/80 transition-colors"
        >
          <p>{menu.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default MobileBottomNav;
