import React from "react";
import FileExplorer from "../../Components/Tree-View";
import Logo1 from "../../Assets/SVG/code-editor.svg";
import Logo2 from "../../Assets/SVG/source-control.svg";
import CustomSessions from "../../Components/Sessions";
// import CustomAIComp from "../../Components/AI-Components";
// import CustomDatabases from "../../Components/Databases";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
// import ProductsPage from "../../Components/AI-Components";
import DocumentsProcess from "../../Components/DocumentsProcess";
import DocumentIndex from "../../Components/DocumentIndex";
import { useDispatch, useSelector } from "react-redux";
import { toggleSession } from "../../ReduxManager/action";

const CustomPageLayout = () => {
  const sessionToggle = useSelector((state) => state.sessionShow);
  const aiChatToggle = useSelector((state) => state.aiChat);

  const dispatch = useDispatch();

  const handleSessionClose = () => {
    dispatch(toggleSession(false));
  };
  
  return (
    <>
      <div className="main-page-layout-container">
        <div className="layout-top-section d-flex">
          <div className="top-left-section rounded-2  overflow-y-auto">
            <div className="folder-section p-2">
              <div className="tree-section-top d-flex justify-content-between">
                <span>Code Transform</span>
                <SearchIcon></SearchIcon>
              </div>
              <hr />
              <div className="tree-view">
                <FileExplorer />
              </div>
            </div>
            <div
              className={`add-session-card p-2 ${
                sessionToggle === true ? "showSession" : ""
              }`}
            >
              <div className="add-session-text d-flex gap-1">
                <span onClick={handleSessionClose}>&lt;</span>
                <span>Add New Session's</span>
              </div>
              <hr />
              <div className="add-session-inputs ">
                <div className="search-session search-index create-session-inputs rounded-2">
                  <input type="text" placeholder="Session Name" />
                </div>
                <div className="search-session search-index create-session-inputs rounded-2">
                  <input type="text" placeholder="Session Description" />
                </div>
                <div className="search-session search-index create-session-inputs rounded-2">
                  <input type="text" placeholder="Session Searchable tags" />
                </div>
              </div>
            </div>
            <div
              className={`ai-chat d-flex flex-column justify-content-between p-2 rounded-2 ${
                aiChatToggle === true ? "showAiChat" : ""
              }`}
            >
              <div className="ai-chat-top">
                <div className="ai-chat-text d-flex gap-1">
                  <span > &lt; </span> <span>AI CHAT</span>
                </div>
                <hr />
              </div>
              <div className="ai-chat-mid rounded-2"></div>
              <div className="ai-chat-input">
                <div className="search-session ai-chat-search search-index rounded-2">
                  <input type="text" placeholder="Ask AI.." />
                  <div className="send-chat-btn">
                    <SendIcon></SendIcon>
                  </div>
                </div>
              </div>
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
            {/* <ProductsPage /> */}
            <DocumentsProcess />
          </div>
          <div className="bottom-section-right rounded-2">
            {/* <CustomDatabases /> */}
            <DocumentIndex />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomPageLayout;
