import React from "react";
import firebase from "./firebase";
//import "firebase/storage";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

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
  // //console.log(typeof rl);
  //console.log(address);
  // //console.log(Url);
  return (
    <div>
      <h1>Hey</h1>
      <iframe width="500" height="700"></iframe>
    </div>
  );
}

export default App;
//export { storage, firebase };
