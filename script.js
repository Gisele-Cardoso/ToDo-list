function adicionarTarefa(){
    const inputTask = document.getElementById('input-task'); // criando const do id do input
    const task = inputTask.value.trim(); // remove espaços em branco

    if(task !== ''){ // verifica se a 'task' esta ou nao vazia
        const lista = document.getElementById('lista'); // criando const id da lista ul
        const li = document.createElement('li'); // criando uma li para add task
        li.textContent = task;

        const removerBotao = document.createElement('button'); // criando botao aqui para remover li
        removerBotao.textContent = 'Remove';
        removerBotao.onclick = function() {
            lista.removeChild(li);
        };

        li.appendChild(removerBotao);
        lista.appendChild(li);

        const taskConcluida = document.createElement('button'); // criando botao para quando clicar deixar a li sublinhada
        taskConcluida.textContent = 'Concluido';
        taskConcluida.onclick = function(){
        li.classList.toggle('concluido')
    }

    li.appendChild(taskConcluida); // filhos li (lembrar)
    lista.appendChild(li);

    inputTask.value = ''; // limpar campo
    }
}
 

document.getElementById('input-task').addEventListener('keypress', function(event) { // add task com enter
    if (event.key === 'Enter') {
        adicionarTarefa();
    }
});

