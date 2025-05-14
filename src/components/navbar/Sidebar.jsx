import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { LuChartNoAxesColumnIncreasing } from "react-icons/lu";
import {
  CiDeliveryTruck,
  CiCircleChevDown,
  CiCircleChevUp,
} from "react-icons/ci";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState({
    product: false,
    order: false,
    customers: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenu((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <div className="fixed w-64 top-0 left-0 h-full  bg-[#24251F] text-[#D2C69E] border-b border-[#EEEEEE] shadow-md">
      <div className="text-[30px] font-semibold h-16 flex justify-center border items-center">
        S H O P
      </div>
      <div className="px-6">
        <div className="flex items-center gap-2 mb-4 hover:text-[#F75D2D] pt-10">
          <LuChartNoAxesColumnIncreasing className="text-[20px]" />
          <NavLink to="/" className="text-[18px] font-light ">
            Dashboard
          </NavLink>
        </div>

        <div className="mb-4">
          <button
            onClick={() => toggleMenu("product")}
            className=" flex items-center justify-between  w-full text-left text-[18px] font-light hover:text-[#F75D2D]"
          >
            <div className="flex items-center gap-2 ">
              <div>
                <CiDeliveryTruck className="text-[20px]" />
              </div>
              <div>Product</div>
            </div>

            <div className="text-[18px]">
              {openMenu.product ? <CiCircleChevDown /> : <CiCircleChevUp />}
            </div>
          </button>

          {openMenu.product && (
            <ul className="ml-6 list-none space-y-1 mt-2 font-light text-[16px] ">
              <li className="hover:text-[#F75D2D]">
                {" "}
                <NavLink to="/product/list">List</NavLink>
              </li>
              <li className="hover:text-[#F75D2D]">
                {" "}
                <NavLink to="/product/grid">Grid</NavLink>
              </li>
              <li className="hover:text-[#F75D2D]">
                {" "}
                <NavLink to="/product/edit">Edit</NavLink>
              </li>
              <li className="hover:text-[#F75D2D]">
                {" "}
                <NavLink to="/product/create">Create</NavLink>
              </li>
            </ul>
          )}
        </div>

        <div className="mb-4 text-[18px] font-light hover:text-[#F75D2D]">
          Orders
        </div>
        <div className="mb-4">
          <button
            onClick={() => toggleMenu("customers")}
            className=" flex items-center justify-between  w-full text-left text-[18px] font-light hover:text-[#F75D2D]"
          >
            <div className="flex items-center gap-2 ">
              <div>
                <CiDeliveryTruck className="text-[20px]" />
              </div>
              <div>Customer</div>
            </div>

            <div className="text-[18px]">
              {openMenu.customers ? <CiCircleChevDown /> : <CiCircleChevUp />}
            </div>
          </button>

          {openMenu.customers && (
            <ul className="ml-6 list-none space-y-1 mt-2 font-light text-[16px] ">
              <li className="hover:text-[#F75D2D]">
                {" "}
                <NavLink to="/user/list">List</NavLink>
              </li>
              <li className="hover:text-[#F75D2D]">
                {" "}
                <NavLink to="/user/grid">Grid</NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
