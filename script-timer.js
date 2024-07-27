// CONTEXTO: FOCO, PAUSA, DESCANSO

const html = document.querySelector("html");
const focoBt = document.querySelector(".app__card-button--foco");
const pausaBt = document.querySelector(".app__card-button--curto");
const descansoBt = document.querySelector(".app__card-button--longo");

const banner = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");

const botoes = document.querySelectorAll(".app__card-button");

focoBt.addEventListener("click", () => {
  segundos = 1800;
  alterarContexto("foco");
  focoBt.classList.add("active");
});

pausaBt.addEventListener("click", () => {
  segundos = 300;
  alterarContexto("descanso-curto");
  pausaBt.classList.add("active");
});

descansoBt.addEventListener("click", () => {
  segundos = 900;
  alterarContexto("descanso-longo");
  descansoBt.classList.add("active");
});

function alterarContexto(contexto) {
  mostrarTempo();
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
      `;
      break;
    case "descanso-curto":
      titulo.innerHTML = `
      Que tal dar uma respirada?<br>
      <strong class="app__title-strong">Faça uma pausa curta!</strong>
      `;
      break;
    case "descanso-longo":
      titulo.innerHTML = `
      Hora de voltar à superfície.<br>
      <strong class="app__title-strong">Faça uma pausa longa.</strong>
      `;
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
  };
});

// TEMPORIZADOR

// Áudios
const audioTempoFinalizado = new Audio("sons/beep.mp3");
const audioPause = new Audio("sons/pause.mp3");
const audioPlay = new Audio("sons/play.wav");

let segundos = 1800;
let intervaloId = null;

// Botão começar
const startPauseBt = document.querySelector("#start-pause");
const startPauseBtConteudo = document.querySelector("#start-pause span");
const startPauseBtImagem = document.querySelector("#start-pause img");

startPauseBt.addEventListener("click", () => {
  if (intervaloId) {
    audioPause.play();
    pararIntervalo();
    return;
  };
  audioPlay.play();
  iniciarIntervalo();
});

const contagemRegressiva = () => {
  if (segundos <= 0) {
    audioTempoFinalizado.play();
    const focoAtivo = html.getAttribute("data-contexto") == "foco";
    if (focoAtivo) {
      const evento = new CustomEvent("FocoFinalizado");
      document.dispatchEvent(evento);
    };
    pararIntervalo();
    mostrarTempo();
    return;
  };
  segundos--;
  mostrarTempo();
};

function iniciarIntervalo() {
  intervaloId = setInterval(contagemRegressiva, 1000);
  startPauseBtConteudo.textContent = "Pausar";
  startPauseBtImagem.setAttribute("src", "imagens/pause.png");
};

function pararIntervalo() {
  clearInterval(intervaloId);
  intervaloId = null;
  console.log("Intervalo parado");
  startPauseBtConteudo.textContent = "Começar";
  startPauseBtImagem.setAttribute("src", "imagens/play_arrow.png");
};


// View Temporizador
const tempoNaTela = document.querySelector("#timer");

function mostrarTempo() {
  const tempo = new Date(segundos * 1000);
  const tempoFormatado = tempo.toLocaleTimeString("pr-BR", {minute: "2-digit", second: "2-digit"});
  tempoNaTela.innerHTML = `${tempoFormatado}`;
};

mostrarTempo();
