import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "auth-952b0.firebaseapp.com",
  projectId: "auth-952b0",
  storageBucket: "auth-952b0.appspot.com",
  messagingSenderId: "30629696168",
  appId: "1:30629696168:web:a363c9ca17918787d4e89d",
  measurementId: "G-WQR96SGJ07"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);