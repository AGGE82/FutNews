
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDBML8ATYRDSTbZc6xKEdG5RgbiU-NSAG0",
  authDomain: "futnews-755fa.firebaseapp.com",
  projectId: "futnews-755fa",
  storageBucket: "futnews-755fa.appspot.com",
  messagingSenderId: "132774421251",
  appId: "1:132774421251:web:15d99a25637dc3b88e3f36",
  measurementId: "G-QNTGKMG4XS"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
