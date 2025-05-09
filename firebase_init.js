// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4xyCxft8cb7Jdt47S3CW1bDoBipaFov4",
  authDomain: "assauth-09.firebaseapp.com",
  projectId: "assauth-09",
  storageBucket: "assauth-09.firebasestorage.app",
  messagingSenderId: "558426957259",
  appId: "1:558426957259:web:1ff903f2f81ffec36fc24e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);