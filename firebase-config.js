const firebaseConfig = {
  apiKey: "AIzaSyDEtOa1WtWveT2yrwkzbz7fR4yE4xwqO1A",
  authDomain: "coopepsaing.firebaseapp.com",
  projectId: "coopepsaing",
  storageBucket: "coopepsaing.firebasestorage.app",
  messagingSenderId: "412483439859",
  appId: "1:412483439859:web:acfe406607e8015d3e7b86"
};
// Inicializa Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
