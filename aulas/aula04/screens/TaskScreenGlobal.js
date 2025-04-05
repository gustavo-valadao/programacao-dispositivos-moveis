
//ESSA É UMA REFATORAÇÂO DA TELA DE TAREFAS, UTILIZANDO UM CONTEXTO GLOBAL.
// ELA UTILIZA O TASK CONTEXT, QUE ESTÁ NA PASTA CONTEXT

import { useState, useContext } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import {
  Appbar,
  List,
  TextInput,
  FAB,
  Modal,
  Button,
  Text, 
} from "react-native-paper";

import { TaskContext  } from "../contexts/TaskContext";                         // Importação do contexto

function TaskScreenGlobal() {

  // const [tarefas, setTarefas] = useState([                                    // Não vamos usar mais... Vamos usar as tarefas do contexto global   
  //   {id: 1, nome: "Estudar", concluida: false},
  // ]);

  const { tarefas, adicionarTarefa, removerTarefa } = useContext(TaskContext);   // Utilização das tarefas do contexto

  const [idTarefaSelecionada, setIdTarefaSelecionada ] = useState ("")            
  const [tarefa, setTarefa] = useState("");                                       
  const [refresh, setRefresh] = useState(false);                                  
  const [exibeModal, setExibeModal] = useState(false);                            
  const [exibeAlerta, setExibeAlerta ] = useState(false);                         

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Lista de Tarefas" />             
      </Appbar.Header>

      <FlatList
        data={tarefas}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (

          <List.Item

            onPress={() => {                      
              item.concluida = !item.concluida;      
              setRefresh(!refresh)                  
            }}                                          
            

            onLongPress={ () => {                 
              setIdTarefaSelecionada(item.id);       
              setExibeAlerta(true)                   
            }}

            title={item.nome}

            right={(props) => (

              <List.Icon
                {...props}                                                           
                icon={item.concluida ? "check-circle-outline" : "circle-outline"}    
              />

            )}
          />
        )}
      />

      <FAB                                                     
        style={styles.fab} 
        icon="plus" 
        onPress={() => setExibeModal(true)}                     
      />              





      <Modal visible={exibeModal} contentContainerStyle={styles.modal}>
        <TextInput
          label="Nova Tarefa"
          value={tarefa}                                        
          onChangeText={(text) => setTarefa(text)}              
        />

        <Button
          onPress={() => {                                                                      
            if (tarefa) {                                                                          
              adicionarTarefa(tarefa)                           // Utiliza a função to Contexto Global
              setExibeModal(false);                                                                   
              setTarefa ('')                                                                          
            }

          }}
        >
          Salvar
        </Button>

      </Modal> 




      <Modal visible={exibeAlerta} contentContainerStyle={styles.modal}>    

        <Text variant="labelLarge">Deseja apagar a tarefa?</Text>

        <Button                                                           
          onPress={() => {                                                    
            setIdTarefaSelecionada("");                                         
            setExibeAlerta(false);                                                         
          }}

        >
          Não
        </Button>          

        <Button                                                            
          onPress={() => {                                                 
            removerTarefa(idTarefaSelecionada)              // Usa a função do Contexto Global para remover tarefa                  
            setIdTarefaSelecionada("");                                       
            setExibeAlerta(false);                                            
          }}
        >
          Sim
        </Button>

      </Modal>

    </View>
  ); 
} 

const styles = StyleSheet.create({
  container: { flex: 1 },
  fab: {
    position: "absolute",
    bottom: 16,
    right: 16,
  },

  modal: {
    backgroundColor: "white",
    padding: 16,
    margin: 16,
    borderRadius: 8,
  },
});

export default TaskScreenGlobal;