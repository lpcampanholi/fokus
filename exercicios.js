// Selecionar os seguintes elementos do HTML:

// O documento HTML, onde serão manipulados os elementos;
const html = document.querySelector("html");

// O elemento HTML em que irá aparecer o temporizador;
const displayTempo = document.querySelector("#timer");

// O elemento HTML no qual as imagens de cada contexto irão trocar de posição;
const banner = document.querySelector(".app__image");

// O elemento HTML onde as frases de cada contexto irão trocar de posição.
const titulo = document.querySelector(".app__title");

// Botão que servirá para iniciar e pausar o temporizador;
const botaoIniciar = document.querySelector(".app__card-primary-button");

// Botão para escolher o temporizador de “Foco”;
const focoBt = document.querySelector(".app__card-button--foco");

// Botão para escolher o temporizador de “Descanso curto”;
const curtoBt = document.querySelector(".app__card-button--curto");

// Botão para escolher o temporizador de “Descanso longo”.
const longoBt = document.querySelector(".app__card-button--longo");

// Temporizador de foco com valor 1500;
const duracaoFoco = 1500;

// Temporizador de descanso curto com valor 300;
const duracaoDescansoCurto = 300;

// Temporizador de descanso longo com valor 900.
const duracaoDescansoLongo = 900;


// Quer tal dar uma respirada? Faça uma pausa curta!
// Hora de voltar à superfície. Faça uma pausa longa.
