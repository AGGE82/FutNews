// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ8kukb2CP_q05ZQZyqy3JVPM4sxMTU_E",
  authDomain: "futnews-441cd.firebaseapp.com",
  projectId: "futnews-441cd",
  storageBucket: "futnews-441cd.appspot.com",
  messagingSenderId: "23209404299",
  appId: "1:23209404299:web:40a915ed3d002e119ef18e",
  measurementId: "G-R6HWJS44RJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);