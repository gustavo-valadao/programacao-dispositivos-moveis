import { View, FlatList } from "react-native";
import { Button, Text } from "react-native-paper";

import { LojaContext } from "../contexts/LojaContext";
import { useContext } from "react";

function ListaHorizontal () {

    const {categorias} = useContext(LojaContext)


    return (
        <View>
            <Text variant="titleMedium">Categorias</Text>
            <FlatList 
                horizontal                                              // Torna a lista horizontal
                showsHorizontalScrollIndicator={false}                  // Remove a visualização da barra de rolagem
                
                data={categorias}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => (
                    
                    <View style={{flex: 1, marginRight: 8}}>

                        <Button 
                            mode="outlined" 
                            icon={item.icone}
                        >
                            {item.nome}
                        </Button>

                    </View> 
                )}
            />
        </View>
    );
}

export default ListaHorizontal