const novaTarefa = document.querySelector(".nova-tarefa-input")
const novaTarefaBtn = document.querySelector(".nova-tarefa-botao")

function validarInput () {
	if (novaTarefa.value.trim().length > 0) {
		return true;
	} else {
		return false;
	}
}

novaTarefaBtn.addEventListener("click", addTarefa)

function addTarefa() {

}