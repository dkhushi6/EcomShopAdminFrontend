import React from "react";
import AllProductList from "./AllProductList";
import { NavLink } from "react-router-dom";

const List = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex justify-between items-center p-6">
        <div className=" font-bold text-[#24251F] text-[40px] ">
          Product List View
        </div>
        <NavLink
          to="/product/create"
          className="px-5 py-3  bg-orange-500 text-white rounded-lg transition duration-300 
         hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 hover:shadow-orange-500/50 hover:shadow-md cursor-pointer hover:scale-105"
        >
          + New Product
        </NavLink>
      </div>

      <div className="rounded-lg  px-6  shadow-lg">
        <AllProductList />
      </div>
    </div>
  );
};

export default List;
