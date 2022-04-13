import React from "react";
import "./ProgressBar.css";

import { CircularProgress } from "@material-ui/core";

function ProgressModal(props) {
  console.log(props.progress);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn"></div>
        <div className="title">
          <h2>Uploading...{props.progress}%</h2>
        </div>
        <div className="body">
          <CircularProgress
            variant="determinate"
            value={props.progress}
            thickness={5}
            size={80}
          />
        </div>
        <div className="footer">
          <button onClick={() => props.callModal()} id="cancelBtn">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProgressModal;
