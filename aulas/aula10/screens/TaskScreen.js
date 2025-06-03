import { View, FlatList } from "react-native";
import { Modal, FAB, Appbar } from "react-native-paper";

import { useState, useContext, useEffect } from "react";
import { TaskContext } from "../contexts/TaskContext";

import TaskItem from "../components/TaskItem";
import TaskModal from "../components/TaskModal";

function TaskScreen() {


    const { tarefas, carregarTarefas } = useContext(TaskContext)

    const [showModal, setShowModal] = useState(false)

    useEffect(() => {

        const carrega = async() => {                // Note que useEffect não aceita async diretamente. Por isso, foi necessário declarar uma função assíncrona dentro dela.
            await carregarTarefas();
        }

        carrega();

    }, [])


    return (

        <View style={{flex: 1}}>
            <Appbar.Header>
                <Appbar.Content title="Minhas Tarefas"/>
            </Appbar.Header>

            <View style={{flex: 1, paddingBottom: 24}}>
                <FlatList 
                    data= {tarefas}
                    keyExtractor={(item) => item.id}
                    renderItem={TaskItem}
                />
            </View>

            <FAB 
                icon="plus" 
                onPress={()=> {setShowModal(true)}} 
                style={{position: "absolute", right: 32, bottom: 32}}
            />

            <Modal 
                visible={showModal}
                transparent
            >   
                <TaskModal setShowModal={setShowModal} />   
            </Modal>
        </View>
        
    );
}

export default TaskScreen;