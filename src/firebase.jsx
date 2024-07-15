import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "store-tutorial-fc60f.firebaseapp.com",
  projectId: "store-tutorial-fc60f",
  storageBucket: "store-tutorial-fc60f.appspot.com",
  messagingSenderId: "474848986156",
  appId: "1:474848986156:web:26b0acf0ef7a192135fd89"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage (app);