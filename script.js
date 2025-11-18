const countdownEl = document.getElementById("countdown");

// Fecha del evento
const eventDate = new Date("2025-12-06T12:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = eventDate - now;

  if (diff <= 0) {
    countdownEl.innerHTML = "¡Hoy celebramos los 80 años de Chami! 🎉";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);

  countdownEl.innerHTML = `
    Faltan <strong>${days}</strong> días,
    <strong>${hours}</strong> hs y
    <strong>${minutes}</strong> min
  `;
}

updateCountdown();
setInterval(updateCountdown, 60000); // actualiza cada minuto

// ========= FLECHA VOLVER ARRIBA =========
const scrollTopBtn = document.querySelector(".scroll-top");

if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("scroll-top--visible");
    } else {
      scrollTopBtn.classList.remove("scroll-top--visible");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
