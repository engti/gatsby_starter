// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/* const firebaseConfig = {
  apiKey: "AIzaSyCJxGS-rlmzDWxEnnWtj6zGFvFHoBOka6c",
  authDomain: "react-ecommerce-starter.firebaseapp.com",
  projectId: "react-ecommerce-starter",
  storageBucket: "react-ecommerce-starter.appspot.com",
  messagingSenderId: "486587856188",
  appId: "1:486587856188:web:50bfd2e48649053260da39",
  //measurementId: "G-7LVJFXBH6V"
}; */

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID 
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);