import React from "react";
import CustomSidebar from "../../Components/Sidebar";
import { Outlet } from "react-router-dom";

const CustomDashboard = () => {
  return (
    <>
      <div className="main-dashboard-container">
        <div className="sidebar">
          <CustomSidebar />
        </div>
        <div className="main-area-container rounded-3">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default CustomDashboard;
