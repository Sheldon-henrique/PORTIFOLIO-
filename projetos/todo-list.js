// aguarda o acrregamento do DOM antes de executar o codigo
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("tarefa"); //campo de entrada
    const lista = document.getElementById("lista-tarefa"); //lista de tarefa
    const btnAdicionar = document.getElementById("adicionar"); //botão de adicionar tarefa

// adiciona evento de clique no botão
    btnAdicionar.addEventListener("click", adicionarTarefa);

// permite adicionar tarefa precionando enter
input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});
// função para adicionar uma nova tarefa na lista
function adicionarTarefa() {
    if (input.value.trim() === "") {
        alert("Digite uma tarefa Válida");
        return;
    }
    const li = document.createElement("li"); // cria uma nova lista
    li.textContent = input.value; //defina o texto de tarefa

    const btnRemover = document.createElement("button"); // cria butão de remover
    btnRemover.textContent = "X";
    btnRemover.classList.add("remover-btn");
    btnRemover.onclick = () => lista.removeChild(li); // remove a tarefa ao clicar

    li.appendChild(btnRemover); // adicionar botão de remover a lista
    lista.appendChild(li); // adicionar a tarefa mna lista
    input.value = ""; // limpa o campo de tarefa 
  }
});