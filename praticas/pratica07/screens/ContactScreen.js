import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { Appbar, FAB, List } from "react-native-paper";

function ContactScreen({navigation}) {

    const contatos = [
        {id: 1, nome: "Mãe", fone: "61 9 99999-9999"},
        {id: 2, nome: "Pai", fone: "61 9 99999-9999"},    
        {id: 3, nome: "Brother", fone: "61 9 99999-9999"}
    ];

     return (
            <View style={styles.container}>
    
                <FlatList
                    data={contatos}
                    keyExtractor={(item) => item.id}
                    renderItem = { ({item}) => (
    
                        <List.Item 
                            left={(props) => <List.Icon {...props} icon="account"/>}
                            title={item.nome}
                            description={ item.fone}
                        />
    
                    )}
                />
    
                <View style={styles.fab}>
                    <FAB 
                        icon="plus"
                    />
                </View>
    
    
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    fab: {
        flexDirection: "row",
        position: 'absolute',
        right: 16,
        bottom: 16,
    },

});


export default ContactScreen