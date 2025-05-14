import React from "react";
import AllProductGrid from "./AllProductGrid";
import { NavLink } from "react-router-dom";

const Grid = () => {
  return (
    <div className="min-h-screen">
      <div className="flex justify-between items-center px-6 py-4 pt-6 ">
        <h1 className="text-[40px] font-bold text-[#24251F] ">
          Product Grid View
        </h1>
        <NavLink
          to="/product/create"
          className="px-5 py-3  bg-orange-500 text-white rounded-lg transition duration-300 
             hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 hover:shadow-orange-500/50 hover:shadow-md cursor-pointer hover:scale-105"
        >
          + New Product
        </NavLink>
      </div>

      <div className=" px-6  ">
        <AllProductGrid />
      </div>
    </div>
  );
};

export default Grid;
