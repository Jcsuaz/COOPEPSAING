// script.js
import { registerUser, loginUser } from './auth.js';

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const mainContent = document.getElementById('main-content');
  const authSection = document.getElementById('auth-section');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    loginUser(email, password)
      .then(() => {
        // Inicio de sesión exitoso
        authSection.style.display = 'none';
        mainContent.style.display = 'block';
      })
      .catch((error) => {
        alert('Error al iniciar sesión: ' + error.message);
      });
  });

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    registerUser(email, password)
      .then(() => {
        alert('Registro exitoso');
      })
      .catch((error) => {
        alert('Error al registrar: ' + error.message);
      });
  });

  auth.onAuthStateChanged((user) => {
    if (user) {
      // Usuario autenticado
      authSection.style.display = 'none';
      mainContent.style.display = 'block';
    } else {
      // Usuario no autenticado
      authSection.style.display = 'block';
      mainContent.style.display = 'none';
    }
  });

});
