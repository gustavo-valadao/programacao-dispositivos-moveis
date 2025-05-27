import React from "react";
import { useContext, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { StoreContext } from "../contexts/StoreContext";
import StoreItem from "../components/StoreItem";
import CategoryItem from "../components/CategoryItem";



function HomeScreen ({ navigation }) {

    const { loadData, loading } = useContext(StoreContext);


    useFocusEffect(
        React.useCallback(() => {
            loadData()
          return () => {

          };
        }, [])
      );

    return (

        <View style={{flex: 1, marginTop: 16, padding: 16}}>

            {
                loading
                ?
                    (
                        <View 	
                            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
                        >
                            <ActivityIndicator size="large" />
                        </View>
                    )
                :
                    (
                        <>
                            <CategoryItem />
                            <StoreItem />
                        </>
                    )
            }

        </View>



    );
}

export default HomeScreen;