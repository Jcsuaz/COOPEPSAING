// Manejar el formulario de contacto
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  // Guardar en Firestore
  db.collection('contactos').add({
    nombre,
    email,
    mensaje,
    fecha: new Date()
  }).then(() => {
    alert('Mensaje enviado correctamente.');
    document.getElementById('contactForm').reset();
  }).catch((error) => {
    console.error('Error al enviar el mensaje:', error);
  });
});

// Manejar registro de usuarios
document.getElementById('btnRegistro').addEventListener('click', () => {
  const email = document.getElementById('authEmail').value;
  const password = document.getElementById('authPassword').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert('Usuario registrado correctamente.');
    })
    .catch((error) => {
      console.error('Error al registrar:', error.message);
    });
});

// Manejar inicio de sesión
document.getElementById('btnLogin').addEventListener('click', () => {
  const email = document.getElementById('authEmail').value;
  const password = document.getElementById('authPassword').value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert('Inicio de sesión exitoso.');
    })
    .catch((error) => {
      console.error('Error al iniciar sesión:', error.message);
    });
});
