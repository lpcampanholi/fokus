# Projeto javascript-manipulando-elementos-do-dom

Principais funcionalidades:

- Timer de Foco / Pausa / Descanso
- CRUD de tarefas
- Persistir dados na localStorage

## O que aprendi com este projeto
- Métodos `.setInterval()` e `.clearInterval()` para lidar com contagens

- CRUD de tarefas (salvar, atualizar e excluir) na localStorage

```js
  // Obter itens
  const tarefas = JSON.parse(localStorage.getItem("tarefas"));

  // Atualizar itens
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
```

- Métodos para a lista de classes de um elemento: `.classList.add()`, `.classList.remove()`, `.classList.toggle()`, `.classList.contains()`

- Métodos para manipulação do DOM: `.querySelector()`,, `.querySelectorAll()` `.addEventListener()`, `.setAttribute()`, `.getAttribute()`, `.remove()`

- Criação e manipulação de áudios, instanciando a classe `Audio`:

  Criação: `const musica = new Audio(".\caminho-do-audio.mp3");`  
  Métodos `musica.play()`, `musica.pause()`  
  Propriedades: `musica.volume = 0.3` (valores de 0 a 1), `musica.loop = true`, `musica.paused` (retorna true ou false)  

- Eventos customizados

  ```js
  const evento = new CustomEvent("FocoFinalizado");
  document.dispatch(evento);
  ```

- Early Return dentro do If:

  ```js
  if () {
    // Bloco de código
    return;
  };
  // Continua o código
  ```
