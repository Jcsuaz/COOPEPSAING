// Funciones para gestionar préstamos
function requestLoan(userId, loanData) {
  return db.collection("loans").add({
    userId: userId,
    ...loanData,
    status: "pendiente",
  });
}

function approveLoan(loanId) {
  return db.collection("loans").doc(loanId).update({ status: "aprobado" });
}

function rejectLoan(loanId) {
  return db.collection("loans").doc(loanId).update({ status: "rechazado" });
}
