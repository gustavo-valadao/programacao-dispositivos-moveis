import { FlatList, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useContext } from "react";
import { StoreContext } from "../contexts/StoreContext";

function CategoryItem ({item}) {

    const { categories } = useContext(StoreContext);

    return (

        <View>
            
            <Text variant="titleMedium">Categorias</Text>

            <FlatList 
                data={categories}
                keyExtractor={ (item, index) => `categoria-${index}` }

                horizontal
                showsHorizontalScrollIndicator={false}
                style={{marginBottom: 8}}

                renderItem={({item})=> (
                    <View style={{flex: 1, margin: 4}}>
                        <Button mode="outlined" icon={item.icone} onPress={() => {}}>
                            {item.nome}
                        </Button>

                    </View>
                )}
            
            />

        </View>

    );

}

export default CategoryItem;