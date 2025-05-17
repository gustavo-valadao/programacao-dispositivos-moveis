import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";

const Stack = createNativeStackNavigator();

function StackNavigator() {
    return (

        <Stack.Navigator initialRouteName="Login">

            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="RecuperarSenha" component={ForgotPasswordScreen}/>
            <Stack.Screen name="CriarConta" component={SignupScreen}/>

        </Stack.Navigator>

    );
}

export default StackNavigator