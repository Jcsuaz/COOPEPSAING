// Funciones de registro e inicio de sesión
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
    })
    .catch((error) => {
      console.error(error);
    });
}
