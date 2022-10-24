const botaoAdd = document.querySelector("#btn-add")
const botaoDel = document.querySelector("#btn-remove")


botaoAdd.addEventListener("click", mostraTarefas)
botaoDel.addEventListener("click", deletaTarefas)


function mostraTarefas() {

	if (document.getElementById("texto-tarefa").value.length == 0) {
		return 0;
	} else {
		document.getElementById("mostra-tarefas").innerHTML += `
		<input type="checkbox">
            <ul id="lista-tarefas">
                 <li>${document.getElementById("texto-tarefa").value}</li>
            </ul>

        <button id="btn-remove">Remover</button>
        `;
	}
}



function deletaTarefas() {

    alert("deletado")


}

