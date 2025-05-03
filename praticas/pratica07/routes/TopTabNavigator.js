import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View } from "react-native";

import ChatScreen from "../screens/ChatScreen";
import CallScreen from "../screens/CallScreen";
import ContactScreen from "../screens/ContactScreen";


const Tab = createMaterialTopTabNavigator();

function TopTabNavigator () {

    return( 
        <View style={{flex: 1, paddingTop: 24 }}>
            <Tab.Navigator>

                <Tab.Screen name="Conversas" component={ChatScreen} />
                
                <Tab.Screen name="Ligações" component={CallScreen} />
                
                <Tab.Screen name="Contatos" component={ContactScreen} />


            </Tab.Navigator>

        </View>
    )


}

export default TopTabNavigator;