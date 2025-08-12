// src/firebaseAuth.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  confirmPasswordReset, // Add this
  sendPasswordResetEmail, // Add this
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAi59wVzc6ojlg-cQf2oJRDVTD3JLqTs5s",
  authDomain: "propello-ai-85845.firebaseapp.com",
  projectId: "propello-ai-85845",
  storageBucket: "propello-ai-85845.appspot.com",
  messagingSenderId: "271073990786",
  appId: "1:271073990786:web:830bca4cbe69f203dafc9b",
  measurementId: "G-7JEEDVTSR6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    throw error;
  }
};

// Export all needed auth functions
export { 
  signInWithGoogle, 
  auth, 
  signInWithEmailAndPassword,
  confirmPasswordReset,
  sendPasswordResetEmail
};