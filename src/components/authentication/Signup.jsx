import React, { useState } from "react";
import gIcon from "../../assets/googleicon.png";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [phoneNumber, setPhoneNo] = useState("");
  const [adminImg, setImg] = useState("");
  const [adminUsername, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    const res = await axios.post("http://localhost:4010/admin/signup", {
      name,
      email,
      password,
      phoneNumber,
      adminImg,
      adminUsername,
    });
    console.log(res.data);
    if (res.data.message === "Admin created successfully !!") {
      navigate("/login");
    } else {
      alert(res.data.message);
    }
  };

  return (
    <div className="flex justify-center pt-3 text-[#24251F] ">
      <div className="py-5 w-[500px]  border border-[#D2C69E] rounded-lg shadow-md ">
        <div className="flex justify-center text-2xl font-semibold text-[#24251F]">
          Sign-up
        </div>
        <div className="p-2 flex justify-center gap-3">
          <div className="">
            <input
              type="text"
              placeholder="create username"
              className=" px-3 py-2   rounded-lg bg-[#f3eedd] focus:bg-white border border-[#D2C69E]  outline-none w-[200px]  "
              value={adminUsername}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="">
            <input
              type="text"
              placeholder="enter full name"
              className=" px-3 py-2   rounded-lg bg-[#f3eedd] focus:bg-white border border-[#D2C69E]  outline-none w-[200px]  "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="p-2 flex justify-center">
          <input
            type="text"
            placeholder="enter email"
            className=" px-3 py-2   rounded-lg bg-[#f3eedd] focus:bg-white border border-[#D2C69E]  outline-none w-[410px]  "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="p-2 flex justify-center">
          <input
            type="text"
            placeholder="enter phonenumber"
            className=" px-3 py-2   rounded-lg bg-[#f3eedd] focus:bg-white border border-[#D2C69E]  outline-none w-[410px]  "
            value={phoneNumber}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
        </div>
        <div className="p-2 flex justify-center">
          <input
            type="text"
            placeholder="enter your image url"
            className=" px-3 py-2   rounded-lg bg-[#f3eedd] focus:bg-white border border-[#D2C69E]  outline-none w-[410px]  "
            value={adminImg}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
        <div className="p-2 flex justify-center">
          <input
            type="text"
            placeholder="password"
            className=" px-3 py-2   rounded-lg bg-[#f3eedd] focus:bg-white border border-[#D2C69E]  outline-none w-[410px] "
            value={password}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <div className="p-2 flex justify-center">
          <button
            className=" px-3 py-2 rounded-lg bg-orange-500 text-white   transition duration-300 
             hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 hover:shadow-orange-500/50 hover:shadow-md cursor-pointer hover:scale-105 w-[410px] "
            onClick={handleSignup}
          >
            Sign-Up{" "}
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 ">
          <div className="w-[160px] border h-0  " />
          <div>or</div>
          <div className="w-[160px] border h-0" />
        </div>
        <div className="flex justify-center py-2">
          {" "}
          <div className="flex items-center gap-3 px-3 py-2  rounded-lg hover:bg-[#f3eedd] w-[410px] border border-[#D2C69E] justify-center text-[#24251F]">
            <img src={gIcon} alt="pic" className="h-5 w-5" />
            <div>Signin with Google</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
