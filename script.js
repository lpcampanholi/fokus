// CONTEXTO

const html = document.querySelector("html");
const focoBt = document.querySelector(".app__card-button--foco");
const curtoBt = document.querySelector(".app__card-button--curto");
const longoBt = document.querySelector(".app__card-button--longo");

const banner = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");

const botoes = document.querySelectorAll(".app__card-button");

focoBt.addEventListener("click", () => {
  alterarContexto("foco");
  focoBt.classList.add("active");
});

curtoBt.addEventListener("click", () => {
  alterarContexto("descanso-curto");
  curtoBt.classList.add("active");
});

longoBt.addEventListener("click", () => {
  alterarContexto("descanso-longo");
  longoBt.classList.add("active");
});

function alterarContexto(contexto) {
  botoes.forEach((botao) => {
    botao.classList.remove("active");
  });
  html.setAttribute("data-contexto", contexto);
  banner.setAttribute("src", `imagens/${contexto}.png`);
  switch (contexto) {
    case "foco":
      titulo.innerHTML = `
      Otimize sua produtividade,<br>
      <strong class="app__title-strong">mergulhe no que importa.</strong>
      `
      break;
    case "descanso-curto":
      titulo.innerHTML = `
      Que tal dar uma respirada?<br>
      <strong class="app__title-strong">Faça uma pausa curta!</strong>
      `
      break;
    case "descanso-longo":
      titulo.innerHTML = `
      Hora de voltar à superfície.<br>
      <strong class="app__title-strong">Faça uma pausa longa.</strong>
      `
      break;
    default:
      break;
  };
};

// MÚSICA

const musicaFocoInput = document.querySelector("#alternar-musica");
const musica = new Audio("sons/luna-rise-part-one.mp3");

musicaFocoInput.checked = false;
musica.loop = true;

musicaFocoInput.addEventListener("change", () => {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
});


// TEMPORIZADOR

let segundos = 5;
let intervaloId = null;

console.log(segundos);

const contagemRegressiva = () => {
  if (segundos <= 0) {
    alert("Tempo finalizado");
    return
  };
  segundos--;
  console.log(segundos);
};

const startPauseBt = document.querySelector("#start-pause");

startPauseBt.addEventListener("click", iniciarOuPausar);

function iniciarOuPausar() {
  if (intervaloId) {
    zerar();
    return
  };
  intervaloId = setInterval(contagemRegressiva, 1000);
};

function zerar() {
  clearInterval(intervaloId);
  intervaloId = null;
}
