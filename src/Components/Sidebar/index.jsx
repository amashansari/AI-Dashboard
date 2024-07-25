import React from "react";
import MainLogo from "../../Assets/SVG/chatgpt-icon.svg";
import LogoImg1 from "../../Assets/SVG/code-editor.svg";
import LogoImg2 from "../../Assets/SVG/bug.svg";
import LogoImg3 from "../../Assets/SVG/database.svg";
import LogoImg4 from "../../Assets/SVG/source-control.svg";
import LogoImg5 from "../../Assets/SVG/settings.svg";
import LogoImg6 from "../../Assets/SVG/logout.svg";
import LogoImg7 from "../../Assets/PNG/profile.png";
import { Avatar } from "@mui/material";

const CustomSidebar = () => {
  return (
    <>
      <div className="main-sidebar-container d-flex flex-column justify-content-between align-items-center rounded-3">
        <div className="sidebar-top pt-2 d-flex flex-column align-items-center">
          <div className="main-logo">
            <img src={MainLogo} alt="" />
          </div>

          <div className="sidebar-logo">
            <img src={LogoImg1} alt="" />
          </div>
          <div className="sidebar-logo active">
            <img src={LogoImg2} alt="" />
          </div>
          <div className="sidebar-logo">
            <img src={LogoImg3} alt="" />
          </div>
          <div className="sidebar-logo">
            <img src={LogoImg4} alt="" />
          </div>
          <div className="sidebar-logo">
            <img src={LogoImg5} alt="" />
          </div>
          <div className="sidebar-logo">
            <img src={LogoImg1} alt="" />
          </div>
        </div>
        <div className="sidebar-bottom">
          <div className="sidebar-logo">
            <img src={LogoImg5} alt="" />
          </div>
          <div className="sidebar-logo">
            <img src={LogoImg6} alt="" />
          </div>
          <div className="logo-profile">
            <Avatar className="custom-side-profile">AA</Avatar>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomSidebar;
