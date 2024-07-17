```html
  <button class="botao ativo">Foco</button>
  <button class="botao">Pausa</button>
  <button class="botao">Descanso</button>
  <label for="botao-musica">Tocar Música</label>
  <input type="checkbox" id="botao-musica">

```

```css
.botao {
  color: #112c6f;
  background-color: white;
  border-radius: 0.2em;
  padding: 0.5em 2em;
  border: 2px solid #112c6f;
}

.botao:hover {
  cursor: pointer;
}

.ativo {
  color: white;
  background-color: #112c6f;
  border: 2px solid #112c6f;
}
```

```javascript
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

```