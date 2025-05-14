import React from "react";
import Topbar from "./components/navbar/Topbar";
import Sidebar from "./components/navbar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex overflow-hidden">
      <Sidebar />

      <div className="flex-1 min-h-screen w-[calc(100%-16rem)] ">
        <Topbar />
        <div className="ml-64 mt-16  h-[calc(100vh-4rem)] overflow-auto ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
