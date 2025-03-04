import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDEtOa1WtWveT2yrwkzbz7fR4yE4xwqO1A",
  authDomain: "coopepsaing.firebaseapp.com",
  projectId: "coopepsaing",
  storageBucket: "coopepsaing.firebasestorage.app",
  messagingSenderId: "412483439859",
  appId: "1:412483439859:web:acfe406607e8015d3e7b86"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
