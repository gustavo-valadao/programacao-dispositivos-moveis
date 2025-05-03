import { ScrollView, StyleSheet } from "react-native"
import { List, Text } from "react-native-paper"

function ChatScreen({navigation}) {

    const conversas = [
        {user: "Ana Souza", mensagem: "Oi, tudo bem?", hora: "08:45"},
        {user: "Carlos Lima", mensagem: "Vamos marcar aquela reunião?", hora: "09:30"},
        {user: "Mariana Santos", mensagem: "Enviei o arquivo para vc", hora: "10:10"}
    ]

    return(
        <ScrollView style={styles.container}>

            {conversas.map((conversa, index) => (
                <List.Item
                    key={index}
                    title={conversa.user}
                    description={conversa.mensagem}

                    left={(props) => (<List.Icon {...props} icon="account"/>)}
                    right={(props) => <Text style={styles.time}>{conversa.hora}</Text>}                

                    style={styles.item}
                    titleStyle={styles.title}
                    descriptionStyle={styles.description}

                />
                
            ))}

        </ScrollView>

    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },

    item: {
      backgroundColor: "#d4f5dd",
      marginHorizontal: 12,
      marginVertical: 6,
      borderRadius: 8,
    },

    title: {
      fontSize: 16,
      fontWeight: "bold",
    },

    description: {
      fontSize: 14,
      color: "#666",
    },

    time: {
      alignSelf: "center",
      fontSize: 12,
      color: "#888",
      marginRight: 16,
    },

  });

export default ChatScreen