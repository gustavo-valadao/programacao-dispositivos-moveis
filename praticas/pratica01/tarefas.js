const tarefas = [
    {
        id: 1739220546861,
        nome: "Estudar javascript",
        concluida: false
    }
]

function listarTarefas () {
    return tarefas;
}

function adicionarTarefa(nomeTarefa) {

    const novaTarefa = {
        id: Date.now().toString(),
        nome: nomeTarefa,
        concluida: false
    }

    tarefas.push(novaTarefa)
}

function removerTarefa (idTarefa) {
    const posicao = tarefas.findIndex(task => task.id === idTarefa);
    if (posicao != -1) {
        tarefas.splice(posicao, 1)
    }
}

function modificarTarefa(idTarefa, tarefaModificada) {
    const tarefaLocalizada = tarefas.findIndex(task => task.id === idTarefa);
    
    if (tarefaLocalizada !== -1) {
        Object.assign(tarefas[tarefaLocalizada], tarefaModificada);
    }
}

export {listarTarefas, adicionarTarefa, modificarTarefa, removerTarefa}

