import { createContext, useState } from "react";                                          

const TaskContext = createContext();

const TaskProvider = (props) => {

    const [tarefas, setTarefas] = useState ([{id: 1, nome: "Você está no contexto Global =)", concluida: false}]);                                    

    const adicionarTarefa = (tarefa) => {
        if (tarefa) {
            const novaTarefa = {
                id: Math.random(),
                nome: tarefa,
                concluida: false
            }
            setTarefas([...tarefas, novaTarefa])
        }
    };

    const removerTarefa = (id) => {
        const tarefasAtualizadas = tarefas.filter((item) => item.id != id);
        setTarefas (tarefasAtualizadas);
    };



    return (
        <TaskContext.Provider value={{tarefas, adicionarTarefa, removerTarefa}}>
            {props.children}
        </TaskContext.Provider>
    )
};

export { TaskContext, TaskProvider}