import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAE9LmPMXwAAgPh9QykilmyvA4-1q0dgfY",
  authDomain: "store-6f93d.firebaseapp.com",
  projectId: "store-6f93d",
  storageBucket: "store-6f93d.appspot.com",
  messagingSenderId: "340058589557",
  appId: "1:340058589557:web:b3166e2ded87c687886b3c",
  measurementId: "G-3QNRWCEFR2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()