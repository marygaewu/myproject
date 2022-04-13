import React, { useState, forwardRef, useImperativeHandle } from "react";
import firebase from "./firebase";
import Modal from "./studentDashboard/Modal";
//import "firebase/storage";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { CircularProgress } from "@material-ui/core";
import "./schoolDashboard/ProgressBar.css";
import ProgressModal from "./schoolDashboard/ProgressModal";

let address = "";

const storage = getStorage();
const starsRef = ref(storage, "pdf/100795016- Resume.pdf");
{
  getDownloadURL(starsRef)
    .then((url) => {
      console.log(url);
      address = url;
      // console.log(typeof url);
      // console.log(typeof rl);
    })
    .catch((error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case "storage/object-not-found":
          // File doesn't exist
          break;
        case "storage/unauthorized":
          // User doesn't have permission to access the object
          break;
        case "storage/canceled":
          // User canceled the upload
          break;

        // ...

        case "storage/unknown":
          // Unknown error occurred, inspect the server response
          break;
      }
    });
}

// Get the download URL
function App() {
  const [modalOpen, setModalOpen] = useState(true);
  useImperativeHandle(ref, () => ({
    callModal() {
      setModalOpen(true);
    },
  }));

  return (
    <div className="App">
      <h1>Hey, click on the button to open the modal.</h1>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button>
      <CircularProgress variant="determinate" value={50} />
      {modalOpen && <ProgressModal setOpenModal={setModalOpen} />}

      <div className="circle-wrap">
        <div className="circle">
          <div className="mask full">
            <div className="fill"></div>
          </div>
          <div className="mask half">
            <div className="fill"></div>
          </div>
          <div className="inside-circle"> 7% </div>
        </div>
      </div>
    </div>
  );
}

export default App;
//export { storage, firebase };
