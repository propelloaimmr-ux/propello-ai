// src/firebaseconfig.js
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  updateProfile,
  onAuthStateChanged,   // <-- import here
  signOut 
} from "firebase/auth";

import { getFirestore, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAi59wVzc6ojlg-cQf2oJRDVTD3JLqTs5s",
  authDomain: "propello-ai-85845.firebaseapp.com",
  projectId: "propello-ai-85845",
  storageBucket: "propello-ai-85845.appspot.com",
  messagingSenderId: "271073990786",
  appId: "1:271073990786:web:830bca4cbe69f203dafc9b",
  measurementId: "G-7JEEDVTSR6"
};
// Initialize Firebase app or use existing one
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Auth and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  db,
  signOut,
  serverTimestamp,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  updateProfile,
  onAuthStateChanged // <-- ADD THIS LINE
};