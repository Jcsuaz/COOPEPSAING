// Inicializa Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEtOa1WtWveT2yrwkzbz7fR4yE4xwqO1A",
  authDomain: "coopepsaing.firebaseapp.com",
  projectId: "coopepsaing",
  storageBucket: "coopepsaing.firebasestorage.app",
  messagingSenderId: "412483439859",
  appId: "1:412483439859:web:acfe406607e8015d3e7b86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
