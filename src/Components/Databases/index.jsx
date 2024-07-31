import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PowerOffOutlinedIcon from "@mui/icons-material/PowerOffOutlined";
import PowerOutlinedIcon from "@mui/icons-material/PowerOutlined";
import DatabaseLogo from "../../Assets/SVG/database.svg";

const CustomDatabases = () => {
  return (
    <>
      <div className="main-database-container p-2">
        <div className="doc-top d-flex justify-content-between align-items-center">
          <div className="doc-text ">Database's</div>
          <div className="doc-index-search doc-text">
            <div className="search-session search-index rounded-2">
              <input type="text" placeholder="Search Database's" />
              <div>
                <SearchIcon></SearchIcon>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="database-bottom">
          <div className="database-info d-flex justify-content-between">
            <div className="database-detail d-flex align-items-center gap-1">
              <div className="database-detail-img">
                <img src={DatabaseLogo} alt="" />
              </div>
              <div className="database-name">Database #1</div>
            </div>
            <div className="database-state d-flex">
              <div className="database-status database-state-connect">
                <PowerOutlinedIcon />
              </div>
              <div className="database-status ">
                <PowerOffOutlinedIcon />
              </div>
            </div>
          </div>
          <div className="database-info d-flex justify-content-between">
            <div className="database-detail d-flex align-items-center gap-1">
              <div className="database-detail-img">
                <img src={DatabaseLogo} alt="" />
              </div>
              <div className="database-name">Database #2</div>
            </div>
            <div className="database-state d-flex">
              <div className="database-status ">
                <PowerOutlinedIcon />
              </div>
              <div className="database-status database-state-disconnect">
                <PowerOffOutlinedIcon />
              </div>
            </div>
          </div>
          <div className="database-info d-flex justify-content-between">
            <div className="database-detail d-flex align-items-center gap-1">
              <div className="database-detail-img">
                <img src={DatabaseLogo} alt="" />
              </div>
              <div className="database-name">Database #3</div>
            </div>
            <div className="database-state d-flex">
              <div className="database-status database-state-connect">
                <PowerOutlinedIcon />
              </div>
              <div className="database-status ">
                <PowerOffOutlinedIcon />
              </div>
            </div>
          </div>
          <div className="database-info d-flex justify-content-between">
            <div className="database-detail d-flex align-items-center gap-1">
              <div className="database-detail-img">
                <img src={DatabaseLogo} alt="" />
              </div>
              <div className="database-name">Database #4</div>
            </div>
            <div className="database-state d-flex">
              <div className="database-status">
                <PowerOutlinedIcon />
              </div>
              <div className="database-status database-state-disconnect">
                <PowerOffOutlinedIcon />
              </div>
            </div>
          </div>
          <div className="database-info d-flex justify-content-between">
            <div className="database-detail d-flex align-items-center gap-1">
              <div className="database-detail-img">
                <img src={DatabaseLogo} alt="" />
              </div>
              <div className="database-name">Database #5</div>
            </div>
            <div className="database-state d-flex">
              <div className="database-status">
                <PowerOutlinedIcon />
              </div>
              <div className="database-status database-state-disconnect">
                <PowerOffOutlinedIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomDatabases;
