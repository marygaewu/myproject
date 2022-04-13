import React from "react";
import "./Modal.css";
import { useUserContext } from "../Auth/context/userContext";

function Modal({ setOpenModal }) {
  const { user, logoutUser } = useUserContext();
  return (
    <div className="modalBack">
      <div className="modalContain">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Logout</h1>
        </div>
        <div className="body">
          <p>Are You Sure You Want to Logout?</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            No
          </button>
          <button onClick={logoutUser}>Yes</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
