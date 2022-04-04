import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBikwb4fpBWpDB-dYh6TqwlhAdJajSVzxk",
  authDomain: "blockchain-transcript.firebaseapp.com",
  projectId: "blockchain-transcript",
  storageBucket: "blockchain-transcript.appspot.com",
  messagingSenderId: "317773320762",
  appId: "1:317773320762:web:64f35c70a9f2fb4c8d1b03",
};

export const app = initializeApp(firebaseConfig);

export default getFirestore();

export const storage = getStorage(app);

export const auth = getAuth(app);

// export function signup(email, password) {
//   return createUserWithEmailAndPassword(auth, email, password);
// }
