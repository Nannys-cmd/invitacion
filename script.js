// Fecha del evento
const eventDate = new Date(2025, 11, 6, 12, 0);
const countdownEl = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date();
  const diff = eventDate - now;

  if (diff <= 0) {
    countdownEl.textContent = "¡Hoy celebramos a Chami! 🎉";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  countdownEl.textContent = `Faltan ${days} días, ${hours} horas y ${minutes} minutos`;
}

updateCountdown();
setInterval(updateCountdown, 60000);
