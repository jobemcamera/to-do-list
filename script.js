const botao = document.querySelector("#btn-add");

botao.addEventListener("click", mostraTarefas);

function mostraTarefas() {

	if (document.getElementById("texto-tarefa").value.length == 0) {
		return 0;
	} else {
		document.getElementById("mostra-tarefas").innerHTML += `
		<input type="checkbox">
            <ul id="lista-tarefas">
                 <li>${document.getElementById("texto-tarefa").value}</li>
            </ul>
        `;
	}

	
}
