// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "store-tutorial-fc60f.firebaseapp.com",
  projectId: "store-tutorial-fc60f",
  storageBucket: "store-tutorial-fc60f.appspot.com",
  messagingSenderId: "474848986156",
  appId: "1:474848986156:web:26b0acf0ef7a192135fd89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);