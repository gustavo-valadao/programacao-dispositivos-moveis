import { List, IconButton } from "react-native-paper";

function TaskItem({ item }) {
    
  return (
    <List.Item
      title={item.descricao}
      description={item.concluida ? "Concluida" : "Pendente"}
      left={() => (
        <IconButton
          icon={item.concluida ? "check-circle" : "circle"}
          onPress={() => {}}
        />
      )}
      right={() => <IconButton icon="delete" onPress={() => {}} />}
    />
  );
}

export default TaskItem;