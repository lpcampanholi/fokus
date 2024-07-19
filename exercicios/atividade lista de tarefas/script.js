const btn = document.querySelector("#button");
const textArea = document.querySelector("#text_area");
const btnSubmit = document.querySelector("#btnSubmit");
const form = document.querySelector("form");
const listaDeTarefas = document.querySelector(".listaDeTarefas");

const tarefas = [];

btn.addEventListener("click", () => {
  textArea.classList.toggle("hidden");
  btnSubmit.classList.toggle("hidden");
});

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  const tarefa = {
  texto: textArea.value
  };

  tarefas.push(tarefa);
  localStorage.setItem("Tarefas", JSON.stringify(tarefas));

  const tarefasSalvas = localStorage.getItem("Tarefas");

  listaDeTarefas.innerHTML = `
    <li class="tarefa">
      <p>${textArea.value}</p>
      <button>Excluir</button>
    </li>
  `

  console.log(tarefasSalvas);

});





