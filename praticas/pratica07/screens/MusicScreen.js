import { ScrollView, StyleSheet } from "react-native";
import { List } from "react-native-paper";

function MusicScreen ({navigation}) {

    const musicas = [
        {titulo: 'Música 1', artista: 'Artista 1'},
        {titulo: 'Música 2', artista: 'Artista 2'},
        {titulo: 'Música 3', artista: 'Artista 3'},
        {titulo: 'Música 4', artista: 'Artista 4'},
    ]

    
    return (

        
        <ScrollView style={styles.container}>
            {musicas.map((musica, index) => (

                <List.Item
                    key={index}
                    title={musica.titulo}
                    description={musica.artista}
                    left={props => <List.Icon {...props} icon="music"/>}
                    style={styles.item}     
                    titleStyle={styles.title}
                    descriptionStyle={styles.description}           
                />




                

            ))}

        </ScrollView>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1 
    },

    item: {
        backgroundColor: '#e6e6fa',
        marginVertical: 4,
        borderRadius: 8,
        elevation: 1,
        margin: "16"
    },

    title: {
        fontSize: 16,
        fontWeight: '600',
    },

    description: {
        fontSize: 14,
        color: '#666',
    },
})

export default MusicScreen;