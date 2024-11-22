document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("checkbox");
  const intro = document.getElementById("intro");
  const mainContent = document.getElementById("main-content");
  const switchElement = document.querySelector(".switch");

  // Estado inicial
  if (checkbox.checked) {
    intro.style.display = "none";
    mainContent.style.display = "block";
    switchElement.classList.add("neon-active");
  } else {
    intro.style.display = "flex"; // Flexbox para centralização
    intro.style.opacity = "1";
    mainContent.style.display = "none";
    switchElement.classList.remove("neon-active");
  }

  // Evento para mudança
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      switchElement.classList.add("neon-active");

      // Animação para o conteúdo
      setTimeout(() => {
        intro.style.opacity = "0";
        setTimeout(() => {
          intro.style.display = "none";
          mainContent.style.display = "block";
          gsap.from("#main-content", { opacity: 0, y: 50, duration: 2 });
          gsap.to("#main-content", { opacity: 1, duration: 2 });
        }, 600);
      }, 900);
    } else {
      mainContent.style.display = "none";
      intro.style.display = "flex"; // Garantir que o flexbox permanece
      intro.style.opacity = "1";
      switchElement.classList.remove("neon-active");
    }
  });
});
