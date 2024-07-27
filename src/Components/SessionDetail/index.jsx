import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sessionDetail } from "../../ReduxManager/action";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import ActiveImg from "../../Assets/SVG/status-updated-svgrepo-com.svg";
import InactiveImg from "../../Assets/SVG/status-failed-svgrepo-com.svg";
import databaseLogo from "../../Assets/SVG/database.svg";

const CustomSessionsDetail = () => {
  const sessiondetail = useSelector((state) => state.sessDetail);
  const dispatch = useDispatch();

  const handleSessionToggle = () => {
    dispatch(sessionDetail(sessiondetail));
  };
  return (
    <>
      <div className="main-session-detail">
        <div className="session-detail-top" onClick={handleSessionToggle}>
          &lt; Session Detail's <hr />
        </div>
        <div className="session-detil">
          <div className="session-graph rounded-2">
            <div className="week-graph">
              <div className="graph-bars pt-3 d-flex align-items-baseline justify-content-center gap-1">
                <div className="bar-detail">
                  <div className="bar bar-1 rounded-1"></div>
                  <div className="bar-text">Mon</div>
                </div>
                <div className="bar-detail">
                  <div className="bar bar-2 rounded-1"></div>
                  <div className="bar-text">Tue</div>
                </div>
                <div className="bar-detail">
                  <div className="bar bar-3 rounded-1"></div>
                  <div className="bar-text">Wed</div>
                </div>
                <div className="bar-detail">
                  <div className="bar bar-4 rounded-1"></div>
                  <div className="bar-text">Thur</div>
                </div>
                <div className="bar-detail">
                  <div className="bar bar-5 rounded-1"></div>
                  <div className="bar-text">Fri</div>
                </div>
                <div className="bar-detail">
                  <div className="bar bar-6 rounded-1"></div>
                  <div className="bar-text">Sat</div>
                </div>
                <div className="bar-detail">
                  <div className="bar bar-7 rounded-1"></div>
                  <div className="bar-text">Sun</div>
                </div>
              </div>
              <div className="session-deatil-week bar-text">
                Session performance by week
              </div>
            </div>
          </div>
          <div className="session-performance">
            <p className="mb-0 my-2">Session Performance</p>
            <div className="session-performance-active performance px-1 py-2 ">
              <div className="spa-top d-flex justify-content-between">
                <div className="session-num">
                  <ElectricBoltOutlinedIcon></ElectricBoltOutlinedIcon>
                  Session Active
                </div>
                <div className="session-active-since">
                  Session Active: 12:05:33
                </div>
              </div>
              <div className="session-state">Session-state : DEV</div>
              <div className="sse d-flex justify-content-between">
                <div className="session-energy">
                  Power Consumption: Moderate
                </div>
                <div className="session-share-btn text-decoration-underline">
                  Share Session
                </div>
              </div>
            </div>
            <div className="session-performance-agent performance px-1 py-2">
              <div className="agent-name">Agent used: Text To Image</div>
              <div className="agent-performance-consumption d-flex justify-content-between">
                <div className="agent-performance">Agent Performance: Good</div>
                <div className="agent-consumption">Power : Moderate</div>
              </div>
              <div className="agent-active-mute">
                <div className="doc-index-right d-flex justify-content-between mt-2">
                  <div className="actie-mute-sess ">
                    <span className=" activeIndex activeMuteIndex m-0 me-2 ">
                      Active <img src={ActiveImg} alt="" />
                    </span>
                    <span className=" activeMuteIndex">
                      Mute <img src={InactiveImg} alt="" />
                    </span>
                  </div>
                  <div className="session-active-since">
                    Agent Active: 05:29:43
                  </div>
                </div>
              </div>
            </div>
            <div className="session-performance-database performance px-1 py-2">
              <div className="database-name d-flex">
                <div className="index-logo">
                  <img src={databaseLogo} alt="" />
                </div>
                <span>Database Performance for Active session </span>
              </div>
              <div className="database-consumption">
                Database Consumption: High
              </div>
              <div className="database-size">Database Size: 2.2GB</div>
              <div className="database-connect-disconnect d-flex justify-content-between">
                <div className="database-connect">
                  Connect to new database +
                </div>
                <div className="database-disconect">Disconnect -</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomSessionsDetail;
