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
    // inserindo a tarefa na tag p
    tarefaConteudo.innerText = novaTarefa.value

    tarefaItemContainer.appendChild(tarefaConteudo)

    tarefaContainer.appendChild(tarefaItemContainer)

    tarefaContainer.style.display = 'flex'
}