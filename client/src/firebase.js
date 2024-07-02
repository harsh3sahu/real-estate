// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-c8170.firebaseapp.com",
  projectId: "real-estate-c8170",
  storageBucket: "real-estate-c8170.appspot.com",
  messagingSenderId: "826795962110",
  appId: "1:826795962110:web:74124f2c182622a5d2ffaf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);