import { auth, db } from './firebase-config.js';

// Funciones de autenticación
function registerUser(email, password) {
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      db.collection("users").doc(user.uid).set({
        email: email,
        role: "miembro",
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

function loginUser(email, password) {
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Redirigir al usuario a la página principal
      console.log('Usuario logueado');
    })
    .catch((error) => {
      console.error(error);
    });
}

// Ejemplo de uso
document.addEventListener('DOMContentLoaded', () => {
  // Aquí puedes agregar tus formularios de autenticación y lógica de la aplicación
  console.log('Aplicación cargada');
});
