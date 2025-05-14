import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    const getItem = () => {
      const adminString = localStorage.getItem("admin");
      if (adminString) {
        const admin = JSON.parse(adminString);
        setName(admin.name);
      }
    };
    getItem();
  }, []);

  return (
    <div className="text-[40px]  bg-[#24251F] text-[#D2C69E] h-screen px-10 ">
      <div className="text-[20px] pt-10">/ecomShop</div>
      <div className="text-[25px] pt-5 ">Welcome {name} !</div>
      <div className="flex flex-wrap text-[40px] font-bold w-[700px] pt-5 ">
        A smarter, centralized dashboard built for eCommerce admins who want
        real-time control, seamless updates, and powerful analytics in one place{" "}
      </div>
    </div>
  );
};

export default Dashboard;
