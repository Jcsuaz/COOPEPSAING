// Funciones para gestionar anuncios
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
function createAnnouncement(announcementData) {
  return db.collection("announcements").add(announcementData);
}

function getAnnouncements() {
  return db.collection("announcements").get();
}
