import { auth, db } from './firebase-config.js';

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const mainContent = document.getElementById('main-content');
  const authSection = document.getElementById('auth-section');

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      authSection.style.display = 'none';
      mainContent.style.display = 'block';
    } catch (error) {
      console.error('Error al iniciar sesión:', error.code, error.message);
      alert('Error al iniciar sesión: ' + error.message);
    }
  });

 registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

   // Guardar la información del usuario en Firestore
  await db.collection("users").doc(user.uid).set({
    email: email,
      // ... otros datos del usuario que desees guardar ...
    })
    .then(() => {
      alert('Registro exitoso');
    })
    .catch((error) => {
      console.error('Error al guardar en Firestore:', error);
      alert('Error al registrar: ' + error.message);
    });

  auth.onAuthStateChanged((user) => {
    if (user) {
      authSection.style.display = 'none';
      mainContent.style.display = 'block';
    } else {
      authSection.style.display = 'block';
      mainContent.style.display = 'none';
    }
  });

  // Prueba de conexión a Firestore
  const testCollection = db.collection('testCollection');

  testCollection.add({
    message: '¡Conexión a Firestore exitosa!'
  })
  .then((docRef) => {
    console.log('Documento escrito con ID: ', docRef.id);

    testCollection.get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, ' => ', doc.data());
        });
      })
      .catch((error) => {
        console.error('Error al leer documentos: ', error);
      });
  })
  .catch((error) => {
    console.error('Error al escribir documento: ', error);
  });
});
