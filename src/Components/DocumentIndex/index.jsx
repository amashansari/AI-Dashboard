import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import IndexSvg from "../../Assets/SVG/database.svg";
import ActiveImg from "../../Assets/SVG/status-updated-svgrepo-com.svg";
import InactiveImg from "../../Assets/SVG/status-failed-svgrepo-com.svg";

const DocumentIndex = () => {
  return (
    <>
      <div className="main-document-index-container p-2">
        <div className="doc-top d-flex justify-content-between align-items-center">
          <div className="doc-text ">Documents Index</div>
          <div className="doc-index-search doc-text">
            <div className="search-session search-index rounded-2">
              <input type="text" placeholder="Search Index" />
              <div>
                <SearchIcon></SearchIcon>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="doc-main">
          <div className="doc doc-index d-flex justify-content-between">
            <div className="doc-index-left d-flex">
              <div className="index-logo">
                <img src={IndexSvg} alt="" />
              </div>
              &gt;
              <div className=" ps-1">#1 document-2</div>
              <span className="fileType">.xls</span>
            </div>
            <div className="doc-index-right">
              <span className="activeIndex activeMuteIndex">
                Active 
              </span>
              <span className=" activeMuteIndex">
                Mute 
              </span>
            </div>
          </div>
          <div className="doc doc-index d-flex justify-content-between">
            <div className="doc-index-left d-flex">
              <div className="index-logo">
                <img src={IndexSvg} alt="" />
              </div>
              &gt;
              <div className=" ps-1">#2 document-3</div>
              <span className="fileType">.xls</span>
            </div>
            <div className="doc-index-right">
              <span className=" activeMuteIndex">
                Active 
              </span>
              <span className="muteIndex activeMuteIndex">
                Mute 
              </span>
            </div>
          </div>
          <div className="doc doc-index d-flex justify-content-between">
            <div className="doc-index-left d-flex">
              <div className="index-logo">
                <img src={IndexSvg} alt="" />
              </div>
              &gt;
              <div className=" ps-1">#3 document-6</div>
              <span className="fileType">.xls</span>
            </div>
            <div className="doc-index-right">
              <span className=" activeMuteIndex">
                Active 
              </span>
              <span className=" activeMuteIndex">
                Mute 
              </span>
            </div>
          </div>
          <div className="doc doc-index d-flex justify-content-between">
            <div className="doc-index-left d-flex">
              <div className="index-logo">
                <img src={IndexSvg} alt="" />
              </div>
              &gt;
              <div className=" ps-1">#4 document-7</div>
              <span className="fileType">.xls</span>
            </div>
            <div className="doc-index-right">
              <span className=" activeMuteIndex">
                Active 
              </span>
              <span className="muteIndex activeMuteIndex">
                Mute 
              </span>
            </div>
          </div>
          <div className="doc doc-index d-flex justify-content-between">
            <div className="doc-index-left d-flex">
              <div className="index-logo">
                <img src={IndexSvg} alt="" />
              </div>
              &gt;
              <div className=" ps-1">#5 document-10</div>
              <span className="fileType">.xls</span>
            </div>
            <div className="doc-index-right">
              <span className="activeIndex activeMuteIndex">
                Active 
              </span>
              <span className=" activeMuteIndex">
                Mute 
              </span>
            </div>
          </div>
          <div className="doc doc-index d-flex justify-content-between">
            <div className="doc-index-left d-flex">
              <div className="index-logo">
                <img src={IndexSvg} alt="" />
              </div>
              &gt;
              <div className=" ps-1">#6 document-11</div>
              <span className="fileType">.xls</span>
            </div>
            <div className="doc-index-right">
              <span className=" activeMuteIndex">
                Active 
              </span>
              <span className=" activeMuteIndex">
                Mute 
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentIndex;
