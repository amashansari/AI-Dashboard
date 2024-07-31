import React, { useState } from "react";
import FileExplorer from "../../Components/Tree-View";
import Logo1 from "../../Assets/SVG/more-horizontal-svgrepo-com.svg";
import Logo2 from "../../Assets/SVG/source-control.svg";
import CustomSessions from "../../Components/Sessions";
// import CustomAIComp from "../../Components/AI-Components";
import CustomDatabases from "../../Components/Databases";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import DocumentsProcess from "../../Components/DocumentsProcess";
import DocumentIndex from "../../Components/DocumentIndex";
import { useDispatch, useSelector } from "react-redux";
import {
  expandDiv,
  toggleAiChat,
  toggleRefDoc,
  toggleSession,
} from "../../ReduxManager/action";
import CustomChatRef from "../../Components/ChatAiRef";
import CustomSessionsDetail from "../../Components/SessionDetail";

const CustomPageLayout = () => {
  const sessionToggle = useSelector((state) => state.sessionShow);
  const aiChatToggle = useSelector((state) => state.aiChat);
  const docRef = useSelector((state) => state.refDoc);
  const sessionDetail = useSelector((state) => state.sessDetail);
  const expandDocumentDiv = useSelector((state) => state.divExpand);

  const [refDocToggle, setRefDocToggle] = useState(false);
  const [changeSessionState, setChangeSessionState] = useState(false);

  const dispatch = useDispatch();

  const handleSessionClose = () => {
    dispatch(toggleSession(sessionToggle));
  };

  const handleChatClose = () => {
    dispatch(toggleAiChat(aiChatToggle));
  };

  const handleRefDoc = () => {
    setRefDocToggle(!refDocToggle);
    dispatch(toggleRefDoc(refDocToggle));
  };

  const toggleChangeState = () => {
    setChangeSessionState(!changeSessionState);
  };

 
  return (
    <div className="main-page-layout-container">
      <div className="layout-top-section d-flex">
        <div className="top-left-section rounded-2 overflow-y-auto">
          <div className="folder-section p-2">
            <div className="tree-section-top d-flex justify-content-between">
              <span>Code Transform</span>
              <SearchIcon />
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
            <div className="add-session-inputs">
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
        </div>
        <div className="top-right-section">
          <div className="right-section-head rounded-2 d-flex justify-content-between">
            <div className="name-div">
              <div className="name-div-top d-flex align-items-center gap-3">
                <div className="name">Session Name</div>
                <span className="config-flow rounded-1">Under Development</span>
              </div>
              <div className="name-div-bottom">
                Now you are using the beta version of kayoo
              </div>
            </div>
            <div className="session-state-control">
              <div className="view-div d-flex align-items-center gap-2 rounded-3 ">
                <div className="view-img" onClick={toggleChangeState}>
                  <img src={Logo1} alt="" />
                </div>
                <div className="view-text-img d-flex align-items-center rounded-3 gap-2">
                  <div className="text-img">
                    <img src={Logo2} alt="" />
                  </div>
                  <div className="text">
                    <span>Session State</span>
                  </div>
                </div>
              </div>
              <div
                className={`change-state-option ${
                  changeSessionState === true ? "show-change-state-option" : ""
                }`}
              >
                <div>Publish</div>
                <div>Freeze</div>
                <div>Promote</div>
                <div>Share</div>
              </div>
            </div>
          </div>
          <div className="right-section-bottom rounded-2">
            <CustomSessions />
          </div>
        </div>
      </div>
      <div className="layout-bottom-section rounded-2">
        <div className={`bottom-section-left rounded-2 ${expandDocumentDiv === true ? "bottom-section-left-expand" : ""}`} >
          <DocumentsProcess />
        </div>
        <div className="bottom-section-mid rounded-2">
          <DocumentIndex />
        </div>
        <div className="bottom-section-right rounded-2">
          <CustomDatabases />
        </div>
      </div>
      <div
        className={`ai-chat d-flex flex-column justify-content-between p-2 rounded-2 ${
          aiChatToggle === true ? "showAiChat" : ""
        }`}
      >
        <div className="ai-chat-top">
          <div className="ai-chat-text d-flex gap-1">
            <span className="aichatclose" onClick={handleChatClose}>
              &lt;
            </span>
            <span>AI CHAT</span>
          </div>
          <hr />
        </div>
        <div className="ai-chat-mid p-2 rounded-2">
          <div className="chat-1">
            <div className="chat-right-container text-end">
              <div className="chat-right rounded-1">Text to image</div>
            </div>
            <div className="chat-left">
              <div className="chat-left-cont rounded-1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
                voluptate ratione fuga dignissimos assumenda placeat temporibus
                beatae.
                <span className="ref-name ref-underline" onClick={handleRefDoc}>
                  Reference from document
                </span>
              </div>
            </div>
          </div>
          <div className="ai-chat-input">
            <div className="search-session ai-chat-search search-index rounded-2">
              <input type="text" placeholder="Chat With AI.." />
              <div className="send-chat-btn">
                <SendIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`chatbot-doc-reference rounded-2 p-2 ${
          docRef === true ? "chatbot-doc-reference-show" : ""
        }`}
      >
        <CustomChatRef />
      </div>
      <div
        className={`session-detail rounded-2 p-2 ${
          sessionDetail === true ? "session-detail-show" : ""
        }`}
      >
        <CustomSessionsDetail />
      </div>
    </div>
  );
};

export default CustomPageLayout;
