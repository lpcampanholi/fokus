const btn = document.querySelector("#button");
const textArea = document.querySelector("#text_area");
const btnSubmit = document.querySelector("#btnSubmit");
const form = document.querySelector("form");
const listaDeTarefas = document.querySelector(".listaDeTarefas");

// Obter itens da localStorage
const tarefas = JSON.parse(localStorage.getItem("Tarefas")) || [];
console.log(`tarefas: ${tarefas}`);

// Criar elemento Tarefa
function criarElementoTarefa(tarefa) {
  const li = document.createElement("li");
  li.classList.add("tarefa");

  const paragrafo = document.createElement("p");
  paragrafo.textContent = tarefa.descricao;

  const botao = document.createElement("button");
  botao.textContent = "Editar";

  li.append(paragrafo);
  li.append(botao);

  // Editar tarefa
  botao.addEventListener("click", () => {
    const novoTexto = prompt("Tarefa", paragrafo.textContent);
    paragrafo.textContent = novoTexto || paragrafo.textContent;
  });

  return li;
};


// Aparecer formulário
btn.addEventListener("click", () => {
  textArea.classList.toggle("hidden");
});


// Evento click Adicionar Tarefa
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  const tarefa = {
  descricao: textArea.value
  };

  tarefas.push(tarefa);
  localStorage.setItem("Tarefas", JSON.stringify(tarefas));

  const novoElemento = criarElementoTarefa(tarefa);
  listaDeTarefas.append(novoElemento);

  textArea.value = "";
  textArea.classList.add("hidden");

});


// Renderizar tarefas na tela
tarefas.forEach((tarefa) => {
  const novoElemento = criarElementoTarefa(tarefa);
  listaDeTarefas.append(novoElemento);
});


// function atualizarTarefa(tarefa) {
//   const tarefas = JSON.parse(localStorage.getItem("Tarefas"));


// };
