
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Perfil from "../screens/Perfil";

const Drawer = createDrawerNavigator();

function NavegacaoGaveta() {
  return (
    <Drawer.Navigator screenOptions={
      ({route}) => ({
      drawerIcon: ({color, size}) => {
        let icone;
        if (route.name == "Home") {
          icone = "home"
        } else if (route.name == "Perfil") {
          icone = "person"
        }
        return <MaterialIcons name={icone} 
        color={color} size={size} />;
      }
    })}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Perfil" component={Perfil} />
    </Drawer.Navigator>
  );
}

export default NavegacaoGaveta;