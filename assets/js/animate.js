// Animação do contorno
gsap.to("text", {
  strokeDashoffset: 0,
  duration: 3,
  ease: "power2.inOut",
  fill: "white",
});

setTimeout(function () {
  document.querySelector(".start-animation").style.transition =
    "opacity 1s ease-out";
  document.querySelector(".start-animation").style.opacity = 0; // Esconde a animação inicial suavemente
}, 2500); // Tempo igual à duração da animação do contorno 2500

setTimeout(function () {
  document.querySelector(".start-animation").style.display = "none"; // Esconde a animação após a transição
  document.querySelector(".container-home").style.display = "flex"; // Exibe a nova seção
  document.querySelector(".container-home").style.opacity = 1; // Torna visível a nova seção
}, 3000); // Aguarda a animação de contorno ser concluída 3000
