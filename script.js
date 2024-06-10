// Este evento se dispara cuando todo el contenido de la página se ha cargado completamente
document.addEventListener("DOMContentLoaded", function () {
  // Obtener referencias a los elementos HTML necesarios
  const backgroundMusic = document.getElementById("backgroundMusic");
  const muteButton = document.getElementById("muteButton");
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");
  const responseMessage = document.getElementById("responseMessage");

  backgroundMusic.volume = 0.2;

  // Función para reproducir música y manejar restricciones de autoplay
  const playMusic = () => {
    backgroundMusic.play().catch(function (error) {
      console.log("Autoplay prevenido:", error);
    });
  };

  // Intentar reproducir la música cuando la página carga
  playMusic();

  // Manejar el clic del botón de mute
  muteButton.addEventListener("click", function () {
    backgroundMusic.muted = !backgroundMusic.muted;
    muteButton.textContent = backgroundMusic.muted ? "🔇" : "🔊";
  });

  // Mostrar mensaje si se elige "Sí"
  yesButton.addEventListener("click", function () {
    const today = new Date();
    const date = today.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    responseMessage.textContent = `Nuestra relación comienza el: ${date}. 💖`;
    responseMessage.style.opacity = 1;
  });

  // Mostrar mensaje si se elige "No"
  noButton.addEventListener("click", function () {
    responseMessage.textContent =
      "No hay problema, gracias por tu honestidad. 😊";
    responseMessage.style.opacity = 1;
  });

  // Agregar un evento general para reproducir música al interactuar con la página
  document.addEventListener("click", function () {
    playMusic();
  });
});
