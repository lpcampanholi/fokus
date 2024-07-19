const btn = document.querySelector("#button");
const textArea = document.querySelector("#text_area");
const btnSubmit = document.querySelector("#btnSubmit");
const form = document.querySelector("form");
const listaDeTarefas = document.querySelector(".listaDeTarefas");

const tarefas = [];

function criarElementoTarefa(tarefa) {
  const li = document.createElement("li");
  li.classList.add("tarefa");
  li.innerHTML = `
    <p>${tarefa.descricao}</p>
    <button>Excluir</button>
  `;

  listaDeTarefas.append(li);

  console.log("criarElementoTarefa");
};

btn.addEventListener("click", () => {
  textArea.classList.toggle("hidden");
  btnSubmit.classList.toggle("hidden");
});



btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  const tarefa = {
  descricao: textArea.value
  };

  tarefas.push(tarefa);
  localStorage.setItem("Tarefas", JSON.stringify(tarefas));

  
  const tarefasSalvas = JSON.parse(localStorage.getItem("Tarefas"));
  
  tarefasSalvas.forEach((tarefa) => {
    criarElementoTarefa(tarefa);
  });
  console.log(tarefasSalvas);

});

