// Funciones para gestionar préstamos
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
function requestLoan(userId, loanData) {
  return db.collection("loans").add({
    userId: userId,
    ...loanData,
    status: "pendiente",
  });
}

function approveLoan(loanId) {
  return db.collection("loans").doc(loanId).update({ status: "aprobado" });
}

function rejectLoan(loanId) {
  return db.collection("loans").doc(loanId).update({ status: "rechazado" });
}
