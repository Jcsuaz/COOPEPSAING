// Funciones para gestionar el perfil del usuario
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
function getUserProfile(userId) {
  return db.collection("users").doc(userId).get();
}

function updateUserProfile(userId, data) {
  return db.collection("users").doc(userId).update(data);
}
