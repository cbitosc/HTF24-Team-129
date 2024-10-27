// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9LnihdJ-yDVxXcvy8esKiZiydTTPF4RY",
  authDomain: "spaceexplorex-4e5cd.firebaseapp.com",
  projectId: "spaceexplorex-4e5cd",
  storageBucket: "spaceexplorex-4e5cd.appspot.com",
  messagingSenderId: "951908992808",
  appId: "1:951908992808:web:357492bc4045e57482b21d",
  measurementId: "G-4XSC4HC2FB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);