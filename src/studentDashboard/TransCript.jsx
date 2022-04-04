import React, { useState } from "react";

import db from "../firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useUserContext } from "../Auth/context/userContext";


function TransCript() {
  let hey =
    "https://firebasestorage.googleapis.com/v0/b/blockchain-transcript.appspot.com/o/files%2FInvoice%206.pdf?alt=media&token=f95cda6c-c21f-4930-98e0-879de120b549";
  const { user } = useUserContext();
  let email = user.email;
  const colRef = collection(db, "StudentInfo");
  const q = query(colRef, where("email", "==", email));
  let [url, seturl] = useState("");

  onSnapshot(q, async (snapshot) => {
    const info = await snapshot.docs.map(async (doc) => {
      await seturl(doc.get("url"));
      console.log(url);
    });
  });
  return (
    <div>
      <embed
        type="application/pdf"
        src={hey}
        style={{
          width: "50%",
          height: "100%",
          position: "absolute",
          left: "45%",
        }}
      ></embed>
      {console.log("hey" + url)}
    </div>
  );
}

export default TransCript;
