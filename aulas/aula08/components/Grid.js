import { View, FlatList } from "react-native";
import { Button } from "react-native-paper";

function Grid () {

    const categorias = [
        "Restaurantes",
        "Bares",
        "Lanchonetes",
        "Pizzarias",
        "Sorveterias",
        "Cafeterias",
        "Padarias",
        "Mercados"
    ]

    return (
        <View>
            <FlatList 
                numColumns={2}                              // Numero de colunas da lista

                data={categorias}
                keyExtractor={(_, index) => index}          // A notação do sublinhado às vezes é usada quando se precisa buscar algo, mas não se quer usá-la.

                renderItem={({item}) => (                   // A formatação do grid é ajustada no estilo. 
                    <View style={{width: "48%", padding: 16}}>     
                        <Button mode="contained">{item}</Button>
                    </View>
                )}
            
            />
        </View>

    );
}

export default Grid;