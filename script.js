// esperar a que cargue TODO
document.addEventListener("DOMContentLoaded", () => {

  // 🔗 parámetros del link
  const params = new URLSearchParams(window.location.search);
  const nombreInvitado = params.get("nombre") || "INVITADO";
  const pases = params.get("pases") || "1";

  // 🌺 nombre de la quinceañera (fijo elegante)
  const nombreQuince = "RENATTA";

  // ✨ mostrar nombre del invitado
  document.getElementById("nombre").textContent =
    nombreInvitado.toUpperCase();

  // 🎟️ pases
  document.getElementById("pases").textContent =
    "🎟️ Acceso reservado para " + pases + " persona(s)";

  // 📍 ubicación
  document.getElementById("ubicacion").href =
    "https://maps.app.goo.gl/o7g5fjQbHxmXxnxK7";

  // 📲 whatsapp (mensaje elegante)
  document.getElementById("whatsapp").href =
    "https://wa.me/528443884334?text=" +
    encodeURIComponent(
      "Hola 😊\n" +
      "Con gusto confirmo asistencia a los XV de " + nombreQuince + " 🌺\n\n" +
      "Se han reservado " + pases + " lugares a mi nombre.\n" +
      "Confirmamos asistencia de:\n" +
      "Nombre: "
    );

  // 🌺 PARTÍCULAS DE FLORES
  function lanzarFlores() {
    const contenedor = document.querySelector(".flores");
    const emojis = ["🌺","🌸","🌼"];

    for (let i = 0; i < 25; i++) {
      const flor = document.createElement("span");

      flor.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      flor.style.left = Math.random() * 100 + "vw";
      flor.style.fontSize = (Math.random() * 15 + 15) + "px";
      flor.style.animationDuration = (Math.random() * 2 + 2) + "s";

      contenedor.appendChild(flor);

      setTimeout(() => {
        flor.remove();
      }, 3000);
    }
  }

  // 💌 pantalla inicio + música
  const pantalla = document.getElementById("pantallaInicio");
  const boton = document.getElementById("abrirInvitacion");
  const audio = document.getElementById("musica");

  boton.addEventListener("click", () => {

    const card = document.querySelector(".inicio-card");
    const overlay = document.querySelector(".overlay");

    // 💨 desaparecer cuadro
    card.style.opacity = "0";
    card.style.transform = "scale(0.9)";
    card.style.transition = "0.3s ease";

    // ✨ mostrar invitación inmediatamente
    overlay.style.display = "flex";
    overlay.style.opacity = "1";

    // 🌺 partículas
    lanzarFlores();

    // 💥 animación apertura
    pantalla.classList.add("abrir");

    // 🎶 música
    audio.play().catch(() => {});

    // 🔚 ocultar pantalla
    setTimeout(() => {
      pantalla.style.display = "none";
    }, 1000);
  });

  // 🎶 control música
  const toggleBtn = document.getElementById("toggleMusica");
  let reproduciendo = true;

  toggleBtn.addEventListener("click", () => {
    if (reproduciendo) {
      audio.pause();
      toggleBtn.textContent = "🔇 Activar música";
    } else {
      audio.play();
      toggleBtn.textContent = "🎵 Pausar música";
    }
    reproduciendo = !reproduciendo;
  });

  // ⏳ contador
  const fechaEvento = new Date("June 20, 2026 17:00:00").getTime();

  setInterval(() => {
    const ahora = new Date().getTime();
    const diff = fechaEvento - ahora;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);

    document.getElementById("contador").innerHTML =
      `⏳ <b>${d}</b> días • <b>${h}</b> hrs • <b>${m}</b> min`;
  }, 1000);

});