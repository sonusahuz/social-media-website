import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5S6V6VpHfwLfmWGe_hgKTMPUkEG2PIEc",
  authDomain: "e-commerce-b1929.firebaseapp.com",
  databaseURL: "https://e-commerce-b1929-default-rtdb.firebaseio.com",
  projectId: "e-commerce-b1929",
  storageBucket: "e-commerce-b1929.appspot.com",
  messagingSenderId: "300866071276",
  appId: "1:300866071276:web:1107ba0168e2daf61d13c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const fireStore = getFirestore(app);
