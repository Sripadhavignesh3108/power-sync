import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA6Zf3uoUvlAzAnu-Cu7d6RgpJfDJSs1t4",
  authDomain: "power-sync-5a1c4.firebaseapp.com",
  projectId: "power-sync-5a1c4",
  storageBucket: "power-sync-5a1c4.appspot.com",
  messagingSenderId: "239715108139",
  appId: "1:239715108139:web:6daf4c234c6bdeb5d3b16e",
  measurementId: "G-030HQ5YTEJ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
