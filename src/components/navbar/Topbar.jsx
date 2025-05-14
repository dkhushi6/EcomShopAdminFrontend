import React, { useEffect, useState } from "react";
import { CiBellOn } from "react-icons/ci";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { IoMoonOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { NavLink } from "react-router-dom";

const Topbar = () => {
  const [mood, setMood] = useState(false);
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  useEffect(() => {
    const getName = async () => {
      const admin = JSON.parse(localStorage.getItem("admin"));

      setName(admin.name);
      setImg(admin.adminImg);
    };
    getName();
  }, []);

  return (
    <div className="flex   py-2  left-64 top-0 right-0 h-16 fixed   shadow-md bg-[#24251F] text-[#D2C69E]">
      <div className="flex w-full px-3 justify-end items-center">
        <div className="flex justify-between gap-6 items-center ">
          <div className="hover:text-[#F75D2D]">
            <PiMagnifyingGlassLight className="text-[25px]" />
          </div>
          <div className="hover:text-[#F75D2D]">
            <button onClick={() => setMood(!mood)}>
              {mood ? (
                <IoMoonOutline className="text-[25px]" />
              ) : (
                <GoSun className="text-[25px]" />
              )}
            </button>
          </div>
          <div className="hover:text-[#F75D2D]">
            <CiBellOn className="text-[28px]" />
          </div>
          <div className="flex gap-2">
            <div>
              <img
                src={img}
                alt="pic"
                className="h-[40px] w-[40px] rounded-full border border-[#D2C69E] shadow-md "
              />
            </div>
            <div className="front-light text-[15px]">
              <div>{name}</div>
              <div className="text-[12px]">admin</div>
            </div>
          </div>
          <div className="flex gap-2">
            {" "}
            <NavLink
              to="/login"
              className="text-[18px] font-light hover:text-[#F75D2D] "
            >
              Log-In
            </NavLink>{" "}
            <NavLink
              to="/signup"
              className="text-[18px] font-light hover:text-[#F75D2D] "
            >
              Sign-Up
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
