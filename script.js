// parametros
const params = new URLSearchParams(window.location.search);
const nombre = params.get("nombre") || "Invitado";
const pases = params.get("pases") || "1";

document.getElementById("nombre").textContent = nombre;
document.getElementById("pases").textContent =
"🎟️ Acceso para " + pases + " persona(s)";

// ubicacion
document.getElementById("ubicacion").href =
"https://www.google.com/maps/place/Palapa+El+Fresno/@25.4867681,-100.9474088";

// whatsapp
document.getElementById("whatsapp").href =
"https://wa.me/528443884334?text=" +
encodeURIComponent(
  "Hola 😊 confirmo asistencia a los XV de Renatta.\n" +
  "Nombre: " + nombre + "\n" +
  "Asistiremos " + pases + " persona(s).\n\n" +
  "¡Nos vemos en la fiesta! 🌺"
);

// 💌 pantalla inicio + musica
const pantalla = document.getElementById("pantallaInicio");
const botonAbrir = document.getElementById("abrirInvitacion");
const audio = document.getElementById("musica");

botonAbrir.addEventListener("click", () => {
  pantalla.style.display = "none";
  audio.play();
});

// boton musica
const btn = document.getElementById("btnMusica");
let reproduciendo = false;

btn.addEventListener("click", () => {
  if (!reproduciendo) {
    audio.play();
    btn.textContent = "🌊 Sonando...";
    reproduciendo = true;
  } else {
    audio.pause();
    btn.textContent = "🎵 Activar ambiente";
    reproduciendo = false;
  }
});

// flores
const floresContainer = document.querySelector(".flores");

for (let i = 0; i < 30; i++) {
  const flor = document.createElement("span");
  flor.textContent = "🌺";
  flor.style.left = Math.random() * 100 + "vw";
  flor.style.animationDuration = (5 + Math.random() * 5) + "s";
  floresContainer.appendChild(flor);
}

// contador elegante
const fechaEvento = new Date("June 20, 2026 17:00:00").getTime();

setInterval(() => {
  const ahora = new Date().getTime();
  const diferencia = fechaEvento - ahora;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);

  document.getElementById("contador").innerHTML =
    `⏳ <b>${dias}</b> días • <b>${horas}</b> hrs • <b>${minutos}</b> min`;
}, 1000);