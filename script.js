// Verificar autenticación
auth.onAuthStateChanged((user) => {
  if (!user) {
    // Redirigir a la página de registro si no está autenticado
    window.location.href = "registro.html";
  }
});

// Cerrar sesión
function cerrarSesion() {
  auth.signOut().then(() => {
    window.location.href = "registro.html";
  }).catch((error) => {
    console.error('Error al cerrar sesión:', error);
  });
}
