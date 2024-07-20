const btnAdicionarNovaTarefa = document.querySelector("#btnSalvar");
const textArea = document.querySelector(".textarea");
const btnSubmit = document.querySelector("#btnSubmit");
const btnCancelar = document.querySelector("#btnCancelar");
const form = document.querySelector("form");
const listaDeTarefas = document.querySelector(".listaDeTarefas");

// Obter itens da localStorage
const tarefas = JSON.parse(localStorage.getItem("Tarefas")) || [];
console.log(`tarefas: ${tarefas}`);

// Atualizar tarefa
function atualizarTarefa() {
  localStorage.setItem("Tarefas", JSON.stringify(tarefas));
};

// Limpar formulário
function limparFormulario() {
  textArea.value = "";
  form.classList.add("hidden");
};

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
    const novoTexto = prompt("Editar tarefa", paragrafo.textContent);
    if (novoTexto) {
      paragrafo.textContent = novoTexto;
      tarefa.descricao = novoTexto;
      atualizarTarefa();
    };
  });
  return li;
};

// Aparecer formulário
btnAdicionarNovaTarefa.addEventListener("click", () => {
  form.classList.toggle("hidden");
});

// Botão cancelar
btnCancelar.addEventListener("click", (e) => {
  e.preventDefault();
  limparFormulario();
});

// Evento click Adicionar Tarefa Botão Salvar
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (textArea.value) {
    const tarefa = {
    descricao: textArea.value
    };
    tarefas.push(tarefa);
    atualizarTarefa();
    const novoElemento = criarElementoTarefa(tarefa);
    listaDeTarefas.append(novoElemento);
    limparFormulario();
  } else {
    alert("A tarefa não pode estar vazia");
  };
});

// Renderizar tarefas na tela
tarefas.forEach((tarefa) => {
  const novoElemento = criarElementoTarefa(tarefa);
  listaDeTarefas.append(novoElemento);
});
