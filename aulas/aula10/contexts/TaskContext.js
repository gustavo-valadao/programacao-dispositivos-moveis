import { createContext, useState } from "react";
import { adicionar, listar } from "../services/TaskService";



const TaskContext = createContext();


function TaskProvider( {children}) {


    const [ tarefas, setTarefas ] = useState([])

    const carregarTarefas = async() => {
        const resposta = await listar();
        setTarefas(resposta)
    }

    const adicionarTarefa = async (tarefa) => {
        const resposta = await adicionar(tarefa);
        setTarefas([...tarefas, resposta])
    }

    return (
        <TaskContext.Provider value={{tarefas, carregarTarefas, adicionarTarefa}}>
            {children}
        </TaskContext.Provider>
    );
}

export  { TaskContext, TaskProvider};