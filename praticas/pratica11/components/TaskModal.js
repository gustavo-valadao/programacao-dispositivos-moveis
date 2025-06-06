import { useContext, useState } from "react";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { TaskContext } from "../contexts/TaskContext";

function TaskModal({setShowModal}) {

    const { addTask } = useContext(TaskContext)

    const [ taskTitle, setTaskTitle ] = useState("")

    const handleAddTask = async () => {
        await addTask({descricao: taskTitle, concluida: false});
        setTaskTitle("")
        setShowModal(false)
    }

    const handleCancel = () => {
        setTaskTitle("")
        setShowModal(false)
    }

    return (
        <View
            style={{
                margin: 16,
                padding: 20,
                backgroundColor: "#fff",
                borderRadius: 8,
            }}
        >
            <TextInput 
                label="Título da tarefa"
                value={taskTitle}
                onChangeText={setTaskTitle}
                mode="outlined"
                style={{marginBottom: 20}}
            />

            <Button
                mode="outlined"
                onPress={handleCancel}
                style={{marginTop: 10}}
            >
                Cancelar
            </Button>
            
            <Button
                mode="contained"
                onPress={handleAddTask}
                style={{marginTop: 10}}
            >
                Adicionar
            </Button>

        </View>

    );
}

export default TaskModal;