import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons"

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";


const Drawer = createDrawerNavigator();


const iconMap = {
    Home: 'home',
    Perfil: 'person',
  };


function DrawerNavigator (){
    return (
        <Drawer.Navigator
            screenOptions={({ route }) => ({
                
                drawerIcon: ({ color, size }) => {

                    const iconName = iconMap[route.name]

                    return <MaterialIcons name={iconName} size={size} color={color} />;
                },

            })}
        >


            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Perfil" component={ProfileScreen} />



        </Drawer.Navigator>
    )
}

export default DrawerNavigator;