// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4FxLx51CV45Rp9kGsVBYl8lO8-4tXEgU",
  authDomain: "vingo-delivery-87205.firebaseapp.com",
  projectId: "vingo-delivery-87205",
  storageBucket: "vingo-delivery-87205.firebasestorage.app",
  messagingSenderId: "77002873498",
  appId: "1:77002873498:web:344f97c51130dfef041d23",
  measurementId: "G-QW74DK2MN1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };