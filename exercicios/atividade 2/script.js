const botoes = document.querySelectorAll(".botao");

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    desativaBotoes();
    botao.classList.add("ativo");
  });
});

function desativaBotoes() {
  botoes.forEach((botao) => {
    botao.classList.remove("ativo");
  })
};

const musica = new Audio("making-progress-dan-phillipson-main-version-02-56-10491.mp3");
const botaoMusica = document.querySelector("#botao-musica");

musica.volume = 0.3;
musica.loop = true;
botaoMusica.checked = false;

botaoMusica.addEventListener("change", () => {
  if(musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
});
