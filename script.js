// Manejar el formulario de préstamos
document.getElementById('prestamoForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombrePrestamo').value;
  const monto = document.getElementById('monto').value;
  const fecha = document.getElementById('fecha').value;

  // Guardar en Firestore
  db.collection('prestamos').add({
    nombre,
    monto,
    fecha
  }).then(() => {
    alert('Préstamo registrado correctamente.');
    document.getElementById('prestamoForm').reset();
    cargarReportes(); // Actualizar la tabla de reportes
  }).catch((error) => {
    console.error('Error al registrar el préstamo:', error);
  });
});

// Cargar reportes de préstamos
function cargarReportes() {
  const reportesTable = document.getElementById('reportesTable');
  reportesTable.innerHTML = ''; // Limpiar la tabla

  db.collection('prestamos').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const row = `
        <tr>
          <td>${data.nombre}</td>
          <td>${data.monto}</td>
          <td>${data.fecha}</td>
        </tr>
      `;
      reportesTable.innerHTML += row;
    });
  }).catch((error) => {
    console.error('Error al cargar reportes:', error);
  });
}

// Cargar reportes al iniciar la página
cargarReportes();

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
