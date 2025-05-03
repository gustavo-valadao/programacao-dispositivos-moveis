import { ScrollView, StyleSheet } from "react-native";
import { List } from "react-native-paper";

function PlaylistScreen ({navigation}) {

    const playlists = [
        {titulo: 'Playlist 1', musicas: '10 musicas'},
        {titulo: 'Playlist 2', musicas: '5 musicas'},
        {titulo: 'Playlist 3', musicas: '8 musicas'},

    ]

    
    return (

        
        <ScrollView style={styles.container}>
            {playlists.map((playlists, index) => (

                <List.Item
                    key={index}
                    title={playlists.titulo}
                    description={playlists.musicas}
                    left={props => <List.Icon {...props} icon="playlist-music"/>}
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

export default PlaylistScreen;