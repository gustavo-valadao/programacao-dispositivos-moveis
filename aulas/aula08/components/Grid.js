import { View, FlatList } from "react-native";
import { Button } from "react-native-paper";

import { useContext } from "react";
import { LojaContext } from "../contexts/LojaContext";
import { useNavigation } from "@react-navigation/native";

function Grid () {

    const navigation = useNavigation();

    const { categorias }  = useContext(LojaContext)

    return (
        <View>
            <FlatList 
                numColumns={2}                              // Numero de colunas da lista

                data={categorias}
                keyExtractor={(_, index) => index}          // A notação do sublinhado às vezes é usada quando se precisa buscar algo, mas não se quer usá-la.

                renderItem={({item}) => (                   // A formatação do grid é ajustada no estilo. 
                    <View style={{width: "48%", padding: 8}}>     
                        
                        <Button 
                            mode="contained"
                            icon={item.icone}
                            onPress={ () => navigation.navigate("Lojas", { categoria: item })}
                        >
                            {item.nome}
                        </Button>
                    </View>
                )}
            
            />
        </View>

    );
}

export default Grid;