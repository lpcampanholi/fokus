const botaoAdicionar = document.querySelector(".app__button--add-task");
const formAdicionarTarefa = document.querySelector(".app__form-add-task");
const textArea = document.querySelector(".app__form-textarea");
const ulTarefas = document.querySelector(".app__section-task-list");
const botaoCancelar = document.querySelector(".app__form-footer__button--cancel");
const paragrafoTarefaAtiva = document.querySelector(".app__section-active-task-description");
const btnRemoverConcluidas = document.querySelector("#btn-remover-concluidas");
const btnRemoverTodas = document.querySelector("#btn-remover-todas");

// Obter tarefas na localStorage
let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

// Tarefa selecionada
let tarefaSelecionada = null;
let liTarefaSelecionada = null;

// Atualizar tarefas na localStorage
function atualizarTarefas() {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
};

// Limpar formulário
function limparFormulario() {
  textArea.value = "";
  formAdicionarTarefa.classList.add("hidden");
};

// Criar novo Elemento Tarefa
function criarElementoTarefa(tarefa) {
  const li = document.createElement("li");
  li.classList.add("app__section-task-list-item");

  const svg = document.createElement("svg");
  svg.innerHTML = `
    <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
      <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
    </svg>  
  `;

  const paragrafo = document.createElement("p");
  paragrafo.classList.add("app__section-task-list-item-description");
  paragrafo.textContent = tarefa.descricao;

  const botao = document.createElement("button");
  botao.classList.add("app_button-edit");
  const imagemBotao = document.createElement("img");
  imagemBotao.setAttribute("src", "imagens/edit.png");
  botao.append(imagemBotao);

  li.append(svg);
  li.append(paragrafo);
  li.append(botao);

  // Botão editar // Editar tarefas
  botao.addEventListener("click", () => {
    // debugger;
    const novaDescricao = prompt("Editar tarefa", paragrafo.textContent);
    if (novaDescricao) {
      paragrafo.textContent = novaDescricao;
      tarefa.descricao = novaDescricao;
      atualizarTarefas();
    };
  });

  // Selecionar tarefa
  if (tarefa.completa) {
    li.classList.add("app__section-task-list-item-complete");
    botao.setAttribute("disabled", "disabled");
  } else {
    li.addEventListener("click", () => {
      // Remover a seleção de todas tarefas
      document.querySelectorAll(".app__section-task-list-item-active")
        .forEach(elemento => elemento.classList.remove("app__section-task-list-item-active"));
      // Remover seleção da tarefa ativa se ela já estiver selecionada
      if (tarefaSelecionada == tarefa || tarefa.completa) {
        paragrafoTarefaAtiva.textContent = "";
        tarefaSelecionada = null;
        liTarefaSelecionada = null;
        return;
      };
      // Selecionar tarefa
      tarefaSelecionada = tarefa;
      liTarefaSelecionada = li;
      paragrafoTarefaAtiva.textContent =  tarefa.descricao;
      li.classList.add("app__section-task-list-item-active");
    });
  };

  return li;
};

// Botão Adicionar tarefa // Aparecer Formulário
botaoAdicionar.addEventListener("click", () => {
  formAdicionarTarefa.classList.toggle("hidden");
});

// Botão Cancelar
botaoCancelar.addEventListener("click", limparFormulario);

// Botão Salvar // Criar nova tarefa
formAdicionarTarefa.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const tarefa = {
    descricao: textArea.value
  };
  tarefas.push(tarefa);

  const elementoTarefa = criarElementoTarefa(tarefa);
  ulTarefas.append(elementoTarefa);
  textArea.value = "";
  formAdicionarTarefa.classList.add("hidden");

  atualizarTarefas();
});

// Renderizar tarefas na tela
tarefas.forEach((tarefa) => {
  const elementoTarefa = criarElementoTarefa(tarefa);
  ulTarefas.append(elementoTarefa);
});

// Completar tarefa
document.addEventListener("FocoFinalizado", () => {
  if (tarefaSelecionada && liTarefaSelecionada) {
    liTarefaSelecionada.classList.remove("app__section-task-list-item-active");
    liTarefaSelecionada.classList.add("app__section-task-list-item-complete");
    liTarefaSelecionada.querySelector("button").setAttribute("disabled", "disabled");
    tarefaSelecionada.completa = true;
    paragrafoTarefaAtiva.textContent = "";
    atualizarTarefas();
  };
});

// Remover tarefas
const removerTarefas = (somenteCompletas) => {
  const seletor = somenteCompletas ? ".app__section-task-list-item-complete" : ".app__section-task-list-item";
  document.querySelectorAll(seletor).forEach(elemento => elemento.remove());
  tarefas = somenteCompletas ? tarefas.filter(tarefa => !tarefa.completa) : [];
  atualizarTarefas();
 };

 btnRemoverConcluidas.onclick = () => removerTarefas(true);
 btnRemoverTodas.onclick = () => removerTarefas(false);
