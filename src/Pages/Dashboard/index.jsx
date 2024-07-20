import React from "react";
import CustomSidebar from "../../Components/Sidebar";
import { Outlet } from "react-router-dom";

const CustomDashboard = () => {
  return (
    <>
      <div className="main-dashboard-container p-3">
        <div className="sidebar">
          <CustomSidebar />
        </div>
        <div className="main-area-container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default CustomDashboard;
