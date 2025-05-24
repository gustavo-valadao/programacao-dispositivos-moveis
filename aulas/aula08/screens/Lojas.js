import { View, ActivityIndicator } from "react-native";
import { Searchbar } from "react-native-paper";

import { useState, useContext } from "react";
import { LojaContext } from "../contexts/LojaContext";

import ListaVertical from "../components/ListaVertical";

function Lojas ({route}) {

    const { carregando, buscarLojas } = useContext(LojaContext);

    const { categoria } = route.params;

    const [ filtro, setFiltro ] = useState("")

    return (
        <View style={{flex: 1, padding: 16}}>

            <Searchbar 
                placeholder={`Buscar em ${categoria.nome}`}
                onIconPress={() => { buscarLojas(filtro)}}          // funciona ao clicar na lupa do searchbar
                onPress={() => { buscarLojas(filtro)}}              // funciona ao confirmar no teclado do celular
                onClearIconPress={() => { buscarLojas("")}}         // limpa ao clicar no X do searchBar

                value={filtro}
                onChangeText={setFiltro}
            />


            {carregando 
                ? 
                    (
                        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                            <ActivityIndicator size={50}/>
                        </View>
                    )
                :
                    (
                        <ListaVertical/>            
                    )                
            }


        </View>
    );
}

export default Lojas;