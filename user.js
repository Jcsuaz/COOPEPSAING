// Funciones para gestionar el perfil del usuario
function getUserProfile(userId) {
  return db.collection("users").doc(userId).get();
}

function updateUserProfile(userId, data) {
  return db.collection("users").doc(userId).update(data);
}
