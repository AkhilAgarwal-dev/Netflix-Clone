// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWyi8SKhq2nlxFysomfdkzcMVUCLwvx-c",
  authDomain: "netflixgpt-8b2ca.firebaseapp.com",
  projectId: "netflixgpt-8b2ca",
  storageBucket: "netflixgpt-8b2ca.appspot.com",
  messagingSenderId: "145937247329",
  appId: "1:145937247329:web:55f43dda296350e5f7ce20",
  measurementId: "G-38MHGT6DPN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();