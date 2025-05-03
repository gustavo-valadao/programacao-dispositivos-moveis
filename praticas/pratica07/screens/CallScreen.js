import { ScrollView, StyleSheet } from "react-native"
import { List, Text } from "react-native-paper"

function CallScreen({navigation}) {

    const ligacoes = [
        {nome: "Campos Sales", hora: "28/02/2024 12:03"},
        {nome: "Rui Barbosa", hora: "04/12/2023 21:10"},
    ]

    return(
        <ScrollView style={styles.container}>

            {ligacoes.map((ligacao, index) => (
                <List.Item
                    key={index}
                    title={ligacao.nome}
                    description={ligacao.hora}

                    left={(props) => (<List.Icon {...props} icon="account"/>)}
                    right={(props) => (<List.Icon {...props} icon="phone" color={"red"} />)}                

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
      backgroundColor: "#f0f0f0",
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

    red: {
        color: "#f8312f",
    }

  });

export default CallScreen