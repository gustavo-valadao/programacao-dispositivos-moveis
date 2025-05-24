import { View } from "react-native";
import ListaVertical from "../components/ListaVertical";
import ListaHorizontal from "../components/ListaHorizontal";
import { useContext, useEffect } from "react";
import { LojaContext } from "../contexts/LojaContext";
import { ActivityIndicator } from "react-native-paper";

function Home () {

    const { carregarDados, carregando } = useContext(LojaContext);      // busca a função de carregar dados e o status de carregando

    useEffect( () => {                                      // dispara a função de carregar dados após renderizar a tela (após 2 segundos, carrega as lojas e categorias).
        carregarDados();
    }, []);

    return (
        <View style={{ flex: 1, padding: 16 }}>

            {carregando 
                ? 
                    (
                        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                            <ActivityIndicator size={"large"}/>
                        </View>
                    )
                :
                    (
                        <>
                            <ListaHorizontal />            
                            <ListaVertical />
                        </>                
                    )                
            }


        </View>
    );
}

export default Home;