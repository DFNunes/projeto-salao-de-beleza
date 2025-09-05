/*
// Função para deletar uma linha da tabela
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("deletar")) {
        const row = event.target.closest("tr"); // Encontra a linha mais próxima
        row.remove(); // Remove a linha da tabela
    }
});
*/

// Função para adicionar uma nova linha à tabela
const formFuncionarios = document.getElementById("form-cadastro-funcionarios");
if (formFuncionarios) {
    formFuncionarios.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o recarregamento da página

        // Captura os valores do formulário
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;
        const cargo = document.getElementById("cargo").value;
        // const salario = document.getElementById("salario").value;

        // Cria uma nova linha na tabela
        const tabela = document.querySelector("table tbody");
        const novaLinha = document.createElement("tr");

        novaLinha.innerHTML = `
            <td>${nome}</td>
            <td>${email}</td>
            <td>${telefone}</td>
            <td>${cargo}</td>
            <td>
                <button class="editar">Editar</button>
                <button class="deletar">Deletar</button>
            </td>
        `; // removido do innerHTML: <td>R$ ${parseFloat(salario).toFixed(2)}</td>

        // Adiciona a nova linha à tabela
        tabela.appendChild(novaLinha);

        // Limpa os campos do formulário
        document.getElementById("form-cadastro-funcionarios").reset();
    });
}

// Função para "inativar" uma linha da tabela
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("deletar")) {
        const row = event.target.closest("tr"); // Encontra a linha mais próxima
        row.classList.add("inativo"); // Adiciona a classe "inativo" para estilização
    }
});

// Função para editar uma linha da tabela
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("editar")) {
        const row = event.target.closest("tr"); // Encontra a linha mais próxima
        const cells = row.querySelectorAll("td"); // Seleciona todas as células da linha

        // Preenche os campos do formulário com os valores da linha
        document.getElementById("nome").value = cells[0].textContent;
        document.getElementById("email").value = cells[1].textContent;
        document.getElementById("telefone").value = cells[2].textContent;
        document.getElementById("cargo").value = cells[3].textContent;
       // document.getElementById("salario").value = cells[4].textContent.replace("R$ ", "");

        // Remove a linha da tabela (opcional, para evitar duplicação)
        row.remove();
    }
});

const formServicos = document.getElementById("form-cadastro-servicos");
if (formServicos) {
    formServicos.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o recarregamento da página

    // Captura os valores do formulário
    const categoria = document.getElementById("categoria").value;
    const servico = document.getElementById("servico").value;
    const valor = document.getElementById("valor").value;
    const horas = parseInt(document.getElementById("horas").value) || 0; // Converte para número ou 0
    const minutos = parseInt(document.getElementById("minutos").value) || 0; // Converte para número ou 0

    // Formata o tempo como "Xh Ym"
    const tempoFormatado = `${horas}h ${minutos}m`;

    // Cria uma nova linha na tabela
    const tabela = document.querySelector("table tbody");
    const novaLinha = document.createElement("tr");

    novaLinha.innerHTML = `
        <td>${categoria}</td>
        <td>${servico}</td>
        <td>R$ ${parseFloat(valor).toFixed(2)}</td>
        <td>${tempoFormatado}</td>
        <td>
            <button class="editar">Editar</button>
            <button class="deletar">Deletar</button>
        </td>
    `;

    // Adiciona a nova linha à tabela
    tabela.appendChild(novaLinha);

    // Limpa os campos do formulário
    document.getElementById("form-cadastro-servicos").reset();
});
}