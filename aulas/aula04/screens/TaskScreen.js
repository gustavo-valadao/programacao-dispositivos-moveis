import { useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import {
  Appbar,
  List,
  TextInput,
  FAB,
  Modal,
  Button,
  Text,
  Snackbar, 
} from "react-native-paper";

function TaskScreen() {

  const [tarefas, setTarefas] = useState([                                        // Estado com a lista de tarefas. 
    {id: 1, nome: "Estudar", concluida: false},
  ]);
  const [idTarefaSelecionada, setIdTarefaSelecionada ] = useState ("")            // Estado para armazenar temporariamente uma tarefa que poderá ser excluída
  const [tarefa, setTarefa] = useState("");                                       // Estado para armazenar temporariamente uma tarefa que será criada
  const [refresh, setRefresh] = useState(false);                                  // Estado criado apenas para disparar uma atualização da tela ao ser alterado
  const [exibeModal, setExibeModal] = useState(false);                            // Estado para exibir ou ocultar o modal de incluir tarefas
  const [exibeAlerta, setExibeAlerta ] = useState(false);                         // Estado para exibir ou ocultar o modal de apagar tarefas
  const [exibeSnack, setExibeSnack ] = useState(false);


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

            onPress={() => {                      // Ao tocar um tem da lista
              item.concluida = !item.concluida;      // Troca o atributo concluida, e consequentemente atualiza o ícone
              setRefresh(!refresh)                   // Atualiza a tela*
            }}                                          /* Nota: Quando você atualiza um atributo interno de um estado, a tela não é atualizada,
                                                           Por isso foi criado esse estado "Refresh", que ao ser alterado, atualizada a tela. 
                                                           Esse estado refresh não fica em lugar nenhum. Ele apenas serve para provocar um refresh na tela. 
                                                        */
            

            onLongPress={ () => {                 // Ao toque longo
              setIdTarefaSelecionada(item.id);       // Guarda o ID em um estado, para posteriormente eu saber qual é a tarefa que está selecionada.
              setExibeAlerta(true)                   // Exibe o modal de apagar tarefa (setExibeAlerta é o estado que gerencia a se o modal é visto ou não)
            }}

            title={item.nome}

            right={(props) => (

              <List.Icon
                {...props}                                                           // Permite receber valores do item pai (List.Item). Mas nesse caso não está sendo efetivamente utilizado
                icon={item.concluida ? "check-circle-outline" : "circle-outline"}    // O item está concluído? Se sim, mostra ícone check. Se não, mostra ícone círculo
              />

            )}
          />
        )}
      />

      <FAB                                                      // FAB = floating action button
        style={styles.fab} 
        icon="plus" 
        onPress={() => setExibeModal(true)}                     // Ao pressionar, exibe o modal de incluir tarefa
      />              





      <Modal visible={exibeModal} contentContainerStyle={styles.modal}>
        <TextInput
          label="Nova Tarefa"
          value={tarefa}                                        // O valor do input é gerenciado pelo estado "tarefa", mas foi definido inicialmente como nulo. Por isso o campo vem em branco.
          onChangeText={(text) => setTarefa(text)}              // Ao atualizar o campo, o estado da "tarefa" é automaticamente atualizado.
        />

        <Button
          onPress={() => {                                                                      // Ao pressionar o botão:
            if (tarefa) {                                                                          // Se a tarefa existir (O campo não pode estar nulo):
              setTarefas([...tarefas, {id: Math.random(), nome: tarefa, concluida: false}]);          // Inclui uma tarefa como um objeto, no array de tarefas. A tarefa tem um ID, um Nome, e um estado de concluída.
              setExibeModal(false);                                                                   // Fecha o modal
              setExibeSnack(true);                                                                    // Exibe o Snack
              setTarefa ('')                                                                          // Apaga a o estado "tarefa", para que na próxima vez que abrir o modal, o campo não esteja preenchido com a tarefa anterior.
            }

          }}
        >
          Salvar
        </Button>

      </Modal> 




      <Modal visible={exibeAlerta} contentContainerStyle={styles.modal}>    

        <Text variant="labelLarge">Deseja apagar a tarefa?</Text>

        <Button                                                            // Botão "Não"
          onPress={() => {                                                    // Ao ser Pressionado
            setIdTarefaSelecionada("");                                           // Limpo o ID da tarefa selecionada, que não vai ser mais usado
            setExibeAlerta(false);                                                // Fecha o modal sem fazer mais nada           
          }}

        >
          Não
        </Button>          

        <Button                                                            // Botão "Sim"
          onPress={() => {                                                 // Ao ser Pressinado
            const tarefasAtualizadas = tarefas.filter(                        // Salvo em uma variável "tarefas atualizadas"
              (item) => item.id != idTarefaSelecionada                           // um array com todas as tarefas que são diferentes da tarefa selecionada
            );
            setTarefas(tarefasAtualizadas);                                   // Substituo o "array das tarefas" pelo de "tarefas atualizadas" (que não tem mais a tarefa removida)
            setIdTarefaSelecionada("");                                       // Limpo o ID da tarefa selecionada, que não vai ser mais usado
            setExibeAlerta(false);                                            // Fecho o Modal
          }}
        >
          Sim
        </Button>

      </Modal>

      <Snackbar 
        visible={exibeSnack} onDismiss={() => 
        setExibeSnack(false)}>
        Ação realizada!
      </Snackbar>

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

export default TaskScreen;