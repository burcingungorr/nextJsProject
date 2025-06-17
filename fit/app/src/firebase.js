// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpls864jboUgwbgUho-RFoXygFQTNFDCQ",
  authDomain: "fitrehber-70418.firebaseapp.com",
  projectId: "fitrehber-70418",
  storageBucket: "fitrehber-70418.firebasestorage.app",
  messagingSenderId: "1040709061234",
  appId: "1:1040709061234:web:8a2c4c81c4857445f4d0eb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
