
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Registrar from "../screens/Registrar";

const Stack = createNativeStackNavigator();

function NavegacaoPilha() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login"
        component={Login}
      />
      <Stack.Screen name="Registrar" 
      component={Registrar} />
    </Stack.Navigator>
  );
}

export default NavegacaoPilha;