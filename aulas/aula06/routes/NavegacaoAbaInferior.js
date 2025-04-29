
import { createBottomTabNavigator } 
  from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Perfil from "../screens/Perfil";

const Tab = createBottomTabNavigator();

function NavegacaoAbaInferior() {
  return (
    <Tab.Navigator screenOptions={
      ({route}) => ({
      tabBarIcon: ({color, size}) => {
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
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}

export default NavegacaoAbaInferior;