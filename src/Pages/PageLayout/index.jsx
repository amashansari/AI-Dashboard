import React from "react";
import FileExplorer from "../../Components/Tree-View";

const CustomPageLayout = () => {
  return (
    <>
      <div className="main-page-layout-container">
        <div className="layout-top-section d-flex">
          <div className="top-left-section rounded-2 p-3 overflow-y-auto">
            <FileExplorer />
          </div>
          <div className="top-right-section">
            <div className="right-section-head rounded-2"></div>
            <div className="right-section-bottom rounded-2"></div>
          </div>
        </div>
        <div className="layout-bottom-section rounded-2"></div>
      </div>
    </>
  );
};

export default CustomPageLayout;
