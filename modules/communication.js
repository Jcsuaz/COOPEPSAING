// Funciones para gestionar anuncios
function createAnnouncement(announcementData) {
  return db.collection("announcements").add(announcementData);
}

function getAnnouncements() {
  return db.collection("announcements").get();
}
