import React from "react";
import DatbaseLogo from "../../Assets/SVG/database.svg";
import DatabaseLinks from "../../Assets/SVG/database-link.svg";

const CustomDatabases = () => {
  return (
    <>
      <div className="main-database-container p-4">
        <div className="tree-section-top">
         <div className="database-text-img d-flex justify-content-between align-items-center">
            <p className="mb-0">DATABASE'S</p>
            <img src={DatabaseLinks} alt="" />
         </div>
          <hr />
        </div>
        <div className="database-container p-1 pt-3 d-flex flex-wrap gap-4 justify-content-center">
          <div className="left-container database rounded-2">
            <div className="left-container-img">
              <img src={DatbaseLogo} alt="DATABASE Container Logo" />
            </div>
            <p className="mb-0"> DATABASE 1</p>
            <div className="action action-active">Active</div>
          </div>
          <div className="left-container database rounded-2">
            <div className="left-container-img">
              <img src={DatbaseLogo} alt="DATABASE Container Logo" />
            </div>
            <p className="mb-0"> DATABASE 2</p>
            <div className="action action-processing">Processing</div>
          </div>
          <div className="left-container database rounded-2">
            <div className="left-container-img">
              <img src={DatbaseLogo} alt="DATABASE Container Logo" />
            </div>
            <p className="mb-0"> DATABASE 3</p>
            <div className="action action-inactive">Inactive</div>
          </div>
          <div className="left-container database rounded-2">
            <div className="left-container-img">
              <img src={DatbaseLogo} alt="DATABASE Container Logo" />
            </div>
            <p className="mb-0"> DATABASE 4</p>
            <div className="action action-terminate">Terminated</div>
          </div>
          <div className="left-container database rounded-2">
            <div className="left-container-img">
              <img src={DatbaseLogo} alt="DATABASE Container Logo" />
            </div>
            <p className="mb-0"> DATABASE 5</p>
            <div className="action action-active">Active</div>
          </div>
          <div className="left-container database rounded-2">
            <div className="left-container-img">
              <img src={DatbaseLogo} alt="DATABASE Container Logo" />
            </div>
            <p className="mb-0"> DATABASE 6</p>
            <div className="action action-processing">Processing</div>
          </div>
          <div className="left-container database rounded-2">
            <div className="left-container-img">
              <img src={DatbaseLogo} alt="DATABASE Container Logo" />
            </div>
            <p className="mb-0"> DATABASE 7</p>
            <div className="action action-inactive">Inactive</div>
          </div>
          <div className="left-container database rounded-2">
            <div className="left-container-img">
              <img src={DatbaseLogo} alt="DATABASE Container Logo" />
            </div>
            <p className="mb-0"> DATABASE 8</p>
            <div className="action action-terminate">Terminated</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomDatabases;
