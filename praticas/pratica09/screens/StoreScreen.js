import { useContext, useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { Searchbar } from "react-native-paper";
import StoreItem from "../components/StoreItem";
import { StoreContext } from "../contexts/StoreContext";

function StoreScreen ( { route }) {

    const { categoria } = route.params;

    const { loading, searchStore } = useContext(StoreContext);

    const [ filter, setFilter ] = useState("")

    useEffect( () => {searchStore(categoria, filter)}, [categoria, filter])


    return (

        
        <View style={{ flex: 1, marginTop: 16, padding: 16 }}>
            <Searchbar
                placeholder={`Buscar em ${categoria}`}
                onIconPress= { () => {searchStore(categoria, filter)} }
                onClearIconPress = { () => {searchStore(categoria, "")}}
                onChangeText = {setFilter}
                value={filter}
                style={{marginBottom: 16}}

            />
            {loading 
                ? 
                    (
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <ActivityIndicator size="large" />
                        </View>
                    ) 
                : 
                    (
                        <StoreItem />
                    )
            }
        </View>


    );

}

export default StoreScreen; 