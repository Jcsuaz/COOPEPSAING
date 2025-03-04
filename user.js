// Funciones para gestionar el perfil del usuario
import { auth, db } from './firebase-config.js';
function getUserProfile(userId) {
  return db.collection("users").doc(userId).get();
}

function updateUserProfile(userId, data) {
  return db.collection("users").doc(userId).update(data);
}
