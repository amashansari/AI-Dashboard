import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sessionDetail } from "../../ReduxManager/action";

const CustomSessionsDetail = () => {
  const sessiondetail = useSelector((state) => state.sessDetail)
  const dispatch = useDispatch()

  const handleSessionToggle = () => {
    dispatch(sessionDetail(sessiondetail))
  }
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
            <div className="session-performance-active performance rounded-1"></div>
            <div className="session-performance-agent performance rounded-1"></div>
            <div className="session-performance-database performance rounded-1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomSessionsDetail;
