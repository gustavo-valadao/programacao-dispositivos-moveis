import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import MusicScreen from "../screens/MusicScreen";
import PlaylistScreen from "../screens/PlaylistScreen";
import FavoriteScreen from "../screens/FavoriteScreen";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon:  ({ color, size }) => {

                    let iconName;


                    if (route.name === 'Músicas'){
                        iconName = 'library-music';
                    } else if (route.name === "Playlists") {
                        iconName = 'queue-music';
                    } else if (route.name === "Favoritas") {
                        iconName = 'star';
                    }

                    return <MaterialIcons name={iconName} size={size} color={color}/>

                }
            })}    
        >

            <Tab.Screen name="Músicas" component={MusicScreen}/>
            <Tab.Screen name="Playlists" component={PlaylistScreen}/>
            <Tab.Screen name="Favoritas" component={FavoriteScreen}/>
        
        </Tab.Navigator>
    )
}


export default BottomTabNavigator;
