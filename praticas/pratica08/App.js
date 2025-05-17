import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./screens/LoginScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import SignupScreen from "./screens/SignupScreen";
import StackNavigator from "./routes/StackNavigator";

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
