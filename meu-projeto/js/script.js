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

// Função para adicionar uma nova linha à tabela
const formClientes = document.getElementById("form-cadastro-clientes");
if (formClientes) {
    formClientes.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o recarregamento da página

        // Captura os valores do formulário
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;
        const imagem = document.getElementById("imagem").files[0];
        const imagemURL = imagem ? URL.createObjectURL(imagem) : "";
        // const cargo = document.getElementById("imagem").value;
        // const salario = document.getElementById("salario").value;

        // Cria uma nova linha na tabela
        const tabela = document.querySelector("table tbody");
        const novaLinha = document.createElement("tr");

        novaLinha.innerHTML = `
            <td>${nome}</td>
            <td>${email}</td>
            <td>${telefone}</td>
            <td><img src="${imagemURL}" alt="Imagem do cliente" class="imagem-cliente"></td>
            <td>
                <button class="editar">Editar</button>
                <button class="deletar">Deletar</button>
            </td>
        `;

        // Adiciona a nova linha à tabela
        tabela.appendChild(novaLinha);

        // Limpa os campos do formulário
        document.getElementById("form-cadastro-clientes").reset();
    });
}

const formAgendamento = document.getElementById("form-agendamento");
if (formAgendamento) {
    formAgendamento.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita o recarregamento da página

        // Captura os valores do formulário
        const cliente = document.getElementById("cliente");
        const clienteNome = cliente.options[cliente.selectedIndex].text;
        const telefone = document.getElementById("telefone-cliente").value;
        const servico = document.getElementById("servico");
        const servicoNome = servico.options[servico.selectedIndex].text;
        const tempo = document.getElementById("tempo-servico").value;
        const valor = document.getElementById("valor-servico").value;
        const funcionario = document.getElementById("funcionario");
        const funcionarioNome = funcionario.options[funcionario.selectedIndex].text;

        // Cria uma nova linha na tabela
        const tabela = document.getElementById("tabela-agendamentos").querySelector("tbody");
        const novaLinha = document.createElement("tr");

        novaLinha.innerHTML = `
            <td>${clienteNome}</td>
            <td>${telefone}</td>
            <td>${servicoNome}</td>
            <td>${funcionarioNome}</td>
            <td>${tempo}</td>
            <td>${valor}</td>
            <td>
                <button class="editar">Editar</button>
                <button class="deletar">Deletar</button>
            </td>
        `;

        // Adiciona a nova linha à tabela
        tabela.appendChild(novaLinha);

        // Limpa os campos do formulário
        formAgendamento.reset();
        document.getElementById("telefone-cliente").value = "";
        document.getElementById("foto-cliente").src = "";
        document.getElementById("tempo-servico").value = "";
        document.getElementById("valor-servico").value = "";
        document.getElementById("cargo-funcionario").value = "";
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
        // Verifica se a linha está inativa
        if (row.classList.contains("inativo")) {
            alert("Não é possível editar um registro inativo."); // Mensagem de aviso
            return; // Interrompe a execução
        }

        const tabela = row.closest("table"); // Identifica a tabela

        if (tabela.id === "tabela-profissionais") {
            // Edição para a tabela de profissionais
            document.getElementById("nome").value = cells[0].textContent;
            document.getElementById("email").value = cells[1].textContent;
            document.getElementById("telefone").value = cells[2].textContent;
            document.getElementById("cargo").value = cells[3].textContent;
            // document.getElementById("salario").value = cells[4].textContent.replace("R$ ", "");
        } else if (tabela.id === "tabela-servicos") {
            // Edição para a tabela de serviços
            document.getElementById("categoria").value = cells[0].textContent;
            document.getElementById("servico").value = cells[1].textContent;
            document.getElementById("valor").value = cells[2].textContent.replace("R$ ", "");
            const tempo = cells[3].textContent.split(" ");
            document.getElementById("horas").value = parseInt(tempo[0].replace("h", "")) || 0;
            document.getElementById("minutos").value = parseInt(tempo[1].replace("m", "")) || 0;
        } else if (tabela.id === "tabela-clientes") {
            // Edição para a tabela de clientes
            document.getElementById("nome").value = cells[0].textContent;
            document.getElementById("email").value = cells[1].textContent;
            document.getElementById("telefone").value = cells[2].textContent;
            // A imagem não é editada diretamente, pois requer upload
        } else if (tabela.id === "tabela-agendamentos") {
            // Edição para a tabela de agendamentos
        
            // Seleciona o cliente correspondente
            document.getElementById("cliente").value = Array.from(document.getElementById("cliente").options)
                .findIndex(option => option.text === cells[0].textContent);
        
            // Preenche o telefone do cliente
            document.getElementById("telefone-cliente").value = cells[1].textContent;
        
            // Seleciona o serviço correspondente
            document.getElementById("servico").value = Array.from(document.getElementById("servico").options)
                .findIndex(option => option.text === cells[2].textContent);
        
            // Seleciona o funcionário correspondente
            document.getElementById("funcionario").value = Array.from(document.getElementById("funcionario").options)
                .findIndex(option => option.text === cells[3].textContent);
        
            // Preenche o tempo do serviço
            document.getElementById("tempo-servico").value = cells[4].textContent;
        
            // Preenche o valor do serviço
            document.getElementById("valor-servico").value = cells[5].textContent;
        
            // (Opcional) Atualiza a foto do cliente, se houver um campo de imagem
            const fotoCliente = document.getElementById("foto-cliente");
            if (fotoCliente) {
                // Supondo que a foto seja armazenada como um atributo `data-foto` na tabela
                const fotoUrl = cells[0].getAttribute("data-foto");
                if (fotoUrl) {
                    fotoCliente.src = fotoUrl;
                }
            }
        }
        // Remove a linha da tabela (opcional, para evitar duplicação)
        row.remove();
    }
});

// Preencher informações do cliente ao selecionar
document.getElementById("cliente").addEventListener("change", function () {
    const clienteSelecionado = this.options[this.selectedIndex]; // Obtém a opção selecionada
    const telefone = clienteSelecionado.getAttribute("data-telefone"); // Obtém o telefone do atributo data-telefone
    const foto = clienteSelecionado.getAttribute("data-foto"); // Obtém a foto do atributo data-foto

    // Preenche os campos correspondentes
    document.getElementById("telefone-cliente").value = telefone || "";
    document.getElementById("foto-cliente").src = foto || "";
});

// Preencher informações do serviço ao selecionar
document.getElementById("servico").addEventListener("change", function () {
    const servicoSelecionado = this.options[this.selectedIndex];
    const tempo = servicoSelecionado.getAttribute("data-tempo");
    const valor = servicoSelecionado.getAttribute("data-valor");

    document.getElementById("tempo-servico").value = `${tempo} minutos` || "";
    document.getElementById("valor-servico").value = `R$ ${valor}` || "";
});

// Preencher informações do funcionário ao selecionar
document.getElementById("funcionario").addEventListener("change", function () {
    const funcionarioSelecionado = this.options[this.selectedIndex];
    const cargo = funcionarioSelecionado.getAttribute("data-cargo");

    document.getElementById("cargo-funcionario").value = cargo || "";
});