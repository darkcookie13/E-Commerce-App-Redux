// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQbNzR_du7oeaansgI2y_3iEvd3GPwO8o",
  authDomain: "buybusy-redux-c22e4.firebaseapp.com",
  projectId: "buybusy-redux-c22e4",
  storageBucket: "buybusy-redux-c22e4.appspot.com",
  messagingSenderId: "632388922746",
  appId: "1:632388922746:web:73c35b8dc399af6fb5bac3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
