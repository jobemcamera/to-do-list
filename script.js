const novaTarefa = document.querySelector(".nova-tarefa-input")
const novaTarefaBtn = document.querySelector(".nova-tarefa-botao")
const tarefaContainer = document.querySelector(".tarefas-container")

function validarInput () {
	if (novaTarefa.value.trim().length > 0) {
		return true;
	} else {
		return false;
	}
}

novaTarefaBtn.addEventListener("click", addTarefa)

function addTarefa() {
    // criando uma tag div no html
    const tarefaItemContainer = document.createElement('div') 
    // adicionando uma class na div
    tarefaItemContainer.classList.add('tarefa-item') 
    // criando uma tag p na div
    const tarefaConteudo = document.createElement('p')  
    // criando uma tag input
    const tarefaCheck = document.createElement('input')
    // criando o type checkbox da tag input
    tarefaCheck.setAttribute("type", "checkbox")
    // inserindo a tarefa na tag p
    tarefaConteudo.innerText = novaTarefa.value
    // criando a tag i com o icone de lixeira
    const deletatarefa = document.createElement("i")
    deletatarefa.classList.add("fa-solid")
    deletatarefa.classList.add("fa-trash")

    tarefaItemContainer.appendChild(tarefaCheck)
    tarefaItemContainer.appendChild(tarefaConteudo)
    tarefaItemContainer.appendChild(deletatarefa)
    tarefaContainer.appendChild(tarefaItemContainer)

    // reexibe o container já criado no html para guardar as tarefas digitas
    tarefaContainer.style.display = 'flex'

    // limpa a caixa de texto do input
    novaTarefa.value = "";
}