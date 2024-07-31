import React, { useState } from "react";
import { Accordion, Dropdown, DropdownButton } from "react-bootstrap";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import MultipleStopOutlinedIcon from "@mui/icons-material/MultipleStopOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import AlignVerticalCenterOutlinedIcon from "@mui/icons-material/AlignVerticalCenterOutlined";
import { Avatar, Checkbox, FormControlLabel } from "@mui/material";
import frozen from "../../Assets/SVG/projects-alt-svgrepo-com.svg";
import published from "../../Assets/SVG/publish-svgrepo-com.svg";
import promoted from "../../Assets/SVG/project-configuration-svgrepo-com.svg";
import "./Session.css";

import {
  blue,
  deepOrange,
  deepPurple,
  green,
  pink,
  yellow,
} from "@mui/material/colors";
import ReactSelect from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { sessionDetail } from "../../ReduxManager/action";
import TagInput from "../AI-Components/TagsInput";
import CreateSessionModal from "../AI-Components/CreateSessionModal";

const CustomSessions = () => {
  const dispatch = useDispatch();
  const toggleAM = useSelector((state) => state.activeMute);
  const [CityName, setCityName] = useState("");
  const [CityNameValue, setCityNameValue] = useState([]);
  const [modal, setModal] = useState(false);

  let CityNameOptions = [
    {
      value: "Dev",
      label: "Dev",
      id: 1,
    },
    {
      value: "Freeze",
      label: "Freeze",
      id: 2,
    },
    {
      value: "Promoted",
      label: "Promoted",
      id: 3,
    },
    {
      value: "Published",
      label: "Published",
      id: 4,
    },
  ];
  function selectCity(val) {
    setCityName(val.value);
    setCityNameValue(val);
  }

  const [toggleSessionDetail, setToggleSessionDetail] = useState(false);
  const handleSessionDetail = () => {
    setToggleSessionDetail(!toggleSessionDetail);
    dispatch(sessionDetail(toggleSessionDetail));
  };

  const handleModal = () => {
    setModal(true);
  };

  return (
    <>
      <div className="main-sessions-container d-flex p-2 gap-3">
        <div className="sessions-list-container">
          <div
            className={`session-content  ${
              toggleAM === true ? "session-content-hide" : ""
            }`}
          >
            <div className="session-head">
              <div className="session-name">Session List</div>
              <CreateSessionModal/>
            </div>
            <div className="sessions-list">
              <div className="list-head">
                <div className="head-name">Sessions</div>
                <div className="search-container">
                  <div className="searchbox">
                    <img src="" alt="" />
                    <input type="text" placeholder="Search by name" />
                  </div>
                  <div className="filter">
                    <select name="Filter" id="">
                      <option value="filter" defaultChecked>
                        Filter
                      </option>
                      <option value="date">date</option>
                      <option value="active">Active</option>
                      <option value="Mute">Mute</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="session-list-item">
                <div className="item-name">
                  <div className="name">Session 1</div>
                  <div className="detail">this is session 1 details</div>
                </div>
                <div className="item-status">
                  <div className="status-time">last updated on 12:43 p.m</div>
                  <div className="status">
                    <div className="active-circle"></div> Active
                  </div>
                </div>
              </div>
              <div className="session-list-item">
                <div className="item-name">
                  <div className="name">Session 2</div>
                  <div className="detail">this is session 2 details</div>
                </div>
                <div className="item-status">
                  <div className="frozen">
                    <div className="frozen-img">
                      <img src={frozen} alt="" />
                    </div>
                    <div className="frozen-text">Frozen</div>
                  </div>
                </div>
              </div>
              <div className="session-list-item">
                <div className="item-name">
                  <div className="name">Session 3</div>
                  <div className="detail">this is session 3 details</div>
                </div>
                <div className="item-status">
                  <div className="status-time">last updated on 2:23 p.m</div>
                  <div className="status">
                    <div className="active-circle"></div> Active
                  </div>
                </div>
              </div>
              <div className="session-list-item">
                <div className="item-name">
                  <div className="name">Session 4</div>
                  <div className="detail">this is session 4 details</div>
                </div>
                <div className="item-status">
                  <div className="promoted">
                    <div className="promoted-img">
                      <img src={promoted} alt="" />
                    </div>
                    <div className="promoted-text">Promoted</div>
                  </div>
                </div>
              </div>
              <div className="session-list-item">
                <div className="item-name">
                  <div className="name">Session 5</div>
                  <div className="detail">this is session 5 details</div>
                </div>
                <div className="item-status">
                  <div className="published">
                    <div className="published-img">
                      <img src={published} alt="" />
                    </div>
                    <div className="published-text">Published</div>
                  </div>
                </div>
              </div>
              <div className="session-list-item">
                <div className="item-name">
                  <div className="name">Session 6</div>
                  <div className="detail">this is session 6 details</div>
                </div>
                <div className="item-status">
                  <div className="status-time">last updated on 12:10 p.m</div>
                  <div className="status">
                    <div className="active-circle"></div> Active
                  </div>
                </div>
              </div>
            </div>
            {/* <CreateSessionModal/> */}
          </div>
        </div>

        <div className="session-container">
          <div className="session-filter-search rounded-3 p-2">
            <div className="search-session rounded-2">
              <input type="text" placeholder="Search Sessions" />
              <SearchIcon></SearchIcon>
            </div>
            <hr />
            <div className="badge-tag">
              <div className="tags selected-tags">ML Algorithms</div>
              <div className="tags">Computer Visions</div>
              <div className="tags">NLP</div>
              <div className="tags selected-tags">API Integrations</div>
              <div className="tags selected-tags">Edge Computing</div>
            </div>
            <hr />
            <div className="check-box-filter">
              <FormControlLabel
                control={<Checkbox className="customCheckbox" />}
                label="Aquib Kuwari"
              />
              <FormControlLabel
                control={<Checkbox className="customCheckbox" />}
                label="Salman Shaikh"
              />
              <FormControlLabel
                control={<Checkbox className="customCheckbox" />}
                label="Amash Ansari"
              />
              <FormControlLabel
                control={<Checkbox className="customCheckbox" />}
                label="Aarif Ansari"
              />
            </div>
            <hr />
            <div className="drop-down-filter">
              <ReactSelect
                options={CityNameOptions}
                value={CityNameValue}
                onChange={selectCity}
                loadOptions={selectCity}
                placeholder="Session State"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`active-mute-sessions ${
          toggleAM === true ? "active-mute-sessions-show" : ""
        }`}
      >
        <div className="active-sesssions mb-3">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div className="active-accordian-header d-flex justify-content-between align-items-center w-100">
                  <div className="acctive-text">Active</div>
                  <div className="search-session search-index rounded-2">
                    <input type="text" placeholder="Search Index" />
                    <div>
                      <SearchIcon></SearchIcon>
                    </div>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div
                  className="accordian-body-content session-body-content"
                  onClick={handleSessionDetail}
                >
                  <div className="session-num">
                    <ElectricBoltOutlinedIcon></ElectricBoltOutlinedIcon>
                    QST-201
                  </div>
                  <div className="session-address">
                    <MultipleStopOutlinedIcon></MultipleStopOutlinedIcon> 2972
                    Westheimer Rd. Santa Ana
                  </div>
                  <div className="session-cpu-transmission">
                    <div className="cpu">
                      <AppsOutlinedIcon></AppsOutlinedIcon> Cpu
                    </div>
                    <div className="transmission">
                      <AlignVerticalCenterOutlinedIcon></AlignVerticalCenterOutlinedIcon>
                      Transmission
                    </div>
                  </div>
                  <div className="profile-img">
                    <div className="session-user-profile">
                      <Avatar className="custom-session-profile">A</Avatar>
                    </div>
                  </div>
                </div>

                <div className="accordian-body-content session-body-content ">
                  <div className="session-num">
                    <ElectricBoltOutlinedIcon></ElectricBoltOutlinedIcon>
                    QST-201
                  </div>
                  <div className="session-address">
                    <MultipleStopOutlinedIcon></MultipleStopOutlinedIcon> 2972
                    Westheimer Rd. Santa Ana
                  </div>
                  <div className="session-cpu-transmission">
                    <div className="cpu">
                      <AppsOutlinedIcon></AppsOutlinedIcon> Cpu
                    </div>
                    <div className="transmission">
                      <AlignVerticalCenterOutlinedIcon></AlignVerticalCenterOutlinedIcon>
                      Transmission
                    </div>
                  </div>
                  <div className="profile-img">
                    <div className="session-user-profile">
                      <Avatar className="custom-session-profile">AK</Avatar>
                    </div>
                  </div>
                </div>

                <div className="accordian-body-content session-body-content ">
                  <div className="session-num">
                    <ElectricBoltOutlinedIcon></ElectricBoltOutlinedIcon>
                    QST-201
                  </div>
                  <div className="session-address">
                    <MultipleStopOutlinedIcon></MultipleStopOutlinedIcon> 2972
                    Westheimer Rd. Santa Ana
                  </div>
                  <div className="session-cpu-transmission">
                    <div className="cpu">
                      <AppsOutlinedIcon></AppsOutlinedIcon> Cpu
                    </div>
                    <div className="transmission">
                      <AlignVerticalCenterOutlinedIcon></AlignVerticalCenterOutlinedIcon>
                      Transmission
                    </div>
                  </div>
                  <div className="profile-img">
                    <div className="session-user-profile">
                      <Avatar className="custom-session-profile">RZ</Avatar>
                    </div>
                  </div>
                </div>

                <div className="accordian-body-content session-body-content ">
                  <div className="session-num">
                    <ElectricBoltOutlinedIcon></ElectricBoltOutlinedIcon>
                    QST-201
                  </div>
                  <div className="session-address">
                    <MultipleStopOutlinedIcon></MultipleStopOutlinedIcon> 2972
                    Westheimer Rd. Santa Ana
                  </div>
                  <div className="session-cpu-transmission">
                    <div className="cpu">
                      <AppsOutlinedIcon></AppsOutlinedIcon> Cpu
                    </div>
                    <div className="transmission">
                      <AlignVerticalCenterOutlinedIcon></AlignVerticalCenterOutlinedIcon>
                      Transmission
                    </div>
                  </div>
                  <div className="profile-img">
                    <div className="session-user-profile">
                      <Avatar className="custom-session-profile">KK</Avatar>
                    </div>
                  </div>
                </div>

                <div className="accordian-body-content session-body-content ">
                  <div className="session-num">
                    <ElectricBoltOutlinedIcon></ElectricBoltOutlinedIcon>
                    QST-201
                  </div>
                  <div className="session-address">
                    <MultipleStopOutlinedIcon></MultipleStopOutlinedIcon> 2972
                    Westheimer Rd. Santa Ana
                  </div>
                  <div className="session-cpu-transmission">
                    <div className="cpu">
                      <AppsOutlinedIcon></AppsOutlinedIcon> Cpu
                    </div>
                    <div className="transmission">
                      <AlignVerticalCenterOutlinedIcon></AlignVerticalCenterOutlinedIcon>
                      Transmission
                    </div>
                  </div>
                  <div className="profile-img">
                    <div className="session-user-profile">
                      <Avatar className="custom-session-profile">HD</Avatar>
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="mute-sesssions">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div className="mute-accordian-header d-flex justify-content-between align-items-center w-100">
                  <div className="mute-text">Mute</div>
                  <div className="search-session search-index rounded-2">
                    <input type="text" placeholder="Search Index" />
                    <div>
                      <SearchIcon></SearchIcon>
                    </div>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="accordian-body-content session-body-content">
                  <div className="session-num mute-session">
                    <ElectricBoltOutlinedIcon></ElectricBoltOutlinedIcon>
                    QST-201
                  </div>
                  <div className="session-address">
                    <MultipleStopOutlinedIcon></MultipleStopOutlinedIcon> 2972
                    Westheimer Rd. Santa Ana
                  </div>
                  <div className="session-cpu-transmission">
                    <div className="cpu">
                      <AppsOutlinedIcon></AppsOutlinedIcon> Cpu
                    </div>
                    <div className="transmission">
                      <AlignVerticalCenterOutlinedIcon></AlignVerticalCenterOutlinedIcon>
                      Transmission
                    </div>
                  </div>
                  <div className="profile-img">
                    <div className="session-user-profile">
                      <Avatar className="custom-session-profile">H</Avatar>
                    </div>
                  </div>
                </div>
                <div className="accordian-body-content session-body-content ">
                  <div className="session-num mute-session">
                    <ElectricBoltOutlinedIcon></ElectricBoltOutlinedIcon>
                    QST-201
                  </div>
                  <div className="session-address">
                    <MultipleStopOutlinedIcon></MultipleStopOutlinedIcon> 2972
                    Westheimer Rd. Santa Ana
                  </div>
                  <div className="session-cpu-transmission">
                    <div className="cpu">
                      <AppsOutlinedIcon></AppsOutlinedIcon> Cpu
                    </div>
                    <div className="transmission">
                      <AlignVerticalCenterOutlinedIcon></AlignVerticalCenterOutlinedIcon>
                      Transmission
                    </div>
                  </div>
                  <div className="profile-img">
                    <div className="session-user-profile">
                      <Avatar className="custom-session-profile">N</Avatar>
                    </div>
                  </div>
                </div>
                <div className="accordian-body-content session-body-content ">
                  <div className="session-num mute-session">
                    <ElectricBoltOutlinedIcon></ElectricBoltOutlinedIcon>
                    QST-201
                  </div>
                  <div className="session-address">
                    <MultipleStopOutlinedIcon></MultipleStopOutlinedIcon> 2972
                    Westheimer Rd. Santa Ana
                  </div>
                  <div className="session-cpu-transmission">
                    <div className="cpu">
                      <AppsOutlinedIcon></AppsOutlinedIcon> Cpu
                    </div>
                    <div className="transmission">
                      <AlignVerticalCenterOutlinedIcon></AlignVerticalCenterOutlinedIcon>
                      Transmission
                    </div>
                  </div>
                  <div className="profile-img">
                    <div className="session-user-profile">
                      <Avatar className="custom-session-profile">OP</Avatar>
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default CustomSessions;
