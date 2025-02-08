// Dados dos projetos
const projetos = {
  1: {
    titulo: "Bíblia Virtual",
    imagem: "/assets/img/bibliavirtual.png",
    descricao:
      "Este projeto foi desenvolvido com o objetivo de tornar o acesso às Escrituras mais prático e inclusivo. O site conta com todos os livros da Bíblia organizados de forma intuitiva, além de uma seção de versículos por tema para facilitar o estudo. Inclui também uma área com vídeos explicativos, sistema de leitura por voz, suporte em Libras, e um recurso de anotações que permite salvar notas em PDF ou diretamente no próprio site.\n\nAtualmente, o projeto está pausado, pois foi criado em uma fase em que eu ainda estava em processo de aprendizado. No futuro, pretendo redesenvolvê-lo com uma abordagem mais moderna e eficiente, aproveitando o conhecimento e as habilidades que adquiri desde então.",
    tecnologias: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],
    deploy: "https://bibliavirtual.netlify.app",
    github: "https://github.com/seuusuario/bibliavirtual",
  },
  
  2: {
    titulo: "Site Institucional - ASSTJ ",
    imagem: "/assets/img/",
    descricao:
      "Um site interativo que permite acessar e pesquisar versículos bíblicos.",
    tecnologias: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],
    deploy: "https://bibliavirtual.netlify.app",
  },
  3: {
    titulo: "Sistema de Gestão",
    imagem: "/assets/img/",
    descricao:
      "Um site interativo que permite acessar e pesquisar versículos bíblicos.",
    tecnologias: [
      "fab fa-react",
      "fab fa-js",
      "fab fa-css3-alt",
      "fab fa-github",
      "fab fa-figma",
    ],
    deploy: "#",
    github: "https://github.com/AntonioviniciusA/gestaocelular",
  },
  4: {
    titulo: "Site Institucional Faculdade Elohin",
    imagem: "/assets/img/",
    descricao:
      "Um site interativo que permite acessar e pesquisar versículos bíblicos.",
    tecnologias: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],
    deploy: "https://bibliavirtual.netlify.app",
    github: "https://github.com/seuusuario/bibliavirtual",
  },
  5: {
    titulo: "Secret Word Game",
    imagem: "/assets/img/",
    descricao:
      "Um site interativo que permite acessar e pesquisar versículos bíblicos.",
    tecnologias: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],
    deploy: "https://bibliavirtual.netlify.app",
    github: "https://github.com/seuusuario/bibliavirtual",
  },
  6: {
    titulo: "Linktree - Faculdade Cerrado",
    imagem: "/assets/img/",
    descricao:
      "Um site interativo que permite acessar e pesquisar versículos bíblicos.",
    tecnologias: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],
    deploy: "https://bibliavirtual.netlify.app",
    github: "https://github.com/seuusuario/bibliavirtual",
  },
};

// Função para abrir o modal
function openModal(projetoID) {
  const projeto = projetos[projetoID];

  document.getElementById("modal-title").innerText = projeto.titulo;
  document.getElementById("modal-image").src = projeto.imagem;
  document.getElementById("modal-description").innerText = projeto.descricao;

  // Gerar os ícones das tecnologias
  const techContainer = document.getElementById("modal-techs");
  techContainer.innerHTML = "";
  projeto.tecnologias.forEach((tech) => {
    const icon = document.createElement("i");
    icon.className = tech;
    techContainer.appendChild(icon);
  });

  // Links
  document.getElementById("modal-deploy").href = projeto.deploy;
  document.getElementById("modal-github").href = projeto.github;

  document.getElementById("modal").style.display = "flex";
}

// Fechar modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}
