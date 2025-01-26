const carrossel = document.querySelector(".icon");
// Clona os ícones para o efeito infinito
const clone = carrossel.cloneNode(true);
document.querySelector(".carroseul-icons").appendChild(clone);
