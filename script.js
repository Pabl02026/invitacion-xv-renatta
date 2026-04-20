// 🎯 PARAMETROS
const params = new URLSearchParams(window.location.search);

const nombre = params.get("nombre") || "Invitado";
const pases = params.get("pases") || "1";

document.getElementById("nombre").textContent = nombre;
document.getElementById("pases").textContent = "Tienes " + pases + " pase(s)";

// 📍 UBICACION (CAMBIA ESTE LINK)
document.getElementById("ubicacion").href =
  "https://maps.google.com";

// 📲 WHATSAPP (CAMBIA EL NUMERO)
document.getElementById("whatsapp").href =
  "https://wa.me/521XXXXXXXXXX?text=" +
  encodeURIComponent("Hola, confirmo asistencia. Somos " + pases + " personas.");

// 🎶 MUSICA
const audio = document.getElementById("musica");
const btn = document.getElementById("btnMusica");

btn.addEventListener("click", () => {
  audio.play();
});

// 🌸 FLORES
const floresContainer = document.querySelector(".flores");

for (let i = 0; i < 20; i++) {
  const flor = document.createElement("span");
  flor.textContent = "🌺";

  flor.style.left = Math.random() * 100 + "vw";
  flor.style.animationDuration = (5 + Math.random() * 5) + "s";
  floresContainer.appendChild(flor);
}

// ⏳ CONTADOR (AJUSTA FECHA)
const fechaEvento = new Date("June 20, 2026 17:00:00").getTime();

setInterval(() => {
  const ahora = new Date().getTime();
  const diferencia = fechaEvento - ahora;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);

  document.getElementById("contador").textContent =
    `⏳ ${dias} días ${horas}h ${minutos}m`;
}, 1000);