// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyBczCufySuougDn1RdB4GEjHY6LVTbZdWU",
  authDomain: "spabuddy-d2c55.firebaseapp.com",
  projectId: "spabuddy-d2c55",
  storageBucket: "spabuddy-d2c55.firebasestorage.app",
  messagingSenderId: "56367795238",
  appId: "1:56367795238:web:904eee0763885efb982ae7"
};

// Initialize Firebase
const app = getApps.length === 0 ? initializeApp(firebaseConfig) : getApp();
const db =getFirestore(app);
const auth = initializeAuth(app,{
  persistence:getReactNativePersistence(ReactNativeAsyncStorage)
});

export{auth,db};