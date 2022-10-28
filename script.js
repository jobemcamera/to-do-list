var novaTarefa = document.querySelector(".nova-tarefa-input")
var novaTarefaBtn = document.querySelector(".nova-tarefa-botao")
var tarefaContainer = document.querySelector(".tarefas-container")

// função que verifica o campo input vazio incluindo somente espaços
function validarInput () {
    if (novaTarefa.value.trim().length > 0) {
        return true;
    } else {
        return false;
    }
}

novaTarefaBtn.addEventListener("click", addTarefa)

function addTarefa() {
    // se o input for válido, executa a função addTarefa, se não, retorna false
    if (!validarInput()) {
        return
    }
    // criando uma tag div no html
    var tarefaItemContainer = document.createElement('div') 

    // adicionando uma class na div
    tarefaItemContainer.classList.add('tarefa-item') 

    // criando uma tag p na div
    var tarefaConteudo = document.createElement('p')  

    // criando uma tag input
    var tarefaCheck = document.createElement('input')

    // criando o type checkbox da tag input
    tarefaCheck.setAttribute("type", "checkbox")

    // inserindo a tarefa na tag p
    tarefaConteudo.innerText = novaTarefa.value

    // criando a tag i com o icone de lixeira
    var deletaTarefa = document.createElement("i")
    deletaTarefa.classList.add("fa-solid","fa-trash")
    
    // mostra as tarefas na tela
    tarefaItemContainer.appendChild(tarefaCheck)
    tarefaItemContainer.appendChild(tarefaConteudo)
    tarefaItemContainer.appendChild(deletaTarefa)
    tarefaContainer.appendChild(tarefaItemContainer)

    // adiciona o evento click do "botão" tag <i> e deixa em standy-by. Só será executado depois de acionado
    deletaTarefa.addEventListener("click",() => delTarefa(tarefaItemContainer, tarefaCheck, tarefaConteudo, deletaTarefa))

    // limpa a caixa de texto do input
    novaTarefa.value = "";

    // reexibe o container já criado no html para guardar as tarefas digitas
    tarefaContainer.style.display = 'block'
    
}

function delTarefa(tarefaItemContainer, tarefaCheck, tarefaConteudo, deletaTarefa) {
    tarefaItemContainer.removeChild(tarefaCheck)
    tarefaItemContainer.removeChild(tarefaConteudo)
    tarefaItemContainer.removeChild(deletaTarefa)
}