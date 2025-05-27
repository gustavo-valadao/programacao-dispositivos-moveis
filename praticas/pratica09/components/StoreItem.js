import { useContext } from "react";
import { FlatList, View } from "react-native";
import { Text, List } from "react-native-paper";

import { StoreContext } from "../contexts/StoreContext";


function StoreItem ({item}) {

    const { stores } = useContext(StoreContext);

    return (

        <View>
            
            <Text variant="titleMedium">Lojas </Text>

            <FlatList 
                data={stores}
                keyExtractor={(item, index) => {`loja-${index}`} }
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                    
                    <List.Item 
                        title={`${item.nome} - ${item.endereco}`}
                        description={`* ${item.nota} • ${item.categoria}`}
                        right={({props}) => {
                            <List.Icon {...props} 
                                icon="heart-outline" 
                                onPress={() => {}}
                            />
                        }}
                    />
                )}
            />

        </View>

    );
}

export default StoreItem;