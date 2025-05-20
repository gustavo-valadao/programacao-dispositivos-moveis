import { View, FlatList } from "react-native";
import { Button, Text } from "react-native-paper";

function ListaHorizontal () {

    const categorias = [
        "Restaurantes",
        "Bares",
        "Lanchonetes",
        "Pizzarias",
        "Sorveterias"
    ]

    return (
        <View>
            <Text variant="titleMedium">Categorias</Text>
            <FlatList 
                horizontal                                              // Torna a lista horizontal
                showsHorizontalScrollIndicator={false}                  // Remove a visualização da barra de rolagem
                
                data={categorias}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => (
                    <Button style={{marginRight: 8}}>{item}</Button>
                )}
            />
        </View>
    );
}

export default ListaHorizontal