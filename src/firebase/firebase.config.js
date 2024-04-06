// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8T9eadiQkRlV2o8Q1qOO5iBSpo2jNxxk",
  authDomain: "auth-private-router-c08be.firebaseapp.com",
  projectId: "auth-private-router-c08be",
  storageBucket: "auth-private-router-c08be.appspot.com",
  messagingSenderId: "931057233082",
  appId: "1:931057233082:web:f520025ffa29b5d7f8a683"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;