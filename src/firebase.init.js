// Do NOT PUBLIC THIS FILE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmMddczi8w6nnau544GPk_nLib9UmEwaw",
  authDomain: "explore-email-password-a-32575.firebaseapp.com",
  projectId: "explore-email-password-a-32575",
  storageBucket: "explore-email-password-a-32575.firebasestorage.app",
  messagingSenderId: "845625190016",
  appId: "1:845625190016:web:76548464d2842d9f9ba865"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);