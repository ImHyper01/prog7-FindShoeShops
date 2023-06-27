// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJKtVuusOyvhKGnNqILB5oxvcjPl9pCp4",
  authDomain: "cleanwave-29e54.firebaseapp.com",
  projectId: "cleanwave-29e54",
  storageBucket: "cleanwave-29e54.appspot.com",
  messagingSenderId: "649561980789",
  appId: "1:649561980789:web:250073cd2a0225422e5d3c",
  measurementId: "G-R4M7812ZQ9"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
export { auth };