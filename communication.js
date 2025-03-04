// Funciones para gestionar anuncios
import { auth, db } from './firebase-config.js';
function createAnnouncement(announcementData) {
  return db.collection("announcements").add(announcementData);
}

function getAnnouncements() {
  return db.collection("announcements").get();
}
