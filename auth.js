// auth.js
import { auth, db } from './firebase-config.js';

export function registerUser(email, password) {
  return auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return db.collection("users").doc(user.uid).set({
        email: email,
        role: "miembro",
      });
    });
}

export function loginUser(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}
