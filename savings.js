// Funciones para gestionar ahorros
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
function deposit(userId, amount) {
  // Actualizar saldo en Firestore
}

function withdraw(userId, amount) {
  // Actualizar saldo en Firestore
}
