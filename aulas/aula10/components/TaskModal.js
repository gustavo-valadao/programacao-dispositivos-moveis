import { View } from "react-native";
import { TextInput, Button } from "react-native-paper";

import { useState, useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";


function TaskModal({setShowModal}) {

    const { adicionarTarefa } = useContext(TaskContext)

    const [tarefa, setTarefa] = useState("");

    return (
        <View style={{margin: 16, padding: 16, backgroundColor:"white", borderRadius:8}}>
            <TextInput 
                label="Nova Tarefa"
                mode="outlined"
                value={tarefa}
                onChangeText={setTarefa}
            /> 

            <Button
                mode="outlined"
                onPress={()=>{setShowModal(false)}}
            >
                Cancelar
            </Button>

            <Button 
                mode="contained"
                onPress={async()=>{
                    await adicionarTarefa({descricao: tarefa, concluida: false})
                    setShowModal(false)
                }}
            >
                Adicionar
            </Button>


        </View>
        
    );
}

export default TaskModal;