import React, { useState } from "react";
import FileExplorer from "../../Components/Tree-View";
import Logo1 from "../../Assets/SVG/code-editor.svg";
import Logo2 from "../../Assets/SVG/source-control.svg";
import CustomSessions from "../../Components/Sessions";
import CustomAIComp from "../../Components/AI-Components";
import CustomDatabases from "../../Components/Databases";
import SearchIcon from "@mui/icons-material/Search";
import ProductsPage from "../../Components/AI-Components";

const CustomPageLayout = () => {
  const [openSearchSession, setOpenSearchSession] = useState("")
  return (
    <>
      <div className="main-page-layout-container">
        <div className="layout-top-section d-flex">
          <div className="top-left-section rounded-2 p-3 overflow-y-auto">
            <div className="tree-section-top d-flex justify-content-between">
              <span>Code Transform</span>
              <SearchIcon></SearchIcon>
            </div>
              <hr />
            <div className="tree-view">
              <FileExplorer />
            </div>
          </div>
          <div className="top-right-section">
            <div className="right-section-head rounded-2 d-flex justify-content-between">
              <div className="name-div">
                <div className="name-div-top d-flex align-items-center gap-3">
                  <div className="name">Project Name</div>
                  <span className="config-flow rounded-1">
                    Under Development
                  </span>
                </div>
                <div className="name-div-bottom">
                  Now you are using the beta version of kayoo
                </div>
              </div>
              <div className="view-div d-flex align-items-center gap-2 rounded-3">
                <div className="view-img">
                  <img src={Logo1} alt="" />
                </div>
                <div className="view-text-img d-flex align-items-center rounded-3 gap-2">
                  <div className="text-img">
                    <img src={Logo2} alt="" />
                  </div>
                  <div className="text">
                    <span> Flow View</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-section-bottom rounded-2">
              <CustomSessions />
            </div>
          </div>
        </div>
        <div className="layout-bottom-section rounded-2">
          <div className="bottom-section-left rounded-2">
            {/* <CustomAIComp /> */}
            <ProductsPage />
          </div>
          <div className="bottom-section-right rounded-2">
            <CustomDatabases />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomPageLayout;
