import React, { useState } from "react";
import { Accordion, Dropdown, DropdownButton } from "react-bootstrap";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import MultipleStopOutlinedIcon from "@mui/icons-material/MultipleStopOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import AlignVerticalCenterOutlinedIcon from "@mui/icons-material/AlignVerticalCenterOutlined";
import { Avatar, Checkbox, FormControlLabel } from "@mui/material";
import {
  blue,
  deepOrange,
  deepPurple,
  green,
  pink,
  yellow,
} from "@mui/material/colors";
import ReactSelect from "react-select";

const CustomSessions = () => {
  const [CityName, setCityName] = useState("");
  const [CityNameValue, setCityNameValue] = useState([]);

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

  return (
    <>
      <div className="main-sessions-container d-flex p-2 gap-3">
        <div className="active-mute-sessions">
          <div className="active-sesssions mb-3">
            <Accordion  defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Active</Accordion.Header>
                <Accordion.Body>
                  <div className="accordian-body-content session-body-content">
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
                        <Avatar sx={{ bgcolor: pink[500] }}>A</Avatar>
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
                        <Avatar sx={{ bgcolor: green[500] }}>AK</Avatar>
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
                        <Avatar sx={{ bgcolor: yellow[500] }}>RZ</Avatar>
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
                        <Avatar sx={{ bgcolor: blue[500] }}>KK</Avatar>
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
                        <Avatar>HD</Avatar>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="mute-sesssions">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Mute</Accordion.Header>
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
                        <Avatar>H</Avatar>
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
                        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
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
                        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="session-filter-search rounded-3 p-2">
          <div className="session-container">
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
              <FormControlLabel control={<Checkbox />} label="Aquib Kuwari" />
              <FormControlLabel control={<Checkbox />} label="Salman Shaikh" />
              <FormControlLabel control={<Checkbox />} label="Amash Ansari" />
              <FormControlLabel control={<Checkbox />} label="Aarif Ansari" />
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
    </>
  );
};

export default CustomSessions;
