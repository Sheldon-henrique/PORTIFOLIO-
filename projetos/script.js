// Captura o formulário de contato e adiciona um evento de envio
document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    const nome = event.target.nome.value;
    const email = event.target.email.value;
    const mensagem = event.target.mensagem.value;

    if (nome && email && mensagem) {
        alert("Mensagem enviada com sucesso! Obrigado, " + nome + "!");
        event.target.reset(); // Limpa os campos do formulário
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

// Lista de projetos (poderia vir de um banco de dados futuramente)
const projetos = [
    { titulo: "Projeto 1", descricao: "Descrição do projeto 1" },
    { titulo: "Projeto 2", descricao: "Descrição do projeto 2" }
];

// Função para renderizar os projetos na página
function carregarProjetos() {
    const listaProjetos = document.getElementById("lista-projetos");
    listaProjetos.innerHTML = ""; // Limpa a área antes de carregar

    projetos.forEach(projeto => { 
        const div = document.createElement("div");
        div.classList.add("projeto");
        div.innerHTML = `<h3>${projeto.titulo}</h3><p>${projeto.descricao}</p>`;

        listaProjetos.appendChild(div); // Adiciona o projeto à lista
    });
}

// Carregar os projetos ao iniciar a página
document.addEventListener("DOMContentLoaded", carregarProjetos);

function mostrarListaTarefas() {
    const container = document.getElementById("lista-container");

    if (container.innerHTML === "") {
        fetch("todo-list.html") // Carrega o conteúdo da lista de tarefas
            .then(response => response.text())
            .then(data => {
                container.innerHTML = data;
                container.style.display = "block";
                ajustarCSSLista();
            });
    } else {
        container.style.display = container.style.display === "none" ? "block" : "none";
    }
}

// Garante que o CSS da lista não quebre o portfólio
function ajustarCSSLista() {
    const listaContainer = document.querySelector("#lista-container .container");
    if (listaContainer) {
        listaContainer.style.width = "100%"; // Ajusta largura para não ficar muito pequena
    }
}
